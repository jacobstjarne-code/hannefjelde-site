import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--cream)" }}>
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">

          {/* Portrait */}
          <div className="md:col-span-4">
            <div
              className="aspect-[3/4] w-full overflow-hidden mb-6"
              style={{ backgroundColor: "var(--cream-dark)" }}
            >
              <div className="w-full h-full flex items-center justify-center" style={{ color: "var(--text-muted)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                PORTRAIT
              </div>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Position", value: "Professor of Peace and Conflict Research" },
                { label: "Institution", value: "Uppsala University" },
                { label: "Department", value: "Department of Peace and Conflict Research" },
                { label: "Affiliation", value: "Peace Research Institute Oslo (PRIO)" },
                { label: "Fellowship", value: "Wallenberg Scholar (2024–2029)" },
              ].map((fact) => (
                <div key={fact.label}>
                  <p className="font-sans text-xs font-medium" style={{ color: "var(--text-muted)" }}>{fact.label}</p>
                  <p className="font-sans text-sm" style={{ color: "var(--slate)" }}>{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <p className="font-sans text-xs font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              About
            </p>

            <h1 className="font-serif text-3xl leading-snug" style={{ color: "var(--slate-deep)" }}>
              Hanne Fjelde
            </h1>

            <div className="flex flex-col gap-5" style={{ color: "var(--text-muted)" }}>
              <p className="font-sans text-base leading-relaxed">
                I am a Professor at Uppsala University's Department of Peace and Conflict Research and a Senior Researcher at the Peace Research Institute Oslo (PRIO). In 2024, I was appointed Wallenberg Scholar by the Knut and Alice Wallenberg Foundation — Sweden's most prestigious research fellowship — for a five-year research program on political violence and democratic attitudes in established democracies.
              </p>
              <p className="font-sans text-base leading-relaxed">
                My research has always circled the same question from different angles: what is the relationship between political violence and democratic institutions? I started by asking which institutional conditions make elections vulnerable to violence. Over time, the question shifted — from the structural causes of violence to its effects on the people who live through it, and on the democracies they inhabit.
              </p>
              <p className="font-sans text-base leading-relaxed">
                I grew up in Norway and came to Uppsala for my doctorate, which I completed in 2009. I have been at Uppsala since. Before focusing on electoral violence, I worked on civil war onset, rebel governance, and the role of natural resources and state capacity in armed conflict. That earlier work continues to inform how I think about the relationship between institutions, power, and violence.
              </p>
              <p className="font-sans text-base leading-relaxed">
                I have conducted fieldwork in Kenya, Nigeria, Uganda, and India, and I collaborate closely with researchers at Lokniti–CSDS in New Delhi and with the V-Dem project at the University of Gothenburg. I serve on the editorial boards of the Journal of Peace Research and Conflict Management and Peace Science.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Since 2018, I have been a Member of the Royal Swedish Academy of Letters, History and Antiquities (Kungl. Vitterhetsakademien).
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
              <p className="font-sans text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>Contact & profiles</p>
              <a href="mailto:hanne.fjelde@pcr.uu.se" className="nav-link font-sans text-sm">hanne.fjelde@pcr.uu.se</a>
              <a href="https://scholar.google.com/citations?user=0ZZzVyAAAAAJ" target="_blank" rel="noopener noreferrer" className="nav-link font-sans text-sm">Google Scholar</a>
              <a href="https://orcid.org/0000-0002-4481-8884" target="_blank" rel="noopener noreferrer" className="nav-link font-sans text-sm">ORCID 0000-0002-4481-8884</a>
              <a href="https://www.uu.se/en/contact-and-organisation/staff?query=N3-1270" target="_blank" rel="noopener noreferrer" className="nav-link font-sans text-sm">Uppsala University profile</a>
              <a href="https://www.prio.org/people/9392" target="_blank" rel="noopener noreferrer" className="nav-link font-sans text-sm">PRIO profile</a>
            </div>

            <div className="pt-2">
              <Link href="/cv" className="font-sans text-sm nav-link">Download CV →</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
