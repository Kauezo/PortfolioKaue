
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Terminal, Layout, Brain } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Front-End",
      items: ["JavaScript", "TypeScript", "React"],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      category: "Back-End",
      items: ["PHP", "SQL", "Python", "Node.js"],
      icon: <Terminal className="w-6 h-6" />
    },
    {
      category: "Automação e IA",
      items: ["n8n", "AI Agents", "Integrações inteligentes", "Workflows automatizados", "Chatbots"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      category: "Banco de Dados",
      items: ["Firebase", "MongoDB", "SQL", "Supabase", "Baserow"],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: "Ferramentas",
      items: ["Git", "GitHub", "VS Code", "Office", "Lovable", "Figma"],
      icon: <Layout className="w-6 h-6" />
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
