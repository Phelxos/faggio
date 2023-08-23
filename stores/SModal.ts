import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Interface {}

const useModal = create<Interface>()(
  devtools((set) => ({}), {
    name: "modal",
  })
);

export default useModal;
