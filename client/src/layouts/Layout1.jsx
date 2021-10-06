import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

const Layout1 = (props) => {
  return (
    <>
      <div>
        <div>
          <Nav user={props.user} />
        </div>
        {/* <Footer /> */}
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default Layout1;



