import Project from './Project';

import { motion } from "framer-motion";
import { useState } from 'react';

import reactIcon from '../assets/React.svg'
import awsIcon from '../assets/aws.png'
import leafletIcon from '../assets/leaflet.png'
import stravaIcon from '../assets/strava.png'
import owmIcon from '../assets/owm.png'

import flaskIcon from '../assets/Flask.svg'
import mySQLIcon from '../assets/MySQL.svg'
import SQLAlchemyIcon from '../assets/SQLAlchemy.svg'
import pytestIcon from '../assets/pytest.svg'
import pandasIcon from '../assets/Pandas.svg'
import dockerIcon from '../assets/Docker.svg'
import numPyIcon from '../assets/NumPy.svg'
import cppLogo from '../assets/CPP.svg'
import pythonLogo from '../assets/Python.svg'
import raspberryPiIcon from '../assets/RaspberryPi.svg'
import spotfireIcon from '../assets/Spotfire.svg'
import openCVIcon from '../assets/OpenCV.svg'
import tensorFlowIcon from '../assets/TensorFlow.svg'



function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className="page"
      id="projects"
    >
      <div className="project-card">
        <Project
          title="Wimd"
          isOpen={openProject === "Wimd"}
          setOpenProject={setOpenProject}
          summary="Web app to visualize current wind conditions along a .gpx route"
          description="Displays Strava .gpx routes on a Leaflet map with Esri satellite imagery, 
            overlaying wind direction and speed using scaled arrows based on OpenWeatherMap data.  
            Deployed via S3 and CloudFront with HTTPS and custom domain.  Automated with GitHub Actions."

          tech={[
            { name: "React", icon: reactIcon, link: "https://react.dev/" },
            { name: "Leaflet", icon: leafletIcon, link: "https://leafletjs.com/" },
            { name: "AWS", icon: awsIcon, link: "https://aws.amazon.com/" },
            { name: "Strava API", icon: stravaIcon, link: "https://developers.strava.com/" },
            { name: "OpenWeatherMap", icon: owmIcon, link: "https://openweathermap.org/api" }
          ]}
          source="https://github.com/tfilewic/wind"
          live="https://wimd.tfilewich.com/"
        />
        <hr className="project-divider" />
        <Project
          title="Cellar"
          isOpen={openProject === "Cellar"}
          setOpenProject={setOpenProject}
          summary="Full-stack app for managing personal wine inventory"
          description="Backend built with Flask and SQLAlchemy, storing data in MySQL.  
            Supports CRUD operations, CSV import/export, and web scraping for tasting notes.  
            Unit tested with Pytest.  Dockerized for deployment.  React frontend with data 
            visualizations and tabular interface in development."

          tech={[
            { name: "Flask", icon: flaskIcon, link: "https://flask.palletsprojects.com/" },
            { name: "MySQL", icon: mySQLIcon, link: "https://www.mysql.com/" },
            { name: "SQLAlchemy", icon: SQLAlchemyIcon, link: "https://www.sqlalchemy.org/" },
            { name: "Pytest", icon: pytestIcon, link: "https://docs.pytest.org/" },
            { name: "Pandas", icon: pandasIcon, link: "https://pandas.pydata.org/" },
            { name: "Docker", icon: dockerIcon, link: "https://www.docker.com/" },
            { name: "React", icon: reactIcon, link: "https://react.dev/" }
          ]}

          source="https://github.com/tfilewic/cellar"
        />
        <hr className="project-divider" />
        <Project
          title="Glucose Time Series Analysis"
          isOpen={openProject === "Glucose Time Series Analysis"}
          setOpenProject={setOpenProject}
          summary="Data analysis workflow for extracting performance metrics from artificial pancreas systems."
          description="Python script that preprocesses CGM data with timestamp parsing, interpolation, and mode/day-night segmentation.  
          Performs feature engineering and categorization of glucose into clinical ranges.  
          Applies statistical aggregation to compute percent-time metrics and exports results to CSV."

          tech={[
            { name: "Python", icon: pythonLogo, link: "https://www.python.org/" },
            { name: "Pandas", icon: pandasIcon, link: "https://pandas.pydata.org/" },
            { name: "NumPy", icon: numPyIcon, link: "https://numpy.org/" },
          ]}

          source="https://github.com/tfilewic/glucose-time-series-analysis"
          live="https://mybinder.org/v2/gh/tfilewic/glucose-time-series-analysis/HEAD"
        />
        <hr className="project-divider" />
        <Project
          title="Birdcam (Planned)"
          isOpen={openProject === "Birdcam"}
          setOpenProject={setOpenProject}
          summary="Embedded system for bird detection and classification using ML"
          description="Captures bird sightings with a Raspberry Pi camera and classifies species using a TensorFlow Lite model. 
            Logs detections to CSV, uploads results to a remote server, and visualizes data with Spotfire. 
            Optimized for low-power, headless operation."

          tech={[
            { name: "C++", icon: cppLogo, link: "https://isocpp.org/" },
            { name: "Python", icon: pythonLogo, link: "https://www.python.org/" },
            { name: "Raspberry Pi", icon: raspberryPiIcon, link: "https://www.raspberrypi.com/" },
            { name: "TensorFlow Lite", icon: tensorFlowIcon, link: "https://www.tensorflow.org/lite" },
            { name: "OpenCV", icon: openCVIcon, link: "https://opencv.org/" },
            { name: "Spotfire", icon: spotfireIcon, link: "https://www.tibco.com/products/tibco-spotfire" }
          ]}

          source="https://github.com/tfilewic/birdcam"
        />
      </div>
    </motion.div>
  );
}

export default Projects;
