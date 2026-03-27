import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const datasets = [
  {
    name: "DECO: Dataset on Electoral Conflict",
    version: "v3.0 (2023)",
    coverage: "National elections worldwide, 1990–2020",
    unit: "Election-country",
    observations: "~2,400 elections",
    description:
      "Systematic data on the presence, type, and severity of electoral violence in national elections worldwide. DECO codes incidents of pre-election violence, election-day violence, and post-election violence, along with perpetrator and target information. Developed by Hanne Fjelde and Kristine Höglund (Uppsala University); currently maintained and updated by the V-Dem project at the University of Gothenburg.",
    codebook: "https://www.uu.se/en/department/peace-and-conflict-research/research/datasets/deco",
    citation: "Fjelde, H. & Höglund, K. (2016). Electoral Institutions and Electoral Violence in Sub-Saharan Africa. BJPS.",
    status: "Public",
  },
  {
    name: "India Election Violence Survey (IEVS)",
    version: "Waves 2019, 2024",
    coverage: "India — 8 states, 4,200 respondents per wave",
    unit: "Individual respondent",
    observations: "8,400+ (pooled)",
    description:
      "Panel survey measuring exposure to electoral violence, voter intimidation, and electoral irregularities, along with political attitudes and behavior. Conducted around the 2019 and 2024 general elections in collaboration with Lokniti–CSDS. Includes pre-election and post-election waves in both survey rounds, enabling causal identification of violence effects.",
    codebook: "Available on request",
    citation: "Fjelde, H. et al. (2024). Electoral Violence and Democratic Attitudes. AJPS.",
    status: "On request",
  },
  {
    name: "Nigeria and Kenya Electoral Attitudes Survey (NKEAS)",
    version: "2022–2023",
    coverage: "Nigeria (2023 elections) and Kenya (2022 elections)",
    unit: "Individual respondent",
    observations: "5,800",
    description:
      "Cross-national survey with survey experiment components, examining how exposure to electoral violence affects partisan identity, trust in electoral institutions, and willingness to participate in future elections. Includes randomized vignette experiments on electoral intimidation.",
    codebook: "Available on request",
    citation: "Fjelde, H., Höglund, K. & Patel, N. (2024). AJPS.",
    status: "On request",
  },
  {
    name: "Sub-National Electoral Violence Dataset (SNEVD)",
    version: "v1.0 (2020)",
    coverage: "Sub-Saharan Africa, 1990–2015, district level",
    unit: "District-election",
    observations: "~18,000",
    description:
      "Geo-referenced data on electoral violence incidents at the sub-national level in Sub-Saharan Africa, matched to electoral district boundaries and demographic and economic covariates. Enables analysis of the geographic spread of electoral violence and contextual determinants at finer spatial resolution than country-level datasets.",
    codebook: "https://www.uu.se/en/department/peace-and-conflict-research/research/datasets/snevd",
    citation: "Fjelde, H., Wahman, M. & Goldring, E. (2023). BJPS.",
    status: "Public",
  },
  {
    name: "Pro-Government Militia Dataset (PGMD) — contribution",
    version: "v2.0 (2019)",
    coverage: "Africa and Middle East, 1989–2017",
    unit: "Militia-year",
    observations: "~3,000",
    description:
      "Data on pro-government militias, their organizational characteristics, and patterns of civilian targeting. Fjelde contributed coding on Sub-Saharan African cases. The dataset is led by Lisa Hultman (Uppsala University) and Desiree Nilsson (Uppsala University) and is hosted by the Peace Research Institute Oslo.",
    codebook: "https://www.prio.org/data/pgmd",
    citation: "Fjelde, H., Hultman, L. & Nilsson, D. (2020). CPS.",
    status: "Public",
  },
];

export default function DataPage() {
  return (
    <main style={{ backgroundColor: "var(--cream)" }}>
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Data
          </p>
          <h1 className="font-serif text-4xl leading-tight mb-6" style={{ color: "var(--slate-deep)" }}>
            Datasets
          </h1>
          <p className="font-sans text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I am committed to making research data publicly available where possible. The datasets below are available for download or on request. If you use any of these datasets, please cite the associated publication.
          </p>
        </div>

        {/* Dataset cards */}
        <div className="flex flex-col gap-10">
          {datasets.map((ds, i) => (
            <div
              key={i}
              className="border p-8"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h2 className="font-serif text-lg mb-1" style={{ color: "var(--slate-deep)" }}>
                    {ds.name}
                  </h2>
                  <p className="font-sans text-xs" style={{ color: "var(--text-muted)" }}>
                    {ds.version} · {ds.coverage}
                  </p>
                </div>
                <span
                  className="font-sans text-xs px-3 py-1 self-start shrink-0"
                  style={{
                    backgroundColor: ds.status === "Public" ? "var(--slate-deep)" : "var(--cream-dark)",
                    color: ds.status === "Public" ? "var(--cream)" : "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {ds.status}
                </span>
              </div>

              {/* Meta */}
              <div className="flex gap-6 mb-5 flex-wrap">
                <div>
                  <p className="font-sans text-xs font-medium" style={{ color: "var(--text-muted)" }}>Unit of analysis</p>
                  <p className="font-sans text-xs" style={{ color: "var(--slate)" }}>{ds.unit}</p>
                </div>
                <div>
                  <p className="font-sans text-xs font-medium" style={{ color: "var(--text-muted)" }}>Observations</p>
                  <p className="font-sans text-xs" style={{ color: "var(--slate)" }}>{ds.observations}</p>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                {ds.description}
              </p>

              {/* Citation + link */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <p className="font-sans text-xs italic flex-1" style={{ color: "var(--text-muted)" }}>
                  Cite as: {ds.citation}
                </p>
                {ds.codebook !== "Available on request" ? (
                  <a
                    href={ds.codebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs nav-link shrink-0"
                  >
                    Codebook & download →
                  </a>
                ) : (
                  <a
                    href="mailto:hanne.fjelde@pcr.uu.se"
                    className="font-sans text-xs nav-link shrink-0"
                  >
                    Request access →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
