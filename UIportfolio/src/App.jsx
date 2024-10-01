import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
