import React from "react";
import Greeting from "../components/home/greeting/Greeting";
import PreviewMonth from "../components/home/PreviewMonth";
import PreviewWeek from "../components/home/PreviewWeek";

export default function Home() {
  return (
    <>
      <Greeting />
      <PreviewMonth />
      <PreviewWeek />
    </>
  );
}
