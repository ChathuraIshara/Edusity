import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero />
      <div className="container">
        <Title subtitle='our program' title='What We Offer'></Title>
        <Programs></Programs>
      </div>
    </div>
  );
}

export default App;
