import React from 'react';
import { MoreHorizontal, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import './About.css'; // Uses classes defined in About.css

export const InstagramCard: React.FC = () => {
  return (
    <div className="about-image-wrapper" style={{ padding: 0, maxWidth: 380 }}>
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
    </div>
  );
};
