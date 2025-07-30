import { useState } from "react";

function Project({ title, summary, description, tech, source, live, isOpen, setOpenProject}) {

  return (
    <div
      className={isOpen ? "project project-open" : "project"}
      onClick={() => setOpenProject(isOpen ? null : title)}
    >

      <div className="project-header">
        <div className="project-header-text">
          <p className="project-title">{title}</p>
          <p className="project-summary">{summary}</p>
        </div>
        {!isOpen &&
          <div className="project-header-carat">˅</div>
        }
        {isOpen &&
          <div className="project-header-carat-open">˄</div>
        }

      </div>


      {isOpen && (
        <div className="project-expanded">
          <div className="project-tech">
            {tech.map(({ name, icon, link }) => (
              <a key={name} href={link} target="_blank" rel="noopener noreferrer" title={name}>
                <img className="tech-icon" src={icon} alt={name} />
              </a>
            ))}
          </div>

          <p className="project-description">{description}</p>

          <div className="project-links" onClick={(e) => e.stopPropagation()}>
            <a href={ source } className="project-link" target="_blank" rel="noopener noreferrer">Code</a>
            {live ? (
              <a href={ live } className="project-link" target="_blank" rel="noopener noreferrer">Live</a>
            ) : (
              <span className="project-link disabled">Coming Soon</span>
            )}

          </div>
        </div>
      )}


    </div>
  );
}

export default Project;
