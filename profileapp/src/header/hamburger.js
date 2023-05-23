import "bootstrap/dist/css/bootstrap.min.css";

let ToggleMobileMenu = () => {
  let menu = document.getElementById("navmenu");
  let logo = document.getElementById("headerlogo");

  if (menu.style.display !== "block") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  if (menu.style.display !== "none") {
    //logo.style.display = "none";
    logo.className = "left-thumbnail";
  } else {
    logo.style.display = "block";
    logo.className = "";
  }
};

let Hamburger = function () {
  return (
    <button className="menu-icon" id="hamburger" onClick={ToggleMobileMenu}>
      <span>&#9776;</span>
    </button>
  );
};

export default Hamburger;

// header height is 38px, nav display is none
