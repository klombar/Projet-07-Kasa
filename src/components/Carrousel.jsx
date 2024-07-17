import leftArrow from "../assets/Images/left-arrow.png";
import rightArrow from "../assets/Images/right-arrow.png";

export default function carrousel() {
  return (
    <>
      <div className="carrousel">
        <img src="" alt="" />
        <img
          className="carrousel-left-arrow"
          src={leftArrow}
          alt="chevron gauche du carrousel"
        />
        <img
          className="carrousel-right-arrow"
          src={rightArrow}
          alt="chevron droit du carrousel"
        />
      </div>
    </>
  );
}
