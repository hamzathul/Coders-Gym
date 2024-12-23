import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const bgStyle = {
  backgroundImage: `url(
    "https://coders-gym-hero-tcj.netlify.app/assets/bg-BiCRh3MN.png"
  )`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

function App() {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
