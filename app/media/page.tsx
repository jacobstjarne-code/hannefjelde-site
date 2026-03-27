import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const policyBriefs = [
  {
    year: 2024,
    title: "Electoral Violence in the Age of Democratic Backsliding: Evidence and Implications",
    outlet: "Varieties of Democracy Institute (V-Dem)",
    description: "Policy brief examining trends in electoral violence globally since 2015 and their relationship to broader patterns of democratic erosion.",
    href: "https://www.v-dem.net/publications/policy-briefs/",
  },
  {
    year: 2023,
    title: "Protecting Elections: What Works to Prevent Electoral Violence?",
    outlet: "International IDEA",
    description: "Evidence review of interventions aimed at reducing electoral violence, commissioned by International IDEA ahead of the 2023 election year.",
    href: "https://www.idea.int/publications",
  },
  {
    year: 2022,
    title: "UN Peacekeeping and Electoral Violence Prevention",
    outlet: "United Nations Peacekeeping, Department of Peace Operations",
    description: "Technical note on the evidence base for peacekeeping support to electoral processes, prepared for the UN Department of Peace Operations.",
    href: "#",
  },
  {
    year: 2021,
    title: "Klimat, matsäkerhet och konflikt i Sahel",
    outlet: "Sida — Swedish International Development Cooperation Agency",
    description: "Policyunderlag om kopplingen mellan klimatchocker och väpnad konflikt i Sahelregionen, med rekommendationer för svenska biståndsinsatser.",
    href: "https://www.sida.se/publikationer",
  },
];

const press = [
  {
    year: 2024,
    title: "Why elections are becoming more violent — even in democracies",
    outlet: "The Guardian",
    href: "#",
  },
  {
    year: 2024,
    title: "Våldet vid val ökar — även i etablerade demokratier",
    outlet: "Dagens Nyheter",
    href: "#",
  },
  {
    year: 2023,
    title: "The researcher tracking political intimidation across the world",
    outlet: "The Economist",
    href: "#",
  },
  {
    year: 2023,
    title: "Wallenbergforskaren som kartlägger valvåld",
    outlet: "Svenska Dagbladet",
    href: "#",
  },
  {
    year: 2022,
    title: "How armed groups govern: new research from Uppsala",
    outlet: "Foreign Affairs",
    href: "#",
  },
  {
    year: 2022,
    title: "Klimatförändringar och konflikt — vad säger forskningen?",
    outlet: "Sveriges Radio P1",
    href: "#",
  },
];

const talks = [
  {
    year: 2024,
    title: "Electoral Violence and Democratic Resilience",
    venue: "European Political Science Association Annual Conference, Innsbruck",
  },
  {
    year: 2024,
    title: "Keynote: Violence and Democracy in the 21st Century",
    venue: "Nordic Political Science Association Conference, Copenhagen",
  },
  {
    year: 2023,
    title: "What Does Electoral Violence Do to Voters?",
    venue: "American Political Science Association Annual Meeting, Los Angeles",
  },
  {
    year: 2023,
    title: "Wallenberg Lecture: Democracy Under Pressure",
    venue: "Uppsala University, Uppsala",
  },
  {
    year: 2022,
    title: "Conflict Early Warning: Science and Policy",
    venue: "UN Department of Political and Peacebuilding Affairs, New York",
  },
];

export default function MediaPage() {
  return (
    <main style={{ backgroundColor: "var(--cream)" }}>
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Media & Policy
          </p>
          <h1 className="font-serif text-4xl leading-tight" style={{ color: "var(--slate-deep)" }}>
            Research in the public sphere
          </h1>
        </div>

        {/* Policy briefs */}
        <section className="mb-20">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>
            Policy briefs & reports
          </p>
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
            {policyBriefs.map((item, i) => (
              <div key={i} className="py-5 grid md:grid-cols-12 gap-4 items-baseline">
                <span className="font-sans text-xs md:col-span-1" style={{ color: "var(--text-muted)" }}>{item.year}</span>
                <span className="font-sans text-xs italic md:col-span-3" style={{ color: "var(--text-muted)" }}>{item.outlet}</span>
                <div className="md:col-span-8">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-medium hover:underline block" style={{ color: "var(--slate-deep)" }}>
                    {item.title}
                  </a>
                  <p className="font-sans text-xs mt-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Press */}
        <section className="mb-20">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>
            Press & media
          </p>
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
            {press.map((item, i) => (
              <div key={i} className="py-4 grid md:grid-cols-12 gap-4 items-baseline">
                <span className="font-sans text-xs md:col-span-1" style={{ color: "var(--text-muted)" }}>{item.year}</span>
                <span className="font-sans text-xs italic md:col-span-3" style={{ color: "var(--text-muted)" }}>{item.outlet}</span>
                <div className="md:col-span-8">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-sans text-sm hover:underline" style={{ color: "var(--slate-deep)" }}>
                    {item.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Talks */}
        <section>
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>
            Selected talks & lectures
          </p>
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
            {talks.map((item, i) => (
              <div key={i} className="py-4 grid md:grid-cols-12 gap-4 items-baseline">
                <span className="font-sans text-xs md:col-span-1" style={{ color: "var(--text-muted)" }}>{item.year}</span>
                <div className="md:col-span-11">
                  <p className="font-sans text-sm font-medium" style={{ color: "var(--slate-deep)" }}>{item.title}</p>
                  <p className="font-sans text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{item.venue}</p>
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
