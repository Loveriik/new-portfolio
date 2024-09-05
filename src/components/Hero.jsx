import React from "react";
import { LuImport } from "react-icons/lu";
import profilePic from "../assets/ProfilePic.jpg";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
          Aleksandr <br /> Lavrov
        </h1>
        <div className="mt-8">
          <a
            href={`${import.meta.env.BASE_URL}Aleksandr-Lavrov-CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download="Aleksandr-Lavrov-CV.pdf"
            className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
          >
            <span>Resume.pdf</span>
            <LuImport className="ml-2" />
          </a>
        </div>
        <div className="w-full">
          <img
            src={profilePic}
            alt="Aleksandr Lavrov"
            className="mt-8 h-96 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
