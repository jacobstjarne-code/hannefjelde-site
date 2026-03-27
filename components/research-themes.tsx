const themes = [
  {
    number: "01",
    title: "Electoral violence and democratic backsliding",
    description:
      "Why do some elections turn violent, and what does exposure to that violence do to voters' democratic attitudes? My research tracks how coercion at the ballot box shapes citizens' relationship to democratic institutions — in new democracies and in established ones facing new strains.",
  },
  {
    number: "02",
    title: "Political institutions and armed conflict",
    description:
      "How do formal and informal institutions shape the risk of organized violence, and how does violence reshape institutions in return? I study the recursive relationship between political order and conflict, with particular attention to how electoral systems, party structures, and governance arrangements condition the risk of violence.",
  },
  {
    number: "03",
    title: "Climate change, food insecurity, and conflict",
    description:
      "When do climate-induced shocks translate into armed conflict, and what institutions prevent that path? This strand of my research examines the conditions under which environmental stress becomes politically destabilizing — and how governance can interrupt that chain.",
  },
];

export default function ResearchThemes() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      {/* Section heading */}
      <p
        className="font-sans text-xs font-medium tracking-widest uppercase mb-10"
        style={{ color: "var(--accent)" }}
      >
        Research themes
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <div
            key={theme.number}
            className="flex flex-col gap-4 p-6"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--cream)",
            }}
          >
            {/* Number */}
            <span
              className="font-serif text-4xl leading-none select-none"
              style={{ color: "var(--border)" }}
            >
              {theme.number}
            </span>

            {/* Title */}
            <h3
              className="font-serif text-lg leading-snug"
              style={{ color: "var(--slate-deep)" }}
            >
              {theme.title}
            </h3>

            {/* Description */}
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {theme.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
