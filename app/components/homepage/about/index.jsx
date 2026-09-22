import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 lg:py-24" aria-labelledby="about-heading">
      <span className="absolute -right-8 top-28 hidden rounded-md bg-[#1a1443] px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white [writing-mode:vertical-rl] lg:block" aria-hidden="true">About me</span>
      <div className="grid grid-cols-1 gap-8 rounded-2xl border border-[#25213b] bg-[#11152c]/60 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-14 lg:p-12">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#16f2b3]">Profile</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-bold text-white">About me</h2>
          <div className="mt-6 flex items-start gap-3 text-sm text-violet-200">
            <FiMapPin className="mt-0.5 shrink-0 text-pink-500" size={18} />
            <span>{personalData.address}<br />{personalData.availability}</span>
          </div>
          <div className="mt-8 space-y-5 text-base leading-8 text-gray-300 lg:text-lg">
            {personalData.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="relative flex min-h-[390px] flex-col items-center justify-end overflow-hidden rounded-2xl border border-violet-500/30 bg-[#0d1224] p-6 sm:min-h-[450px]">
          <Image src={personalData.profile} alt="Thanh Duy Huynh holding a laptop" fill sizes="(max-width: 1023px) 100vw, 40vw" className="object-cover object-[center_30%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224]/95 via-[#0d1224]/15 to-transparent" aria-hidden="true" />
          <div className="relative flex flex-wrap justify-center gap-2 text-xs text-violet-100">
            {["Computer Vision", "Video Understanding", "Edge AI", "Robotics"].map((focus) => <span key={focus} className="rounded-full border border-violet-400/30 bg-[#1a1443]/90 px-3 py-1.5">{focus}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
