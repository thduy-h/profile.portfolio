// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <section id="education" className="relative z-50 scroll-mt-24 border-t border-[#25213b] py-16 lg:py-24" aria-labelledby="education-heading">
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 id="education-heading" className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Education</h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt=""
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-start gap-x-5 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </h3>
                          <p className="text-sm sm:text-base text-violet-200">{education.institution}</p>
                          <p className="mt-1 text-xs text-gray-400">{education.location}{education.gpa ? ` · GPA ${education.gpa}` : ""}</p>
                          {education.courses && <div className="mt-4 flex flex-wrap gap-2">{education.courses.map((course) => <span key={course} className="rounded-md bg-[#1a1443] px-2 py-1 text-xs text-gray-200">{course}</span>)}</div>}
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

export default Education;
