import { FC } from "react";
import TIcon from "../../../typings/types/TIcon";
import Icon from "../../icons/Icon";

interface ModalProfileTileProps {
  name: string;
  nameBold?: string;
  icon?: TIcon;
}

const ModalProfileTile: FC<ModalProfileTileProps> = ({
  name,
  nameBold,
  icon = "informationCircle",
}) => {
  return (
    <div className="relative h-full w-full overflow-hidden hyphens-auto rounded border-2 border-sky-900 bg-sky-950 p-4 shadow-lg">
      <span className="font-mono text-sm text-sky-200/50">
        {name}{" "}
        {nameBold && (
          <>
            <br />
            <strong>{nameBold}</strong>
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

export default ModalProfileTile;
