import React from 'react';
import { Award, Shield, MoreHorizontal, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
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
          {/* Instagram Header Mock */}
          <div className="insta-header">
            <div className="insta-user-info">
              <InstagramIcon style={{ width: 14, height: 14, color: 'var(--color-ink)' }} />
              <span className="insta-username">brawbarbeiro</span>
            </div>
            <MoreHorizontal size={16} className="insta-dots" />
          </div>

          {/* Instagram Profile Mock */}
          <div className="insta-profile-body">
            <div className="insta-stats-row">
              <div className="insta-avatar-container">
                <img
                  src="/braw-profile.jpeg"
                  alt="Braw Almeida"
                  className="insta-avatar"
                />
              </div>
              <div className="insta-stats-list">
                <div className="insta-stat-item">
                  <span className="insta-stat-value">142</span>
                  <span className="insta-stat-label">posts</span>
                </div>
                <div className="insta-stat-item">
                  <span className="insta-stat-value">2.4k</span>
                  <span className="insta-stat-label">seguidores</span>
                </div>
                <div className="insta-stat-item">
                  <span className="insta-stat-value">842</span>
                  <span className="insta-stat-label">seguindo</span>
                </div>
              </div>
            </div>

            {/* Instagram Bio */}
            <div className="insta-bio">
              <span className="insta-bio-name">Braulio Almeida</span>
              <span className="insta-bio-title">[ Trancista & Barbeiro // SENAC-PE ]</span>
              <p>🥋 Lutador de Jiu-Jitsu | Oss</p>
              <p>✂️ Especialista em cortes e tranças masculinas</p>
              <a
                href="https://www.instagram.com/brawbarbeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-bio-link"
              >
                instagram.com/brawbarbeiro
              </a>
            </div>

            {/* CTAs */}
            <div className="insta-cta-row">
              <a
                href="https://www.instagram.com/brawbarbeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-btn insta-btn-primary"
              >
                Seguir
              </a>
              <a
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-btn insta-btn-secondary"
              >
                Mensagem
              </a>
            </div>

            {/* Posts Grid Mockup */}
            <div className="insta-posts-grid">
              <a
                href="https://www.instagram.com/brawbarbeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-post-preview"
              >
                <img src="/gallery-fade.jpg" alt="Fade Cut Post" className="insta-post-img" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="insta-post-overlay">
                  <div className="insta-post-overlay-content">
                    <Heart size={12} fill="white" style={{ marginRight: 2 }} /> 182
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/brawbarbeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-post-preview"
              >
                <img src="/gallery-braids.jpg" alt="Braids Post" className="insta-post-img" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="insta-post-overlay">
                  <div className="insta-post-overlay-content">
                    <Heart size={12} fill="white" style={{ marginRight: 2 }} /> 245
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/brawbarbeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-post-preview"
              >
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212' }}>
                  <InstagramIcon style={{ width: 16, height: 16, color: 'var(--color-ink-muted)' }} />
                </div>
                <div className="insta-post-overlay">
                  <div className="insta-post-overlay-content">
                    <InstagramIcon style={{ width: 12, height: 12, color: 'white', marginRight: 2 }} /> Feed
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
