import gmailIcon from '../assets/email.png'
import githubIcon from '../assets/github-white.png'

function Contact() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem'}}>
        <a href="mailto:tylerfilewich@gmail.com"> 
          <img src={gmailIcon} alt="email" style={{ width: '30vw', maxWidth: '90px',  transition: 'transform 0.2s ease' }} />
        </a>
        <a href="https://www.github.com/tfilewic">
          <img src={githubIcon} alt="GitHub" style={{ width: '30vw', maxWidth: '90px',  transition: 'transform 0.2s ease' }} />
        </a>
    </div>
  );
}

export default Contact;
