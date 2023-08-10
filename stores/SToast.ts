import { create } from "zustand";
import { devtools } from "zustand/middleware";

type MessageType = "success" | "error" | "warning" | "info";

export interface Message {
  text: string;
  id: string;
  title?: string;
  type?: MessageType;
}

interface Interface {
  messages: Message[];
  showToast: (passedMessage: Message) => void;
  deleteToast: (idOfMessageToBeDeleted: string) => void;
}

const useToast = create<Interface>()(
  devtools(
    (set) => ({
      messages: [],
      showToast: (passedMessage) => {
        set((state) => ({
          messages: [passedMessage, ...state.messages],
        }));
      },
      deleteToast: (idOfMessageToBeDeleted) => {
        set((state) => ({
          messages: state.messages.filter(
            (message) => message.id !== idOfMessageToBeDeleted
          ),
        }));
      },
    }),
    {
      name: "toast",
    }
  )
);

export default useToast;
