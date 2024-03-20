import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Activities from "../components/Activities";
import ExtraInformation from "../components/ExtraInformation";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
import NavBar from "../components/NavBar";


const Home = () => {
  return (
    <Container maxWidth="2xl" disableGutters sx={{backgroundColor: "#fafafa"}}>
      <NavBar />
      <Header />
      <About />
      <ExtraInformation />
      <Activities />
      <Footer />
    </Container>
  );
};

export default Home;
