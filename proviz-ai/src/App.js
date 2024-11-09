import React, { useState } from 'react';
import './css/style.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div>
      <HeroSection openForm={openForm} />
      <AboutSection />
      <ApplicationForm isOpen={isFormOpen} closeForm={closeForm} />
      <Footer />
    </div>
  );
};

export default App;
