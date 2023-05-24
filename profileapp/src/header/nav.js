import "bootstrap/dist/css/bootstrap.min.css";

import { GetAllSections } from "../sections";

let menulist = () => {
  return GetAllSections();
};

let Nav = function () {
  return (
    <nav id="navmenu">
      <ul>
        {menulist().map((l) => (
          <li key={l.id}>
            <a href={"#" + l.name.toLowerCase()}>{l.name}</a> &nbsp; &nbsp;
            &nbsp; &nbsp;
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
