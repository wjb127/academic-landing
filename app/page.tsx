'use client'

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import CurriculumSection from '@/components/sections/CurriculumSection'
import ApplicationSection from '@/components/sections/ApplicationSection'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <ApplicationSection />
    </main>
  )
}