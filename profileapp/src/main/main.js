import "bootstrap/dist/css/bootstrap.min.css";

import "./main.css";
import SectionCard from "./sectioncard";

let Main = function (props) {
  return (
    <main id="main" className="container-fluid">
      <SectionCard />
    </main>
  );
};

export default Main;
