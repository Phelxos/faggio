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
    <h1
      className={`${className} bg-amber-800 bg-clip-text text-4xl font-light uppercase tracking-widest text-transparent`}
    >
      {EOfficesEnglishToGerman[city]}
    </h1>
  );
};

export default Title;
