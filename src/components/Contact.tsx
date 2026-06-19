import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { motion } from 'framer-motion';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-kicker text-mono">[ ENCONTRE O DOJO ]</span>
          <h2 className="contact-title">Localização & Contato</h2>
          <p className="contact-desc">
            Pronto para o próximo corte? Agende pelo site ou venha nos visitar em Boa Viagem.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="contact-item-icon" size={20} style={{ color: 'var(--color-primary)' }} />
              <div>
                <div className="contact-item-title text-mono">Endereço</div>
                <div className="contact-item-value">
                  Rua Afonso Pena, 84<br />
                  Santo Amaro, Recife - PE, 50050-130
                </div>
              </div>
            </div>

            <div className="contact-item">
              <Clock className="contact-item-icon" size={20} style={{ color: 'var(--color-primary)' }} />
              <div>
                <div className="contact-item-title text-mono">Horários</div>
                <div className="contact-item-value">
                  Segunda a Sexta: 10h às 18h<br />
                  Sábado: 09h às 18h
                </div>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-item-icon" size={20} style={{ color: 'var(--color-primary)' }} />
              <div>
                <div className="contact-item-title text-mono">WhatsApp</div>
                <div className="contact-item-value">
                  <a href="https://wa.me/5581986169008" target="_blank" rel="noopener noreferrer">
                    (81) 9 8616-9008
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <InstagramIcon className="contact-item-icon" style={{ width: 20, height: 20, color: 'var(--color-primary)' }} />
              <div>
                <div className="contact-item-title text-mono">Instagram</div>
                <div className="contact-item-value">
                  <a href="https://www.instagram.com/ossbarber/" target="_blank" rel="noopener noreferrer">
                    @ossbarber
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-map-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Embedded Google Map of Santo Amaro, Recife */}
          <iframe
            title="Google Maps Barber Oss"
            src="https://maps.google.com/maps?q=Rua%20Afonso%20Pena,%2084%20-%20Santo%20Amaro,%20Recife%20-%20PE,%2050050-130&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className="contact-map-iframe"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};
