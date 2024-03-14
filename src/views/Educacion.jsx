import { Container } from "@mui/material";
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Banners from "../components/Banners";
import Tabs from "../components/Education/EducationTabs";
import Footer from "../components/Footer";

const Educacion = () => {
  let image =
    "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let title = "Educacion"
    let cite = "« El niño no es un vaso que hay que llenar, sino una antorcha que hay que encender » "
    let subCite = "Como en el arte, la educación abraza la creatividad y la individualidad dentro de la infinita diversidad de expresiones. Creemos una práctica educativa más sensible, creativa y porqué no, divertida."


  const education = [
    {
      label: "Plan de alfabetización",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTbmYVq55dloL47VQOD_yuIgiK44qwesrdVgKbGvbSr4piCRUH6GNK-FqOKr2dczK1qg&usqp=CAU",
      title: "+70",
      description: "Niños y niñas alcanzados por una educación lúdica, divertida y respetuosa."
    },
    {
      label: "Aventura Digital",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNhRczMCjsQNMM6KVcSo2vHOosokMDPtFpw&usqp=CAU",
      title: "+10",
      description: "Niños y niñas alcanzados por nuestra aventura digital. Bip Bip 🤖💻"
    },
  ];

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      maxWidth="2xl"
      disableGutters
      sx={{ backgroundColor: "#fafafa" }}
    >
      <NavBar />
      <Banners image={image} />
      <Tabs subject={education} title={title} cite={cite} subCite={subCite} />
      <Footer />
    </Container>
  );
};

export default Educacion;
