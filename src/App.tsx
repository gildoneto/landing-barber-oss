import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

const BOOKING_URL = 'https://client.tuaagenda.com/c/BarbeariaBarberOss';

function App() {
  return (
    <>
      <Header bookingUrl={BOOKING_URL} />
      <main>
        <Hero bookingUrl={BOOKING_URL} />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
