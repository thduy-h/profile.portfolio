export const metadata = { title: "Writing | Thanh Duy Huynh" };

export default function BlogPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20 text-center">
      <div className="max-w-xl rounded-xl border border-[#25213b] bg-[#11152c] p-10">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#16f2b3]">Writing</p>
        <h1 className="mt-3 text-3xl font-bold text-white">No articles published yet</h1>
        <p className="mt-4 leading-7 text-gray-300">This page will be updated when a verified writing source is available.</p>
      </div>
    </section>
  );
}
