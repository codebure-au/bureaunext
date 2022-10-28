import NavHeader from "./NavHeader";
import NavFooter from "./NavFooter";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="BURE - Classic FreeCell. No Ads. No Frills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <div className="root">
          <NavHeader />
          {children}
          <NavFooter />
        </div>
      </body>
    </html>
  );
}
