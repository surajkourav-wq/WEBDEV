import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import About from "../src/pages/About";
import Products from "../src/pages/Product";
import ContactUs from "../src/pages/ContactUs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;