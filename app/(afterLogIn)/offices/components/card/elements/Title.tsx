import { FC } from "react";
import {
  EOfficesEnglishToGerman,
  TOfficeCityEnglish,
} from "../../../../../../typings/types/TOfficeCity";

interface Props {
  district?: string;
  city: TOfficeCityEnglish;
  className?: string;
}

const Title: FC<Props> = ({ district, city, className }) => {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      {/* <h2 className="text-sm font-semibold tracking-widest text-amber-900">
        {district && district[0].toLocaleUpperCase() + district?.slice(1)}
      </h2> */}
      <h1 className="text-4xl font-light uppercase tracking-widest text-amber-900">
        {EOfficesEnglishToGerman[city]}
      </h1>
    </div>
  );
};

export default Title;
