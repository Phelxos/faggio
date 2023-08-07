import GreetingHeader from "./elements/Header";
import GreetingBody from "./elements/Body";
import GreetingFooter from "./elements/Footer";

export default function Greeting() {
  return (
    <div className="w-full rounded-xl bg-sky-600/50 shadow-md">
      <GreetingHeader />
      <GreetingBody />
      <GreetingFooter />
    </div>
  );
}
