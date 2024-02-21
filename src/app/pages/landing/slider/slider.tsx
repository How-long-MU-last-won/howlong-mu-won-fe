import { Box, Button, Flex, Progress } from '@chakra-ui/react';
// import styles from './slider.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useBoundingRect } from '../../../../hooks';
import { useLayoutEffect } from 'react';
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
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(setSliderWidth(Math.round(width)));
    return undefined;
  }, [width, dispatch]);

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

  return (
    <>
      <Box
        ref={ref}
        w={{ base: '100%', md: `calc(100% + ${gap}px)` }}
        ml={{ base: 0, md: `-${gap / 2}px` }}
        px={`${gap / 2}px`}
        position="relative"
        overflow="hidden"
        rounded={20}
      >
        {children}
      </Box>

      <Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto">
        <Button
          onClick={handleDecrementClick}
          onFocus={handleFocus}
          mr={`${gap / 3}px`}
          color="base.grey"
          variant="link"
          minW={0}
          _hover={{ color: 'black' }}
        >
          <ChevronLeftIcon boxSize={9} />
        </Button>

        <Progress
          value={percentage(activeItem, positions.length - constraint)}
          alignSelf="center"
          borderRadius="2px"
          bg="bg.red"
          flex={1}
          h="3px"
          sx={{
            '> div': {
              backgroundColor: 'base.grey',
            },
          }}
        />

        <Button
          onClick={handleIncrementClick}
          onFocus={handleFocus}
          ml={`${gap / 3}px`}
          color="base.grey"
          variant="link"
          zIndex={2}
          minW={0}
          _hover={{ color: 'black' }}
        >
          <ChevronRightIcon boxSize={9} />
        </Button>
      </Flex>
    </>
  );
}

export default Slider;
