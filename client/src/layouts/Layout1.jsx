import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { Switch, Route } from 'react-router-dom';
import './Layout1.css'

const Layout1 = (props) => {
  return (
    <>
      
        <div>
          <Nav currentUser={props.currentUser} handleLogout={props.handleLogout}/>
        </div>
      <main>{props.children}</main>
      {/* <Switch>
        <Route path="/">
          <Footer  />
        </Route>
      </Switch> */}
      
    </>
  );
};

export default Layout1;




