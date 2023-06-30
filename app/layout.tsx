import Setup from "./components/Setup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Setup>{children}</Setup>
      </body>
    </html>
  );
}
