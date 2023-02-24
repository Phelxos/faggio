import React, { useEffect, useState } from "react";
import GreetingHeader from "./GreetingHeader";
import GreetingBody from "./GreetingBody";
import GreetingFooter from "./GreetingFooter";

export default function Greeting() {
  return (
    <div className="w-full rounded bg-sky-600/50">
      <GreetingHeader />
      <GreetingBody />
      <GreetingFooter />
    </div>
  );
}
