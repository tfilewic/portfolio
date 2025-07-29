import { useState } from "react";

function Project( {title, summary, description, tech, source, live }) {

  const [open, setOpen] = useState(false);

  return (
    <div 
      className={open? "project project-open" : "project"}
      onClick={() => setOpen(!open)}
      >    

        <div className="project-header">
          <div className="project-header-text">
            <p className="project-title">{ title }</p>
            <p className="project-summary">{ summary }</p>
          </div>
          {!open &&
            <div className="project-header-carat">˅</div>
          }
          {open &&
            <div className="project-header-carat-open">˄</div>
          }

        </div>


        {open && (
        <div className="project-expanded">
                    <div className="project-tech">
            {tech.map(({ name, icon, link }) => (
              <a key={ name } href={ link } target="_blank" rel="noopener noreferrer" title={ name }>
                <img className="tech-icon" src={ icon } alt={ name}  />
              </a>
            ))}
          </div>

          
          <p className="project-description">{ description }</p>
          

          
          <div className="project-links">
            <a href={source} className="project-link" target="_blank" rel="noopener noreferrer">Code</a>
            <a href={live} className="project-link" target="_blank" rel="noopener noreferrer">Live</a>
          </div>
        </div>
      )}
    
      
    </div>
  );
}

export default Project;
