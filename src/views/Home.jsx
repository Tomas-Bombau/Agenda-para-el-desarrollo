import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Activities from "../components/Activities";
import ExtraInformation from "../components/ExtraInformation";
import Steppers from "../components/Steppers";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <main className="bg-neutral-50">
      <Header />
      <About />
      <ExtraInformation />
      <Activities />
      <Footer />
    </main>
  );
};

export default Home;
