import Link from "next/link";

const questions = [
  "Why do voters risk their lives to cast a ballot?",
  "What happens to democracy when elections turn violent?",
  "Can political intimidation silence entire communities — or make them fight harder?",
];

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="max-w-3xl">
        {/* Label */}
        <p
          className="font-sans text-xs font-medium tracking-widest uppercase mb-10"
          style={{ color: "var(--accent)" }}
        >
          Professor of Peace and Conflict Research · Uppsala University
        </p>

        {/* Questions */}
        <div className="flex flex-col gap-6 mb-12">
          {questions.map((q, i) => (
            <p
              key={i}
              className="question-line font-serif text-3xl md:text-4xl leading-snug"
              style={{ color: "var(--slate-deep)" }}
            >
              {q}
            </p>
          ))}
        </div>

        {/* Bio */}
        <p
          className="font-sans text-base leading-relaxed mb-10 max-w-xl"
          style={{ color: "var(--text-muted)" }}
        >
          My research sits at the intersection of political institutions and
          political violence — particularly how elections become sites of
          coercion, and what this means for democratic survival. I am a
          Wallenberg Scholar at Uppsala University and a Senior Researcher
          at the Peace Research Institute Oslo (PRIO).
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6 flex-wrap">
          <Link
            href="/research"
            className="font-sans text-sm font-medium px-5 py-2.5 transition-colors"
            style={{ backgroundColor: "var(--slate-deep)", color: "var(--cream)" }}
          >
            Explore my research →
          </Link>
          <Link href="/publications" className="font-sans text-sm nav-link">
            View publications →
          </Link>
        </div>
      </div>
    </section>
  );
}
