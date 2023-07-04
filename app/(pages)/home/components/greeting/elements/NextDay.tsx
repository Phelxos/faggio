import Link from "next/link";
import { FC } from "react";
import Icon from "../../../../../../components/icons/Icon";
import capitaliseFirstLetter from "../../../../../../helpers/capitaliseFirstLetter";
import convertFromIdToOfficeName from "../../../../../../helpers/convertFromIdToOfficeName";

const weekdaysGerman = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];

interface Props {
  nextBooking: {
    date: Date;
    officeId: number;
  };
  nextDay: string;
}

const NextDay: FC<Props> = ({ nextDay, nextBooking }) => {
  return (
    <>
      <p className="mb-4 self-end text-4xl font-thin text-sky-500/50">
        Nächstes Mal
      </p>
      <div className="leading-10 text-sky-500">
        Du planst,
        {nextDay && weekdaysGerman?.includes(nextDay) && " am"}{" "}
        <span className="inline-block rounded bg-sky-700 px-2 text-sky-300">
          {nextDay}
        </span>{" "}
        ins{" "}
        <div className="my-2 inline-flex items-baseline gap-1 rounded bg-sky-700 px-2 text-sky-300">
          <Icon
            icon="buildingOffice"
            className="m-0 h-4 w-4 self-center opacity-50"
          />
          <Link href="/offices">
            {`${capitaliseFirstLetter(
              convertFromIdToOfficeName(nextBooking!.officeId)!
            )}er`}
          </Link>
        </div>{" "}
        Büro zu gehen.
      </div>
    </>
  );
};

export default NextDay;
