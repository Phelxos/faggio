import React from "react";
import Favourites from "../components/home/favorites/Favorites";
import Greeting from "../components/home/greeting/Greeting";
import PreviewMonth from "../components/home/previews/month/PreviewMonth";
import PreviewWeek from "../components/home/previews/week/PreviewWeek";

export default function Home() {
  return (
    <>
      <Greeting />
      <PreviewMonth />
      <PreviewWeek />
      <Favourites />
    </>
  );
}
