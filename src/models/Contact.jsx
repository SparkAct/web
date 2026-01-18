import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  
  return (
    <section id="contact" className="section alt contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-subtitle">{t.contact.subtitle}</p>
        <div className="info">
          <div><strong>{t.contact.company}：</strong>{t.contact.companyName}</div>
          <div><strong>Email：</strong><a href="mailto:info@sparkact.co">info@sparkact.co</a></div>
          <div><strong>{t.contact.taxId}：</strong>60407020</div>
          <div><strong>{t.contact.address}：</strong>{t.contact.addressText}</div>
        </div>
        <a className="btn btn-primary" href="mailto:info@sparkact.co?subject=合作洽談&body=您好，我想了解：">{t.contact.cta}</a>
      </div>
    </section>
  )
}
