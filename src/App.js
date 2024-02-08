import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from "react-router-dom";

import './App.css';

// AOS ANIMATIONS //
import AOS from "aos";
import "aos/dist/aos.css";

// SCROLL TO TOP when NAVIGATION //
import ScrollToTop from './components/scrolltotop';

// Components IMPORT //
import Navbar from './components/Navbar'
import Header from './components/header'
import Features from './components/features'
import SectionOne from './components/sectionOne'
import Offres from './components/offres'
import Faq from './components/faq'
import Cta from './components/cta'
import CtaContact from './components/cta_contact'
import Footer from './components/footer'
import Realisations from "./components/realisations"
import Contact from './components/contact';

function App() {
  
  useEffect(() => {
    AOS.init(); 
   }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar /> 
                <Header className="z-10" />
                <Features className="z-0"  />
                <SectionOne/>
                <Offres/>
                <Faq/>
                <Cta/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <CtaContact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
