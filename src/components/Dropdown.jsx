import React, { useEffect, useState } from "react";
import chevron from "../assets/Images/aboutListChevron.png";

export default function Dropdown() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("collapse.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Erreur lors de la récupération des données.", error);
    }
  }

  return (
    <>
      <ul className="dropdown">
        {data.map((collapse, index) => (
          <React.Fragment key={index}>
            <li className="about-list" onClick={() => toggleCollapse(index)}>
              {collapse.aboutTitle}
              <span
                className={`about-list-chevron ${
                  activeIndex === index ? "rotate" : "rotate-reverse"
                }`}
              >
                <img src={chevron} alt="chevron" />
              </span>
            </li>
            <div
              className={`about-list-content ${
                activeIndex === index ? "expand" : "unexpand"
              }`}
            >
              {collapse.aboutText}
            </div>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}
