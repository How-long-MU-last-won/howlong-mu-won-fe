import { useState, useCallback, useLayoutEffect } from 'react';
import { DimensionObject } from 'src/types';

const debounce = (limit: number, callback: () => number) => {
  let timeoutId: number;
  return (...args: Event[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, limit, args);
  };
};

const getDimensionObject = (node: HTMLDivElement): DimensionObject => {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    x: rect.x,
    y: rect.y,
    right: rect.right,
    bottom: rect.bottom,
  };
};

export default function useBoundingRect(limit?: number): [(node: HTMLDivElement | null) => void, DimensionObject, HTMLDivElement | null] {
  const [dimensions, setDimensions] = useState<DimensionObject>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    x: 0,
    y: 0,
    right: 0,
    bottom: 0,
  });
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  const ref = useCallback((node: HTMLDivElement | null) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if ('undefined' !== typeof window && node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );

      measure();

      const listener = debounce(limit ? limit : 100, measure);

      window.addEventListener('resize', listener);
      window.addEventListener('scroll', listener);
      return () => {
        window.removeEventListener('resize', listener);
        window.removeEventListener('scroll', listener);
      };
    }
  }, [node, limit]);

  return [ref, dimensions, node];
}
