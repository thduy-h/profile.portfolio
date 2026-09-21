import { publications } from "@/utils/data/publications";
import Link from "next/link";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

function Publications() {
  return (
    <section id="publications" className="scroll-mt-24 border-t border-[#25213b] py-16 lg:py-24" aria-labelledby="publications-heading">
      <div className="mb-10">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#16f2b3]">Peer-reviewed work</p>
        <h2 id="publications-heading" className="mt-3 text-3xl font-bold text-white">Publications & Research</h2>
      </div>
      <div className="grid gap-5">
        {publications.map((publication) => (
          <article key={publication.id} className="group rounded-xl border border-[#1f2949] bg-gradient-to-r from-[#11152c] to-[#0a0d37] p-6 transition-all hover:border-violet-500/60 lg:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400"><FiBookOpen size={22} /></div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-pink-500/10 px-3 py-1 text-pink-300">{publication.status}</span>
                  <span className="rounded-full bg-[#16f2b3]/10 px-3 py-1 text-[#16f2b3]">{publication.year}</span>
                  {publication.paperId && <span className="rounded-full bg-violet-500/10 px-3 py-1 text-violet-200">Paper ID {publication.paperId}</span>}
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-8 text-white">{publication.title}</h3>
                <p className="mt-2 text-sm font-medium text-violet-300">{publication.venue}{publication.publisher ? ` · ${publication.publisher}` : ""}</p>
                <p className="mt-4 leading-7 text-gray-300">{publication.description}</p>
                {publication.results && <div className="mt-4 flex flex-wrap gap-2">{publication.results.map((result) => <span key={result} className="rounded-md border border-[#353951] bg-[#0d1224] px-3 py-1.5 text-xs text-gray-200">{result}</span>)}</div>}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {publication.tags.map((tag) => <span key={tag} className="text-xs text-gray-400">#{tag.replaceAll(" ", "")}</span>)}
                  {publication.link && <Link href={publication.link} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#16f2b3] hover:underline">{publication.linkLabel} <FiArrowUpRight /></Link>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Publications;
