import React from "react";
import GreetingHeader from "./GreetingHeader";
import GreetingBody from "./GreetingBody";
import GreetingFooter from "./GreetingFooter";

export default function Greeting() {
  return (
    <div className="w-full rounded-xl bg-sky-600/50 shadow-md">
      <GreetingHeader />
      <GreetingBody />
      <GreetingFooter />
    </div>
  );
}
