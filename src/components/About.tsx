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
              A jornada de Braulio (Braw) começou de forma autodidata, cortando seu próprio cabelo por insatisfação com os acabamentos que recebia. O cuidado se estendeu a amigos e familiares até que o desafio de realizar um corte complexo na máquina e tesoura o impulsionou a se profissionalizar. Em 2016 concluiu o curso de barbeiro no SENAC e, em 2019, tornou-se trancista, aperfeiçoando sua técnica no Morro da Conceição.
            </p>
            <p>
              Após anos de dedicação, o grande marco da autonomia veio em 2020 (pós-pandemia), ao alugar uma sala comercial no salão Danielle Cabeleireira, que confiou em seu potencial e deu a liberdade necessária para gerenciar o negócio. Desde então, unindo a arte das navalhas e a disciplina do Jiu-Jitsu, Braw comanda a Barber Oss com excelência.
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
            src="/braw-photo.jpg"
            alt="Braw Almeida Perfil"
            className="about-image"
          />
          <div className="about-image-tag text-mono">[ BRAW // FUNDADOR ]</div>
        </motion.div>
      </div>
    </section>
  );
};
