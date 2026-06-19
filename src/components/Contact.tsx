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
                  Av. Conselheiro Aguiar, 2333<br />
                  Boa Viagem, Recife - PE, 51020-020
                </div>
              </div>
            </div>

            <div className="contact-item">
              <Clock className="contact-item-icon" size={20} style={{ color: 'var(--color-primary)' }} />
              <div>
                <div className="contact-item-title text-mono">Horários</div>
                <div className="contact-item-value">
                  Segunda a Sexta: 09h às 19h<br />
                  Sábado: 09h às 18h
                </div>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-item-icon" size={20} style={{ color: 'var(--color-primary)' }} />
              <div>
                <div className="contact-item-title text-mono">WhatsApp</div>
                <div className="contact-item-value">
                  <a href="https://wa.me/5581999999999" target="_blank" rel="noopener noreferrer">
                    (81) 99999-9999
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
          {/* Dark-themed embedded Google Map of Boa Viagem, Recife */}
          <iframe 
            title="Google Maps Barber Oss"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8821959779313!2d-34.89865108461763!3d-8.113480094158934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1effd564fa7d%3A0xc3f5c71db00a0684!2sAv.%20Conselheiro%20Aguiar%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1687200000000!5m2!1spt-BR!2sbr" 
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
