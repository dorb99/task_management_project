import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FB from "../img/FB.png";
import TW from "../img/TW.png";
import Ins from "../img/Ins.png";
import GH from "../img/GH.png";
function Footer() {
  return (
    <div className="footer">
      <footer className="site-footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Mangy.com <i>TASK MANAGER</i> is an initiative of ours to help
                you organize your day. Mangy focuses on providing the most
                efficient way in the market to organize your tasks by giving you a total freedom of
                choice in our website. We will help you build up your task lists
                and help you get started quickly,and efficiently.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="footer-container">
          <div className="row">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by{" "}
              <Link to="/contactus">Ori&Dor</Link>.
            </p>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" target="_blank" href="#">
                  <img className="fa" src={FB} alt="" />
                  </a>
                </li>
                <li>
                  <a className="twitter" target="_blank" href="#">
                    <img className="fa" src={TW} alt="" />
                  </a>
                </li>
                <li>
                  <a className="instagram" target="_blank" href="#">
                    <img className="fa" src={Ins} alt="" />
                  </a>
                </li>
                <li>
                  <a className="github" target="_blank" href="#">
                    <img className="fa" src={GH} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;