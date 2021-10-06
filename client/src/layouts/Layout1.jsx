import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import './Layout1.css'

const Layout1 = (props) => {
  return (
    <>
      
        <div>
          <Nav user={props.user} />
        </div>
        {/* <Footer /> */}
        <main>{props.children}</main>
      
    </>
  );
};

export default Layout1;



