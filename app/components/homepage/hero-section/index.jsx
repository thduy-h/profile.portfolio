import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail, MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  const socialLinks = [
    { href: personalData.github, label: "GitHub", icon: BsGithub },
    { href: personalData.linkedIn, label: "LinkedIn", icon: BsLinkedin },
    { href: `mailto:${personalData.email}`, label: "Email", icon: MdAlternateEmail }
  ];

  return (
    <section className="relative flex items-center py-10 lg:min-h-[680px] lg:py-16" aria-labelledby="hero-title">
      <Image src="/hero.svg" alt="" width={1572} height={795} className="absolute -top-[98px] -z-10" priority />
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-[#16f2b3]">AI · Computer Vision · Intelligent Systems</p>
          <h1 id="hero-title" className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Thanh Duy <span className="text-pink-500">Huynh</span>
          </h1>
          <h2 className="mt-5 text-xl font-semibold text-gray-100 sm:text-2xl">{personalData.designation}</h2>
          <p className="mt-3 text-sm font-medium text-violet-300 sm:text-base">{personalData.focus}</p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300">{personalData.introduction}</p>

          <div className="mt-8 flex items-center gap-5">
            {socialLinks.filter(({ href }) => href).map(({ href, label, icon: Icon }) => (
              <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="text-pink-500 transition-all duration-300 hover:scale-110 hover:text-[#16f2b3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16f2b3]">
                <Icon size={28} />
              </Link>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="#projects" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5">
              Explore Projects <BsArrowDownRight />
            </Link>
            {personalData.resume && (
              <Link href={personalData.resume} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-[#16f2b3]/70 bg-[#16f2b3]/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#dffff6] transition-colors hover:bg-[#16f2b3]/20 hover:text-white">
                Download CV <MdDownload size={18} />
              </Link>
            )}
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-violet-500/70 bg-[#0d1224] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#16f2b3] hover:text-[#16f2b3]">
              Contact me <RiContactsFill size={17} />
            </Link>
          </div>
        </div>

        <div className="w-full min-w-0 overflow-hidden rounded-xl border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] shadow-[0_0_55px_rgba(124,58,237,0.12)]" aria-label="Research profile code illustration">
          <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
          <div className="flex items-center gap-2 px-5 py-4" aria-hidden="true"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-orange-400" /><span className="h-3 w-3 rounded-full bg-green-200" /><span className="ml-auto font-mono text-[11px] text-gray-400">researcher.js</span></div>
          <div className="border-t border-indigo-900 px-5 py-6 font-mono text-xs leading-7 sm:px-7 sm:text-sm lg:px-8" aria-hidden="true">
            <p><span className="text-pink-500">const</span> <span className="text-white">researcher</span> <span className="text-pink-500">=</span> <span className="text-gray-400">{'{'}</span></p>
            <p className="pl-4"><span className="text-white">name:</span> <span className="text-amber-300">&apos;Thanh Duy Huynh&apos;</span><span className="text-gray-400">,</span></p>
            <p className="pl-4"><span className="text-white">focus:</span> <span className="text-gray-400">[</span></p>
            {['Computer Vision', 'Video Understanding', 'Deep Learning', 'Edge AI'].map((focus) => <p key={focus} className="pl-8 text-amber-300">&apos;{focus}&apos;<span className="text-gray-400">,</span></p>)}
            <p className="pl-4 text-gray-400">],</p>
            <p className="pl-4"><span className="text-white">tools:</span> <span className="text-gray-400">[</span><span className="text-amber-300">&apos;Python&apos;, &apos;PyTorch&apos;, &apos;OpenCV&apos;, &apos;ONNX&apos;, &apos;Docker&apos;</span><span className="text-gray-400">],</span></p>
            <p className="pl-4"><span className="text-white">interests:</span> <span className="text-gray-400">[</span><span className="text-cyan-300">&apos;research&apos;, &apos;deployable AI&apos;</span><span className="text-gray-400">]</span></p>
            <p className="text-gray-400">{'};'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
