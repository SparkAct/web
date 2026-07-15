import React from 'react'
import { useLanguage } from '../LanguageContext'
import '../views/Products.css'

export default function Products() {
  const { t } = useLanguage()

  return (
    <section id="products" className="section products">
      <div className="container">
        <h2 className="section-title">{t.products.title}</h2>
        <div className="products-grid">
          {t.products.items.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card"
            >
              {product.logo && (
                <img src={product.logo} alt={product.name} className="product-logo" />
              )}
              <div className="product-name">{product.name}</div>
              <div className="product-desc">{product.desc}</div>
              <div className="product-link">{product.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
