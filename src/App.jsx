import "./App.css";

function App() {
  return (
    <div className="website">

      {/* Navigation */}
      <header className="navbar">
       <a href="#home" className="logo">
  <img src="/wellogo.png" alt="SIVA INDUSTRIES Logo" />
  <span>SIVA INDUSTRIES</span>
</a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Contact Us
        </a>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="tagline">PRECISION • STRENGTH • EXCELLENCE</p>

          <h1>
            BUILT WITH
            <br />
            <span>STRENGTH & PRECISION.</span>
          </h1>

          <p className="hero-text">
            Professional welding solutions  for strength,
            durability, and industrial excellence.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="primary-button">
              Explore Our Services →
            </a>

            <a href="#about" className="secondary-button">
              Discover SIVA
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="fire-circle">WELD</div>
          <div className="visual-text">PRECISION IN EVERY WELD</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
  <div className="about-content">
    <div className="about-heading">
      <p className="section-label">WHO WE ARE</p>

      <h2>
        Built on experience.
        <br />
        <span>Driven by quality.</span>
      </h2>
    </div>

    <div className="about-description">
      <p>
        SIVA INDUSTRIES PTE LTD provides custom fabrication solutions,
        professional welding services, and reliable fabrication support
        for a wide range of industrial requirements.
      </p>

      <p>
        With practical experience and a strong commitment to quality,
        we deliver durable workmanship and dependable solutions at
        competitive prices.
      </p>

      <p className="about-location">
        📍 31/13 A, Hospital Road,
Vallam, Thanjavur - 613403,
Tamil Nadu, India.
      </p>
    </div>
  </div>

  <div className="about-stats">
    <div className="stat-card">
      <h3>2018</h3>
      <p>Officially Established</p>
    </div>

    <div className="stat-card">
      <h3>21+</h3>
      <p>Years of Experience</p>
    </div>

    <div className="stat-card">
      <h3>100%</h3>
      <p>Quality Commitment</p>
    </div>

    <div className="stat-card">
      <h3>BEST</h3>
      <p>Competitive Pricing</p>
    </div>
  </div>
</section>
      {/* Services */}
      <section id="services" className="section services">
  <p className="section-label">WHAT WE DO</p>

  <h2>
    Our <span>Services</span>
  </h2>

  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">⚙️</div>
      <h3>Custom Fabrication</h3>
      <p>
        Tailored fabrication solutions designed according to your
        industrial and structural requirements.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">🔥</div>
      <h3>Welding Services</h3>
      <p>
        Professional welding services with strong workmanship,
        precision, and durable finishing.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">🏭</div>
      <h3>Industrial Fabricators</h3>
      <p>
        Reliable fabrication support for industrial components,
        frameworks, and customized metal works.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">🛠️</div>
      <h3>Repair & Modification</h3>
      <p>
        Practical repair, modification, and improvement solutions
        for existing metal structures and components.
      </p>
    </div>
  </div>
</section>

      {/* Contact */}
     <section id="contact" className="section contact">
  <p className="section-label">CONTACT US</p>

  <h2>
    Let’s build something
    <br />
    <span>strong together.</span>
  </h2>

  <div className="contact-grid">
    <div className="contact-card">
      <h3>📍 Our Location</h3>
      <p>
        SIVA INDUSTRIES PTE LTD
        <br />
        31/13 A, Hospital Road,
        <br />
        Vallam, Thanjavur - 613403,
        <br />
        Tamil Nadu, India.
      </p>
      
    </div>
    <div className="contact-card">
  <h3>📞 Call Us</h3>
  <a href="tel:+919171913806">
    +91 91719 13806
  </a>
</div>

    <div className="contact-card">
      <h3>✉️ Email Us</h3>
      <a href="mailto:gururam021@gmail.com">
        gururam021@gmail.com
      </a>
      
    </div>
    <div className="contact-card">
  <h3>👤 Owner</h3>
  <p>K. Y. Velsundaram</p>
</div>
    
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
  <div className="footer-brand">
    <h3>SIVA INDUSTRIES PTE LTD</h3>
    <p>
      Custom fabrication solutions and professional welding services
      built for strength, quality, and durability.
    </p>
  </div>

  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </div>

  <div className="footer-bottom">
    <p>
      © 2026 SIVA INDUSTRIES PTE LTD. All Rights Reserved.
    </p>
    <p>Vallam, Thanjavur, Tamil Nadu</p>
  </div>
</footer>

    </div>
  );
}

export default App;
