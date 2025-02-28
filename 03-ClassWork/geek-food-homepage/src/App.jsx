import Navbar from "./componets/Navbar/Navbar";
import Hero from "./componets/Hero/Hero";
import Main from "./componets/Main/Main";
import Cards from "./componets/Cards/Cards";
import Footer from "./componets/Footer/Footer";
import Quotes from "./componets/Quotespage/Quotes";
import Restaurants from "./componets/Restaurants/Restaurant";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Add your routes here

// Add your components here


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Main />
              <Cards />
              <Footer />
              
            </>
          }
        />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/foods" element={<div>Foods Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/get-started" element={<div>Get Started Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
