import { motion } from "framer-motion";
import gmailIcon from '../assets/email.png'
import githubIcon from '../assets/github-white.png'


function Contact() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className='contact'
    >
        <a href="mailto:tylerfilewich@gmail.com"> 
          <img src={gmailIcon} alt="email" className='contact-button' />
        </a>
        <a href="https://www.github.com/tfilewic">
          <img src={githubIcon} alt="GitHub" className='contact-button'/>
        </a>
    </motion.div>
  );
}

export default Contact;
