import React from "react";
import Greeting from "../components/home/greeting/Greeting";
import PreviewMonth from "../components/home/previewMonth/PreviewMonth";

export default function Home() {
  return (
    <div flex-col>
      <PreviewMonth />
      <Greeting />
    </div>
  );
}
