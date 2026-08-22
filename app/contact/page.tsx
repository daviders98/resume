import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with David García. Send a message about your project and let's turn the idea into a product.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | DevGarcía",
    description:
      "Get in touch with David García. Send a message about your project and let's turn the idea into a product.",
    url: "https://devgarcia.vercel.app/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
