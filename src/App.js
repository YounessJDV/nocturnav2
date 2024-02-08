import React from 'react';
import { useEffect } from 'react';

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
    <div className="App">
                <Navbar />
                <Contact />
                <CtaContact />
                <Footer />
      </div>
  );
}

export default App;
