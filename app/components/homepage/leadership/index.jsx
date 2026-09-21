import { leadership } from "@/utils/data/leadership";
import { FiUsers } from "react-icons/fi";

function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24 border-t border-[#25213b] py-16 lg:py-20" aria-labelledby="leadership-heading">
      <div className="mb-8">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#16f2b3]">Community</p>
        <h2 id="leadership-heading" className="mt-3 text-3xl font-bold text-white">Leadership & Activities</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {leadership.map((item) => (
          <article key={item.id} className="rounded-xl border border-[#25213b] bg-gradient-to-br from-[#11152c] to-[#0a0d37] p-6">
            <div className="flex items-center justify-between gap-3"><FiUsers className="text-pink-400" size={22} /><span className="font-mono text-xs text-[#16f2b3]">{item.duration}</span></div>
            <h3 className="mt-5 text-lg font-semibold leading-7 text-white">{item.organization}</h3>
            <p className="mt-2 text-sm font-medium text-violet-300">{item.role}</p>
            {(item.affiliation || item.location) && <p className="mt-1 text-xs text-gray-400">{item.affiliation || item.location}</p>}
            {item.description && <p className="mt-4 text-sm leading-6 text-gray-300">{item.description}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Leadership;
