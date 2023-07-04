"use client";

import { FC, useContext, useEffect, useState } from "react";
import { CTeams } from "../../../Context";
import Icon from "../../../../../../components/icons/Icon";

interface Props {
  onInput: (e: any) => void;
  value: string;
}

const Search: FC<Props> = ({ onInput, value }) => {
  const c = useContext(CTeams);
  const [borderColor, setBorderColor] = useState(200);

  const clearSearch = () => {
    c?.setSearchForUser("");
  };

  useEffect(() => {
    if (c?.searchForUser?.length! > 0) {
      setBorderColor(700);
    } else {
      setBorderColor(200);
    }
  }, [c?.searchForUser]);

  return (
    <div
      className={`border-pink-${borderColor} flex items-center rounded-t-lg bg-pink-500 px-4`}
    >
      <input
        className={`h-full w-full grow bg-pink-500 text-3xl uppercase tracking-widest text-pink-900 caret-pink-900 outline-none placeholder:font-light placeholder:text-pink-200 placeholder:opacity-50`}
        onInput={onInput}
        value={value}
        placeholder="Suchen…"
      />
      {c?.searchForUser?.length! > 0 && (
        <button onClick={clearSearch}>
          <Icon icon="xMark" className="ml-2 h-10 w-10 grow fill-pink-900/50" />
        </button>
      )}
    </div>
  );
};

export default Search;
