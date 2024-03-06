// import styles from './item.module.css';

import { Flex } from "@chakra-ui/react";
import { KeyboardEvent } from "react";
import { useAppSelector, useAppDispatch } from '@hooks';
import {
  setActiveItem,
} from '@/redux/slices/landing/carousel.slice';
import { setTrackActive, setTrackInActive } from '@/redux/slices/landing/track.slice';
import { setUserDidTab, setUderDidNotTab } from "@/redux/slices/landing/item.slice";

/* eslint-disable-next-line */
export interface ItemProps {
  positions: number[],
  children: React.ReactNode,
  index: number,
  gap: number
}

export function Item(props: ItemProps) {
  const {
    positions,
    children,
    index,
    gap
  } = props;
  const { constraint, itemWidth, activeItem } = useAppSelector((state) => state.carousel);
  const { userDidTab } = useAppSelector((state) => state.carouselItem);
  const dispatch = useAppDispatch();

  const handleFocus = () => dispatch(setTrackActive());

  const handleBlur = () => {
    userDidTab && index + 1 === positions.length && dispatch(setTrackInActive());
    dispatch(setUderDidNotTab());
  };

  const handleKeyUp = (event: KeyboardEvent) =>
    event.key === "Tab" &&
    !(activeItem === positions.length - constraint) &&
    dispatch(setActiveItem(index));

  const handleKeyDown = (event: KeyboardEvent) => event.key === "Tab" && dispatch(setUserDidTab());

  return (
    <Flex
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      w={`${itemWidth}px`}
      _notLast={{
        mr: `${gap}px`
      }}
      py="4px"
    >
      {children}
    </Flex>
  );
}

export default Item;
