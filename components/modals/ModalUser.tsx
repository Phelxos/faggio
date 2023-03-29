import { Dialog } from "@headlessui/react";
import Icon from "../icons/Icon";
import UserCardControls from "../user/UserCardControls";
import { useEffect, useState } from "react";
import ICoworker from "../../typings/interfaces/ICoworker";
import IModal from "../../typings/interfaces/IModal";
import capitaliseFirstLetter from "../../helpers/capitaliseFirstLetter";
import Image from "next/image";
import Spinner from "../Spinner";
import useCoworkers from "../../stores/SCoworkers";
import displayEquivalent from "../../helpers/displayEquivalent";
import useNextBooking from "../../hooks/useNextBooking";
import { EOfficesEnglishToGerman } from "../../typings/types/TOfficeCity";

export default function ModalUser({
  isDisplayingModal,
  toggleModal,
  id,
}: IModal & { id: number }) {
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);
  const [coworker, setCoworker] = useState<ICoworker | null>(null);
  const nextBooking = useNextBooking(id);
  const temporaryCompanyLogos = [
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
  ];

  useEffect(() => {
    const coworkerData = (coworkers as ICoworker[])?.find(
      (user) => user.coworkerId === id
    );
    setCoworker(coworkerData as ICoworker);
  }, [coworkers, id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Dialog
      className="fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-900/50 backdrop-blur"
      open={isDisplayingModal}
      onClose={toggleModal}
    >
      <Dialog.Panel className="max-h-3/4 min-h-1/4 max-w-3/4 min-w-1/4 relative flex h-[500px] w-[300px] flex-col rounded-t rounded-b-lg border-t-8 border-t-pink-300/50 bg-pink-900/75 drop-shadow-2xl">
        <div className="grid w-full grid-cols-4 grid-rows-[minmax(1fr,_fit-content)] place-items-center gap-y-4 overflow-auto px-6 pt-4 pb-8">
          <Dialog.Title className="grid-row-1 col-span-2 flex w-full flex-col items-center gap-2">
            <span className="text-3xl font-thin tracking-widest text-pink-300/75">
              {capitaliseFirstLetter(coworker?.forename || "")}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-pink-300">
              {coworker?.surname}
            </span>
          </Dialog.Title>
          <Image
            src={coworker?.imgSrc || ""}
            alt={`${coworker?.forename} ${coworker?.surname}`}
            width={85}
            height={85}
            className="col-span-2 m-2 rounded-full border-2 border-pink-200/50 shadow-md"
          />
          <Dialog.Description className="grid-row-2 col-span-4 flex w-full items-center gap-2 rounded-2xl bg-pink-600/50 px-3 py-2 drop-shadow-md">
            <Icon icon="briefcase" className="h-8 w-8 fill-pink-900" />
            <span className="grow text-center font-bold tracking-widest text-pink-300/75">
              {coworker?.position}
            </span>
          </Dialog.Description>
          <div className="col-span-4 flex h-full w-full items-center justify-between gap-2">
            <div className="flex h-full w-1/2 flex-col items-center justify-center gap-2 rounded-lg bg-pink-700/50 p-2 text-center text-xs font-bold text-pink-300/75">
              <Icon icon="cake" className="h-5 w-5 fill-pink-500/50" />
              {coworker?.birtday?.date}.{" "}
              {displayEquivalent(coworker?.birtday?.month, "month")}
            </div>
            <div className="flex h-full w-1/2 flex-col items-center justify-center gap-2 rounded-lg bg-pink-700/50 p-1 text-center text-xs font-bold text-pink-300/75">
              <Icon
                icon="buildingOffice"
                className="h-5 w-5 fill-pink-500/50"
              />
              {capitaliseFirstLetter(coworker?.office || "")}
            </div>
          </div>
          <div
            className={`col-span-4 flex w-full flex-col items-center rounded bg-pink-700/50 p-4 ${
              !nextBooking && "opacity-50"
            }`}
          >
            <p className="mb-4 w-full font-thin tracking-wider text-pink-300/75">
              Nächster Bürobesuch
            </p>
            <p
              className={`w-full text-right text-xs text-pink-300/75 ${
                nextBooking ? "font-bold" : "italic"
              }`}
            >
              {nextBooking ? (
                <>
                  <span>
                    {nextBooking?.date.toLocaleDateString("de-DE", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                  </span>
                  <br />
                  <span className="tracking-widest">
                    in{" "}
                    {capitaliseFirstLetter(
                      EOfficesEnglishToGerman[nextBooking?.office]
                    )}
                  </span>
                </>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <Icon
                    icon="xMark"
                    className="h-14 w-14 rounded-full bg-pink-600/50 fill-pink-400/75 p-2"
                  />
                  <span className="font-semibold tracking-widest">
                    bislang nichts geplant
                  </span>
                </div>
              )}
            </p>
          </div>
          <div className="col-span-4 w-full rounded bg-pink-700/50 p-4">
            <p className="mb-2 font-thin tracking-wider text-pink-300/75">
              Projekte
            </p>
            <div className="flex w-full items-center gap-4 overflow-scroll py-2 px-3">
              {temporaryCompanyLogos.map((url, i) => (
                <Image
                  src={url}
                  alt="company logo"
                  className="w-3/4 rounded-full border-2 border-pink-200/50 shadow-md"
                  width={35}
                  height={35}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        <UserCardControls className="w-full rounded-b-lg" />
      </Dialog.Panel>
    </Dialog>
  );
}
