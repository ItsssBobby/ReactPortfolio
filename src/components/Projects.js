import React from 'react';
import ProjectCard from './ProjectCard';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import project5 from '../images/project1.png';
import project6 from '../images/project1.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ReadME-PRO',
      image: project1,
      description: 'This application will create a professional ReadME based on the answers given.',
      deployedLink: 'https://youtu.be/l8CX9AWLMtc',
      githubLink: 'https://github.com/ItsssBobby/ReadME-PRO',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      image: project2,
      description: 'This application is a weather dashboard using the OpenWeather API, search a city and it will give you the forecast!',
      deployedLink: 'https://itsssbobby.github.io/weatherman-app/',
      githubLink: 'https://github.com/ItsssBobby/weatherman-app',
    },
    {
      id: 3,
      title: 'Movie and Beer Roulette',
      image: project3,
      description: 'The purpose of this project was to create an application that presented the user with a randomized movie title',
      deployedLink: 'https://keekerr.github.io/Movie-Beer-Roulette/',
      githubLink: 'https://github.com/keekerr/Movie-Beer-Roulette',
    },
    {
      id: 4,
      title: 'Project 4',
      image: project4,
      description: 'Use this to randomly generate a secure password using upper, lower, numeric, and special characters. Click "Generate Password" and answer the prompts to continue.',
      deployedLink: 'https://itsssbobby.github.io/Password-generator/',
      githubLink: 'https://github.com/ItsssBobby/Password-generator',
    },
    {
      id: 5,
      title: 'GamersRealm',
      image: project5,
      description: 'Ante nulla tempor nibh, et commodo mauris ipsum in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      deployedLink: 'https://gamersrealm.herokuapp.com/',
      githubLink: 'https://github.com/ItsssBobby/GamersRealm',
    },
    {
      id: 6,
      title: 'Project 6',
      image: project6,
      description: 'Sed non rhoncus nulla, eu dictum nisl. Ut nec efficitur dolor. Nulla facilisi.',
      deployedLink: 'https://www.example.com',
      githubLink: 'https://github.com/example/project6',
    },
  ];

  return (
    <section>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;