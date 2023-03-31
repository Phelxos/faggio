import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import useCoworkers from "../../../stores/SCoworkers";
import Spinner from "../../Spinner";
import ICoworker from "../../../typings/interfaces/ICoworker";
import IModal from "../../../typings/interfaces/IModal";
import Image from "next/image";
import Title from "./ModalUserTiles/Title";
import Description from "./ModalUserTiles/Description";
import Birthday from "./ModalUserTiles/Birthday";
import Office from "./ModalUserTiles/Office";
import NextBooking from "./ModalUserTiles/NextBooking";
import Projects from "./ModalUserTiles/Projects";
import UserCardControls from "../../user/UserCardControls";

export default function ModalUser({
  isDisplayingModal,
  toggleModal,
  id,
}: IModal & { id: number }) {
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
  ) : coworker ? (
    <Dialog
      className="fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-900/50 backdrop-blur"
      open={isDisplayingModal}
      onClose={toggleModal}
    >
      <Dialog.Panel className="max-h-3/4 min-h-1/4 max-w-3/4 min-w-1/4 relative flex h-[500px] w-[300px] flex-col rounded-t rounded-b-lg border-t-8 border-t-pink-300/50 bg-pink-900/75 drop-shadow-2xl">
        <div className="grid w-full grid-cols-4 grid-rows-[minmax(1fr,_fit-content)] place-items-center gap-y-4 overflow-auto px-6 pt-4 pb-8">
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
              date={coworker?.birtday?.date}
              month={coworker?.birtday?.month}
            />
            <Office office={coworker?.office} />
          </div>
          <NextBooking id={coworker?.coworkerId} />
          <Projects />
        </div>
        <UserCardControls className="w-full rounded-b-lg" />
      </Dialog.Panel>
    </Dialog>
  ) : (
    <p>Fehler beim Laden</p>
  );
}
