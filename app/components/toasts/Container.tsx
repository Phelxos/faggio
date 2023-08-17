"use client";

import { FC } from "react";
import useToast from "../../../stores/SToast";
import Message from "./Message";

const Container: FC = () => {
  const { messages } = useToast();

  return messages.length === 0 ? null : (
    <div className="z-1 scrollbar-hide fixed right-2 top-2 flex h-1/2 w-2/3 flex-col gap-4 overflow-scroll sm:right-4 sm:top-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
};

export default Container;
