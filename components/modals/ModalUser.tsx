import { Dialog } from "@headlessui/react";
import Icon from "../icons/Icon";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import ICoworker from "../../typings/interfaces/ICoworker";
import IModal from "../../typings/interfaces/IModal";
import capitaliseFirstLetter from "../../helpers/capitaliseFirstLetter";

export default function ModalUser({
  isDisplayingModal,
  toggleModal,
  id,
  buttonAcceptLabel,
  onButtonAcceptClick,
  buttonDeclineLabel,
  onButtonDeclineClick,
}: IModal & { id: number }) {
  const res = useFetch("coworkers", { isAPI: true });
  const [user, setUser] = useState<ICoworker | undefined>(undefined);

  useEffect(() => {
    const setUserData = async () => {
      const { resData } = await res;
      const userData = (resData as ICoworker[])?.find(
        (user) => user.coworkerId === id
      );
      setUser(userData as ICoworker);
    };
    setUserData();
  }, [res, id]);

  return (
    <Dialog
      className={`fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-900/50 backdrop-blur`}
      open={isDisplayingModal}
      onClose={toggleModal}
    >
      <Dialog.Panel className="max-h-3/4 min-h-1/4 max-w-3/4 min-w-1/4 flex h-[500px] w-[300px] flex-col items-center gap-8 rounded-t rounded-b-xl border-t-8 border-t-sky-300/50 bg-sky-900/80 px-6 pt-4 pb-8 drop-shadow-2xl">
        <div className="flex w-full items-center">
          <Dialog.Title className="flex w-full flex-col items-start gap-2">
            <span className="text-6xl font-thin tracking-widest text-sky-300/75">
              {capitaliseFirstLetter(user?.forename || "")}
            </span>
            <span className="font-bold uppercase tracking-widest text-sky-300">
              {user?.surname}
            </span>
          </Dialog.Title>
          {"favourite button"}
        </div>
        <Dialog.Description className="flex w-full items-center gap-2 rounded bg-sky-600/50 px-3 py-2 text-sm font-bold  text-black drop-shadow-md">
          <Icon icon="briefcase" className="h-8 w-8 fill-black/25" />
          <span className="grow text-center tracking-widest">
            {user?.position}
          </span>
        </Dialog.Description>
        <div className="flex flex-col items-center justify-center p-2 text-lg text-sky-200/75"></div>
      </Dialog.Panel>
    </Dialog>
  );
}
