import logo from "../assets/Images/LOGO.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo de kasa" />
      </div>
      <ul className="header-nav">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={location.pathname === "/About" ? "active" : ""}>
          <Link to="/About">A Propos</Link>
        </li>
      </ul>
    </div>
  );
}
