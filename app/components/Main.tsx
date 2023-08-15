import { FC } from "react";
import ToastContainer from "./toasts/Container";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Main: FC<Props> = ({ children }) => {
  return (
    <main className="flex grow flex-col gap-16 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 p-6 lg:p-16">
      {children}
    </main>
  );
};

export default Main;
