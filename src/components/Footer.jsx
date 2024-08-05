import logo from "../assets/Images/Logo/LOGO-white.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo de kasa" />
      </div>
      <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
