import React, { useState } from 'react';
import './App.css';
import bannerImg from './assets/banner-stack.png';

const technologiesData = [
  {
    id: 1,
    name: 'React',
    description: 'A declarative, component-based JavaScript library for building modern user interfaces.',
    category: 'Frontend',
    rating: 4.9,
    badge: 'Popular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    id: 2,
    name: 'Vue.js',
    description: 'An approachable, performant, and versatile framework for building web user interfaces.',
    category: 'Frontend',
    rating: 4.8,
    badge: 'Versatile',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    id: 3,
    name: 'Svelte',
    description: 'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.',
    category: 'Frontend',
    rating: 4.8,
    badge: 'Fast',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg'
  },
  {
    id: 4,
    name: 'Next.js',
    description: 'The React framework for full-stack web applications with hybrid static & server rendering.',
    category: 'Frontend',
    rating: 4.9,
    badge: 'Standard',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    id: 5,
    name: 'Node.js',
    description: 'An asynchronous event-driven JavaScript runtime built on Chrome\'s V8 engine.',
    category: 'Backend',
    rating: 4.8,
    badge: 'Standard',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    id: 6,
    name: 'PostgreSQL',
    description: 'A powerful, open-source object-relational database system with proven reliability.',
    category: 'Database',
    rating: 4.9,
    badge: 'Top SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  }
];

export default function App() {
  const [stack, setStack] = useState([]);

  const addToStack = (tech) => {
    if (!stack.some((item) => item.id === tech.id)) {
      setStack([...stack, tech]);
    }
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const clearStack = () => {
    setStack([]);
  };

  return (
    <div className="app-wrapper">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <div className="logo-box">DS</div>
          <span className="logo-text">Dev Stack</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-btns">
          <button className="btn-signin">Sign In</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-left">
          <h1>
            Build Your Ideal <br />
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="hero-btns">
            <a href="#technologies" className="btn-explore">Explore Technologies</a>
            <button className="btn-learn">Learn More</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={bannerImg} alt="Stack Banner" />
        </div>
      </section>

      {/* Section Title */}
      <div className="section-title" id="technologies">
        <h2>Explore the <span>Technologies</span></h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      {/* Main Container */}
      <main className="main-container">
        <div className="tech-grid">
          {technologiesData.map((tech) => {
            const isAdded = stack.some((item) => item.id === tech.id);
            return (
              <div className="tech-card" key={tech.id}>
                <div>
                  <div className="card-top">
                    <div className="tech-icon-box">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    <span className="tech-badge">{tech.badge}</span>
                  </div>
                  <h3>{tech.name}</h3>
                  <p>{tech.description}</p>
                </div>
                <div className="card-footer">
                  <div className="card-info">
                    <span className="cat-tag">{tech.category}</span>
                    <span className="rating">⭐ {tech.rating}</span>
                  </div>
                  <button
                    className={`btn-add ${isAdded ? 'added' : ''}`}
                    onClick={() => addToStack(tech)}
                  >
                    {isAdded ? 'Added' : 'Add to Stack'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sidebar / Your Stack */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <div>
              <h3>Your Stack</h3>
              <p>{stack.length} technologies selected</p>
            </div>
            {stack.length > 0 && (
              <button className="remove-all-btn" onClick={clearStack}>Clear All</button>
            )}
          </div>

          {stack.length === 0 ? (
            <div className="empty-stack">
              <p>No technologies selected yet.</p>
              <div className="empty-box">
                Your stack is empty.
              </div>
            </div>
          ) : (
            <div className="stack-items">
              {stack.map((item) => (
                <div className="stack-item-card" key={item.id}>
                  <div className="stack-item-left">
                    <img src={item.icon} alt={item.name} />
                    <div className="stack-item-info">
                      <h4>{item.name}</h4>
                      <span>{item.category}</span>
                    </div>
                  </div>
                  <button className="btn-remove-item" onClick={() => removeFromStack(item.id)}>×</button>
                </div>
              ))}
            </div>
          )}
        </aside>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <div className="logo-box">DS</div>
              <span className="logo-text">Dev Stack</span>
            </div>
            <p>Curated tools, technologies, and resources for developers building modern software.</p>
          </div>
          <div className="footer-col">
            <h4>PRODUCT</h4>
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
          </div>
          <div className="footer-col">
            <h4>COMPANY</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>LEGAL</h4>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}