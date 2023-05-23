import "bootstrap/dist/css/bootstrap.min.css";

import "./main.css";

let headinglist = [
  { id: 1, name: "About" },
  { id: 2, name: "Education" },
  { id: 3, name: "Experience" },
  { id: 4, name: "Contact" },
  { id: 5, name: "About" },
  { id: 6, name: "Education" },
  { id: 7, name: "Experience" },
  { id: 8, name: "Contact" },
  { id: 9, name: "About" },
  { id: 10, name: "Education" },
  { id: 11, name: "Experience" },
  { id: 12, name: "Contact" },
];

let Main = function () {
  return (
    <main id="main" className="container-fluid">
      <div className="col-12">Tree</div>
    </main>
  );
};

export default Main;
