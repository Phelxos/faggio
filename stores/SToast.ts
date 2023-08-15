import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuid } from "uuid";

type MessageType = "success" | "error" | "warning" | "info";

export interface Message {
  text: string;
  id?: string;
  title?: string;
  type?: MessageType;
}

interface Interface {
  messages: Message[];
  showToast: (passedMessage: Message | Message[]) => void;
  deleteToast: (idOfMessageToBeDeleted: string) => void;
}

const useToast = create<Interface>()(
  devtools(
    (set) => ({
      messages: [],
      showToast: (passedMessage) => {
        if (Array.isArray(passedMessage)) {
          set((state) => {
            const messagesWithId = passedMessage.map((message) => ({
              id: uuid(),
              ...message,
            }));
            return {
              messages: [...messagesWithId, ...state.messages],
            };
          });
        } else {
          set((state) => {
            const messageWithId = { id: uuid(), ...passedMessage };
            return {
              messages: [messageWithId, ...state.messages],
            };
          });
        }
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
