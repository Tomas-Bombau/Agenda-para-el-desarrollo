import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Activities from "../components/Activities";
import ExtraInformation from "../components/ExtraInformation";
import Steppers from "../components/Steppers";
import Footer from "../components/Footer";
import { Container } from "@mui/material";


const Home = () => {
  return (
    <Container maxWidth="2xl" disableGutters sx={{backgroundColor: "#fafafa"}}>
      <Header />
      <About />
      <ExtraInformation />
      <Activities />
      <Footer />
    </Container>
  );
};

export default Home;
