import React, { ReactNode } from "react";
import { Header } from "../header";
import NavbarChat from "../navbar/navbarchat";

//import { Footer } from "./footer";

type Props = {
  children?: ReactNode;
};

export const JusMoreLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <NavbarChat />
      <main>{children}</main>
    </>
  );
};
