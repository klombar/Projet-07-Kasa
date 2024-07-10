import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import bannerAboutImage from "../assets/Images/bannerAboutImage.png";

export default function About() {
  return (
    <>
      <Header />
      <Banner image={bannerAboutImage} />
      <Footer />
    </>
  );
}
