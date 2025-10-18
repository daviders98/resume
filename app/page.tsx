"use client"
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import About from '@/components/About'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-primary text-foreground">
      <NavBar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;