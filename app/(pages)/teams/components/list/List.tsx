"use client";

import { FC, useContext } from "react";
import ICoworker from "../../../../../typings/interfaces/ICoworker";
import { Context } from "../../Context";
import VerticalList from "./elements/Vertical";
import HorizontalList from "./elements/Horizontal";

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

export default List;
