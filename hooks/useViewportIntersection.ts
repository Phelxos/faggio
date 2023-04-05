import { useRef } from "react";
import { useState, useEffect } from "react";

export default function useViewportIntersection(
  ref: React.RefObject<HTMLElement>
): boolean {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top, bottom } = ref.current.getBoundingClientRect();
      const hasIntersected = window.innerHeight - bottom <= 0 || top <= 0;
      setIsIntersecting(hasIntersected);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isIntersecting;
}
