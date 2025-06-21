import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBackground } from "@/Components/StarBackground"
import { Navbar } from "../Components/Navbar"
import { HeroSection } from "../Components/HeroSection"
import { AboutSection } from "../Components/AboutMe"
import { SkillsSection } from "../Components/SkillsSection"
import { ProjectSection } from "../Components/ProjectSection"
import { ContactSection } from "../Components/ContactSection"
import { Footer } from "../Components/Footer"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects - Outside container for full coverage */}
            <StarBackground />
            
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Main Content Container */}
            <div className="relative container z-10">
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
        </div>
    )
}