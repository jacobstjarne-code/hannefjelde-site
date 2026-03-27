import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import WallenbergBadge from "@/components/wallenberg-badge";
import ResearchThemes from "@/components/research-themes";
import RecentWork from "@/components/recent-work";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--cream)" }}>
      <Navigation />
      <Hero />
      <WallenbergBadge />
      <ResearchThemes />
      <RecentWork />
      <Footer />
    </main>
  );
}
