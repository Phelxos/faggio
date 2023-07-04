import { FC } from "react";
import MyBookings from "./components/bookings-my/MyBookings";
import OtherBookings from "./components/bookings-other/OtherBookings";
import Calendar from "./components/calendar/Calendar";
import Control from "./components/control/Control";

const Page: FC = () => {
  return (
    <>
      <Calendar />
      <Control />
      <MyBookings />
      <OtherBookings />
    </>
  );
};

export default Page;
