import Project from './Project';

import { motion } from "framer-motion";

import reactIcon from '../assets/react.png'
import awsIcon from '../assets/aws.png'
import leafletIcon from '../assets/leaflet.png'
import stravaIcon from '../assets/strava.png'
import owmIcon from '../assets/owm.png'

function Projects() {

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="page"
      id="projects"
    >
      <div className="project-card">
        <Project
          title="Wimd"
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
          summary="Full stack boomchicka to boom chicka boom and stuff"
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
          title="Birdcam"
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
      </div>
    </motion.div>
  );
}

export default Projects;
