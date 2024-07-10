import logo from "../assets/Images/LOGO.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo de kasa" />
      </div>
      <ul className="header-nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/About">A Propos</Link>
        </li>
      </ul>
    </div>
  );
}
