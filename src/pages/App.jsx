import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './Navbar.jsx';
import Home from './1.home/Home.jsx';
import About from './2.about/About.jsx';
import Portfolio from './3.portfolio/Portfolio.jsx';
import DisplayDesign from './3.portfolio/DisplayDesign.jsx';
import Logo from './3.portfolio/Logo.jsx';
import Poster from './3.portfolio/Poster.jsx';
import Uiux from './3.portfolio/Uiux.jsx';
import MotionGraphic from './3.portfolio/MotionGraphic.jsx';
import WebDeveloper from './3.portfolio/WebDeveloper.jsx';
import Contact from './4.contact/Contact.jsx';
import Web1 from './3.portfolio/Web1.jsx';
import Web2 from './3.portfolio/Web2.jsx';
import Web3 from './3.portfolio/Web3.jsx';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function Layout({ extraComponent = null }) {
  return (
    <>
      
      <ScrollToSection />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="portfolio">
        <Portfolio />
        {extraComponent}
      </div>
      
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/displaydesign" element={<DisplayDesign />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/motiongraphic" element={<MotionGraphic />} />
        <Route path="/webdeveloper" element={<WebDeveloper />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/web1" element={<Web1 />} />
        <Route path="/web2" element={<Web2 />} />
        <Route path="/web3" element={<Web3 />} />
      </Routes>
    </Router>
  );
}

export default App;
