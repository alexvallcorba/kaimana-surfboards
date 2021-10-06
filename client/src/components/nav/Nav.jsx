import './Nav.css'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";


const authenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-out">SIGN OUT</NavLink>
    </>
)
const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">SIGN UP</NavLink>
        <NavLink className="link" to="/sign-in">SIGN IN</NavLink>
    </>
)
const alwaysOptions = (
    <>
    <NavLink className="link" to="/surfboards">SHOP</NavLink>
    <NavLink className="link" to="/build-custom">BUILD A CUSTOM</NavLink>
    
    </>
)
const Nav = ({ user }) => {
        return (
            <nav className="nav-container">
            <div className="nav">
                  <Link to="/">
                    <img class="kaimana-logo" alt="Kaimana Logo" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633047999/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/kaimana-logo-white_pmd2fw.png"/>
                  </Link>
                    <div className="links">
                        {user && <div className="link welcome">Welcome, {user.username}</div>}
                        {alwaysOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}
export default Nav