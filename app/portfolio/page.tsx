import type { Metadata } from "next";
import PortfolioPage from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Projects built by David García: the problem each one solves, the stack behind it and where to try it.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | DevGarcía",
    description:
      "Projects built by David García: the problem each one solves, the stack behind it and where to try it.",
    url: "https://devgarcia.vercel.app/portfolio",
  },
};

export default function Page() {
  return <PortfolioPage />;
}
