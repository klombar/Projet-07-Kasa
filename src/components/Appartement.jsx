import { Link } from "react-router-dom";

export default function Appartement(appartement) {
  return (
    <Link to="/AppartementContent" className="gallery-appartement">
      <img src={appartement.cover} alt={appartement.title} />
      <h3>{appartement.title}</h3>
    </Link>
  );
}
