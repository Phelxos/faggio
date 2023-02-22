import React from "react";
import Greeting from "../components/home/Greeting";
import PreviewMonth from "../components/home/previewMonth/PreviewMonth";

export default function Home() {
  return (
    <>
      <PreviewMonth />
      <Greeting />
    </>
  );
}
