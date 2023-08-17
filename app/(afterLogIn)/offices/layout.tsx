import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#c2400c" },
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="col-span-full grid h-fit grid-cols-12 gap-y-8">
      {children}
    </div>
  );
};

export default Layout;
