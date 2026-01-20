import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Awards.css'

export default function Awards() {
  const { t } = useLanguage()

  return (
    <section id="awards" className="section awards">
      <div className="container">
        <h2 className="section-title">{t.awards.title}</h2>
        <div className="awards-scroll">
          {t.awards.items.map((award) => (
            <div className="award-card" key={award.title}>
              {award.logo && (
                <img src={award.logo} alt={award.title} className="award-logo" />
              )}
              <div className="award-details">
                <div className="award-title">{award.title}</div>
                {award.subtitle && <div className="award-subtitle">{award.subtitle}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
