import PropTypes from "prop-types";
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

Appartement.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
