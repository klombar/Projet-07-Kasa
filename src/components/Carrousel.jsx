import { useState } from "react";
import PropTypes from "prop-types";
import leftArrow from "../assets/Images/left-arrow.png";
import rightArrow from "../assets/Images/right-arrow.png";

export default function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((oldIndex) => {
      if (oldIndex + 1 < pictures.length) {
        return oldIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const previousImage = () => {
    setCurrentIndex((oldIndex) => {
      if (oldIndex !== 0) {
        return oldIndex - 1;
      } else {
        return pictures.length - 1;
      }
    });
  };

  return (
    <>
      <div className="carrousel">
        <img
          className="carrousel-current-image"
          src={pictures[currentIndex]}
          alt=""
        />
        <img
          className={`carrousel-left-arrow ${
            pictures.length == 1 ? "disappear" : ""
          }`}
          src={leftArrow}
          alt="chevron gauche du carrousel"
          onClick={previousImage}
        />
        <img
          className={`carrousel-right-arrow ${
            pictures.length == 1 ? "disappear" : ""
          }`}
          src={rightArrow}
          alt="chevron droit du carrousel"
          onClick={nextImage}
        />
        <div
          className={`carrousel-indicator ${
            pictures.length == 1 ? "disappear" : ""
          }`}
        >
          {currentIndex + 1} / {pictures.length}
        </div>
      </div>
    </>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
