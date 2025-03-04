"use client";
import { projects } from "@/constants/constants";
import { FaRegListAlt } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { DividerForProjects } from "./DividerForProjects";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  const scrollToTop = () => {
    console.log("clicked");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center pb-10 bg-gray-100"
    >
      {/* Section Heading */}
      <h1 className="section-heading m-8 text-4xl font-normal flex items-center gap-4">
        <span className="inline-block text-[#2857a4]">
          <FaRegListAlt />
        </span>
        <span className="text-[#2857a4]">Projects</span>
      </h1>

      <div className="timeline relative w-[75%] h-full">
        {projects &&
          projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        <DividerForProjects />
      </div>
      <Link href="/" className="flex justify-end w-full mr-10">
        <FaArrowUp
          onClick={scrollToTop}
          size={30}
          className="z-5 w-[1.5rem] h-[1.5rem] cursor-pointer text-[#eb822d]"
        />
      </Link>
    </section>
  );
};

export default Projects;
