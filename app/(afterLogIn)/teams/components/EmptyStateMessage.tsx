"use client";

import { FC, useContext } from "react";
import { Context } from "../Context";
import Icon from "../../../components/icons/Icon";
import convertFromIdToOfficeName from "../../../../helpers/convertFromIdToOfficeName";

const EmptyStateMessage: FC = () => {
  const context = useContext(Context);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 py-4 text-pink-200/50">
      <Icon
        icon="exclamationCircle"
        className="h-52 w-52 fill-pink-300/25 opacity-50"
      ></Icon>
      <p className="w-full text-center">
        Es gibt keine Mitarbeiter in{" "}
        <strong className="min-w-3/4 max-w-3/4 mx-auto my-2 block rounded bg-pink-500/25 px-4 py-2 font-mono uppercase tracking-widest">
          {convertFromIdToOfficeName(
            context?.locallySelectedOfficeId as number
          )}
        </strong>{" "}
        {context?.searchForUser && (
          <>
            mit der Buchstabenfolge{" "}
            <strong className="min-w-3/4 max-w-3/4 mx-auto my-2 block overflow-auto rounded bg-pink-700/75 px-4 py-2 font-mono uppercase">
              {context?.searchForUser}
            </strong>{" "}
            im Namen.
          </>
        )}
      </p>
    </div>
  );
};

export default EmptyStateMessage;
