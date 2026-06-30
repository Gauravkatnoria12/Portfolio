import React from 'react';
import { motion } from 'framer-motion';

const Text = () => {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-center overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-sixcaps text-[14rem] sm:text-[18rem] md:text-[24rem] lg:text-[28rem] inline-block bg-gradient-to-b from-neutral-950 to-neutral-400 dark:from-neutral-50 dark:to-neutral-800 bg-clip-text text-transparent tracking-wider leading-none select-none cursor-default"
      >
        GAURAV
      </motion.h1>
    </section>
  );
};

export default Text;