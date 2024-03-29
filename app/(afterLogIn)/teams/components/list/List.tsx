"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import { FC, useContext, useEffect, useState } from "react";
import Spinner from "../../../../components/spinners/Spinner";
import useCoworkers from "../../../../../stores/SCoworkers";
import useOffice from "../../../../../stores/SOffices";
import ICoworker from "../../../../../typings/interfaces/ICoworker";
import { Context } from "../../Context";
import EmptyStateMessage from "../EmptyStateMessage";
import HorizontalList from "./elements/Horizontal";
import VerticalList from "./elements/Vertical";

interface Props {
  coworkers: ICoworker[] | undefined;
}

const List: FC<Props> = ({ coworkers }) => {
  const context = useContext(Context);

  return (
    <>
      {context?.isListView ? (
        <VerticalList coworkers={coworkers} />
      ) : (
        <HorizontalList coworkers={coworkers} />
      )}
    </>
  );
};

interface ListViewProps {}

const ListView: FC<ListViewProps> = () => {
  const context = useContext(Context);
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
  const [displayedCoworkers, setDisplayedCoworkers] = useState<ICoworker[]>([]);
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoadingCoworkersListFromStore = useCoworkers((s) => s.isLoading);

  function filterCoworkers(coworkersList: ICoworker[]) {
    if (context?.searchForUser) {
      const filteredListOfCoworkers = coworkersList?.filter(
        (coworker: ICoworker) => {
          return (
            (coworker.forename.includes(context?.searchForUser) ||
              coworker.surname.includes(context?.searchForUser)) &&
            coworker.officeId === context?.locallySelectedOfficeId
          );
        }
      );
      setDisplayedCoworkers(filteredListOfCoworkers);
    } else {
      const filteredListOfCoworkers = coworkersList?.filter(
        (coworker: ICoworker) => {
          return coworker.officeId === context?.locallySelectedOfficeId;
        }
      );
      setDisplayedCoworkers(filteredListOfCoworkers);
    }
  }

  useEffect(() => {
    context?.setLocallySelectedOfficeId(globallySelectedOfficeId);
  }, []);

  useEffect(() => {
    setDisplayedCoworkers(coworkers as ICoworker[]);
  }, [coworkers]);

  useEffect(() => {
    filterCoworkers(coworkers as ICoworker[]);
  }, [context?.searchForUser, context?.locallySelectedOfficeId]);

  return (
    <div
      className={`${
        context?.isListView && displayedCoworkers?.length > 0
          ? "snap-y snap-mandatory flex-col overflow-x-hidden border-8 p-4"
          : "snap-x snap-mandatory flex-row items-center overflow-y-hidden border-x-[12px]"
      } col-start-1 col-end-13 row-start-1 row-end-2 flex h-[300px] w-full gap-10 overflow-auto rounded-lg border-transparent bg-pink-300/25 shadow-inner sm:col-start-2 sm:col-end-12 md:col-start-3 md:col-end-11 lg:col-start-1 lg:col-end-7 xl:col-start-2 xl:col-end-7`}
    >
      <>
        {isLoadingCoworkersListFromStore ? (
          <Spinner />
        ) : (
          <>
            {displayedCoworkers?.length > 0 ? (
              <List coworkers={displayedCoworkers} />
            ) : (
              <EmptyStateMessage />
            )}
          </>
        )}
      </>
    </div>
  );
};

export default ListView;
