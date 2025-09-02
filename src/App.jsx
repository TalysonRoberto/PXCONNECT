import React from 'react';
import './App.css';
import Inicio from './Inicio/Inicio';
import Planos from './Planos/Planos';
import Sobre from './Sobre/Sobre';
import Perguntas from './Perguntas/Perguntas';
import Contato from './Contato/Contato';
import Footer from './Footer/Footer';
import { motion } from 'framer-motion';

const App = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
    viewport: { once: true },
  };

  return (
    <div>
      <motion.div {...fadeInUp}>
        <Inicio />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Planos />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Sobre />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Perguntas />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Contato />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
