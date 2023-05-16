import useWindowSize from "./useWindowSize";

export default function usePhoneSize() {
  const size = useWindowSize();

  const iPhoneSESize = { width: 375, height: 667 };

  const isNotPhoneSize =
    size.width !== iPhoneSESize.width || size.height !== iPhoneSESize.height;

  return isNotPhoneSize;
}
