export default function WallenbergBadge() {
  return (
    <section
      className="border-y"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--cream-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        {/* Logo placeholder */}
        <div className="flex items-center gap-4 shrink-0">
          <div
            className="h-8 w-28 flex items-center justify-center border text-xs font-sans tracking-widest"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            WALLENBERG
          </div>
        </div>

        {/* Text */}
        <p
          className="font-sans text-sm leading-relaxed"
          style={{ color: "var(--text-muted)", maxWidth: "52ch" }}
        >
          Supported by the Knut and Alice Wallenberg Foundation — Sweden's most
          prestigious research fellowship.
        </p>
      </div>
    </section>
  );
}
