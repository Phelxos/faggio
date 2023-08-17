import { FC } from "react";
import ContextProvider from "./Context";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <ContextProvider>
      <div className="col-span-full grid h-fit grid-cols-12 gap-y-8">
        {children}
      </div>
    </ContextProvider>
  );
};

export default Layout;
