import Banner from "../components/Banner";
import Main from "../components/Main";
import bannerAboutImage from "../assets/Images/Banner/bannerAboutImage.png";
import Dropdown from "../components/Dropdown";

export default function About() {
  return (
    <>
      <Main>
        <Banner image={bannerAboutImage} />
        <Dropdown />
      </Main>
    </>
  );
}
