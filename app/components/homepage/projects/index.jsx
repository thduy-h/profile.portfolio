import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <section id='projects' className="relative z-50 scroll-mt-24 py-16 lg:py-24" aria-labelledby="projects-heading">
      <div>
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <h2 id="projects-heading" className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">SELECTED AI PROJECTS</h2>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="w-full"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
