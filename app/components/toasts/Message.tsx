import { FC } from "react";

type MessageType = "success" | "error" | "warning" | "info";

interface Props {
  message: string;
  title?: string;
  type?: MessageType;
}

const Message: FC<Props> = ({
  message = "Lorem ipsum sed amet.",
  title,
  type = "info",
}) => {
  return (
    <div className="z-1 fixed right-2 top-2 h-[100px] w-1/2 rounded bg-pink-800/80 p-4 text-xl text-slate-300/75">
      {title && <span>{title}</span>}
      <p>{message}</p>
    </div>
  );
};

export default Message;
