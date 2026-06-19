import React from 'react';
import { Award, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-kicker text-mono">[ O PROFISSIONAL ]</span>
          <h2 className="about-title">Braulio Almeida (Braw)</h2>
          <div className="about-text">
            <p>
              Braulio Almeida, amplamente conhecido como Braw, é o fundador e a mente criativa por trás da Barber Oss. Formado pelo SENAC-PE em 2016 como Trancista e Educador, ele traz anos de experiência técnica e paixão pela excelência no design capilar e estilo urbano.
            </p>
            <p>
              Iniciou sua trajetória na barbearia tradicional, mas rapidamente conquistou seu próprio espaço físico. Além de barbeiro especialista em cortes de alta precisão e tranças, Braw é um lutador ativo de Jiu-Jitsu — a arte suave que dá nome à barbearia através da clássica saudação "Oss!".
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-highlight-card">
              <Award className="about-highlight-icon" size={24} style={{ color: 'var(--color-primary)', marginBottom: '8px' }} />
              <h3 className="about-highlight-title">SENAC Pernambuco</h3>
              <p className="about-highlight-desc">Certificação profissional e formação pedagógica como educador em 2016.</p>
            </div>
            <div className="about-highlight-card">
              <Shield className="about-highlight-icon" size={24} style={{ color: 'var(--color-primary)', marginBottom: '8px' }} />
              <h3 className="about-highlight-title">Mentalidade Jiu-Jitsu</h3>
              <p className="about-highlight-desc">Foco, disciplina e técnica cirúrgica levados diretamente do tatame para a navalha.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/braw-profile.png" 
            alt="Braw Almeida Perfil" 
            className="about-image"
          />
          <div className="about-image-tag text-mono">[ BRAW // FUNDADOR ]</div>
        </motion.div>
      </div>
    </section>
  );
};
