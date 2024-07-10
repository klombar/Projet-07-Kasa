import Header from "../component/Header";
import Banner from "../component/Banner";
import Gallery from "../component/Gallery";
import Footer from "../component/Footer";
import Main from "../component/Main";
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
