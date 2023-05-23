import Logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./header.css";
import Nav from "./nav";
import Hamburger from "./hamburger";

let Header = function () {
  return (
    <header className="">
      <div id="logodiv">
        <a href="#">
          <img src={Logo} id="headerlogo" className="" alt="logo" />
        </a>
      </div>
      <Hamburger />
      <Nav />
    </header>
  );
};

export default Header;
