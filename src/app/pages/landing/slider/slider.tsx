import { Box, Button, Flex, Progress } from '@chakra-ui/react';
// import styles from './slider.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useBoundingRect } from '../../../../hooks';
import { useLayoutEffect, useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import {
  setSliderWidth,
  increamentActiveItem,
  decrementActiveItem,
} from '../../../../redux/slices/landing/carousel.slice';
import { setTrackActive } from '../../../../redux/slices/landing/track.slice';

/* eslint-disable-next-line */
export interface SliderProps {
  positions: number[];
  children: React.ReactNode;
  gap: number;
}

export function Slider(props: SliderProps) {
  const { positions, children, gap } = props;
  const [ref, { width }] = useBoundingRect();
  const { constraint, itemWidth, activeItem } = useAppSelector(
    (state) => state.carousel
  );
  const { trophies } = useAppSelector((state) => state.landingState);
  const dispatch = useAppDispatch();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>(null!);

  useLayoutEffect(() => {
    dispatch(setSliderWidth(Math.round(width)));
    return undefined;
  }, [width, dispatch]);

  // start the rotation first time
  useEffect(() => {
    setTimeoutId(
      setTimeout(() => {
        dispatch(setTrackActive());
        dispatch(increamentActiveItem());
      }, 6000))
  }, [dispatch]);

  const percentage = (x: number, y: number) => {
    return 100 / (y / x);
  };

  const handleFocus = () => dispatch(setTrackActive());

  const handleDecrementClick = () => {
    dispatch(setTrackActive());
    !(activeItem === positions.length - positions.length) &&
      dispatch(decrementActiveItem());
  };

  const handleIncrementClick = () => {
    dispatch(setTrackActive());
    !(activeItem === positions.length - constraint) &&
      dispatch(increamentActiveItem());
  };

  useEffect(() => {
    if (timeoutId) clearTimeout(timeoutId);
    if (activeItem < trophies.length - 1)
      setTimeoutId(
        setTimeout(() => {
          dispatch(setTrackActive());
          dispatch(increamentActiveItem());
        }, 6000)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  return (
    <>
      <Box
        ref={ref}
        w={{ base: '100%', md: `calc(100% + ${gap}px)` }}
        ml={{ base: 0, md: `-${gap / 2}px` }}
        px={`${gap / 2}px`}
        position="relative"
        overflow="hidden"
      >
        {children}
      </Box>

      <Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto">
        <Button
          onClick={handleDecrementClick}
          onFocus={handleFocus}
          mr={`${gap / 3}px`}
          color="gray.200"
          variant="link"
          minW={0}
        >
          <ChevronLeftIcon boxSize={9} />
        </Button>

        <Progress
          value={percentage(activeItem, positions.length - constraint)}
          alignSelf="center"
          borderRadius="2px"
          bg="base.d100"
          flex={1}
          h="3px"
          sx={{
            '> div': {
              backgroundColor: 'gray.400',
            },
          }}
        />

        <Button
          onClick={handleIncrementClick}
          onFocus={handleFocus}
          ml={`${gap / 3}px`}
          color="gray.200"
          variant="link"
          zIndex={2}
          minW={0}
        >
          <ChevronRightIcon boxSize={9} />
        </Button>
      </Flex>
    </>
  );
}

export default Slider;
