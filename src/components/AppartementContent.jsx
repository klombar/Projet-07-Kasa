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

  if (!appartement) {
    return <div>Loading...</div>;
  }

  const tags = appartement.tags;

  return (
    <div className="appartement">
      <div className="appartement-carrousel">
        <Carrousel />
      </div>
      <div className="appartement-contents">
        <div className="appartement-contents-header">
          <div className="appartement-contents-header-titles">
            <h1 className="appartement-contents-header-titles-title">
              {appartement.title}
            </h1>
            <h5 className="appartement-contents-header-titles-subtitle">
              {appartement.location}
            </h5>
          </div>
          <div className="appartement-contents-header-host">
            <div className="appartement-contents-header-host-name">
              {appartement.host.name}
            </div>
            <div className="appartement-contents-header-host-image">
              <img src={appartement.host.picture} alt="photo de l'hôte" />
            </div>
          </div>
        </div>
        <div className="appartement-contents-helper">
          <div className="appartement-contents-helper-tags">
            {tags.map((tag) => (
              <div key={tag} className="appartement-contents-helper-tags-tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="appartement-helper-rate"></div>
        </div>
      </div>
    </div>
  );
}
