import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 px-4 md:px-8">
      <h2 className="font-bold text-4xl tracking-wide mb-12">Projects</h2>
      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name} // Using name as key instead of index
            name={project.name}
            imageSrc={project.imageSrc}
            description={project.description}
            techStack={project.techStack}
            gitLink={project.gitLink}
            liveLink={project.liveLink || '#'}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;