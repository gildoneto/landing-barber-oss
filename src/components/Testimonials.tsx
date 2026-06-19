import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import './Testimonials.css';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  service: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "O Braw é extremamente detalhista. O fade dele é impecável, mas o diferencial são as tranças. Trabalho de alto nível em Recife.",
    author: "Mateus Silva",
    service: "[ TRANCISTA // FADE ]",
  },
  {
    id: 2,
    quote: "Ambiente muito massa, resenha boa sobre jiu-jitsu e um corte cirúrgico. A filosofia do tatame se nota na disciplina do serviço.",
    author: "Felipe Cavalcanti",
    service: "[ CORTE DE CABELO ]",
  },
  {
    id: 3,
    quote: "Melhor barbearia de Boa Viagem. Atendimento pontual pelo Tua Agenda, sem enrolação. Recomendo de olhos fechados.",
    author: "Thiago Guedes",
    service: "[ BARBA // DESIGN ]",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="testimonials-kicker text-mono">[ A COMUNIDADE ]</span>
          <h2 className="testimonials-title">Quem frequenta o Dojo</h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={t.id} 
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Quote size={32} style={{ color: 'var(--color-border)', opacity: 0.5 }} />
              <p className="testimonial-quote">"{t.quote}"</p>
              
              <div className="testimonial-author-wrapper">
                <span className="testimonial-author">{t.author}</span>
                <span className="testimonial-tag text-mono">{t.service}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
