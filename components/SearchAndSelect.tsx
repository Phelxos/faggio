import React, { useState, useEffect, useRef } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Icon from "./icons/Icon";
import TTheme from "../typings/types/TThemes";
import useViewportDistance from "../hooks/useViewportDistance";
import useViewportIntersection from "../hooks/useViewportIntersection";

interface Props {
  value: any;
  listOfValues: any[];
  setValue: (newVal: any) => void;
  theme?: TTheme;
  displayFilter?: (value: any) => string;
}

export default function SearchAndSelect({
  value,
  listOfValues,
  setValue,
  theme = "slate",
  displayFilter,
}: Props) {
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  const isCloserToTop = useViewportDistance(ref);
  const isIntersecting = useViewportIntersection(ref);

  const filteredListOfValues =
    query === ""
      ? listOfValues
      : listOfValues.filter((value) =>
          value
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toString().toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    if (isIntersecting) {
      setQuery("");
    }
  }, [isIntersecting]);

  return (
    <Combobox
      value={value}
      onChange={setValue}
      as="div"
      className="relative h-full w-full cursor-default text-xs"
    >
      <div className={`flex h-full`} ref={ref}>
        <Combobox.Input
          className={`w-full rounded-l-lg border-none bg-${theme}-500 pl-4 text-left font-mono font-thin uppercase tracking-widest text-${theme}-100 shadow-inner outline-none`}
          displayValue={
            displayFilter ? () => displayFilter(value) : () => value
          }
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Button
          className={`flex flex-col items-center justify-center rounded-r-lg bg-${theme}-800 hover:bg-${theme}-700`}
        >
          <Icon
            icon="select"
            className={`h-8 w-8 fill-${theme}-400 opacity-50 hover:fill-${theme}-900`}
          />
        </Combobox.Button>
      </div>
      <Transition
        as="div"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery("")}
      >
        {!isIntersecting && (
          <Combobox.Options
            className={`absolute ${
              isCloserToTop ? "top-[110%]" : "bottom-[110%]"
            } z-10 max-h-60 w-full overflow-auto rounded-md border-2 border-${theme}-300 border-${theme}-800 bg-${theme}-800 p-2 uppercase shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            {filteredListOfValues.length === 0 && query !== "" ? (
              <div
                className={`relative cursor-default select-none font-mono text-${theme}-100`}
              >
                Nichts gefunden
              </div>
            ) : (
              filteredListOfValues.map((value, i) => (
                <Combobox.Option
                  key={i}
                  className={({ active, selected }) =>
                    `relative flex cursor-pointer select-none items-center justify-between rounded p-2 font-mono tracking-wider transition-all ${
                      active
                        ? `bg-${theme}-600 text-${theme}-900`
                        : `text-${theme}-200`
                    } ${
                      selected
                        ? `bg-${theme}-300 text-${theme}-900`
                        : "font-normal"
                    }`
                  }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={` ${
                          selected ? `text-${theme}-900` : "font-normal"
                        }`}
                      >
                        {displayFilter ? displayFilter(value) : value}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        )}
      </Transition>
    </Combobox>
  );
}
