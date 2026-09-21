"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Publications", "#publications"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"]
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative z-[100] py-5" aria-label="Primary navigation">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-mono text-xl font-bold tracking-tight text-[#16f2b3] sm:text-2xl">TD<span className="text-pink-500">.</span>AI</Link>
        <button type="button" className="rounded-md p-2 text-white md:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
          {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
        <ul className="hidden items-center md:flex">
          {links.map(([label, href]) => <li key={href}><Link className="block px-3 py-2 text-xs uppercase tracking-wide text-gray-200 transition-colors hover:text-pink-500 lg:px-4 lg:text-sm" href={`/${href}`}>{label}</Link></li>)}
        </ul>
      </div>
      {open && (
        <ul id="mobile-navigation" className="absolute left-0 right-0 top-full rounded-xl border border-[#353951] bg-[#0d1224]/95 p-3 shadow-2xl backdrop-blur md:hidden">
          {links.map(([label, href]) => <li key={href}><Link className="block rounded-lg px-4 py-3 text-sm uppercase tracking-wide text-gray-200 hover:bg-[#1a1443] hover:text-pink-400" href={`/${href}`} onClick={() => setOpen(false)}>{label}</Link></li>)}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
