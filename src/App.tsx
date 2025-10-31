import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
function MailRedirect() {
  useEffect(() => {
    window.location.href = 'https://www.ovhcloud.com/fr/mail';
  }, []);
  return null;
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return null;
}
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full bg-white">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/producten" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* External redirect to OVH Webmail */}
          <Route path="/poczta" element={<MailRedirect />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>;
}