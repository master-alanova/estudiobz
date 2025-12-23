import React from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Identity from './components/Sections/Identity';
import Services from './components/Sections/Services';
import DigitalAgility from './components/Sections/DigitalAgility';
import Staff from './components/Sections/Staff';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-secondary">
      <Header />
      <main>
        <Hero />
        <Identity />
        <Services />
        <DigitalAgility />
        <Staff />
      </main>
      <Footer />
    </div>
  );
}

export default App;
