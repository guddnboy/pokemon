import { useCallback, useEffect, useRef, useState } from 'react';

const useInfiniteScroll = (
  targetElement: React.RefObject<HTMLElement | null>
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries => {
        setIsIntersecting(entries[0].isIntersecting);
      });
    }
    return observerRef.current;
  }, []);

  useEffect(() => {
    if (targetElement.current) getObserver().observe(targetElement.current);

    return () => {
      getObserver().disconnect();
    };
  }, []);

  return isIntersecting;
};

export default useInfiniteScroll;
