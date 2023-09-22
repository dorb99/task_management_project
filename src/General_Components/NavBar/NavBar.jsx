import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/WebLogoNew.png";
import { UserContext } from "../Other/Context";
import "./NavBar.css";

function NavBar() {
  const { user, setUser } = useContext(UserContext);

  const logOut = () => {
    setUser("");
    localStorage.removeItem("username");
  };

  return (
    <header className="header">
      <Link to="/">
        <img id="logo" src={Logo} alt="" />
      </Link>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="navbar">
        {user ? (
          <Link to="/myprofile" className="nav-item">
            Profile
          </Link>
        ) : null}
        <Link to="/contactus" className="nav-item">
          Contact Us
        </Link>
        {user ? (
          <Link to="/LogIn" className="nav-item" onClick={logOut}>
            Log Out
          </Link>
        ) : null}
        <Link to="/QAPage" className="nav-item">
          QA
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;