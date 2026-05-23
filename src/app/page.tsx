export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* Hero Banner */}
      <section className="relative bg-[#003660] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #FEBC11 0%, transparent 50%), radial-gradient(circle at 80% 20%, #fff 0%, transparent 40%)' }}
        />
        <div className="relative max-w-5xl mx-auto px-8 py-28 flex flex-col items-center text-center gap-6">
          <p className="text-[#FEBC11] uppercase tracking-[0.3em] text-sm font-semibold">
            University of California, Santa Barbara
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Society of Women<br />Engineers
          </h1>
          <p className="text-lg text-blue-100 max-w-xl">
            Empowering women in engineering at UCSB — building community, careers, and change.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            <a
              href="https://docs.google.com/forms/d/1d9BL3ikTR8HpkSv23VlGADeiOlchZzpENj8fPr5jZ7E/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FEBC11] text-[#003660] font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Join Mailing List
            </a>
            <a
              href="#about"
              className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#003660] transition font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <div className="bg-[#FEBC11] text-[#003660] text-center py-3 px-4 font-semibold text-sm tracking-wide">
        🎉 Let's have a great 2025–2026 year together! &nbsp;|&nbsp; COMING SOON: 2026–2027 Officer & Committee Elections
      </div>

      {/* Get Involved */}
      <section id="about" className="max-w-5xl mx-auto px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#003660] mb-4">Looking for Ways to Get Involved?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Whether you're interested in professional development, outreach, or industry networking — SWE at UCSB has something for you.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "Evening With Industry",
              desc: "Network with leading companies and professionals in an intimate setting.",
              href: "https://ucsbswe.weebly.com/evening-with-industry.html",
              emoji: "🏢",
            },
            {
              title: "Outreach",
              desc: "Inspire the next generation of women engineers through mentorship and events.",
              href: "https://ucsbswe.weebly.com/outreach.html",
              emoji: "🌱",
            },
            {
              title: "Tech Team",
              desc: "Build skills and real projects alongside fellow engineers in our tech team.",
              href: "https://ucsbswe.weebly.com/tech-team.html",
              emoji: "💻",
            },
          ].map(({ title, desc, href, emoji }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-200 rounded-2xl p-6 hover:border-[#003660] hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{emoji}</div>
              <h3 className="text-lg font-bold text-[#003660] mb-2 group-hover:underline">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003660] text-white text-center py-16 px-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-blue-200 mb-8 max-w-md mx-auto">
          Sign up for our mailing list to stay updated on events, elections, and opportunities.
        </p>
        <a
          href="https://docs.google.com/forms/d/1d9BL3ikTR8HpkSv23VlGADeiOlchZzpENj8fPr5jZ7E/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FEBC11] text-[#003660] font-bold px-10 py-3 rounded-full hover:bg-yellow-400 transition inline-block"
        >
          Sign Up Here →
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Society of Women Engineers @ UCSB
      </footer>

    </main>
  );
}