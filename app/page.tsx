import type { Metadata } from "next";
import LandingSection from "./components/LandingSection"
import FeaturesSection from "./components/FeaturesSection"
import PricingSection from "./components/PricingSection"
import InterestSection from "./components/InterestSection"
import ContactSection from "./components/ContactSection"

export const metadata: Metadata = {
  title: "Planet Marrs",
  description: "Professional, lightweight, responsive, and fast websites tailored to your needs, whether it's a portfolio or a professional website for your business."
}

export default function Home() {
  return (
      <>
        <LandingSection/>
        <FeaturesSection/>
        <PricingSection/>
        <InterestSection/>
        <ContactSection/>
      </>
  )
}
