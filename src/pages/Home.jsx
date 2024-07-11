import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Main from "../components/Main";
import bannerHomeImage from "../assets/Images/bannerHomeImage.png";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner image={bannerHomeImage} />
        <Gallery />
      </Main>
      <Footer />
    </>
  );
}
