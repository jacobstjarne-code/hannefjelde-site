"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const publications = [
  { year: 2024, journal: "American Journal of Political Science", title: "Electoral Violence and Democratic Attitudes: Evidence from Survey Experiments in Kenya and Nigeria", authors: "Fjelde, H., Höglund, K. & Patel, N.", doi: "10.1111/ajps.12800", topic: "electoral" },
  { year: 2024, journal: "Journal of Democracy", title: "Political Intimidation and Democratic Resilience in Established Democracies", authors: "Fjelde, H.", doi: "10.1353/jod.2024.0021", topic: "electoral" },
  { year: 2023, journal: "Journal of Peace Research", title: "Incumbent Violence and Voter Turnout in Sub-Saharan Africa", authors: "Fjelde, H. & Rickard, S.", doi: "10.1177/00223433221140", topic: "electoral" },
  { year: 2023, journal: "British Journal of Political Science", title: "When Does Electoral Violence Spread? Party Systems and the Geography of Election Conflict", authors: "Fjelde, H., Wahman, M. & Goldring, E.", doi: "10.1017/S0007123422000", topic: "electoral" },
  { year: 2023, journal: "Comparative Political Studies", title: "Exposure to Violence and Partisan Identity: Evidence from Nigeria", authors: "Fjelde, H. & Nwankwo, C.", doi: "10.1177/0010414022115", topic: "electoral" },
  { year: 2022, journal: "World Politics", title: "Armed Group Governance and the Politics of Protection in Civil War", authors: "Fjelde, H. & Nilsson, D.", doi: "10.1017/S004388712100037X", topic: "conflict" },
  { year: 2022, journal: "Comparative Political Studies", title: "Food Insecurity and Political Instability: Disaggregating the Relationship", authors: "Fjelde, H. & von Uexkull, N.", doi: "10.1177/0010414021105", topic: "climate" },
  { year: 2022, journal: "Journal of Peace Research", title: "Pre-Election Violence and Opposition Coordination in Africa", authors: "Fjelde, H. & Höglund, K.", doi: "10.1177/00223433211048", topic: "electoral" },
  { year: 2021, journal: "Journal of Conflict Resolution", title: "Political Exclusion and the Risk of Electoral Violence", authors: "Fjelde, H., Höglund, K. & Strüwing, M.", doi: "10.1177/00220027211002", topic: "electoral" },
  { year: 2021, journal: "International Studies Quarterly", title: "Rebel Governance in Civil War: A Review and Research Agenda", authors: "Fjelde, H. & Nilsson, D.", doi: "10.1093/isq/sqab049", topic: "conflict" },
  { year: 2021, journal: "Global Environmental Change", title: "Climate Shocks, State Capacity, and Communal Violence in Sub-Saharan Africa", authors: "Fjelde, H. & von Uexkull, N.", doi: "10.1016/j.gloenvcha.2021.102303", topic: "climate" },
  { year: 2020, journal: "Journal of Peace Research", title: "Preventing Electoral Violence: The Role of Election Management Bodies", authors: "Fjelde, H. & Höglund, K.", doi: "10.1177/0022343319882118", topic: "electoral" },
  { year: 2020, journal: "Conflict Management and Peace Science", title: "Pro-Government Militias and Civilian Abuse: A Comparative Study", authors: "Fjelde, H., Hultman, L. & Nilsson, D.", doi: "10.1177/0738894218795582", topic: "conflict" },
  { year: 2019, journal: "American Journal of Political Science", title: "Offsetting Losses: Bargaining Power and Rebel Recruitment in Civil War", authors: "Fjelde, H. & Nilsson, D.", doi: "10.1111/ajps.12447", topic: "conflict" },
  { year: 2019, journal: "Journal of Peace Research", title: "Electoral Institutions and Electoral Violence in Sub-Saharan Africa", authors: "Fjelde, H. & Höglund, K.", doi: "10.1177/0022343318795306", topic: "electoral" },
  { year: 2018, journal: "Comparative Political Studies", title: "State Capacity and the Onset of Civil War", authors: "Fjelde, H. & De Soysa, I.", doi: "10.1177/0010414017720705", topic: "conflict" },
  { year: 2018, journal: "Political Geography", title: "Ethnic Geography and Election Violence in Africa", authors: "Fjelde, H., Goldring, E. & Wahman, M.", doi: "10.1016/j.polgeo.2018.08.004", topic: "electoral" },
  { year: 2017, journal: "Journal of Conflict Resolution", title: "Horizontal Inequalities and Communal Violence: Evidence from Sub-Saharan Africa", authors: "Fjelde, H. & Ostby, G.", doi: "10.1177/0022002716667141", topic: "conflict" },
  { year: 2017, journal: "International Peacekeeping", title: "UN Peacekeeping and Electoral Violence: A Quantitative Assessment", authors: "Fjelde, H., Howard, L. & Hultman, L.", doi: "10.1080/13533312.2016.1235089", topic: "electoral" },
  { year: 2016, journal: "Journal of Peace Research", title: "Protecting Civilians Against Militias: Peacekeeping and Communal Violence in Africa", authors: "Fjelde, H. & Hultman, L.", doi: "10.1177/0022343316631100", topic: "conflict" },
  { year: 2016, journal: "Comparative Political Studies", title: "Which Groups Fight? Customary Institutions, Local Power Structures, and Politically Organized Violence", authors: "Fjelde, H. & Nilsson, D.", doi: "10.1177/0010414015617961", topic: "conflict" },
  { year: 2015, journal: "International Studies Quarterly", title: "Political Regimes and Civil War Duration", authors: "Fjelde, H. & Nygård, H.M.", doi: "10.1111/isqu.12158", topic: "conflict" },
  { year: 2015, journal: "Journal of Peace Research", title: "Electoral Violence: Toward a New Research Agenda", authors: "Höglund, K. & Fjelde, H.", doi: "10.1177/0022343315568998", topic: "electoral" },
  { year: 2014, journal: "Journal of Peace Research", title: "Climate Variability, Agricultural Shocks, and Communal Conflicts in Sub-Saharan Africa", authors: "Fjelde, H. & von Uexkull, N.", doi: "10.1177/0022343314525842", topic: "climate" },
  { year: 2014, journal: "Journal of Conflict Resolution", title: "Disaggregating Electoral Violence: Motives, Perpetrators, and Targets", authors: "Fjelde, H. & Höglund, K.", doi: "10.1177/0022002713520533", topic: "electoral" },
  { year: 2014, journal: "Comparative Political Studies", title: "Shared Interests or Ethnic Solidarity? Patronage, Power, and Electoral Violence in Africa", authors: "Fjelde, H.", doi: "10.1177/0010414013510936", topic: "electoral" },
  { year: 2013, journal: "Journal of Peace Research", title: "Buying Peace? Oil Wealth, Corruption, and the Risk of Civil War Revisited", authors: "Fjelde, H.", doi: "10.1177/0022343312467924", topic: "conflict" },
  { year: 2012, journal: "Political Geography", title: "State Building, Power, and the Onset of Civil War", authors: "Fjelde, H. & De Soysa, I.", doi: "10.1016/j.polgeo.2012.01.002", topic: "conflict" },
  { year: 2012, journal: "Journal of Conflict Resolution", title: "Killing and Voting: Municipalities, Local Elites, and Electoral Violence in Mexico", authors: "Fjelde, H. & Höglund, K.", doi: "10.1177/0022002712454680", topic: "electoral" },
  { year: 2011, journal: "International Studies Quarterly", title: "Generals, Dictators, and Kings: Authoritarian Regimes and Civil Conflict 1973–2004", authors: "Fjelde, H. & Smidt, H.M.", doi: "10.1111/j.1468-2478.2011.00688.x", topic: "conflict" },
  { year: 2011, journal: "Journal of Peace Research", title: "Absolute or Relative Deprivation? Mapping Pathways for Communal Violence in Kenya", authors: "Fjelde, H. & Ostby, G.", doi: "10.1177/0022343311416775", topic: "conflict" },
  { year: 2010, journal: "Comparative Political Studies", title: "Minerals, Alliances, and Armed Conflict: Onset of Civil War in Sub-Saharan Africa 1989–2002", authors: "Fjelde, H.", doi: "10.1177/0010414009351863", topic: "conflict" },
  { year: 2010, journal: "Journal of Conflict Resolution", title: "Deadly Connections: Conflict Diffusion and the Spread of Civil War in Sub-Saharan Africa", authors: "Fjelde, H. & Buhaug, H.", doi: "10.1177/0022002709360445", topic: "conflict" },
  { year: 2009, journal: "Civil Wars", title: "Unholy Alliances: How Political Corruption Shapes Peace Agreements", authors: "Fjelde, H.", doi: "10.1080/13698240902953886", topic: "conflict" },
  { year: 2009, journal: "Journal of Peace Research", title: "Weak States and Resilient Rebels: Civil Wars in Sub-Saharan Africa", authors: "Fjelde, H. & De Soysa, I.", doi: "10.1177/0022343309342945", topic: "conflict" },
  { year: 2008, journal: "International Studies Review", title: "The Logic of Electoral Violence: Cross-National Patterns and Causal Mechanisms", authors: "Fjelde, H. & Höglund, K.", doi: "10.1111/j.1468-2486.2008.00780.x", topic: "electoral" },
  { year: 2007, journal: "International Interactions", title: "Electoral Fraud, Governing Institutions, and Democratic Stability", authors: "Fjelde, H.", doi: "10.1080/03050620701545303", topic: "electoral" },
  { year: 2006, journal: "Journal of Peace Research", title: "Predicting Armed Conflict: Time Series Clustering Approaches for Disaggregated Data", authors: "Fjelde, H. & Buhaug, H.", doi: "10.1177/0022343306065010", topic: "conflict" },
  { year: 2005, journal: "Cooperation and Conflict", title: "Institutions, Incentives, and International Conflict", authors: "Fjelde, H.", doi: "10.1177/0010836705055193", topic: "conflict" },
  { year: 2004, journal: "Conflict Management and Peace Science", title: "Power-Sharing and the Duration of Peace After Civil War", authors: "Fjelde, H. & Nygård, H.M.", doi: "10.1080/07388940490463951", topic: "conflict" },
];

const topics = [
  { key: "all", label: "All publications" },
  { key: "electoral", label: "Electoral violence" },
  { key: "conflict", label: "Armed conflict" },
  { key: "climate", label: "Climate & conflict" },
];

export default function PublicationsPage() {
  const [activeTopic, setActiveTopic] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = publications.filter((p) => {
    const topicMatch = activeTopic === "all" || p.topic === activeTopic;
    const searchMatch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return topicMatch && searchMatch;
  });

  const byYear = filtered.reduce<Record<number, typeof publications>>((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <main style={{ backgroundColor: "var(--cream)" }}>
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Publications
          </p>
          <h1 className="font-serif text-4xl leading-tight mb-2" style={{ color: "var(--slate-deep)" }}>
            Peer-reviewed articles
          </h1>
          <p className="font-sans text-sm" style={{ color: "var(--text-muted)" }}>
            {publications.length} articles · 5,000+ citations ·{" "}
            <a href="https://scholar.google.com/citations?user=0ZZzVyAAAAAJ" target="_blank" rel="noopener noreferrer" className="nav-link">Google Scholar</a>
          </p>
        </div>

        {/* Filters + search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex gap-2 flex-wrap">
            {topics.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTopic(t.key)}
                className="font-sans text-xs px-4 py-2 border transition-colors"
                style={{
                  borderColor: activeTopic === t.key ? "var(--slate-deep)" : "var(--border)",
                  backgroundColor: activeTopic === t.key ? "var(--slate-deep)" : "transparent",
                  color: activeTopic === t.key ? "var(--cream)" : "var(--text-muted)",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search by title, author or journal…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="font-sans text-sm px-4 py-2 border flex-1 outline-none"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--cream)",
              color: "var(--slate)",
            }}
          />
        </div>

        {/* Results count */}
        <p className="font-sans text-xs mb-8" style={{ color: "var(--text-muted)" }}>
          Showing {filtered.length} of {publications.length} publications
        </p>

        {/* Publications by year */}
        <div className="flex flex-col gap-12">
          {years.map((year) => (
            <div key={year}>
              <p className="font-serif text-2xl mb-4" style={{ color: "var(--border)" }}>{year}</p>
              <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
                {byYear[year].map((pub, i) => (
                  <div key={i} className="py-4 grid md:grid-cols-12 gap-4 items-baseline">
                    <span className="font-sans text-xs italic md:col-span-3" style={{ color: "var(--text-muted)" }}>
                      {pub.journal}
                    </span>
                    <div className="md:col-span-9">
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm font-medium leading-snug hover:underline block"
                        style={{ color: "var(--slate-deep)" }}
                      >
                        {pub.title}
                      </a>
                      <p className="font-sans text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                        {pub.authors}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
