import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const themes = [
  {
    number: "01",
    title: "Electoral violence and democratic backsliding",
    body: [
      "Why do some elections turn violent, and what does exposure to that violence do to voters' democratic attitudes and behavior? This question sits at the center of my research. Using original survey data from Kenya, Nigeria, Uganda, and India — collected before and after elections — I study how experiences of coercion, intimidation, and violence shape citizens' willingness to participate in politics and their confidence in democratic institutions.",
      "As a Wallenberg Scholar, I am extending this work to established democracies in Europe and North America, where political violence has re-emerged as a threat. The key question is whether the mechanisms documented in weakly institutionalized settings — a retreat from participation, polarization, declining trust — are visible in richer democratic contexts as well.",
      "This strand of research draws on natural experiments, survey experiments, and large-N observational data, including the DECO dataset on election violence that I co-developed with Kristine Höglund.",
    ],
    publications: [
      "Electoral Violence and Democratic Attitudes: Evidence from Survey Experiments in Kenya and Nigeria (AJPS, 2024)",
      "Incumbent Violence and Voter Turnout in Sub-Saharan Africa (JPR, 2023)",
      "When Does Electoral Violence Spread? Party Systems and the Geography of Election Conflict (BJPS, 2023)",
      "Political Exclusion and the Risk of Electoral Violence (JCR, 2021)",
    ],
  },
  {
    number: "02",
    title: "Political institutions and armed conflict",
    body: [
      "How do formal and informal political institutions shape the risk of organized violence? And how does violence, in turn, reshape institutions? My early research addressed these questions at the macro level — studying how party systems, state capacity, and regime type condition the onset of civil war and communal conflict.",
      "More recently I have focused on the micro-politics of armed conflict: how rebel groups govern territory, how civilians navigate competing armed authorities, and how the logic of protection and predation shapes the civilian experience of war. This work draws on case studies from Sub-Saharan Africa and South Asia, combined with event data analysis.",
    ],
    publications: [
      "Armed Group Governance and the Politics of Protection in Civil War (World Politics, 2022)",
      "Rebels and Militias: Competing Non-State Armed Groups and Civilian Targeting (JCR, 2019)",
      "State Capacity and the Onset of Civil War (CPS, 2018)",
    ],
  },
  {
    number: "03",
    title: "Climate change, food insecurity, and conflict",
    body: [
      "When do climate-induced shocks translate into armed conflict, and what institutions interrupt that path? This strand of my research examines the conditions under which environmental stress — drought, flood, harvest failure — becomes politically destabilizing. The answer depends heavily on context: who is exposed, what governance structures exist, and how resources are distributed across groups.",
      "My work in this area has contributed to debates about the climate-conflict nexus by disaggregating the relationship: not all shocks lead to violence, and understanding the intervening political conditions is essential for both theory and policy.",
    ],
    publications: [
      "Food Insecurity and Political Instability: Disaggregating the Relationship (CPS, 2022)",
      "Climate Variability, Agricultural Shocks, and Communal Conflicts in Sub-Saharan Africa (JPR, 2014)",
    ],
  },
];

export default function ResearchPage() {
  return (
    <main style={{ backgroundColor: "var(--cream)" }}>
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Research
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6" style={{ color: "var(--slate-deep)" }}>
            Three questions, twenty years of work.
          </h1>
          <p className="font-sans text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            My research has always circled the same core question from different angles: what is the relationship between political violence and democratic institutions? I started by asking which institutional conditions make elections vulnerable to violence. Over time, the question shifted — from the structural causes of violence to its effects on the people who live through it, and on the democracies they inhabit.
          </p>
        </div>

        {/* Themes */}
        <div className="flex flex-col gap-20">
          {themes.map((theme) => (
            <div key={theme.number} className="grid md:grid-cols-12 gap-8">
              {/* Number + title */}
              <div className="md:col-span-4">
                <span className="font-serif text-6xl leading-none select-none block mb-4" style={{ color: "var(--border)" }}>
                  {theme.number}
                </span>
                <h2 className="font-serif text-xl leading-snug" style={{ color: "var(--slate-deep)" }}>
                  {theme.title}
                </h2>
              </div>

              {/* Body + publications */}
              <div className="md:col-span-8 flex flex-col gap-6">
                {theme.body.map((para, i) => (
                  <p key={i} className="font-sans text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {para}
                  </p>
                ))}

                {/* Key publications */}
                <div className="mt-2">
                  <p className="font-sans text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
                    Key publications
                  </p>
                  <ul className="flex flex-col gap-2">
                    {theme.publications.map((pub, i) => (
                      <li key={i} className="font-sans text-xs leading-relaxed" style={{ color: "var(--text-muted)", paddingLeft: "1rem", borderLeft: "1px solid var(--border)" }}>
                        {pub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
