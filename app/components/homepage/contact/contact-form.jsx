"use client";

import { personalData } from "@/utils/data/personal-data";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";

function ContactForm() {
  const [message, setMessage] = useState({ name: "", email: "", note: "" });

  function openDraft(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${message.name}`);
    const body = encodeURIComponent(`From: ${message.name}\nReply email: ${message.email}\n\n${message.note}`);
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={openDraft} className="rounded-xl border border-[#464c6a] bg-[#0d1224]/70 p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-[#16f2b3]">Send an inquiry</h3>
      <p className="mt-2 text-sm leading-6 text-gray-300">Write a note here, then open it in your email app to send.</p>
      <div className="mt-5 space-y-4">
        <div><label htmlFor="contact-name" className="mb-1 block text-sm text-gray-200">Your name</label><input id="contact-name" required maxLength={100} value={message.name} onChange={(event) => setMessage({ ...message, name: event.target.value })} className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 text-white outline-none focus-visible:border-[#16f2b3]" /></div>
        <div><label htmlFor="contact-email" className="mb-1 block text-sm text-gray-200">Your email</label><input id="contact-email" type="email" required maxLength={100} value={message.email} onChange={(event) => setMessage({ ...message, email: event.target.value })} className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 text-white outline-none focus-visible:border-[#16f2b3]" /></div>
        <div><label htmlFor="contact-note" className="mb-1 block text-sm text-gray-200">Message</label><textarea id="contact-note" required maxLength={1500} rows={5} value={message.note} onChange={(event) => setMessage({ ...message, note: event.target.value })} className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 text-white outline-none focus-visible:border-[#16f2b3]" /></div>
      </div>
      <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Open email draft <TbMailForward size={18} /></button>
    </form>
  );
}

export default ContactForm;
