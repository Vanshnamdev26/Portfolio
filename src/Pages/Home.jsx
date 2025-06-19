import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBackground } from "@/Components/StarBackground"
import { Navbar } from "../Components/Navbar"
import { HeroSection } from "@/Components/HeroSection"
import { AboutSection } from "../Components/AboutMe"
import { SkillsSection } from "../Components/SkillsSection"
import { ProjectSection } from "../Components/ProjectSection"
import { ContactSection } from "../Components/ContactSection"
import { Footer } from "../Components/Footer"
export const Home = () => {
    return <div className="min-h-screen container bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Efects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection/>
                <ContactSection/>
                
            {/* Footer */}
            <Footer />
    </div>
}