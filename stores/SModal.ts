import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Interface {}

const useModal = create<Interface>()(
  devtools(
    persist((set) => ({}), {
      name: "modal",
    })
  )
);

export default useModal;
