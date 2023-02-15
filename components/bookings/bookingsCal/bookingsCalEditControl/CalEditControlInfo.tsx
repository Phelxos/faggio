import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import TIcon from "../../../../typings/types/TIcon";
import Icon from "../../../icons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

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

export default function Example() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "border-slate-200" : "border-slate-200/50"}
                group ml-2 inline-flex items-center rounded-full border-2  bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/75 to-indigo-500/75 p-1 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
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
            <Popover.Panel className="absolute left-1/2 z-10 w-screen max-w-sm -translate-y-[125%] -translate-x-1/2 transform  px-4 sm:px-0 lg:max-w-3xl">
              <div className="flex flex-col gap-6 overflow-hidden rounded-lg border-2 border-purple-200 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 p-6">
                <div className="relative grid gap-8 lg:grid-cols-2">
                  {buttons.map(
                    ({ name, description, icon }: any, i: number) => (
                      <div key={i} className="flex items-center gap-4">
                        {icon !== "noSymbol" ? (
                          <Icon
                            icon={icon}
                            className="h-12 w-12 rounded-lg bg-indigo-900/50 fill-indigo-300/75 p-2"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faFloppyDisk}
                            className="rounded-lg bg-indigo-900/50 p-2 text-indigo-300/75"
                          />
                        )}
                        <div className="">
                          <p className="text-sm font-bold tracking-wider text-indigo-400">
                            {name}
                          </p>
                          <p className="text-xs text-indigo-100">
                            {description}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <hr className="opacity-50" />
                <div className="text-indigo-200/90">
                  <span className="flex flex-col">
                    <span className="mb-1 text-lg font-bold tracking-wider">
                      Bürotage buchen
                    </span>
                  </span>
                  <span className="text-md block font-light tracking-wide">
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
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
