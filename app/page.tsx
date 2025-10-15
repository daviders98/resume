"use client"
import NavBar from '@/components/NavBar';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-primary text-foreground">
      <NavBar/>
    </div>
  );
}

export default App;