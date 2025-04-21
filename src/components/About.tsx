
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Sobre mim</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Desenvolvedor com conhecimentos em tecnologias front-end e back-end, incluindo automação inteligente com IA e
              n8n. Experiência em suporte técnico, desenvolvimento de aplicativos responsivos e interativos, além de interfaces
              dinâmicas e jogos educacionais. Busco aplicar minhas habilidades técnicas, analíticas e criativas para contribuir com o
              sucesso da equipe e crescer profissionalmente em soluções inovadoras com foco em inteligência artificial e agentes
              autônomos.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default About;
