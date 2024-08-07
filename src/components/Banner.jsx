/* eslint-disable react/prop-types */

export default function Banner(props) {
  return (
    <div className="banner">
      <img
        src={props.image}
        alt="image de la banniere de la page d'accueil representant la mer qui s'abat sur les rochers"
      />
      <div className="banner-background"></div>
      <p className="banner-title">{props.title}</p>
    </div>
  );
}
