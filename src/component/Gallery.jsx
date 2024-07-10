import { useEffect, useState } from "react";
import Appartement from "./Appartement";

export default function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("logements.json");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log(
        "Une erreur s'est produite lors de la récupération des données.",
        error
      );
    }
  };

  return (
    <div className="gallery">
      {data.map((appartement) => (
        <Appartement
          key={appartement.id}
          cover={appartement.cover}
          title={appartement.title}
        />
      ))}
    </div>
  );
}
