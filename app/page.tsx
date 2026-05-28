import { ParticlesBackground, CursorGlow, ScrollProgress } from "@/components/effects"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { SkillsSection } from "@/components/skills"
import { ProjectsSection } from "@/components/projects"
import { AchievementsSection } from "@/components/achievements"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading"

export default function Portfolio() {
  return (
    <>
      <LoadingScreen />
      <ParticlesBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
