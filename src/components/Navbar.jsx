import navbar_logo from "../assets/navbar_logo.png";
import "../navbar.css";

function Navbar() {
  return (
    <nav className="primary-bg-color navbar">
      <div className="navbar-content">
        <img src={navbar_logo}></img>
        <div className="navbar-links">
          <a className="tertiary-color">Accueil</a>
          <a className="tertiary-color">Faire un don</a>
          <a className="tertiary-color">Devenir volontaire</a>
          <a className="tertiary-color">Nos chats</a>
          <a className="tertiary-color">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
