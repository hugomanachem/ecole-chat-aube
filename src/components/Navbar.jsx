import navbar_logo from "../assets/navbar_logo.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`${props.bg_color}-bg-color navbar`}>
      <div className="navbar-content">
        <img src={navbar_logo}></img>
        <div className="navbar-links">
          <Link to={"/"}>Accueil</Link>
          <Link to={"/don"}>Faire un don</Link>
          <a>Devenir volontaire</a>
          <a>Nos chats</a>
          <a>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
