import React from "react";
import Preview from "../components/Header";
import MainPhoto from "../components/MainPhoto";
import About from "../components/About";
import DividerLine from "../components/Divider";
import Activities from "../components/Activities";
import Blog from "../components/Blog";
import News from "../components/News";


const Home = () => {
  return (
    <main className="bg-neutral-50">
      <Preview />
      <MainPhoto />
      <DividerLine label={"Nosotros"}/>
      <About />
      <DividerLine label={"Qué hacemos?"}/>
      <Activities />
      <DividerLine label={"Noticias"}/>
      <News />
      {/* <Blog /> */}
    </main>
  );
};

export default Home;
