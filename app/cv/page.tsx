import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const sections = [
  {
    heading: "Current positions",
    items: [
      { period: "2024–", role: "Wallenberg Scholar, Knut and Alice Wallenberg Foundation" },
      { period: "2015–", role: "Professor of Peace and Conflict Research, Uppsala University" },
      { period: "2013–", role: "Senior Researcher, Peace Research Institute Oslo (PRIO)" },
      { period: "2018–", role: "Member, Royal Swedish Academy of Letters, History and Antiquities (Kungl. Vitterhetsakademien)" },
    ],
  },
  {
    heading: "Education",
    items: [
      { period: "2009", role: "PhD, Peace and Conflict Research, Uppsala University" },
      { period: "2003", role: "MA, Peace and Conflict Research, Uppsala University" },
      { period: "2001", role: "BA, Political Science, University of Bergen, Norway" },
    ],
  },
  {
    heading: "Previous positions",
    items: [
      { period: "2009–2015", role: "Associate Professor, Department of Peace and Conflict Research, Uppsala University" },
      { period: "2019–2024", role: "Wallenberg Academy Fellow, Wallenberg Academy Fellows programme" },
      { period: "2011–2013", role: "Researcher, Peace Research Institute Oslo (PRIO)" },
    ],
  },
  {
    heading: "Grants and fellowships",
    items: [
      { period: "2024–2029", role: "Wallenberg Scholar — SEK 25 million, Knut and Alice Wallenberg Foundation" },
      { period: "2019–2023", role: "Wallenberg Academy Fellows — SEK 9 million, Knut and Alice Wallenberg Foundation" },
      { period: "2019–2024", role: "ERC Consolidator Grant (Co-I) — €2 million, European Research Council" },
      { period: "2016–2020", role: "Research grant — SEK 5.2 million, Swedish Research Council (Vetenskapsrådet)" },
      { period: "2012–2016", role: "Research grant — SEK 4.1 million, Swedish Research Council (Vetenskapsrådet)" },
      { period: "2012–2016", role: "DECO dataset grant — SEK 2.8 million, Swedish Research Council" },
    ],
  },
  {
    heading: "Editorial service",
    items: [
      { period: "2020–", role: "Editorial Board Member, Journal of Peace Research" },
      { period: "2019–", role: "Editorial Board Member, Conflict Management and Peace Science" },
      { period: "2022–", role: "Associate Editor, Journal of Conflict Resolution" },
    ],
  },
  {
    heading: "Selected awards and distinctions",
    items: [
      { period: "2024", role: "Wallenberg Scholar" },
      { period: "2022", role: "Cited as one of Sweden's most influential researchers under 50 (Ny Teknik / Veckans Affärer)" },
      { period: "2019", role: "Wallenberg Academy Fellow" },
      { period: "2018", role: "Member, Kungl. Vitterhetsakademien" },
      { period: "2016", role: "APSA Best Paper on Comparative Democratization (co-author)" },
    ],
  },
  {
    heading: "PhD students (current)",
    items: [
      { period: "2022–", role: "Doctoral student 1 — Electoral violence and participation in weakly institutionalized settings" },
      { period: "2021–", role: "Doctoral student 2 — Political intimidation and media freedom in democratizing regimes" },
      { period: "2020–", role: "Doctoral student 3 — Climate, food insecurity, and communal conflict in the Sahel" },
    ],
  },
];

export default function CVPage() {
  return (
    <main style={{ backgroundColor: "var(--cream)" }}>
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Curriculum Vitae
            </p>
            <h1 className="font-serif text-4xl leading-tight" style={{ color: "var(--slate-deep)" }}>
              Hanne Fjelde
            </h1>
            <p className="font-sans text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Professor of Peace and Conflict Research, Uppsala University
            </p>
          </div>
          <a
            href="/hanne-fjelde-cv.pdf"
            className="font-sans text-sm px-5 py-2.5 self-start"
            style={{ backgroundColor: "var(--slate-deep)", color: "var(--cream)" }}
          >
            Download PDF →
          </a>
        </div>

        {/* CV sections */}
        <div className="flex flex-col gap-16">
          {sections.map((section) => (
            <section key={section.heading}>
              <p
                className="font-sans text-xs font-medium tracking-widest uppercase mb-6 pb-3 border-b"
                style={{ color: "var(--accent)", borderColor: "var(--border)" }}
              >
                {section.heading}
              </p>
              <div className="flex flex-col gap-3">
                {section.items.map((item, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4">
                    <span className="col-span-3 font-sans text-sm" style={{ color: "var(--text-muted)" }}>
                      {item.period}
                    </span>
                    <span className="col-span-9 font-sans text-sm" style={{ color: "var(--slate)" }}>
                      {item.role}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Publications note */}
          <section>
            <p
              className="font-sans text-xs font-medium tracking-widest uppercase mb-4 pb-3 border-b"
              style={{ color: "var(--accent)", borderColor: "var(--border)" }}
            >
              Publications
            </p>
            <p className="font-sans text-sm" style={{ color: "var(--text-muted)" }}>
              40 peer-reviewed journal articles. Full list available on the{" "}
              <a href="/publications" className="nav-link">Publications page</a>{" "}
              or{" "}
              <a href="https://scholar.google.com/citations?user=0ZZzVyAAAAAJ" target="_blank" rel="noopener noreferrer" className="nav-link">
                Google Scholar
              </a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
