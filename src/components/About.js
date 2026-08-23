import { motion } from "framer-motion";
import me from '../assets/me.png'

function About() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className="about"
    >
      <span>
        <img src={me} alt="me"></img>
      </span>
      <span>After years as a technician in the oilsands, I decided to switch things up and pursue a Software Engineering degree from Arizona State University. 
      I've now completed the program and am working in Calgary as a Software Engineer focused on embedded Linux and firmware development within tactical communications systems.  
      Besides that, I'm usually in the gym, rippin' the city's bike paths, or out in the mountains with my three young children. 
      I'm always looking to expand my skills, take on new technical challenges, and build practical things along the way.
      </span>
    </motion.div>
  );
}

export default About;
