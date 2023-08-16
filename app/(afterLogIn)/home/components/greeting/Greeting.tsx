import GreetingHeader from "./elements/Header";
import GreetingBody from "./elements/Body";
import GreetingFooter from "./elements/Footer";

export default function Greeting() {
  return (
    <div className="col-span-full flex w-full flex-col justify-between rounded-xl bg-sky-600/50 shadow-md sm:col-span-8 sm:col-start-3 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-3 lg:col-start-2 lg:col-end-7 lg:row-start-1 lg:row-end-2">
      <GreetingHeader />
      <GreetingBody />
      <GreetingFooter />
    </div>
  );
}
