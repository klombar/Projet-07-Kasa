import { useState } from "react";
import chevron from "../assets/Images/aboutListChevron.png";
/* eslint-disable react/prop-types */

function DropdownItem({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const toggleCollapse = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <li className="about-list" onClick={toggleCollapse}>
        {title}
        <span
          className={`about-list-chevron ${
            isActive ? "rotate" : "rotate-reverse"
          }`}
        >
          <img src={chevron} alt="chevron" />
        </span>
      </li>
      <div className={`about-list-content ${isActive ? "expand" : "unexpand"}`}>
        {content}
      </div>
    </>
  );
}

export default DropdownItem;