import React, { useContext } from "react";
import useCoworkers from "../../../../stores/SCoworkers";
import ICoworker from "../../../../typings/interfaces/ICoworker";
import Spinner from "../../../Spinner/Spinner";
import { CBookings } from "../../../contexts/CBookings";
import useModal from "../../../../hooks/useModal";
import UserImage from "../../../user/UserImage";

export default function BookingsOtherMainRow({ i }: { i: number }) {
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);
  const c = useContext(CBookings);
  return (
    <div
      className={`col-span-6 flex h-full items-center gap-4 overflow-scroll py-2 px-3 shadow-inner ${
        i % 2 === 0 ? "bg-slate-500/50" : "bg-slate-400/50"
      }`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {(coworkers as ICoworker[])
            ?.filter(
              (coworker: ICoworker) =>
                coworker.office === c?.locallySelectedOfficeName
            )
            .map((coworker: ICoworker, i: number) => {
              return <UserImage coworker={coworker} key={i} />;
            })}
        </>
      )}
    </div>
  );
}
