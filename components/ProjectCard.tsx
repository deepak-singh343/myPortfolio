interface Project {
  project: {
    id: number;
    title: string;
    description: string;
    link: string;
  };
}
export const ProjectCard = ({ project }: Project) => {
  return (
    <div className="w-full " key={project.id}>
      <div className="w-full absolute flex md:justify-center justify-start md:ml-0 ml-[-1.45rem]">
        <div className="w-4 h-4 bg-gray-400 rounded-full relative top-4 z-1"></div>
      </div>
      <div
        className={`timeline-box w-full min-h-[150px] md:text-right flex ${
          project.id % 2 == 0
            ? "md:justify-end justify-start md:ml-[-3rem]"
            : "justify-start md:ml-12"
        }`}
      >
        <div className="timeline-container p-2 md:w-[30%] w-full z-5">
          <div className="timeline-logo2 absolute right-[180px] w-12 overflow-hidden text-[#2857a4]">
            <span>
              <i className="fas fa-users"></i>
            </span>
          </div>
          <a
            href={project.link}
            className="cursor-pointer text-[1.2rem] text-blue-500 font-medium no-underline"
            target="_blank"
          >
            {project.title}
          </a>
          <p className="description text-justify text-sm text-gray-600 leading-5 p-0.5">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};
