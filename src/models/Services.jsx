import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Services.css'

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">{t.services.title}</h2>
        <div className="services-grid">
          {t.services.items.map((item, index) =>
            item.link ? (
              <a key={index} href={item.link} className="service-card service-card-cta">
                <h3>{item.title} <span className="service-cta-arrow">→</span></h3>
                <p className="service-desc">{item.desc}</p>
              </a>
            ) : (
              <div key={index} className="service-card">
                <h3>{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
