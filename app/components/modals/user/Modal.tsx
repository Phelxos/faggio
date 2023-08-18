"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import useCoworkers from "../../../../stores/SCoworkers";
import ICoworker from "../../../../typings/interfaces/ICoworker";
import IModal from "../../../../typings/interfaces/IModal";
import Spinner from "../../spinners/Spinner";
import UserCardControls from "../../user/UserCardControls";
import Birthday from "./tiles/Birthday";
import Description from "./tiles/Description";
import NextBooking from "./tiles/NextBooking";
import Office from "./tiles/Office";
import Projects from "./tiles/Projects";
import Title from "./tiles/Title";

const Modal: FC<IModal & { id: number }> = ({
  isDisplayingModal,
  toggleModal,
  id,
}) => {
  const coworkersStoreData = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoadingStoreData = useCoworkers((s) => s.isLoading);
  const [coworker, setCoworker] = useState<ICoworker | null>(null);

  useEffect(() => {
    const coworkerData = (coworkersStoreData as ICoworker[])?.find(
      (user) => user.coworkerId === id
    );
    setCoworker(coworkerData as ICoworker);
  }, [coworkersStoreData, id]);

  return isLoadingStoreData ? (
    <Spinner />
  ) : (
    coworker && (
      <Dialog
        className="fixed left-1/2 top-1/2 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-slate-900/50 backdrop-blur"
        open={isDisplayingModal}
        onClose={toggleModal}
      >
        <Dialog.Panel className="relative m-4 flex flex-col rounded-b-lg rounded-t border-t-8 border-t-pink-300/50 bg-pink-900/75 drop-shadow-2xl">
          <div className="grid w-full grid-cols-4 grid-rows-[minmax(1fr,_fit-content)] place-items-center gap-y-4 overflow-auto px-6 pb-8 pt-4">
            <Title forename={coworker?.forename} surname={coworker?.surname} />
            <Image
              src={coworker?.imgSrc || ""}
              alt={`${coworker?.forename} ${coworker?.surname}`}
              width={85}
              height={85}
              className="col-span-2 m-2 rounded-full border-2 border-pink-200/50 shadow-md"
            />
            <Description position={coworker?.position} />
            <div className="col-span-4 flex h-full w-full items-center justify-between gap-2">
              <Birthday
                // Type assertion is valid here due to default props in the component
                date={coworker?.birthdayDate as number}
                month={coworker?.birthdayMonth as number}
              />
              <Office officeId={coworker?.officeId} />
            </div>
            <NextBooking id={coworker?.coworkerId} />
            <Projects />
          </div>
          <UserCardControls
            className="w-full rounded-b-lg"
            phone={coworker?.phone}
            email={coworker?.email}
          />
        </Dialog.Panel>
      </Dialog>
    )
  );
};

export default Modal;
