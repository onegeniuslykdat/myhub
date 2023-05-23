import "bootstrap/dist/css/bootstrap.min.css";

import "./sidebar.css";

import { GetAllHeadings } from "../headings";

let headinglist = () => {
  return GetAllHeadings();
};

let Sidebar = function () {
  return (
    <div id="sidebar">
      <div>
        <ul className="headings">
          {headinglist().map((l) => (
            <li key={l.id}>
              <a href={"#" + l.name.replace("_", "")}>
                {l.name.replace("_", " ")}
              </a>{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
