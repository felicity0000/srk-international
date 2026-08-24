import { motion } from 'framer-motion';
import images from '../assets/images';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-srk-blue-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: [0.85, 1.03, 1] }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-2xl px-6 py-4 shadow-xl"
      >
        <img
          src={images.srk_logo}
          alt="SRK International Society"
          className="h-16 sm:h-20 w-auto object-contain"
        />
      </motion.div>

      <div className="mt-8 h-1 w-40 sm:w-56 rounded-full bg-white/15 overflow-hidden">
        <motion.div
          className="h-full w-1/3 rounded-full bg-srk-orange"
          animate={{ x: ['-100%', '250%'] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 text-white/70 text-sm tracking-wide"
      >
        Serving humanity with compassion
      </motion.p>
    </motion.div>
  );
}
