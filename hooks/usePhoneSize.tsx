import { is } from "date-fns/locale";
import React, { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function usePhoneSize() {
  const size = useWindowSize();

  const iPhoneSESize = { width: 375, height: 667 };

  const isNotPhoneSize =
    size.width !== iPhoneSESize.width || size.height !== iPhoneSESize.height;

  return isNotPhoneSize;
}
