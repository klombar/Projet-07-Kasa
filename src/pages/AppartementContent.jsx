import Carrousel from "../components/Carrousel"; // import du composant carrousel
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import starFull from "../assets/Images/Stars/star-full.png";
import starVoid from "../assets/Images/Stars/star-void.png";
import Error404 from "./Error404";
import DropdownItem from "../components/DropdownItem";

export default function AppartementContent() {
  const { id } = useParams();
  const [appartement, setAppartement] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/logements.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(
          "Une erreur s'est produite lors de la récupération des données.",
          error
        );
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const clickedAppartement = data.find((app) => app.id === id);
      if (clickedAppartement) {
        setAppartement(clickedAppartement);
      } else {
        console.log("Appartement not found");
      }
    }
  }, [id, data]);

  if (!data) {
    return <div>Chargement des données...</div>;
  }

  if (!appartement) {
    return <Error404 />;
  }

  const ratingArray = Array.from({ length: 5 }, (_, index) =>
    index < appartement.rating ? starFull : starVoid
  );

  const { tags, equipments, pictures } = appartement;

  return (
    <div className="appartement">
      <Carrousel pictures={pictures} />
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
        </div>
        <div className="appartement-contents-helper">
          <div className="appartement-contents-helper-tags">
            {tags.map((tag) => (
              <div key={tag} className="appartement-contents-helper-tags-tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="rating-host-wrapper">
            <div className="appartement-contents-helper-rating">
              {ratingArray.map((star, index) => (
                <div key={index}>
                  <img src={star} alt="Etoile de notation" />
                </div>
              ))}
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
        </div>
        <div className="appartement-contents-dropdowns">
          <div className="appartement-contents-dropdowns-description">
            <DropdownItem
              classNameTitle={"dropdown-title"}
              classNameContent={"dropdown-content"}
              title={"Description"}
              content={appartement.description}
            />
          </div>
          <div className="appartement-contents-dropdowns-equipments">
            <DropdownItem
              classNameTitle={"dropdown-title"}
              classNameContent={"dropdown-content"}
              title={"Equipments"}
              content={equipments.map((equipment, index) => (
                <div key={index}>{equipment}</div>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
