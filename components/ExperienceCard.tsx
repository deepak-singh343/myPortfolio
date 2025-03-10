import { FaRegFileCode } from "react-icons/fa";
interface Experience {
  experience: {
    id: number;
    title: string;
    duration: string;
    link: string;
    profile: string;
  };
}
export const ExperienceCard = ({ experience }: Experience) => {
  return (
    <div className="w-full " key={experience.id}>
      <div className="w-full absolute flex md:justify-center justify-start md:ml-0 ml-[-1.45rem]">
        <div className="w-4 h-4 bg-gray-400 rounded-full relative top-4 z-1"></div>
      </div>
      <div
        className={`relative z-10 timeline-box w-full min-h-[100px] flex text-right ${
          experience.id % 2 == 0
            ? "md:justify-end justify-start md:ml-[-3rem]"
            : "justify-start "
        }`}
      >
        <div className="flex flex-col gap-1 p-2 md:w-[33%] w-full">
          <div className="cursor-pointer flex gap-1 text-[1.2rem] text-blue-500 font-medium justify-end items-start">
            <a href={experience.link} className="no-underline" target="_blank">
              {experience.title}
            </a>
          </div>

          <div className="timeline-logo2 text-sm text-[#eb822d]">
            <span>{experience.profile}</span>
          </div>
          <p className=" duration text-sm text-gray-700 leading-5 p-0.5">
            {experience.duration}
          </p>
        </div>
      </div>
    </div>
  );
};
