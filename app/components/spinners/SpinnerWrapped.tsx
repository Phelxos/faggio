import { FC } from "react";
import Spinner from "./Spinner";

const SpinnerWrapped: FC = () => {
  return (
    <div className="flex w-full grow flex-col items-center justify-center">
      <Spinner />
    </div>
  );
};

export default SpinnerWrapped;
