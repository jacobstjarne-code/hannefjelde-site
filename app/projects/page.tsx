import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const ongoing = [
  {
    title: "Violence, Intimidation, and Democratic Attitudes in Established Democracies",
    funder: "Knut and Alice Wallenberg Foundation (Wallenberg Scholar)",
    period: "2024–2029",
    role: "Principal Investigator",
    description:
      "How does exposure to political violence — from street intimidation to targeted attacks on politicians and journalists — affect democratic attitudes and behavior in countries where such violence was thought to have been left behind? This five-year project develops new survey instruments, conducts panel studies in three European countries and the United States, and builds a comparative database of political violence incidents in established democracies since 2000.",
  },
  {
    title: "Electoral Violence and Voter Behavior: A Multi-Country Study",
    funder: "Swedish Research Council (Vetenskapsrådet)",
    period: "2021–2025",
    role: "Principal Investigator",
    description:
      "Combining pre- and post-election panel surveys with election violence data from the DECO dataset, this project examines how electoral violence shapes voter turnout, party choice, and political engagement in Kenya, Nigeria, Uganda, and India. The project has fielded surveys around four national elections and includes a survey experiment component testing mechanisms of intimidation effects.",
  },
  {
    title: "Conflict Early Warning: Machine Learning and Expert Judgment",
    funder: "European Research Council (ERC Consolidator Grant)",
    period: "2019–2024",
    role: "Co-Investigator",
    description:
      "Developing and validating a conflict early warning system for sub-national armed conflict onset, combining machine learning models with expert elicitation. The project has produced publicly available conflict forecasts for 50+ countries and generated methods papers on the comparative performance of quantitative forecasting approaches.",
  },
];

const completed = [
  {
    title: "Electoral Violence and Democratic Participation (EVDP)",
    funder: "Wallenberg Academy Fellows (Swedish Research Council)",
    period: "2019–2023",
    description:
      "Studied how experiences of electoral violence affect post-election political participation, focusing on West Africa and South Asia. Produced seven peer-reviewed publications and the India Election Violence Survey (2019, 2024).",
  },
  {
    title: "DECO: Dataset on Electoral Conflict",
    funder: "Swedish Research Council",
    period: "2012–2018",
    description:
      "Co-developed with Kristine Höglund (Uppsala University). Systematic data on the presence, type, and severity of electoral violence in national elections worldwide, 1990–2017. Now maintained and updated by the V-Dem project.",
  },
  {
    title: "Armed Group Governance and Civilian Protection",
    funder: "Swedish Research Council",
    period: "2015–2019",
    description:
      "Examined how rebel groups and pro-government militias govern civilian populations in civil war, with case studies in the DRC, South Sudan, and Myanmar. Key outputs: two books and four journal articles.",
  },
];

export default function ProjectsPage() {
  return (
    <main style={{ backgroundColor: "var(--cream)" }}>
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Projects
          </p>
          <h1 className="font-serif text-4xl leading-tight" style={{ color: "var(--slate-deep)" }}>
            Ongoing and completed projects
          </h1>
        </div>

        {/* Ongoing */}
        <section className="mb-20">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>
            Ongoing
          </p>
          <div className="flex flex-col gap-10">
            {ongoing.map((p, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-6 pb-10 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="md:col-span-4 flex flex-col gap-2">
                  <span className="font-sans text-xs" style={{ color: "var(--text-muted)" }}>{p.period}</span>
                  <span className="font-sans text-xs italic" style={{ color: "var(--text-muted)" }}>{p.funder}</span>
                  <span className="font-sans text-xs" style={{ color: "var(--text-muted)" }}>{p.role}</span>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-serif text-lg mb-3" style={{ color: "var(--slate-deep)" }}>{p.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Completed */}
        <section>
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>
            Completed
          </p>
          <div className="flex flex-col gap-8">
            {completed.map((p, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-6 pb-8 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="md:col-span-4 flex flex-col gap-1">
                  <span className="font-sans text-xs" style={{ color: "var(--text-muted)" }}>{p.period}</span>
                  <span className="font-sans text-xs italic" style={{ color: "var(--text-muted)" }}>{p.funder}</span>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-serif text-base mb-2" style={{ color: "var(--slate-deep)" }}>{p.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
