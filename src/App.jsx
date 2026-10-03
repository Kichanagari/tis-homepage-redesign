import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import AboutSection from './components/sections/AboutSection'
import AdmissionSection from './components/sections/AdmissionSection'
import HeroSection from './components/sections/HeroSection'
import RankingsSection from './components/sections/RankingsSection'
import SportsSection from './components/sections/SportsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import useTheme from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SportsSection />
        <RankingsSection />
        <TestimonialsSection />
        <AdmissionSection />
      </main>
      <Footer />
    </>
  )
}
