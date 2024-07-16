import Carrousel from "./Carrousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AppartementContent({ data }) {
  const { id } = useParams();
  console.log(id);
  console.log(data);
  const [appartement, setAppartement] = useState(null);

  useEffect(() => {
    const getAppartementData = () => {
      const clickedAppartement = data.find((app) => app.id === id);
      if (clickedAppartement) {
        setAppartement(clickedAppartement);
      } else {
        console.log("Appartement not found");
      }
    };

    getAppartementData();
  }, [id, data]);

  return (
    <div className="appartement">
      <div className="appartement-carrousel">
        <Carrousel />
      </div>
      <div>
        <div className="appartement-titles">
          <h1 className="appartement-title">{appartement.title}</h1>
          <h5 className="appartement-subtitle">{appartement.location}</h5>
        </div>
        <div className="appartement-host">
          <div className="appartement-host-name">{appartement.host.name}</div>
          <div className="appartement-host-image"></div>
        </div>
      </div>
    </div>
  );
}
