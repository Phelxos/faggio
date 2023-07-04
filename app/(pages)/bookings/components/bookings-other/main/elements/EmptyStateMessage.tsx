import { FC } from "react";
import Icon from "../../../../../../../components/icons/Icon";

interface Props {
  darker?: boolean;
}

const EmptyStateMessage: FC<Props> = ({ darker }) => {
  return (
    <>
      <Icon
        icon="xMark"
        className={`absolute right-0 top-0 h-20 w-20 ${
          darker ? "fill-slate-400" : "fill-slate-200"
        } opacity-20`}
      />
      <span
        className={`text-center font-mono text-lg ${
          darker ? "text-slate-300" : "text-slate-100"
        } opacity-75`}
      >
        keine Buchungen
      </span>
    </>
  );
};

export default EmptyStateMessage;
