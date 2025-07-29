import gmailIcon from '../assets/email.png'
import githubIcon from '../assets/github-white.png'

function Contact() {
  return (
    <div className='contact'>
        <a href="mailto:tylerfilewich@gmail.com"> 
          <img src={gmailIcon} alt="email" className='contact-button' />
        </a>
        <a href="https://www.github.com/tfilewic">
          <img src={githubIcon} alt="GitHub" className='contact-button'/>
        </a>
    </div>
  );
}

export default Contact;
