
import { useEffect } from 'react';
import Cursor from '@/components/Cursor';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    document.title = "Kauê Oenning - Desenvolvedor React";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Cursor />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
