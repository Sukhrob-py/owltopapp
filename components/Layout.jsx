import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";


function Layout({ children }) {
  return (
    <div className="layout--wrap">
      <div className="layout">
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
