/* -----------------Globals--------------- */
import { useState, useEffect, useCallback } from "react";

const useInfiniteScroll = (loadMore, hasMoreItems) => {
  const [isLoading, setLoading] = useState(false);

  const handleScroll = useCallback(() => {
    if (!document.documentElement) {
      return;
    }
    const getScrollTop = () => {
      const el = document.scrollingElement || document.documentElement;
      return el ? el.scrollTop : 0;
    };
    const scrollTopValue = window.innerHeight + getScrollTop();
    const offsetHeight = document.documentElement
      ? document.documentElement.offsetHeight
      : 0;
    const hasEndReached = Math.ceil(scrollTopValue) === offsetHeight;

    if (hasEndReached && !isLoading && hasMoreItems) {
      setLoading(true);
    }
  }, [hasMoreItems, isLoading]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isLoading) {
      loadMore();
    }
  }, [isLoading, loadMore]);

  return [isLoading, setLoading];
};

export default useInfiniteScroll;
