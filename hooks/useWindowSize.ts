import { useState, useEffect } from "react";

interface Interface {
  width?: number;
  height?: number;
}

const getWindowsSize = () => {
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, height: innerHeight };
};

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Interface>({});

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowsSize());
    window.addEventListener("resize", handleResize);
    console.log(innerWidth, innerHeight);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
