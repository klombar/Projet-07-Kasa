import { useEffect, useState } from "react";
import chevron from "../assets/Images/aboutListChevron.png";

export default function Dropdown() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("collapse.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(
        "Une erreur s'est produite lors de la récupération des données.",
        error
      );
    }
  }

  return (
    <>
      <ul className="dropdown">
        {data.map((collapse) => {
          return (
            <li
              className="aboutList"
              key={(collapse.index, collapse.aboutTitle)}
            >
              {collapse.aboutTitle}{" "}
              <span className="aboutListChevron">
                <img src={chevron} alt="chevron qui deroule le menu au click" />
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
