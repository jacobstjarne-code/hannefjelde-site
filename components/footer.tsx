export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 items-start">
        {/* Identity */}
        <div className="flex flex-col gap-1">
          <span
            className="font-serif text-sm font-bold"
            style={{ color: "var(--slate-deep)" }}
          >
            Hanne Fjelde
          </span>
          <span
            className="font-sans text-xs leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Uppsala University
            <br />
            Department of Peace and Conflict Research
          </span>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-1 md:items-center">
          <a
            href="mailto:hanne.fjelde@pcr.uu.se"
            className="font-sans text-xs nav-link"
          >
            hanne.fjelde@pcr.uu.se
          </a>
        </div>

        {/* External links */}
        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="https://scholar.google.com/citations?user=0ZZzVyAAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs nav-link"
          >
            Google Scholar
          </a>
          <a
            href="https://orcid.org/0000-0002-4481-8884"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs nav-link"
          >
            ORCID
          </a>
          <a
            href="https://www.uu.se/en/contact-and-organisation/staff?query=N3-1270"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs nav-link"
          >
            Uppsala University profile
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t max-w-6xl mx-auto px-6 py-4"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="font-sans text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()} Hanne Fjelde
        </p>
      </div>
    </footer>
  );
}
