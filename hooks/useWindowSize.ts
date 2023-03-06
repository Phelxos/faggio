import { useState, useEffect } from "react";

interface IWindowSize {
  width?: number;
  height?: number;
}

const getWindowsSize = () => {
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, height: innerHeight };
};

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IWindowSize>({});

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowsSize());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
