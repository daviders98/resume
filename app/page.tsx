"use client"
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import About from '@/components/About'
import { useEffect } from 'react';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-primary text-foreground">
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;