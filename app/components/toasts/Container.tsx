"use client";

import { FC } from "react";
import useToast from "../../../stores/SToast";
import Message from "./Message";

const Container: FC = () => {
  const { messages } = useToast();

  return messages.length === 0 ? null : (
    <div className="z-1 fixed right-2 top-2 flex h-1/2 w-2/3 flex-col gap-4 overflow-scroll">
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
};

export default Container;
