import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import "./styles/App.scss";
=======
import "./App.scss";
>>>>>>> 504a0babafd1665b6116871da3ba89b01006f09a
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Lodging from "./pages/Lodging.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Header from "./components/Header.jsx";
<<<<<<< HEAD
=======

{ /* @TODO: TRAVAILLER LE STYLE SUR TOUT. */ }
>>>>>>> 504a0babafd1665b6116871da3ba89b01006f09a

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
<<<<<<< HEAD
        {/* Vous pouvez ajouter un Footer ici si nécessaire */}
=======
>>>>>>> 504a0babafd1665b6116871da3ba89b01006f09a
      </div>
    </Router>
  );
};

export default App;
