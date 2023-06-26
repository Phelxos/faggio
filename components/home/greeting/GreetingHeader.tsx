import { isSameDay } from "date-fns";
import React, { useEffect } from "react";
import capitaliseFirstLetter from "../../../helpers/capitaliseFirstLetter";
import safeguardDate from "../../../helpers/safeguardDateAgainstTimezoneOffset";
import useAccount from "../../../stores/SAccount";
import useGreeting from "../../../stores/SGreeting";

export default function GreetingHeader() {
  const greeting = useGreeting((s) => s.greeting);
  const pronouncation = useGreeting((s) => s.pronouncation);
  const hasFetchedSuccesfully = useGreeting((s) => s.hasFetchedSuccessfully);
  const timestamp = useGreeting((s) => s.timestamp);
  const fetchGreetings = useGreeting((s) => s.fetchGreetings);
  const user = useAccount((s) => s.forename);

  useEffect(() => {
    if (isSameDay(new Date(safeguardDate(timestamp)), new Date())) return;
    fetchGreetings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-end gap-2 rounded-t bg-sky-900 p-5">
      <div className="flex items-end">
        <span className="text-3xl font-thin text-sky-300">
          {hasFetchedSuccesfully ? capitaliseFirstLetter(greeting) : "Hei"}
        </span>
        {hasFetchedSuccesfully && (
          <span className="ml-3 text-sm font-light italic text-sky-300/50">
            [ {pronouncation} ]
          </span>
        )}
        <span className="ml-1 font-light text-sky-300/50">,</span>
      </div>
      <div>
        <span className="text-2xl font-bold tracking-wide text-sky-400/50">
          {capitaliseFirstLetter(user)}
        </span>
        <span className="ml-1 text-2xl text-sky-300/50">!</span>
      </div>
    </div>
  );
}
