import { FC } from "react";
import Icon from "../../../../../components/icons/Icon";

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between gap-2 rounded-t-lg bg-amber-900 p-4">
      <h2 className="text-2xl font-light tracking-widest text-amber-300/50">
        Standort wählen
      </h2>
      <Icon icon="cursorArrowRays" className="h-8 w-8 fill-amber-600/50" />
    </div>
  );
};

export default Header;
