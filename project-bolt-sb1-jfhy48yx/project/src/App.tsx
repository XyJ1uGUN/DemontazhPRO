import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ApartmentDemolition from './pages/services/ApartmentDemolition';
import HouseDemolition from './pages/services/HouseDemolition';
import WallDemolition from './pages/services/WallDemolition';
import PlumbingDemolition from './pages/services/PlumbingDemolition';
import WasteRemoval from './pages/services/WasteRemoval';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FloatingButtons from './components/FloatingButtons';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar onContactClick={() => setIsModalOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/apartment-demolition" element={<ApartmentDemolition />} />
            <Route path="/services/house-demolition" element={<HouseDemolition />} />
            <Route path="/services/wall-demolition" element={<WallDemolition />} />
            <Route path="/services/plumbing-demolition" element={<PlumbingDemolition />} />
            <Route path="/services/waste-removal" element={<WasteRemoval />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Testimonials />
        <Footer />
        <FloatingButtons />
        
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Оставить заявку"
        >
          <ContactForm isModal onClose={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </Router>
  );
}

export default App;