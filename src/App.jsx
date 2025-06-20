import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Lodging from "./pages/Lodging.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Carousel from "./components/Carousel.jsx";

import trucs from "../data.json";

{ /* @TODO: TRAVAILLER LE STYLE SUR TOUT. */ }

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/lodging/:id" element={<Lodging />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;