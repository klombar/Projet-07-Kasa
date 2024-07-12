import React from "React";
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

  /* Déclaration de variable d'état pour les menus déroulants de la page About qui permettra d'ajouter ou supprimer un element d'un tableau (vide par defaut) */
  const [openedItems, setOpenedItems] = useState([]);

  /* Fonction qui permet  de supprimer l'index d'un élément sur lequel on a déjà cliqué du tableau OpenedItem avec la methode filter() 
ou d'en ajouter un nouveau si il n'est pas déjà dans le tableau */
  function handleItemClick(itemIndex) {
    if (openedItems.includes(itemIndex)) {
      setOpenedItems(openedItems.filter((index) => index !== itemIndex));
    } else {
      setOpenedItems([...openedItems, itemIndex]);
    }
  }

  return (
    <>
      <ul className="dropdown">
        {data.map((collapse, index) => {
          return (
            <React.Fragment key={index}>
              <li className="about-list" key={index}>
                {collapse.aboutTitle}
                <span
                  className="about-list-chevron"
                  onClick={() => handleItemClick(index)}
                >
                  <img
                    src={chevron}
                    alt="chevron qui deroule le menu au click"
                  />
                </span>
              </li>
              {openedItems.includes(index) && (
                <div className="about-list-content">{collapse.aboutText}</div>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}
