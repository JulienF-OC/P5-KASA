import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home"; // ← AJOUTE Home
import Apropos from "./Pages/Apropos";
import Logement from "./Pages/Logement";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* PAGE D'ACCUEIL */}
        <Route path="/" element={<Home />} /> {/* ← Utilise Home ! */}
        {/* PAGE À PROPOS */}
        <Route path="/apropos" element={<Apropos />} />
        {/* PAGE LOGEMENT */}
        <Route path="/logement/:id" element={<Logement />} />
        {/* PAGE 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
