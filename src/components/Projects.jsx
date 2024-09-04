import React from "react";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section className="p-8" id="projects">
      <h2 className="my-10 text-center text-3xl lg:text-8xl ">My projects</h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_black"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="h-auto w-full object-cover group-hover:scale-105 duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 m-4 lg:m-8 p-4 lg:p-8 text-white backdrop-blur-md backdrop-brightness-75">
                <h3 className="text-3xl mb-2">{project.title}</h3>
                <p className="nax-w-xs text-lg">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
