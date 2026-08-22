import type { Metadata } from "next";
import ExperiencePage from "./ExperiencePage";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work history, education and certifications of David García, Full Stack Developer.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience | DevGarcía",
    description:
      "Work history, education and certifications of David García, Full Stack Developer.",
    url: "https://devgarcia.vercel.app/experience",
  },
};

export default function Page() {
  return <ExperiencePage />;
}
