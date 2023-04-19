import React from "react";
import Favourites from "../components/home/favourites/Favourites";
import Greeting from "../components/home/greeting/Greeting";
import PreviewMonth from "../components/home/previews/PreviewMonth";
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
