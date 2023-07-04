import BookingsOtherHeaderInput from "./elements/Input";
import BookingsOtherHeaderDate from "./elements/Date";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex flex-col rounded-t-lg">
      <BookingsOtherHeaderInput />
      <BookingsOtherHeaderDate />
    </div>
  );
};

export default Header;
