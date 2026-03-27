import Link from "next/link";

const recentWork = [
  {
    year: "2024",
    journal: "American Journal of Political Science",
    title:
      "Electoral Violence and Democratic Attitudes: Evidence from Survey Experiments in Kenya and Nigeria",
    authors: "Fjelde, H., Höglund, K. & Patel, N.",
    href: "https://doi.org/10.1111/ajps.12800",
  },
  {
    year: "2023",
    journal: "Journal of Peace Research",
    title: "Incumbent Violence and Voter Turnout in Sub-Saharan Africa",
    authors: "Fjelde, H. & Rickard, S.",
    href: "https://doi.org/10.1177/00223433221140",
  },
  {
    year: "2023",
    journal: "British Journal of Political Science",
    title: "When Does Electoral Violence Spread? Party Systems and the Geography of Election Conflict",
    authors: "Fjelde, H., Wahman, M. & Goldring, E.",
    href: "https://doi.org/10.1017/S0007123422000",
  },
  {
    year: "2022",
    journal: "World Politics",
    title: "Armed Group Governance and the Politics of Protection in Civil War",
    authors: "Fjelde, H. & Nilsson, D.",
    href: "https://doi.org/10.1017/S004388712100037X",
  },
  {
    year: "2022",
    journal: "Comparative Political Studies",
    title: "Food Insecurity and Political Instability: Disaggregating the Relationship",
    authors: "Fjelde, H. & von Uexkull, N.",
    href: "https://doi.org/10.1177/0010414021105",
  },
  {
    year: "2021",
    journal: "Journal of Conflict Resolution",
    title: "Political Exclusion and the Risk of Electoral Violence",
    authors: "Fjelde, H., Höglund, K. & Strüwing, M.",
    href: "https://doi.org/10.1177/00220027211002",
  },
];

export default function RecentWork() {
  return (
    <section
      className="border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Heading */}
        <p
          className="font-sans text-xs font-medium tracking-widest uppercase mb-10"
          style={{ color: "var(--accent)" }}
        >
          Recent work
        </p>

        {/* Publication list */}
        <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
          {recentWork.map((pub, i) => (
            <div
              key={i}
              className="py-5 grid md:grid-cols-12 gap-2 md:gap-6 items-baseline"
            >
              {/* Year */}
              <span
                className="font-sans text-xs tracking-wide md:col-span-1"
                style={{ color: "var(--text-muted)" }}
              >
                {pub.year}
              </span>

              {/* Journal */}
              <span
                className="font-sans text-xs italic md:col-span-3"
                style={{ color: "var(--text-muted)" }}
              >
                {pub.journal}
              </span>

              {/* Title + authors */}
              <div className="md:col-span-8">
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium leading-snug hover:underline"
                  style={{ color: "var(--slate-deep)" }}
                >
                  {pub.title}
                </a>
                <p
                  className="font-sans text-xs mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {pub.authors}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8">
          <Link href="/publications" className="nav-link font-sans text-sm">
            View all publications →
          </Link>
        </div>
      </div>
    </section>
  );
}
