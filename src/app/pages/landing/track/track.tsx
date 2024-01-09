import { useCallback, useEffect, useRef } from 'react';
// import styles from './track.module.css';
import { PanInfo, motion, useAnimation, useMotionValue } from 'framer-motion';
import { Box, VStack, Flex } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import {
  setActiveItem,
  increamentActiveItem,
  decrementActiveItem,
} from '../../../../redux/slices/landing/carousel.slice';
import {
  setTrackActive,
  setTrackInActive,
  setDragStartPosition,
} from '../../../../redux/slices/landing/track.slice';
/* eslint-disable-next-line */
export interface TrackProps {
  positions: number[];
  children: React.ReactNode[];
}

const transitionProps = {
  stiffness: 400,
  type: 'spring',
  damping: 60,
  mass: 3,
};

const MotionFlex = motion(Flex);

export function Track(props: TrackProps) {
  const { positions, children } = props;
  const { multiplier, constraint, itemWidth, activeItem } = useAppSelector(
    (state) => state.carousel
  );
  const { trackIsActive, dragStartPosition } = useAppSelector(
    (state) => state.track
  );
  const dispatch = useAppDispatch();
  const controls = useAnimation();
  const x = useMotionValue(0);
  const node = useRef<HTMLDivElement>(null);

  const handleDragStart = () =>
    dispatch(setDragStartPosition(positions[activeItem]));

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x * multiplier;
    const direction = velocity < 0 || distance < 0 ? 1 : -1;

    const extrapolatedPosition =
      dragStartPosition +
      (direction === 1
        ? Math.min(velocity, distance)
        : Math.max(velocity, distance));

    const closestPosition = positions.reduce((prev, curr) => {
      return Math.abs(curr - extrapolatedPosition) <
        Math.abs(prev - extrapolatedPosition)
        ? curr
        : prev;
    }, 0);

    if (!(closestPosition < positions[positions.length - constraint])) {
      dispatch(setActiveItem(positions.indexOf(closestPosition)));
      controls.start({
        x: closestPosition,
        transition: {
          velocity: info.velocity.x,
          ...transitionProps,
        },
      });
    } else {
      dispatch(setActiveItem(positions.length - constraint));
      controls.start({
        x: positions[positions.length - constraint],
        transition: {
          velocity: info.velocity.x,
          ...transitionProps,
        },
      });
    }
  };

  const handleResize = useCallback(
    () =>
      controls.start({
        x: positions[activeItem],
        transition: {
          ...transitionProps,
        },
      }),
    [activeItem, controls, positions]
  );

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (
        node.current instanceof HTMLDivElement &&
        event.target instanceof Node
      )
        node.current.contains(event.target)
          ? dispatch(setTrackActive())
          : dispatch(setTrackInActive());
    },
    [dispatch]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (trackIsActive) {
        if (activeItem < positions.length - constraint) {
          if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
            event.preventDefault();
            dispatch(increamentActiveItem());
          }
        }
        if (activeItem > positions.length - positions.length) {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
            event.preventDefault();
            dispatch(decrementActiveItem());
          }
        }
      }
    },
    [trackIsActive, dispatch, activeItem, constraint, positions.length]
  );

  useEffect(() => {
    handleResize();

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick, handleResize, handleKeyDown, positions]);

  return (
    <Box>
      {itemWidth && (
        <VStack ref={node} spacing={5} alignItems="stretch">
          <MotionFlex
            dragConstraints={node}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
            drag="x"
            _active={{ cursor: 'grabbing' }}
            minWidth="min-content"
            flexWrap="nowrap"
            cursor="grab"
          >
            {children}
          </MotionFlex>
        </VStack>
      )}
    </Box>
  );
}

export default Track;
