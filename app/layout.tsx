import { Metadata } from "next";
import { FC } from "react";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Faggio",
  description: "Mit Faggio wissen Sie, wer wann im Büro ist.",
  viewport: { width: "device-width", initialScale: 1 },
  icons: { icon: "/favicon.ico" },
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#000000" },
};

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="de">
      <body className="relative flex h-screen w-screen flex-col">
        {children}
      </body>
    </html>
  );
};

export default Layout;
