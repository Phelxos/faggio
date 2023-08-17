"use client";

import { FC, useEffect, useState, memo } from "react";
import { Message } from "../../../stores/SToast";
import Icon from "../icons/Icon";
import useToast from "../../../stores/SToast";

const strainer = 10; // The larger the number, the more granular the animation of the countdown bar

const milliseconds = 1000;
const countdownStart = 5; // seconds
const widthDividend = countdownStart * strainer;
const singlePartsOfCountdownBarWidth = 100 / widthDividend;

const intervalInMilliseconds = milliseconds / strainer;

const timeoutInMilliseconds = countdownStart * milliseconds;

const Message: FC<Message> = ({ title, description, id }) => {
  const { deleteToast } = useToast();
  const [widthOfCountdownBar, setWidthOfCountdownBar] = useState(100);
  const [animationClass, setAnimationClass] = useState(
    "animate-fade-left animate-duration-[200ms]"
  );

  const handleCountdown = () => {
    setWidthOfCountdownBar(
      (prevWidthOfCountdownBar) =>
        prevWidthOfCountdownBar - singlePartsOfCountdownBarWidth
    );
  };

  useEffect(() => {
    const interval = setInterval(
      () => handleCountdown(),
      intervalInMilliseconds
    );
    const timeout = setTimeout(
      () => deleteToast(id),
      timeoutInMilliseconds + intervalInMilliseconds
    );

    // TO-DO Animation for fading out the toast is not working
    const animationTimeout = setTimeout(() => {
      setAnimationClass(
        "animate-fade-left animate-reverse animate-duration-[500ms]"
      );
    }, timeoutInMilliseconds);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(animationTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${animationClass} relative rounded-lg bg-slate-400/90 text-slate-800/75 drop-shadow-2xl`}
    >
      <div className="rounded-t-lg p-6">
        {title && (
          <span className="mb-3 inline-block text-3xl font-thin">{title}</span>
        )}
        <p className="font-semibold">{description}</p>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-b-lg bg-slate-500 p-4 opacity-75">
        <div className="h-5 grow rounded-full bg-slate-700 p-1">
          <div
            className="h-3 rounded-full bg-slate-400/75"
            style={{
              width: `${widthOfCountdownBar}%`,
            }}
          ></div>
        </div>
        <div className="flex w-fit items-center justify-center">
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
