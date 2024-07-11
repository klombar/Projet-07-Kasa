import error from "../assets/Images/404.png";

export default function Error404() {
  return (
    <>
      <div>
        <img className="error" src={error} alt="logo 404 error" />
      </div>
      <p className="error-text">
        Oups! La page que vous demandez n`existe pas.
      </p>
      <p className="error-return-home">Retourner &agrave; la page d`accueil</p>
    </>
  );
}
