import { FC } from "react";
import Header from "./elements/Header";
import Body from "./elements/Body";

const Map: FC = () => {
  return (
    <div className="col-start-1 col-end-13 row-start-1 row-end-2 sm:col-start-2 sm:col-end-12 md:col-start-3 md:col-end-11 lg:col-start-1 lg:col-end-7 xl:col-start-2 xl:col-end-7">
      <Header />
      <div className="to-transpartent bg-gradient-to-b from-amber-700">
        <Body />
      </div>
    </div>
  );
};

export default Map;
