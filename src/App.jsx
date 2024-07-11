import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero />
      <div className="container">
        <Title subtitle='our program' title='What We Offer'></Title>
        <Programs></Programs>
        <About></About>
        <Title subtitle="Gallery" title="Campus Photos"></Title>
        <Campus></Campus>
        <Title subtitle="TESTIMONIALS" title="What Student Says"></Title>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}

export default App;
