import { FC, useEffect, useState, memo } from "react";
import { Message } from "../../../stores/SToast";
import Icon from "../icons/Icon";
import useToast from "../../../stores/SToast";

const secondsToStartFrom = 10;
const startOfCountdown = secondsToStartFrom * 100;

const Message: FC<Message> = ({ title, text, id }) => {
  const { deleteToast } = useToast();
  const [countdown, setCountdown] = useState(startOfCountdown);

  const handleCountdown = () => {
    setCountdown((prev) => {
      const updatedValue = prev - 1;
      return updatedValue;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => handleCountdown(), 10);
    const timeout = setTimeout(
      () => deleteToast(id),
      (startOfCountdown + 1) * 10
    );
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative rounded-lg bg-slate-400/90 text-slate-800/75 drop-shadow-2xl">
      <div className="rounded-t-lg p-5">
        {title && (
          <span className="mb-2 inline-block text-3xl font-thin">{title}</span>
        )}
        <p className="font-semibold">{text}</p>
      </div>
      <div className="flex items-center justify-between gap-2 rounded-b-lg bg-slate-500 p-3 opacity-75">
        <div className="h-5 w-4/5 rounded-full bg-slate-700 p-1">
          <div
            className="h-3 rounded-full bg-slate-400/75"
            style={{ width: `${countdown * (100 / startOfCountdown)}%` }}
          ></div>
        </div>
        <div className="flex grow items-center justify-center">
          <button>
            <Icon
              icon="xMark"
              className="h-7 w-7 rounded-full border-2 border-slate-700/50 bg-slate-400/50 fill-slate-700 p-1"
              onClick={() => deleteToast(id)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Message);
