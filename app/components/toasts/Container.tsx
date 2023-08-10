"use client";

import { FC, useState, useEffect, useRef } from "react";
import useToast from "../../../stores/SToast";
import { createPortal } from "react-dom";
import Message from "./Message";

const Container: FC = () => {
  const { message } = useToast();
  const [mounted, setMounted] = useState(false);
  let documentBody = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      documentBody.current = document.body;
      setMounted(true);
    }
  }, []);

  return (
    <div className="hidden">
      {message &&
        mounted &&
        createPortal(<Message message={message} />, documentBody.current!)}
    </div>
  );
};

export default Container;
