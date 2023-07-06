"use client";

import { useState, useEffect } from "react";

const useViewportDistance = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isCloserToTop, setIsCloserToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top, bottom } = ref.current.getBoundingClientRect();
      // If the distance between the element's bottom edge and the window's bottom edge is greater that the distance between the element's top edge and the window's top edge, then the element is closer to the top of the window.
      setIsCloserToTop(window.innerHeight - bottom > top ? true : false);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isCloserToTop;
};

export default useViewportDistance;
