import { personalData } from "@/utils/data/personal-data";
import { FiMapPin } from "react-icons/fi";

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-24" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 gap-8 rounded-2xl border border-[#25213b] bg-[#11152c]/60 p-6 sm:p-8 lg:grid-cols-[0.42fr_1fr] lg:gap-14 lg:p-12">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#16f2b3]">Profile</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-bold text-white">About me</h2>
          <div className="mt-6 flex items-start gap-3 text-sm text-violet-200">
            <FiMapPin className="mt-0.5 shrink-0 text-pink-500" size={18} />
            <span>{personalData.address}<br />{personalData.availability}</span>
          </div>
        </div>
        <div className="space-y-5 text-base leading-8 text-gray-300 lg:text-lg">
          {personalData.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
