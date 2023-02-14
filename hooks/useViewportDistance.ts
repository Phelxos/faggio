import { useRef } from "react";
import { useState, useEffect } from "react";

interface IViewportDistance {
  isCloserToTop: boolean;
}

export default function useViewportDistance(
  ref: React.RefObject<HTMLElement>
): IViewportDistance {
  const [isCloserToTop, setIsCloserToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top, bottom } = ref.current.getBoundingClientRect();
      setIsCloserToTop(window.innerHeight - bottom > top ? true : false);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return { isCloserToTop };
}
