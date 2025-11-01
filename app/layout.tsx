"use client";
import React from 'react';
import '../src/index.css';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';

function ScrollTopButton() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="flex flex-col min-h-screen w-full bg-white">
          <Header />
          {children}
          <ScrollTopButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}