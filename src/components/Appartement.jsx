import { Link } from "react-router-dom";

export default function Appartement(props) {
  return (
    <Link
      to={`/AppartementContent/${props.id}`}
      className="gallery-appartement"
    >
      <img src={props.cover} alt={props.title} />
      <h3>{props.title}</h3>
    </Link>
  );
}
