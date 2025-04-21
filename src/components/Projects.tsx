import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mini Blog",
      description: "Desenvolvimento de um site responsivo e funcional que permite aos usuários postar fotos. Utilização de React, Firebase e MongoDB para criação do projeto.",
      period: "2025",
      links: {
        github: "https://kauezo.github.io/miniBlog/",
        live: "https://kauezo.github.io/miniBlog/"
      }
    },
    {
      title: "EPTRAN (Senai)",
      description: "Criação de um site responsivo utilizando React para o programa EPTRAN, promovendo a interação por meio de quizzes e jogos educativos. Implementação de funcionalidades dinâmicas e integração com banco de dados.",
      period: "2023 – 2024",
      links: {}
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                {Object.keys(project.links).length > 0 && (
                  <div className="flex gap-4">
                    {project.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
