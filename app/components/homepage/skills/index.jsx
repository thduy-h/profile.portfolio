import { iconSkills, skillGroups } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 border-t border-[#25213b] py-16 lg:py-24" aria-labelledby="skills-heading">
      <div className="mb-10 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#16f2b3]">Technical foundation</p>
        <h2 id="skills-heading" className="mt-3 text-3xl font-bold text-white">Skills & Expertise</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.name} className="rounded-xl border border-[#1f2949] bg-gradient-to-br from-[#11152c] to-[#0a0d37] p-6 transition-colors hover:border-violet-500/60">
            <h3 className="text-lg font-semibold text-pink-400">{group.name}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const iconName = iconSkills[skill];
                const icon = iconName ? skillsImage(iconName) : null;
                return (
                  <span key={skill} className="inline-flex items-center gap-2 rounded-full border border-[#353951] bg-[#0d1224] px-3 py-2 text-sm text-gray-200">
                    {icon && <Image src={icon.src} alt="" width={18} height={18} className="h-[18px] w-[18px]" />}
                    {skill}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
