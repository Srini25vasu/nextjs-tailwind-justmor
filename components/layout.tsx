import React, { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
