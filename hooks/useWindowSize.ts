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

// const areEquallySized = (
//   windowSizeState: IWindowSize,
//   windowSizeWindow: IWindowSize
// ) => {
//   const state = Object.values(windowSizeState);
//   const window = Object.values(windowSizeWindow);
//   if (state.length !== window.length) return false;
//   for (let i = 0; i < state.length; i++) {
//     if (state[i] !== window[i]) return false;
//   }
//   return true;
// };
