import * as React from "react";
import { Link } from "gatsby";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default Layout;
