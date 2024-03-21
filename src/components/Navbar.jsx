import navbar_logo from "../assets/navbar_logo.png";
import { Link } from "react-router-dom";
import hamburger_menu_img from "../assets/hamburger-menu.png";

function Navbar(props) {
  function ToggleResponsiveNavbar() {
    let navbarElm = document.getElementById("navbar");
    if (navbarElm.className === "navbar") {
      navbarElm.classList.toggle("responsive");
    } else {
      navbarElm.classList.toggle("responsive");
    }
  }

  return (
    <nav id="navbar" className={`${props.bg_color}-bg-color navbar`}>
      <div className="navbar-content">
        <img src={navbar_logo}></img>
        <div className="navbar-links">
          <Link to={"/"}>Accueil</Link>
          <Link to={"/don"}>Faire un don</Link>
          <Link to={"/volontaire"}>Devenir volontaire</Link>
          <Link to={"/chats"}>Nos chats</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <Link onClick={ToggleResponsiveNavbar}>
          <img
            className="hamburger-icon"
            src={hamburger_menu_img}
            alt="hamburger-menu"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
