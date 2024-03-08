import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Activities from "../components/Activities";
import News from "../components/News";
import Principles from "../components/Principles";


const Home = () => {
  return (
    <main className="bg-neutral-50">
      <Header />
      <About />
      <Activities />
      {/* <Principles />
      <News /> */}
    </main>
  );
};

export default Home;
