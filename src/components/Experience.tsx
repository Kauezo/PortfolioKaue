
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Experiência</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold">Estágio em TI – Weld Vision</h3>
                  <p className="text-muted-foreground">2025 – Em andamento</p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Suporte técnico em hardware e software</li>
                <li>Manutenção de sistemas e implementação de soluções tecnológicas</li>
                <li>Otimização de processos internos</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold">Formação</h3>
                </div>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <p className="font-semibold">Bacharelado em Engenharia de Software – UNIVILLE</p>
                  <p className="text-sm">2025 – Em andamento</p>
                </li>
                <li>
                  <p className="font-semibold">Técnico em Desenvolvimento de Sistemas – SENAI</p>
                  <p className="text-sm">2022 – 2024</p>
                </li>
                <li>
                  <p className="font-semibold">Ensino Médio – SESI</p>
                  <p className="text-sm">2022 – 2024</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
