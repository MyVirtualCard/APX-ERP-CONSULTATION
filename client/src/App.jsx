import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <HeroSection />
    </>
  );
}

export default App;
