import { awards } from "@/utils/data/awards";
import { FiAward } from "react-icons/fi";

function Awards() {
  return (
    <section id="awards" className="scroll-mt-24 py-16 lg:py-20" aria-labelledby="awards-heading">
      <div className="mb-8 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#16f2b3]">Recognition & learning</p>
        <h2 id="awards-heading" className="mt-3 text-3xl font-bold text-white">Awards & Certifications</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award) => (
          <article key={award.id} className="rounded-xl border border-[#25213b] bg-[#11152c]/70 p-5">
            <div className="flex items-center justify-between gap-3"><FiAward className="text-pink-400" size={21} /><span className="font-mono text-xs text-[#16f2b3]">{award.date}</span></div>
            <p className="mt-4 text-xs font-medium uppercase tracking-wider text-violet-300">{award.type}</p>
            <h3 className="mt-2 font-semibold leading-6 text-white">{award.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{award.issuer}</p>
            {award.detail && <p className="mt-3 text-sm leading-6 text-gray-300">{award.detail}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Awards;
