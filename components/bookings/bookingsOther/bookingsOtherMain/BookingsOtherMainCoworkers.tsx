import React, { useContext } from "react";
import useCoworkers from "../../../../stores/SCoworkers";
import Image from "next/image";
import ICoworker from "../../../../typings/interfaces/ICoworker";
import Spinner from "../../../Spinner";
import { CBookings } from "../../../contexts/CBookings";

export default function BookingsOtherMainRow({ i }: { i: number }) {
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);
  const c = useContext(CBookings);
  return (
    <div
      className={`col-span-6 flex h-full items-center overflow-scroll py-2 px-3 shadow-inner ${
        i % 2 === 0 ? "bg-slate-500/50" : "bg-slate-400/50"
      }`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {(coworkers as ICoworker[])
            .filter(
              (coworker: ICoworker) =>
                coworker.office === c?.locallySelectedOfficeName
            )
            .map((coworker: ICoworker, i: number) => {
              return (
                <Image
                  src={coworker.imgSrc || ""}
                  alt={`${coworker.forename} ${coworker.surname}`}
                  key={`${coworker.forename} ${coworker.surname}`}
                  width={50}
                  height={50}
                  className={`mr-4 inline rounded-full border-2 border-emerald-500/50`}
                />
              );
            })}
        </>
      )}
    </div>
  );
}
