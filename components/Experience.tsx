import { experience } from "@/constants/constants";
import { FaBriefcase } from "react-icons/fa";
import { ExperienceCard } from "./ExperienceCard";
import { DividerForExperience } from "./DividerForExperience";

const Experience = () => (
  <section
    id="experience"
    className="w-full flex flex-col items-center pb-5 bg-white"
  >
    <h1 className="section-heading m-8 text-4xl font-normal flex items-center gap-4">
      <span className="inline-block text-[#2857a4]">
        <FaBriefcase />
      </span>
      <span className="text-[#2857a4]">Experience</span>
    </h1>

    <div className="timeline relative w-[75%] h-full">
      {experience &&
        experience.map((exp, index) => (
          <ExperienceCard experience={exp} key={index} />
        ))}
      <DividerForExperience />
    </div>
  </section>
);

export default Experience;
