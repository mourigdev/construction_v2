import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Development from "./pages/Development";
import Properties from "./pages/Properties";
import Construction from "./pages/Construction";
import Cleaning from "./pages/Cleaning";
import Contact from "./pages/Contact";
import { PrologisProvider } from "./context/PrologisContext";
import Career from "./pages/Career";
import Investor from "./pages/Investor";
import Management from "./pages/Management";
import ScrollToTop from "./components/ScrollToTop";
import NavTop from "./components/NavTop";

function App() {
  return (
    <PrologisProvider>
      <Router>
        <ScrollToTop />
        <NavTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Development" element={<Development />}></Route>
          <Route path="/properties" element={<Properties />}></Route>
          <Route path="/Construction" element={<Construction />}></Route>
          <Route path="/InteriorDesign" element={<Cleaning />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Careers" element={<Career />}></Route>
          <Route path="/Investor" element={<Investor />}></Route>
          <Route path="/Management" element={<Management />}></Route>
        </Routes>
      </Router>
    </PrologisProvider>
  );
}

export default App;
