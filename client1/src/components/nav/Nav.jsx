import './Nav.css'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import BurgerMenu from '../burgerMenu/BurgerMenu'




const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">SIGN UP</NavLink>
        <NavLink className="link" to="/sign-in">SIGN IN</NavLink>
    </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/about">ABOUT</NavLink>
    <NavLink className="link" to="/surfboards">SHOP SURFBOARDS</NavLink>
    <NavLink className="link" to="/build-custom">BUILD A CUSTOM</NavLink>
    <NavLink className="link" to="/customs">CUSTOMS</NavLink>
    
    </>
)
const Nav = (props) => {
        return (
            <nav className="nav-container">
            <div className="nav">
                  <Link to="/">
                    <img class="kaimana-logo" alt="Kaimana Logo" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633047999/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/kaimana-logo-white_pmd2fw.png"/>
                  </Link>
                    <div className="links">
                        {props.currentUser && <div className="link welcome">Welcome, {props.currentUser.username}</div>}
                        {alwaysOptions}
                {props.currentUser ? (
                                  <button id="signout-button" className="link" onClick={props.handleLogout} >SIGN OUT</button>

                        ) :( unauthenticatedOptions)}
                    </div>
            </div>
              <BurgerMenu currentUser={props.currentUser} pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </nav>
        )
}
export default Nav
