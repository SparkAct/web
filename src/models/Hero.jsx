import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Hero.css'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
      </div>
    </section>
  )
}
