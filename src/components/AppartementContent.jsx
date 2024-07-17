import Carrousel from "./Carrousel"; // import du composant carrousel
/* Import de fonctionnalitées  */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
/* Import des etoiles en .PNG  */
import starFull from "../assets/Images/star-full.png";
import starVoid from "../assets/Images/star-void.png";
import Error404 from "../pages/Error404";

// Composant  qui s'affiche quand on clique sur l'image d'un appartement dans la page HOME avec les data du fichier logement.json en paramètres;
export default function AppartementContent({ data }) {
  const { id } = useParams(); //Récupération de l'ID via la déstructuration de la pair clef/valeur retourné par useParams();
  const [appartement, setAppartement] = useState(null);

  /* utilisation de useEffect pour relancer l'effet si il y a une modification de id ou data */
  useEffect(() => {
    //logique encapsulée dans fonction pour meilleur réutilisabilité;
    const getAppartementData = () => {
      //Utilisation de la methode find() pour trouver dans les data l'ID des données qui correspond a l'ID de l'URL
      const clickedAppartement = data.find((app) => app.id === id);

      //Condition qui met a jour la variable appartement, si clickedAppartement == true (si un id correspondant a l'ID de la page a été trouvé dans data);
      if (clickedAppartement) {
        setAppartement(clickedAppartement);
      } else {
        console.log("Appartement not found");
      }
    };

    getAppartementData();
  }, [id, data]); //L'effet est déclenché chaque fois que "id" ou "data" change;

  /* Si appartement = falsy, alors on affiche la page error404 via son composant */
  if (!appartement) {
    return <Error404 />;
  }

  const rating = parseInt(appartement.rating);
  const ratingArray = Array.from({ length: 5 }, (_, index) =>
    index < rating ? starFull : starVoid
  );

  const { tags } = appartement;

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
          <div className="appartement-contents-helper-rating">
            {ratingArray.map((star, index) => (
              <div key={star}>
                <img key={index} src={star} alt="star" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
