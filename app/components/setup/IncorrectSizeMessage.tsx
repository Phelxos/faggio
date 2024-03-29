import { FC } from "react";

interface Props {}

const IncorrectSizeMessage: FC<Props> = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="w-2/3 text-2xl font-light text-slate-400/75">
        This app is <span className="font-bold">only available</span> on the
        size of an iPhone SE.
      </p>
      <p className="w-2/3 text-2xl font-thin text-slate-400/75">
        Please, set the browser window to{" "}
        <span className="font-light">375px x 667px</span> by choosing
        <span className="px-2 py-1 italic highlight highlight-slate-100 highlight-variant-1">
          “iPhone SE”
        </span>{" "}
        as the dimensions in the browser&apos;s developer tools.
      </p>
    </div>
  );
};

export default IncorrectSizeMessage;
