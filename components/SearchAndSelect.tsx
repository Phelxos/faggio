import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Icon from "./icons/Icon";

interface Props {
  value: any;
  listOfValues: any[];
  setValue: (newVal: any) => void;
}

export default function SearchAndSelect({
  value,
  listOfValues,
  setValue,
}: Props) {
  const [query, setQuery] = useState("");

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

  return (
    <div className="relative flex w-40 items-center justify-center uppercase text-emerald-500">
      <Combobox value={value} onChange={setValue}>
        <div className="relative m-2 cursor-default overflow-hidden rounded text-left shadow-md sm:text-sm">
          <Combobox.Input
            className="w-full border-none bg-emerald-600 py-2 pl-3 pr-10 text-center text-sm font-semibold tracking-widest text-emerald-100"
            displayValue={() => value}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Icon icon="select" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute top-12 z-10 mt-1 max-h-60 w-full overflow-auto rounded-md rounded border-2 border-emerald-800 bg-emerald-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredListOfValues.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredListOfValues.map((value, i) => (
                <Combobox.Option
                  key={i}
                  className={({ active, selected }) =>
                    `relative flex cursor-pointer select-none items-center justify-center p-3 transition-all ${
                      active
                        ? "bg-emerald-500 text-emerald-900"
                        : "text-emerald-200"
                    } ${
                      selected
                        ? "bg-emerald-500 text-emerald-900"
                        : "font-normal"
                    }`
                  }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={` ${
                          selected
                            ? "bg-emerald-500 text-emerald-900"
                            : "font-normal"
                        }`}
                      >
                        {value}
                      </span>
                      {selected ? (
                        <span className="inset-y-0 left-0 pl-3 text-emerald-700">
                          <Icon icon="check" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}
