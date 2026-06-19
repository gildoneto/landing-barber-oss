import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { motion } from 'framer-motion';
import './Gallery.css';

interface GalleryItem {
  id: number;
  title: string;
  tag: string;
  imageSrc: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Corte Degradê (Fade)',
    tag: '[ STYLE // 01 ]',
    imageSrc: '/gallery-fade.jpg',
  },
  {
    id: 2,
    title: 'Tranças Masculinas',
    tag: '[ BRAIDS // 02 ]',
    imageSrc: '/gallery-braids.jpg',
  },
  {
    id: 3,
    title: 'Barba Alinhada',
    tag: '[ BEARD // 03 ]',
    imageSrc: '/gallery-beard.jpg',
  },
  {
    id: 4,
    title: 'Combo: Cabelo + Barba',
    tag: '[ COMBO // 04 ]',
    imageSrc: '/gallery-combo.jpg',
  },
  {
    id: 5,
    title: 'Cabelo Black / Afro',
    tag: '[ BLACK // 05 ]',
    imageSrc: '/gallery-black.jpg',
  },
];

export const Gallery: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="gallery-kicker text-mono">[ O PORTFÓLIO ]</span>
          <h2 className="gallery-title">Estilos do Dojo</h2>
          <p className="gallery-desc">
            Trabalhos reais produzidos na Barber Oss. Da precisão das máquinas clássicas às tranças com identidade e atitude das ruas.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, idx) => {
            const hasError = imageErrors[item.id] || !item.imageSrc;

            return (
              <motion.div
                key={item.id}
                className="gallery-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="gallery-image-container">
                  {hasError ? (
                    <div className="gallery-placeholder">
                      <Camera size={40} className="gallery-placeholder-icon" />
                      <span className="text-mono" style={{ fontSize: '0.75rem' }}>
                        [ IMAGEM DO INSTAGRAM ]
                      </span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-ink-muted)' }}>
                        Copiar foto real para public/{item.imageSrc.replace('/', '')}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="gallery-image"
                      onError={() => handleImageError(item.id)}
                    />
                  )}
                </div>
                <div className="gallery-info">
                  <span className="gallery-card-tag text-mono">{item.tag}</span>
                  <h3 className="gallery-card-title">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="gallery-instagram-cta">
          <a
            href="https://www.instagram.com/ossbarber/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            <InstagramIcon style={{ width: 18, height: 18 }} />
            Ver no Instagram @ossbarber
          </a>
        </div>
      </div>
    </section>
  );
};
