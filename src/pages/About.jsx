import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Main from "../components/Main";
import bannerAboutImage from "../assets/Images/bannerAboutImage.png";
import Dropdown from "../components/Dropdown";

export default function About() {
  return (
    <>
      <Header />
      <Main>
        <Banner image={bannerAboutImage} />
        <Dropdown />
      </Main>
      <Footer />
    </>
  );
}
