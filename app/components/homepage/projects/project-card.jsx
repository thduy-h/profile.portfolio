import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <article className="w-full rounded-xl border border-[#1b2c68a0] bg-gradient-to-br from-[#11152c] to-[#0a0d37] p-6 shadow-[0_0_30px_rgba(0,0,0,0.25)] lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-300">{project.type}</span>
        <span className="font-mono text-xs text-[#16f2b3]">{project.duration}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold leading-8 text-white lg:text-2xl">{project.name}</h3>
      <p className="mt-2 text-sm text-violet-300">{project.organization} · {project.role}</p>
      <p className="mt-5 leading-7 text-gray-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((tool) => <span key={tool} className="rounded-md bg-[#1a1443] px-2.5 py-1.5 text-xs text-violet-100">{tool}</span>)}
      </div>
      {(project.code || project.demo) && (
        <div className="mt-6 flex gap-4">
          {project.code && <Link href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#16f2b3] hover:underline"><FiGithub /> Code</Link>}
          {project.demo && <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#16f2b3] hover:underline"><FiExternalLink /> Demo</Link>}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
