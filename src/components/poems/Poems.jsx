import React from "react";
import "./Poems.css";

export default function PoetPage() {
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="header-content">
            <nav className="nav-container">
              <a href="#" className="link-content">होम</a>
              <a href="#" className="link-content">कविता</a>
              <a href="#" className="link-content">मेरी कविताएँ</a>
            </nav>
            <div className="searchbar-container">
              <span className="search-icon">🔍</span>
              <input type="text" className="search-input" placeholder="खोज..." />
            </div>
            <div className="button-container">
              <button className="auth-button">लॉग इन</button>
              <button className="auth-button">साइन अप</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="poet_searchbar">
          <span className="search-icon-poet">🔍</span>
          <input type="text" className="search-input-poet" placeholder="कवि खोज..." />
        </div>

        <div className="container">
          <div className="main-content">
            <div className="alphabet-filter">
              {["अ", "आ", "इ", "ई", "उ", "ऋ", "ए", "ऐ", "ओ", "क", "ख", "ग", "घ", "च", "छ", "ज", "झ", "ञ"].map(
                (letter) => (
                  <button key={letter}>{letter}</button>
                )
              )}
            </div>

            <div className="poet-list">
              {[1, 2, 3, 4].map((id) => (
                <div className="poet-card" key={id}>
                  {/* <img src={poet${id}.jpg} alt="Poet" /> */}
                  <div className="poet-info">
                    <h3>कवि {id}</h3>
                    <p>यहाँ कवि का विवरण होगा।</p>
                    <span>📅 19XX | 📍 शहर</span>
                    <a href="#">X कविताएँ</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="sidebar">
            <h2 className="sidebar-title">📌 बेला लेटेस्ट</h2>
            {[1, 2, 3].map((id) => (
              <div className="latest-post" key={id}>
                {/* <img src={latest${id}.jpg} alt="Latest Post" /> */}
                <p>पोस्ट शीर्षक {id}</p>
              </div>
            ))}
          </aside>
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer">
            <div className="footer-top">
              <div className="comp-logo">
                <a className="logo-link" href="#">
                  <img className="logo-svg" src="/src/assets/for_raka-removebg-preview.png" alt="logo" />
                  StudySync
                </a>
              </div>
              <p className="filler-text">Seamless Learning for Brighter Futures.</p>
              <div className="social">
                {["Microsoft", "linkedin-copy", "instagram", "twitter"].map((icon) => (
                  <a className="social-link" href="#" key={icon}>
                    {/* <img src={/src/assets/${icon}.svg} className="social-icon" alt={icon} /> */}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-grid">
              {[
                {
                  heading: "Products",
                  links: ["Overview", "Solutions", "Pricing", "Customers"],
                },
                {
                  heading: "Company",
                  links: ["About", "Investor Relations", "Jobs", "Press", "Blog"],
                },
                {
                  heading: "Support",
                  links: ["Contact", "Documentation", "Chat", "FAQ"],
                },
                {
                  heading: "Legal",
                  links: ["Terms of Service", "Privacy Policy", "Cookie Settings"],
                },
              ].map((col, i) => (
                <div className="footer-grid-column" key={i}>
                  <div className="footer-grid-heading">{col.heading}</div>
                  <ul className="footer-links-list">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#overview" className="footer-link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-copyright">
            © 2021 - Present StudySync. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}