import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail, MdDownload } from "react-icons/md";

function HeroSection() {
  const socialLinks = [
    { href: personalData.github, label: "GitHub", icon: BsGithub },
    { href: personalData.linkedIn, label: "LinkedIn", icon: BsLinkedin },
    { href: `mailto:${personalData.email}`, label: "Email", icon: MdAlternateEmail }
  ];

  return (
    <section className="relative flex min-h-[680px] items-center py-10 lg:py-16" aria-labelledby="hero-title">
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
            <Link href="#publications" className="rounded-full border border-violet-500/70 bg-[#0d1224] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#16f2b3] hover:text-[#16f2b3]">
              View Research
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center rounded-[2rem] border border-violet-500/30 bg-gradient-to-br from-[#11152c] to-[#0a0d37] shadow-[0_0_80px_rgba(124,58,237,0.14)]">
          <div className="absolute inset-5 rounded-[1.5rem] border border-pink-500/20" />
          <div className="absolute h-52 w-52 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#16f2b3]/50 bg-[#0d1224] font-mono text-6xl font-bold text-[#16f2b3] shadow-[0_0_45px_rgba(22,242,179,0.16)]" aria-label="Thanh Duy monogram">
            {personalData.initials}
          </div>
          <span className="absolute bottom-10 rounded-full border border-violet-400/30 bg-[#11152c]/90 px-4 py-2 text-xs uppercase tracking-[0.18em] text-violet-200">Can Tho, Vietnam</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
