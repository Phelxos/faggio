import { FC } from "react";
import Icon from "../../../icons/Icon";
import displayEquivalent from "../../../../../helpers/displayEquivalent";

interface Props {
  date: number;
  month: number;
}

const Birthday: FC<Props> = ({ date = 1, month = 1 }) => {
  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-center gap-2 rounded-lg bg-pink-700/50 p-2 text-center text-xs font-bold text-pink-300/75">
      <Icon icon="cake" className="h-5 w-5 fill-pink-500/50" />
      {date}. {displayEquivalent(month, "month")}
    </div>
  );
};

export default Birthday;
