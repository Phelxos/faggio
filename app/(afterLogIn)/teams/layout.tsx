import { FC } from "react";
import ContextProvider from "./Context";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#BE185D" },
};

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
