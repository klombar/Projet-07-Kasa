import React, { useEffect, useState } from "react";
import chevron from "../assets/Images/aboutListChevron.png";

export default function Dropdown() {
  const [data, setData] = useState([]);
  const [activeIndexes, setActiveIndexes] = useState([]);

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

  function handleItemClick(index) {
    setActiveIndexes((activeIndex) =>
      activeIndex.includes(index)
        ? activeIndex.filter((i) => i !== index)
        : [...activeIndex, index]
    );
  }

  return (
    <>
      <ul className="dropdown">
        {data.map((collapse, index) => (
          <React.Fragment key={index}>
            <li className="about-list">
              {collapse.aboutTitle}
              <span
                className={`about-list-chevron ${
                  activeIndexes.includes(index) ? "rotate" : "rotate-reverse"
                }`}
                onClick={() => handleItemClick(index)}
              >
                <img src={chevron} alt="chevron" />
              </span>
            </li>
            <div className="wrapper">
              <div
                className={`about-list-content ${
                  activeIndexes.includes(index) ? "expand" : "unexpand"
                }`}
              >
                {collapse.aboutText}
              </div>
            </div>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}
