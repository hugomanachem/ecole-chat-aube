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
          <Link to={"/volontaire"}>Devenir volontaire</Link>
          <Link to={"/chats"}>Nos chats</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
