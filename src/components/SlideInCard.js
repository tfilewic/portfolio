import { motion } from "framer-motion";


function SlideInCard({ children}) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="card">
        {children}
      </div>
    </motion.div>
  );
}

export default SlideInCard;
