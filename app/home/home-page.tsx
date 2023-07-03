import { FC } from "react";
import Favorites from "./components/favorites/Favorites";
import Greeting from "./components/greeting/Greeting";
import PreviewMonth from "./components/previews/month/PreviewMonth";
import PreviewWeek from "./components/previews/week/PreviewWeek";

const HomePage: FC = () => {
  return (
    <>
      <Greeting />
      <PreviewMonth />
      <PreviewWeek />
      <Favorites />
    </>
  );
};

export default HomePage;
