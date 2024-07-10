import Header from "../component/Header";
import Banner from "../component/Banner";
import Gallery from "../component/Gallery";
import Footer from "../component/Footer";
import Main from "../component/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner />
        <Gallery />
      </Main>
      <Footer />
    </>
  );
}
