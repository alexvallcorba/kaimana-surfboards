import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import './BurgerMenu.css'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  closeAllMenusOnEsc = (e) => {
    e = e || window.event;
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.setState({ menuOpen: false });
    }
    this.closeMenu()
  };

  authenticatedOptions = (
    <>
   
      <NavLink onClick={() => this.closeMenu()} className="link menu-item" to="/sign-out">
        Sign Out
      </NavLink>
    </>
  );

  unauthenticatedOptions = (
    <>
      <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/sign-up">
        SIGN UP
      </NavLink>
      <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/sign-in">
        SIGN IN
      </NavLink>
    </>
  );

  alwaysOptions = (
    <>
      <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/about">
        ABOUT
      </NavLink>
      <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/surfboards">
        SHOP SURFBOARDS
      </NavLink>
      <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/build-custom">
        BUILD CUSTOM
      </NavLink>
      <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/customs">
        CUSTOMS
      </NavLink>
      
    </>
  );

  render() {
    return (
      <Menu
        right
        disableAutoFocus
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        customOnKeyDown={this.closeAllMenusOnEsc}
      >
        <main id="page-wrap">
          {this.alwaysOptions}
          {this.props.user ? this.authenticatedOptions : this.unauthenticatedOptions}
          <button id="bm-signout-button"className="bm-link menu-item" >SIGN OUT</button>
          </main>
      </Menu>
    )
  }
}