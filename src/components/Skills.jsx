import React from "react";
import { SKILLS } from "../constants";

export default function Skills() {
  return (
    <section id="skills" className="bg-lime-300 w-full py-8 mt-8">
      <h2 className="text-black text-center text-4xl lg:text-8xl font-normal mb-10 lg:mb-20">
        Skills
      </h2>
      <div className="grid grid-cols-4 gap-y-4 lg:gap-y-8 items-center justify-items-center w-full lg:grid-cols-5">
        {SKILLS.map((skill) => (
          <div
            key={skill.id}
            className="w-12 lg:w-24 flex flex-col justify-center items-center gap-4"
          >
            <img className="w-full" src={skill.src} />
            <h3 className="text-black text-xl lg:text-3xl">{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
