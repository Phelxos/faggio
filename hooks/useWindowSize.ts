import { useState, useEffect } from "react";

interface IWindowSize {
  width?: number;
  height?: number;
}

const getWindowsSize = () => {
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, height: innerHeight };
};

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

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IWindowSize>({});

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(getWindowsSize()));

    return () =>
      window.removeEventListener("resize", () =>
        setWindowSize(getWindowsSize())
      );
  }, []);

  return windowSize;
}
