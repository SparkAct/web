import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Nav.css'

export default function Nav() {
  const { language, t, toggleLanguage } = useLanguage()
  
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#home">火花行動有限公司 SparkAct.co</a>
        <nav>
          <a href="#services">{t.nav.services}</a>
          <a href="#awards">{t.nav.awards}</a>
          <a href="#contact" className="btn btn-sm">{t.nav.contact}</a>
          <button 
            onClick={toggleLanguage} 
            className="lang-toggle"
          >
            {language === 'zh' ? 'EN' : '中'}
          </button>
        </nav>
      </div>
    </header>
  )
}
