"use client";

import { useState, useEffect } from "react";

interface Props {
  width?: number;
  height?: number;
}

const getWindowsSize = () => {
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, height: innerHeight };
};

const useWindowSize = (): Props => {
  const [windowSize, setWindowSize] = useState<Props>({});

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowsSize());
    console.log(
      "🚀 ~ file: useWindowSize.ts:20 ~ useEffect ~ getWindowsSize():",
      getWindowsSize()
    );
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
