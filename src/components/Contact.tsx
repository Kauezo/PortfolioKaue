import { Mail, Linkedin, MapPin, FileText, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const emailSubject = "Contato via Portfolio";
  const emailBody = "Olá Kauê, vi seu portfolio e gostaria de entrar em contato e...";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kaueoenning9@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Contato</h2>
        <div className="grid gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-4 rounded-lg border border-primary/20 hover:border-primary/40"
          >
            <Mail size={20} />
            <span>kaueoenning9@gmail.com</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://linkedin.com/in/kauê-oenning-96a4702b6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-4 rounded-lg border border-primary/20 hover:border-primary/40"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/Kauezo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-4 rounded-lg border border-primary/20 hover:border-primary/40"
          >
            <Github size={20} />
            <span>GitHub</span>
          </motion.a>


          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-muted-foreground p-4 rounded-lg border border-primary/20"
          >
            <MapPin size={20} />
            <span>Costa e Silva, Joinville – Brasil</span>
          </motion.div>
          <Button
            variant="outline"
            size="lg"
            className="w-full flex items-center gap-2 mt-4 hover:scale-105 transition-transform"
            asChild
          >
            <a href="KaueOenning-Curriculo.pdf" download>
              <FileText size={20} />
              Baixar Currículo
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;