import React from "react";
import Nav from "../components/nav/Nav";

const Layout1 = (props) => {
  return (
    <>
      <div>
        <div>
          <Nav user={props.user} />
        </div>
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default Layout1;



