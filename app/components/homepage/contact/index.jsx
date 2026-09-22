import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";

function ContactSection() {
  const details = [
    { icon: MdAlternateEmail, label: personalData.email, href: `mailto:${personalData.email}` },
    { icon: IoMdCall, label: personalData.phone, href: `tel:${personalData.phone}` },
    { icon: CiLocationOn, label: personalData.address }
  ];
  const socials = [
    { href: personalData.github, label: "GitHub", icon: IoLogoGithub },
    { href: personalData.linkedIn, label: "LinkedIn", icon: BiLogoLinkedin }
  ].filter(({ href }) => href);

  return (
    <section id="contact" className="relative scroll-mt-24 py-16 lg:py-24" aria-labelledby="contact-heading">
      <span className="absolute -right-8 top-28 hidden rounded-md bg-[#1a1443] px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white [writing-mode:vertical-rl] lg:block" aria-hidden="true">Contact</span>
      <div className="rounded-2xl border border-[#353951] bg-gradient-to-br from-[#11152c] to-[#0a0d37] p-7 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#16f2b3]">Let&apos;s connect</p>
            <h2 id="contact-heading" className="mt-3 text-3xl font-bold text-white">Research, AI, and real-world systems</h2>
            <p className="mt-5 max-w-2xl leading-7 text-gray-300">I&apos;m open to AI internships, computer vision roles, research opportunities, and collaborations on deployable intelligent systems.</p>
            <Link href={`mailto:${personalData.email}`} className="mt-7 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5">Email me</Link>
            <div className="mt-8 space-y-4">
              {details.map(({ icon: Icon, label, href }) => {
                const content = <><Icon className="shrink-0 text-pink-400" size={24} /><span className="break-all sm:break-normal">{label}</span></>;
                return href ? <Link key={label} href={href} className="flex items-center gap-3 rounded-lg border border-[#353951] p-3 text-gray-200 hover:border-[#16f2b3]/60 hover:text-[#16f2b3]">{content}</Link> : <div key={label} className="flex items-center gap-3 rounded-lg border border-[#353951] p-3 text-gray-200">{content}</div>;
              })}
              <div className="flex gap-3 pt-2">
                {socials.map(({ href, label, icon: Icon }) => <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full border border-[#353951] p-3 text-gray-200 hover:border-[#16f2b3] hover:text-[#16f2b3]"><Icon size={24} /></Link>)}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
