import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Goals from "./components/Goals";
import About from "./components/About";
import Lore from "./components/Lore";
import Banner from "./components/Banner";
import styled from "styled-components";
import AdminTeam from "./components/AdminTeam";
import Investors from "./components/Investors";
import FooterBtn from "./components/FooterBtn";
import ReceiveUpdates from "./components/ReceiveUpdates";
import Footer from "./components/Footer";

const StyledContinerDiv = styled.div`
  /* background: linear-gradient(200deg, 
  rgb(148, 25, 28) 0%, 
  rgb(124 53 53) 50%,
  rgb(243, 167, 167) 100%);
} */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <StyledContinerDiv className="bg-slate-100 h-full w-screen pt-10">
        <Intro />
        <About />
        <Goals />
        <Lore />
        <AdminTeam />
        <Investors />
        <ReceiveUpdates />
        <Footer />
      </StyledContinerDiv>
      <FooterBtn />
    </>
  );
}

export default App;
