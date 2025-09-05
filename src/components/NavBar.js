import { useState, useEffect } from 'react';

function NavBar() {

  const [active, setActive] = useState(''); //currently displayed section

  useEffect(() => {
    const sections = ['welcome', 'projects', 'about', 'contact'];
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="navbar">
      <a href="#welcome" onClick={(e) => { e.preventDefault(); document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' }); }}
        className={active === 'welcome' ? 'active' : ''}>Home</a>
      <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
        className={active === 'projects' ? 'active' : ''}>Projects</a>
      <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
        className={active === 'about' ? 'active' : ''}>About</a>
      <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
        className={active === 'contact' ? 'active' : ''}>Contact</a>
    </div>
  );
}

export default NavBar;
