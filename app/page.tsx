"use client"
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import About from '@/components/About'
import { useEffect } from 'react';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-primary text-foreground min-w-full">
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;