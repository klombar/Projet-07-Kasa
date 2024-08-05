import Carrousel from "./Carrousel"; // import du composant carrousel
/* Import de fonctionnalitées  */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
/* Import des etoiles en .PNG  */
import starFull from "../assets/Images/Stars/star-full.png";
import starVoid from "../assets/Images/Stars/star-void.png";
import Error404 from "../pages/Error404";
import data from "../data/logements.json";
import chevron from "../assets/Images/aboutListChevron.png";

export default function AppartementContent() {
  const { id } = useParams();
  const [appartement, setAppartement] = useState(null);
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenEquipments, setIsOpenEquipments] = useState(false);

  useEffect(() => {
    async function getAppartementData() {
      const clickedAppartement = data.find((app) => app.id === id);
      if (clickedAppartement) {
        setAppartement(clickedAppartement);
      } else {
        console.log("Appartement not found");
      }
    }
    getAppartementData();
  }, [id]);

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
            <div
              className={`appartement-contents-dropdowns-description-content ${
                isOpenDescription ? "expand" : "unexpand"
              }`}
            >
              {appartement.description}
              <div className="appartement-contents-dropdowns-description-title">
                Description
                <div
                  className={`appartement-contents-dropdowns-description-title-chevron ${
                    isOpenDescription ? "rotate" : "rotate-reverse"
                  }`}
                  onClick={() => setIsOpenDescription(!isOpenDescription)}
                >
                  <img
                    src={chevron}
                    alt="Chevron qui permettra l'ouverture et la fermeture du collapse"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="appartement-contents-dropdowns-equipments">
            <div
              className={`appartement-contents-dropdowns-equipments-content ${
                isOpenEquipments ? "expand" : "unexpand"
              }`}
            >
              {equipments.map((equipment, index) => (
                <div key={index}>{equipment}</div>
              ))}
              <div className="appartement-contents-dropdowns-equipments-title">
                Equipements
                <div
                  className={`appartement-contents-dropdowns-equipments-title-chevron ${
                    isOpenEquipments ? "rotate" : "rotate-reverse"
                  }`}
                  onClick={() => setIsOpenEquipments(!isOpenEquipments)}
                >
                  <img
                    src={chevron}
                    alt="Chevron qui permettra l'ouverture et la fermeture du collapse"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
