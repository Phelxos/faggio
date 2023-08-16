import Header from "./header/Header";
import Main from "./main/Main";

export default function BookingsOther() {
  return (
    <div className="col-span-full row-start-3 row-end-4 h-fit rounded-lg border-8 border-emerald-900/50 sm:col-start-3 sm:col-end-11 md:row-start-2 md:row-end-3 lg:row-start-2 lg:row-end-3 xl:col-start-4 xl:col-end-10 xl:row-start-2 xl:row-end-3 2xl:col-start-1 2xl:col-end-4 2xl:row-start-1 2xl:row-end-2">
      <Header />
      <Main />
    </div>
  );
}
