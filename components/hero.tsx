import Link from "next/link";

const questions = [
  "Why do voters risk their lives to cast a ballot?",
  "What happens to democracy when elections turn violent?",
  "Can political intimidation silence entire communities — or make them fight harder?",
];

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col items-center text-center gap-8">

        {/* Text */}
        <div className="flex flex-col gap-8">
          {/* Label */}
          <p
            className="text-xs font-sans font-medium tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Professor of Peace and Conflict Research · Uppsala University
          </p>

          {/* Questions */}
          <div className="flex flex-col gap-5">
            {questions.map((q, i) => (
              <p
                key={i}
                className="question-line font-serif text-2xl md:text-3xl leading-snug"
                style={{ color: "var(--slate-deep)" }}
              >
                {q}
              </p>
            ))}
          </div>

          {/* Bio */}
          <p
            className="font-sans text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            My research sits at the intersection of political institutions and
            political violence — particularly how elections become sites of
            coercion, and what this means for democratic survival. I am a
            Wallenberg Scholar at Uppsala University and a Senior Researcher
            at the Peace Research Institute Oslo (PRIO).
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="/research"
              className="font-sans text-sm font-medium px-5 py-2.5 transition-colors"
              style={{
                backgroundColor: "var(--slate-deep)",
                color: "var(--cream)",
              }}
            >
              Explore my research →
            </Link>
            <Link
              href="/publications"
              className="font-sans text-sm nav-link"
            >
              View publications →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
