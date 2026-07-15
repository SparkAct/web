import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Contact.css'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-subtitle">{t.contact.subtitle}</p>
        <div className="contact-layout">
          <div>
            <div className="info">
              <div className="info-row">
                <span className="info-label">{t.contact.company}</span>
                <span className="info-value">{t.contact.companyName}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email</span>
                <span className="info-value">
                  <a href="mailto:info@sparkact.co">info@sparkact.co</a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">{t.contact.taxId}</span>
                <span className="info-value">60407020</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t.contact.address}</span>
                <span className="info-value">{t.contact.addressText}</span>
              </div>
            </div>
            <div className="contact-cta">
              <a
                className="btn btn-primary"
                href={`mailto:info@sparkact.co?subject=${encodeURIComponent(t.contact.mailtoSubject)}&body=${encodeURIComponent(t.contact.mailtoBody)}`}
              >
                {t.contact.cta}
              </a>
            </div>
          </div>
          <div>
            <div className="process-title">{t.contact.processTitle}</div>
            <div className="process-list">
              {t.contact.process.map((step, i) => (
                <div className="process-step" key={i}>
                  <span className="process-step-num">0{i + 1}</span>
                  <span className="process-step-text">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
