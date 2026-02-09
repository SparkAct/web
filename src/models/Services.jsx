import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Services.css'

export default function Services() {
  const { t } = useLanguage()
  
  const getInitials = (name) => (name || '').replace(/\s+/g, '').slice(0, 2).toUpperCase()
  
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">{t.services.title}</h2>
        <div className="grid">
          {t.services.items
            .filter(item => item.title && item.title.trim())
            .map((item, index) => (
            <div className="card case-card" key={`${item.title}-${index}`}>
              {item.logo ? (
                <div className="case-logo-wrapper">
                  <img src={item.logo} alt={item.client} className="case-logo" />
                </div>
              ) : (
                <div className="case-logo-wrapper case-logo-placeholder" aria-hidden>{getInitials(item.client)}</div>
              )}
              <div className="case-client">{item.client}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
