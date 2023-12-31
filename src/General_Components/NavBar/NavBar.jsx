import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/bestone.png";
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
      <Link to={user ? "/userpage" : "/"}>
        <img id="logo" src={Logo} alt="" />
      </Link>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="nav">
        
        <div id="always-on">
          <Link to="/AboutUs" className="nav-item">
          About Us
        </Link>
        <Link to="/QAPage" className="nav-item">
          QA
        </Link>
        </div>
        <div id="after-login">
        {user && (
          <Link to="/myprofile" className="nav-item">
            Profile
          </Link>
        )}
        {user && (
          <Link to="/" className="nav-item" onClick={logOut}>
            Log Out
          </Link>
        )}
        
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
