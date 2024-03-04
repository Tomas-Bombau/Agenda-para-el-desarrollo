import React from "react";
import Preview from "../components/Header";
import MainPhoto from "../components/MainPhoto";
import About from "../components/About";
import DividerLine from "../components/Divider";

const Home = () => {
  return (
    <main className="bg-neutral-50">
      <Preview />
      <MainPhoto />
      <DividerLine />
      <About />
    </main>
  );
};

export default Home;
