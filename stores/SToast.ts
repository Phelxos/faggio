import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Interface {
  message: string;
  showToast: (passedMessage: string) => void;
}

const useToast = create<Interface>()(
  devtools(
    (set) => ({
      message: "",
      showToast: (passedMessage: string) => {
        set({
          message: passedMessage,
        });
      },
    }),
    {
      name: "toast",
    }
  )
);

export default useToast;
