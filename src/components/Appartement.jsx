import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

export default function Appartement({ cover, title, id }) {
  return (
    <Link to={`/AppartementContent/${id}`} className="gallery-appartement">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}
