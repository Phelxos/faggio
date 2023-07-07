import { FC } from "react";
import TIcon from "../../../typings/types/TIcon";
import Icon from "../../icons/Icon";

interface Props {
  name: string;
  nameBoldTop?: string;
  nameBoldBottom?: string;
  icon?: TIcon;
}

const Tile: FC<Props> = ({
  name,
  nameBoldTop,
  nameBoldBottom,
  icon = "informationCircle",
}) => {
  return (
    <div className="relative h-full w-full overflow-hidden hyphens-auto rounded border-2 border-sky-900 bg-sky-950 p-4 shadow-lg">
      <span className="font-mono text-sm text-sky-200/50">
        {nameBoldTop && !nameBoldBottom && (
          <>
            <strong>{nameBoldTop}</strong>
            <br />
          </>
        )}
        {name}{" "}
        {nameBoldBottom && !nameBoldTop && (
          <>
            <br />
            <strong>{nameBoldBottom}</strong>
          </>
        )}
      </span>
      <Icon
        icon={icon}
        className="absolute -bottom-5 -right-5 h-20  w-20 fill-sky-700/25"
      />
    </div>
  );
};

export default Tile;
