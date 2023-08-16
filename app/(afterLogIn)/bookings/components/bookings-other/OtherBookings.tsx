import Header from "./header/Header";
import Main from "./main/Main";

export default function BookingsOther() {
  return (
    <div className="col-span-full h-fit rounded-lg border-8 border-emerald-900/50 sm:col-start-3 sm:col-end-11 xl:col-start-4 xl:col-end-10 2xl:col-start-9 2xl:col-end-13">
      <Header />
      <Main />
    </div>
  );
}
