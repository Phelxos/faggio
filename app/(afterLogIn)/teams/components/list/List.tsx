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
          ? "snap-y snap-mandatory flex-col border-8 p-4"
          : "snap-x snap-mandatory flex-row items-center border-x-[12px] px-[50px] py-4"
      } flex h-[300px] w-full gap-10 overflow-scroll rounded-lg border-transparent bg-pink-300/25 shadow-inner`}
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
