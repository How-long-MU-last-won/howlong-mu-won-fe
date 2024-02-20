// import styles from './carousel.module.css';
import React, { useEffect, useMemo } from 'react';

// import {
//   useMediaQuery,
//   useTheme,
// } from "@chakra-ui/react";
import Slider from '../slider/slider';
import Item from '../item/item';
import Track from '../track/track';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import {
  setMultiplier,
  setConstraint,
  setItemWidth,
} from '../../../../redux/slices/landing/carousel.slice';

/* eslint-disable-next-line */
export interface CarouselProps {
  children: React.ReactNode[];
  gap: number;
}

export function Carousel(props: CarouselProps) {
  const { children, gap } = props;
  const { itemWidth, sliderWidth } = useAppSelector((state) => state.carousel);

  const dispatch = useAppDispatch();

  const positions = useMemo(
    () => children.map((_, index) => -Math.abs((itemWidth + gap) * index)),
    [children, itemWidth, gap]
  );

  useEffect(() => {
    dispatch(setItemWidth(sliderWidth - gap));
    dispatch(setMultiplier(0.65));
    dispatch(setConstraint(1));
  }, [sliderWidth, gap, dispatch]);

  const sliderProps = {
    positions,
    gap,
  };

  const trackProps = {
    sliderWidth,
    positions,
    gap,
  };

  const itemProps = {
    positions,
    gap,
  };

  return (
    <Slider {...sliderProps}>
      <Track {...trackProps}>
        {children.map((child, index) => (
          <Item {...itemProps} index={index} key={index}>
            {child}
          </Item>
        ))}
      </Track>
    </Slider>
  );
}

export default Carousel;
