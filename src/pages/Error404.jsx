import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Error404() {
  return (
    <>
      <Header />
      <>
        <h1 className="error">404</h1>
        <p className="error-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="error-return-home">Retourner a la page d'accueil</p>
      </>
      <Footer />
    </>
  );
}
