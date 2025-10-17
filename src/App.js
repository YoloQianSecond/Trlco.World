import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import EcoSystem from './pages/EcoSystem';
import Faq from './pages/Faq';
import Home from './pages/Home';
import HowToBuy from './pages/HowToBuy';
import Invest from './pages/Invest';
import Live from './pages/Live';
import Media from './pages/Media';
import MediaDetails from './pages/MediaDetails';
import Partners from './pages/Partners';
import RoadMap from './pages/Roadmap';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/ecosystem" element={<EcoSystem />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/live" element={<Live />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media-details/:id" element={<MediaDetails />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;