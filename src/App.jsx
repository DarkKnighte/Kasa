import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Lodging from "./pages/Lodging.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Header from "./components/Header.jsx";

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
        {/* Vous pouvez ajouter un Footer ici si nécessaire */}
      </div>
    </Router>
  );
};

export default App;
