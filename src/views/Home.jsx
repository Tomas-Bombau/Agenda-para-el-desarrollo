import React from "react";
import Preview from "../components/Header";
import MainPhoto from "../components/MainPhoto";
import About from "../components/About";
import DividerLine from "../components/Divider";
import Activities from "../components/Activities";
import News from "../components/News";
import Principles from "../components/Principles";


const Home = () => {
  return (
    <main className="bg-neutral-50">
      <Preview />
      {/* <DividerLine label={"Nosotros"}/> */}
      <About />
      {/* <DividerLine label={"Qué hacemos?"}/> */}
      <Activities />
      {/* <DividerLine label={"Noticias"}/> */}
      {/* <Principles />
      <News /> */}
    </main>
  );
};

export default Home;
