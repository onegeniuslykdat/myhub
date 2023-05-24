import "bootstrap/dist/css/bootstrap.min.css";

import "./main.css";
import { GetAllSections } from "../sections";
import HeadingCard from "./headingcard";

let sectionsList = () => {
  return GetAllSections();
};

let SectionCard = function () {
  return (
    <div id="" className="">
      {sectionsList().map((s) => (
        <div
          key={s.id}
          id={s.name.toLowerCase().replace("_", "")}
          className="jumbotron-fluid"
        >
          <h4 className="text-center display-6">{s.title}</h4>
          <HeadingCard id={s.id} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SectionCard;
