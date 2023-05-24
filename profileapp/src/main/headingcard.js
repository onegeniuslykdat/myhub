import "bootstrap/dist/css/bootstrap.min.css";

import "./main.css";
import { GetAllHeadingsBySectionId } from "../headings";

let headingsList = (Id) => {
  return GetAllHeadingsBySectionId(Id);
};

let HeadingCard = function (props) {
  return headingsList(props.id).map((h) =>
    h.lead !== "Email" ? (
      <div
        key={h.id}
        id={h.name.toLowerCase().replace("_", "")}
        className="jumbotron-fluid"
      >
        <h6 className="text-center ">{h.lead}</h6>
        <p className="text-center">{h.desc}</p>
        <div
          className={`text-center ${
            h.projects.length === 0 ? "noProjects" : "hasProject"
          }`}
        >
          <p className="text-center projectTitle">Projects</p>
          <ul className="projectsList">
            {h.projects.map((p) => (
              <li className="projectsListItem">{p}</li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div
        key={h.id}
        id={h.name.toLowerCase().replace("_", "")}
        className="jumbotron-fluid"
      >
        <h6 className="text-center ">{h.lead}</h6>
        <p className="text-center">
          <a href={"mailto:" + h.desc}>{h.desc}</a>
        </p>
      </div>
    )
  );
};

export default HeadingCard;
