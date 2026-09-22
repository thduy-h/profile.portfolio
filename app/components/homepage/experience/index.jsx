// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experienceAnimation from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <section id="experience" className="relative z-50 scroll-mt-24 border-t border-[#25213b] py-16 lg:py-24" aria-labelledby="experience-heading">
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center mb-10">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 id="experience-heading" className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Experience</h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <div className="mx-auto hidden w-48 lg:block" aria-hidden="true"><AnimationLottie animationPath={experienceAnimation} /></div>
          <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt=""
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-start gap-x-5 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </h3>
                          <p className="text-sm sm:text-base text-violet-200">
                            {experience.company}
                          </p>
                          <p className="mt-1 text-xs text-gray-400">{experience.location}</p>
                          <p className="mt-4 text-sm leading-6 text-gray-300">{experience.description}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
