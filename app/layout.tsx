import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanne Fjelde — Professor of Peace and Conflict Research",
  description:
    "Hanne Fjelde is a Professor at Uppsala University's Department of Peace and Conflict Research and a Wallenberg Scholar. She studies electoral violence, political institutions, and democratic backsliding.",
  openGraph: {
    title: "Hanne Fjelde",
    description: "Professor of Peace and Conflict Research, Uppsala University",
    url: "https://www.hannefjelde.com",
    siteName: "Hanne Fjelde",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
