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
      I'm entering my final year, completing the program online from home in Calgary while using personal projects to fill in the gaps. 
      Besides that, I'm usually in the gym, rippin' the city's bike paths, or out in the mountains with my three young children. 
      Currently focused on internships, my goal is to contribute in a hands-on technical role while learning everything I can.
      </span>
    </motion.div>
  );
}

export default About;
