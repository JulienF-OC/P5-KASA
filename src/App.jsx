import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar";
import Banner from "./Components/Common/Banner";
import Content from "./Components/Features/Logements/Content";
import Footer from "./Components/Layout/Footer";
import Apropos from "./Pages/Apropos";
import Logement from "./Components/Features/Logements/Logement";
import Error404 from "./Pages/Error404";

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
