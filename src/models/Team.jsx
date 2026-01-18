import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Team.css'

export default function Team() {
  const { t } = useLanguage()

  const getInitials = (name) => (name || '').replace(/\s+/g, '').slice(0, 2).toUpperCase()
  
  return (
    <section id="team" className="section team">
      <div className="container">
        <h2 className="section-title">{t.team.title}</h2>
        <p className="team-subtitle">{t.team.subtitle}</p>
        <div className="team-grid">
          {t.team.members
            .filter(m => m.name && m.name.trim())
            .map((m, index) => {
            const CardContent = (
              <>
                {m.avatar ? (
                  <div className="avatar avatar-img">
                    <img src={m.avatar} alt={`${m.name} avatar`} />
                  </div>
                ) : (
                  <div className="avatar" aria-hidden>{getInitials(m.name)}</div>
                )}
                <div className="member-name">{m.name}</div>
                <div className="member-role">{m.edu}</div>
                {m.desc && <p className="member-desc">{m.desc}</p>}
              </>
            )

            return m.linkedin ? (
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card member-card member-card-link"
                key={`${m.name}-${index}`}
              >
                {CardContent}
              </a>
            ) : (
              <div className="card member-card" key={`${m.name}-${index}`}>
                {CardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
