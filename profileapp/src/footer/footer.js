import "bootstrap/dist/css/bootstrap.min.css";

import "./footer.css";

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

let Footer = function () {
  return (
    <footer id="footer" className="container-fluid">
      <div className="">Tree</div>
    </footer>
  );
};

export default Footer;
