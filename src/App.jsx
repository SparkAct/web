import React from 'react'

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#home">火花行動 SparkAct</a>
        <nav>
          <a href="#services">服務項目</a>
          <a href="#about">關於我們</a>
          <a href="#contact" className="btn btn-sm">聯絡我們</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <h1>把你的點子，點燃成行動</h1>
        <p>上雲、快速網站、AI 自動化、系統整合與 DevOps 顧問，交給專業的新創夥伴。</p>
        <div className="cta">
          <a href="#services" className="btn btn-primary">看看我們能幫什麼</a>
          <a href="#contact" className="btn btn-outline">取得報價</a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: '上雲規劃與遷移', desc: 'AWS / Azure / GCP 架構規劃、成本優化、容器化與無伺服器落地。' },
    { title: '快速網站與著陸頁', desc: '品牌官網、活動頁、SEO 最佳化與效能優化，支援多語系。' },
    { title: 'AI 自動化導入', desc: '流程自動化、RAG/Agent、文件摘要與客服助理，串接企業內外部系統。' },
    { title: '系統整合與 API', desc: '客製化系統、第三方 API 串接、Webhook 與資料同步。' },
    { title: 'DevOps 與平台', desc: 'CI/CD、監控告警、基礎設施即程式（IaC）、可觀測性建置。' },
    { title: '資料工程與分析', desc: 'ETL/ELT、資料倉儲、儀表板與指標設計，資料驅動決策。' },
  ]
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">服務項目</h2>
        <div className="grid">
          {items.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section alt">
      <div className="container about">
        <div>
          <h2 className="section-title">關於火花行動</h2>
          <p>我們是一家專注於「把想法變成可運轉的產品」的新創資訊服務團隊。從雲端架構、前後端開發到 AI 自動化與資料工程，提供端到端的一站式服務。</p>
          <ul className="list">
            <li>小步快跑：以週為單位交付可驗證成果</li>
            <li>務實落地：以使用者與營運流程為核心設計</li>
            <li>透明溝通：需求、時程與成本清楚可追蹤</li>
          </ul>
        </div>
        <div className="badge">
          <div className="badge-inner">
            <div className="badge-title">SparkAct</div>
            <div className="badge-sub">Move fast, deliver value.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <h2 className="section-title">聯絡我們</h2>
          <p>歡迎來信說明您的需求與預算，我們將盡速回覆並提供合適的方案建議與時程規劃。</p>
          <div className="info">
            <div><strong>公司：</strong>火花行動有限公司</div>
            <div><strong>Email：</strong><a href="mailto:info@sparkact.co">info@sparkact.co</a></div>
            <div><strong>統編：</strong>60407020</div>
            <div><strong>地址：</strong>桃園市中壢區環北路400號17樓之6</div>
          </div>
          <a className="btn btn-primary" href="mailto:info@sparkact.co?subject=合作洽談&body=您好，我想了解：">用 Email 開始洽談</a>
        </div>
        <div className="card contact-card">
          <h3>合作流程</h3>
          <ol>
            <li>需求訪談與範疇釐清</li>
            <li>規劃書與時程/報價</li>
            <li>MVP/里程碑滾動交付</li>
            <li>上線、監控與持續優化</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} 火花行動有限公司 SparkAct Co., Ltd.</div>
        <div className="footer-links">
          <a href="#home">首頁</a>
          <a href="#services">服務</a>
          <a href="#about">關於</a>
          <a href="#contact">聯絡</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
