import { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";

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
      console.log("Erreur lors de la récupération des données.", error);
    }
  }

  return (
    <>
      <ul className="dropdown">
        {data.map((collapse, index) => (
          <DropdownItem
            key={index}
            title={collapse.aboutTitle}
            content={collapse.aboutText}
          />
        ))}
      </ul>
    </>
  );
}
