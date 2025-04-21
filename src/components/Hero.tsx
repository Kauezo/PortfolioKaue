
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Olá, eu sou o{' '}
          <span className="text-primary">Kauê Oenning</span>
        </h1>
        <h2 className="text-2xl sm:text-4xl text-muted-foreground mb-8">
            Desenvolvedor de Software expert em IA e automação
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12">
          Desenvolvedor com foco em tecnologias front-end e back-end, além de ter conhecimento em automação inteligente com IA e n8n.
        </p>
        <Button
          size="lg"
          className="group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Saiba mais
          <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
