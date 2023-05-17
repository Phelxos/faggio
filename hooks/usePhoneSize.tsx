import { useEffect, useState } from "react";

export default function usePhoneSize() {
  const [isNotPhoneSize, setIsNotPhoneSize] = useState<boolean>(true);

  const iPhoneSESize = { width: 375, height: 667 };

  useEffect(() => {
    if (
      window.innerWidth === iPhoneSESize.width &&
      window.innerHeight === iPhoneSESize.height
    ) {
      setIsNotPhoneSize(false);
    } else {
      setIsNotPhoneSize(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isNotPhoneSize;
}
