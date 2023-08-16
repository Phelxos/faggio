"use client";

import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, FC } from "react";
import Icon from "../../../../../components/icons/Icon";
import TIcon from "../../../../../../typings/types/TIcon";

const buttons: { name: string; description: string; icon: TIcon }[] = [
  {
    name: "Speichern",
    description:
      "Buche deine bearbeiteten Tage: Grün markierte Tage werden gebucht. Bereits gebuchte Tage, die rot durchgestrichen sind, werden aus deinen Buchungen entfernt.",
    icon: "noSymbol",
  },
  {
    name: "Abbrechen",
    description: "Jegliche Bearbeitung wird verworfen.",
    icon: "arrowUturnLeft",
  },
];

const Info: FC = () => {
  return (
    <Popover className={`fixed bottom-7 left-4 z-50 opacity-95`}>
      {({ open }) => (
        <>
          <Popover.Button className="group ml-2 inline-flex items-center rounded-full border-2 border-sky-200/50 bg-sky-800 p-1 opacity-50 hover:text-opacity-100 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Icon
              icon="informationCircle"
              className={`${open ? "text-opacity-100" : "text-opacity-50"}
                  h-10 w-10 text-slate-100 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="fixed bottom-32 left-0 right-0 z-10 w-screen max-w-sm transform px-4 sm:px-0 lg:left-7 lg:max-w-3xl">
              <div className="flex flex-col overflow-hidden rounded-lg border-4 border-sky-800/80 bg-sky-700">
                <div className="relative grid gap-8 rounded p-6 lg:grid-cols-2">
                  {buttons.map(
                    ({ name, description, icon }: any, i: number) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex min-h-[75px] min-w-[75px] flex-col items-center justify-center rounded-xl bg-sky-800">
                          {icon !== "noSymbol" ? (
                            <Icon
                              icon={icon}
                              className="h-12 w-12 fill-sky-400/90"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faFloppyDisk}
                              className="h-12 w-12 text-sky-400/90"
                            />
                          )}
                        </div>
                        <div>
                          <p className="mb-1 text-lg font-bold tracking-wider text-sky-300/75">
                            {name}
                          </p>
                          <p className="text-sm text-sky-200/90">
                            {description}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="rounded-b bg-sky-800 p-8">
                  <span className="flex flex-col">
                    <span className="mb-2 text-xl font-light tracking-wider text-sky-200/50">
                      Bürotage buchen
                    </span>
                  </span>
                  <span className="block text-sm font-light tracking-wide text-sky-100">
                    Um einzutragen dass du an einem Tag ins Büro kommst,{" "}
                    <span className="font-bold">klicke auf den Tag</span> im
                    Bearbeitungsmodus des Kalendars.
                  </span>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Info;
