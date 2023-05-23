import "bootstrap/dist/css/bootstrap.min.css";

let menulist = [
  { id: 1, name: "About" },
  { id: 2, name: "Education" },
  { id: 3, name: "Experience" },
  // { id: 4, name: "Contact" },
];

let Nav = function () {
  return (
    <nav id="navmenu">
      <ul>
        {menulist.map((l) => (
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
// add key or id to li or a inside li
