import Logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./header.css";
import Nav from "./nav";

let Header = function () {
  return (
    <header className="">
      <div id="logodiv">
        <a href="#">
          <img src={Logo} className="" alt="logo" />
        </a>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
