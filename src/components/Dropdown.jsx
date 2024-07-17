import React, { useEffect, useState } from "react";
import chevron from "../assets/Images/aboutListChevron.png";

export default function Dropdown() {
  const [data, setData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  function toogleCollapse(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

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
            <li key={index} className="about-list">
              {collapse.aboutTitle}
              <span
                className={`about-list-chevron ${
                  openIndex === index ? "rotate" : "rotate-reverse"
                }`}
                onClick={() => toogleCollapse(index)}
              >
                <img src={chevron} alt="chevron" />
              </span>
            </li>
            <div className="wrapper">
              <div
                className={`about-list-content ${
                  openIndex === index ? "expand" : "unexpand"
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
