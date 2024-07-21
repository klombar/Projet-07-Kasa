import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Main from "../components/Main";
import bannerHomeImage from "../assets/Images/Banner/bannerHomeImage.png";

export default function Home() {
  return (
    <>
      <Main>
        <Banner image={bannerHomeImage} />
        <Gallery />
      </Main>
    </>
  );
}
