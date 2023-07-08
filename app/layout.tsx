//import { JusMoreLayout } from "@/components/layouts/jusMoreLayout";
import "./styles/globals.css";

import Header from "./header";
import { Metadata } from "next";
import config from "@/lib/config";

/**
 * Default metadata.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata
 */
export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body>
        <Header />
        <main>{children}</main>
        {/*  <Footer /> */}
      </body>
    </html>
  );
}
