import React from 'react'
import { LanguageProvider } from './LanguageContext'
import Nav from './models/Nav'
import Hero from './models/Hero'
import Services from './models/Services'
import Awards from './models/Awards'
import Team from './models/Team'
import Contact from './models/Contact'
import Footer from './models/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Nav />
      <Hero />
      <Team />
      <Services />
      <Awards />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}
