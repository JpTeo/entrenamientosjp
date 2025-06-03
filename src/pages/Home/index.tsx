import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Clientes from "../../components/clientes";
import NuestroEquipo from "../../components/nuestroEquipo";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="chica.png"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="cohete.png"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="logostafftic.png"
        id="product"
      />
      <div 
        style={{
          textAlign: "center",
        }}
      >
        <h6>Nuestros clientes</h6>
        <br></br>
        <img src="../../img/svg/clientes.png" alt="Descripción" width="800" height="auto" />
        </div>
        <br></br>
        <br></br>
          <div 
        style={{
          textAlign: "center",
        }}
      >
        <h6>Nuestros equipo</h6>
        <br></br>
        <img src="../../img/svg/equipo.png" alt="Descripción" width="800" height="auto" />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
   
    </Container>
  );
};

export default Home;
