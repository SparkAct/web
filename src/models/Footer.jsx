import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} {t.footer.copyright}</div>
      </div>
    </footer>
  )
}
