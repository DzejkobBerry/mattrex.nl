import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
function MailRedirect() {
  useEffect(() => {
    window.location.href = 'https://www.ovhcloud.com/pl/mail';
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

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const computeVisible = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const totalHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const scrollable = Math.max(totalHeight - window.innerHeight, 0);
      const threshold = scrollable * 0.2;
      setVisible(scrollable > 0 && scrollTop >= threshold);
    };
    computeVisible();
    window.addEventListener('scroll', computeVisible);
    window.addEventListener('resize', computeVisible);
    return () => {
      window.removeEventListener('scroll', computeVisible);
      window.removeEventListener('resize', computeVisible);
    };
  }, []);
  if (!visible) return null;
  return (
    <button
      aria-label="Do góry"
      title="Do góry"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center hover:bg-primary/90 focus:outline-none"
    >
      ↑
    </button>
  );
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
        <ScrollTopButton />
        <Footer />
      </div>
    </BrowserRouter>;
}