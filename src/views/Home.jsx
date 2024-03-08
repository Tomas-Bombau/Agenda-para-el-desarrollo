import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Activities from "../components/Activities";
import ExtraInformation from "../components/ExtraInformation";


const Home = () => {
  return (
    <main className="bg-neutral-50">
      <Header />
      <About />
      <Activities />
      <ExtraInformation />
      {/* <Principles />
      <News /> */}
    </main>
  );
};

export default Home;
