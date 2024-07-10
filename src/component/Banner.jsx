import bannerHomeImage from "../assets/Images/bannerHomeImage.png";

export default function Banner() {
  return (
    <div className="banner">
      <img
        src={bannerHomeImage}
        alt="image de la banniere de la page d'accueil representant la mer qui s'abat sur les rochers"
      />
      <div className="banner-background">
        <p className="banner-background-title">
          Chez vous, partout et ailleurs
        </p>
      </div>
    </div>
  );
}
