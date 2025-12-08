import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Apropos from "./Components/Apropos";
import Logement from "./Components/Logement";
import Error404 from "./Components/Error404";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* PAGE D’ACCUEIL */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Content />
            </>
          }
        />

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
