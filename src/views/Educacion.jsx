import {  Container } from "@mui/material";
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Banners from "../components/Banners";
import Tabs from "../components/EducationTabs";
import Footer from "../components/Footer";

const Educacion = () => {
  let image = "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const education = ["Educación Analógica", "Educación Digital"];


  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="2xl" disableGutters>
      <NavBar />
      <Banners image={image} />
      <Tabs subject={education} />
      <Footer />
    </Container>
  );
};

export default Educacion;
