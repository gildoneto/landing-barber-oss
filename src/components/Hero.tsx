import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  bookingUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ bookingUrl }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <img 
        src="/gallery-dojo.png" 
        alt="Barber Oss Background" 
        className="hero-bg-media"
        onError={(e) => {
          // Fallback if gallery-dojo doesn't exist yet
          e.currentTarget.style.display = 'none';
        }}
      />
      
      <div className="container hero-container">
        <motion.span 
          className="hero-kicker text-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          [ PROTOCOLO // EST. 2023 ]
        </motion.span>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Cortes Táticos & Cultura BJJ
        </motion.h1>

        <motion.p 
          className="hero-desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Barbearia Barber Oss, comandada pelo profissional Braulio Almeida (Braw) em Recife/PE. Onde a excelência do corte de cabelo e tranças encontra a disciplina e a saudação das artes marciais.
        </motion.p>

        <motion.div 
          className="hero-cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href={bookingUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-cta"
          >
            <Calendar size={20} />
            Agendar Horário
          </a>
          <span className="hero-sub-cta text-mono">Agendamento via Tua Agenda</span>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span className="text-mono">Scroll</span>
        <ChevronDown className="scroll-arrow" size={16} />
      </div>
    </section>
  );
};
