import Image from 'next/image';
import Link from 'next/link';

const layers = [
  ['01', 'Direction', 'Strategy, positioning, priorities and decision logic.'],
  ['02', 'Value', 'Product, customer, pricing and value proposition.'],
  ['03', 'Growth', 'Marketing, GTM, sales and retention.'],
  ['04', 'Operations', 'Process, ownership, team rhythm and execution.'],
  ['05', 'Intelligence', 'Data, AI, automation and dashboards.'],
  ['06', 'Scale', 'Documentation, governance and repeatability.'],
];

const insights = [
  ['The End of the Best Practice Era', 'Why universal answers are giving way to context-specific systems.'],
  ['Why Growing Businesses Become Harder to Run', 'Growth does not only add revenue. It adds complexity.'],
  ["AI Doesn't Fix Broken Systems", 'AI accelerates whatever system it enters — good or bad.'],
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Digital Headquarters</div>
            <h1>Structure creates freedom.</h1>
            <p className="hero-intro">
              I help growing companies redesign the business systems behind product, growth,
              operations and AI — so they can scale with clarity, confidence and control.
            </p>
            <div className="actions">
              <Link className="button button-primary" href="/start">Start with Structure</Link>
              <Link className="button button-secondary" href="/method">Explore the Method</Link>
            </div>
          </div>
          <div className="portrait-shell">
            <div className="portrait-grid" aria-hidden="true" />
            <Image
              className="portrait"
              src="/saina-portrait.png"
              alt="Saina Babaei"
              width={1024}
              height={1024}
              priority
            />
            <div className="portrait-label">Saina Babaei · Business Systems Designer</div>
          </div>
        </div>
        <div className="container capability-strip">
          <span>Product Strategy</span><span>Marketplaces</span><span>Marketing & Digital Marketing</span><span>AI Adoption</span>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="eyebrow">The Real Problem</div>
          <h2 className="display-heading">When did your business become harder to run?</h2>
          <div className="three-grid">
            <article className="card"><h3>More people.</h3><p>But alignment still depends on too many conversations.</p></article>
            <article className="card"><h3>More tools.</h3><p>But visibility is still scattered across dashboards, files and rituals.</p></article>
            <article className="card"><h3>More AI.</h3><p>But workflows, ownership and decision-making have not fundamentally changed.</p></article>
          </div>
          <p className="statement">The problem usually isn't effort. It's structure.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="eyebrow eyebrow-lime">Signature Method</div>
          <h2>The Operating Layers™</h2>
          <p className="lead">A practical method for making business complexity visible.</p>
          <div className="layers-grid">
            {layers.map(([num, title, body]) => (
              <article className="layer-card" key={num}>
                <div className="layer-number">{num}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="actions"><Link className="button button-lime" href="/method">See the full method</Link></div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split-grid">
          <div>
            <div className="eyebrow">Why I Think This Way</div>
            <h2>Structure is the work.</h2>
          </div>
          <div className="about-panel">
            <h3>From architecture to business systems.</h3>
            <p>I started in architecture, but what stayed with me wasn't buildings. It was structure.</p>
            <p>Over the years, I've worked across product, marketplaces, marketing, digital marketing and business strategy.</p>
            <p>Different disciplines. The same recurring challenge. As businesses grow, complexity grows with them.</p>
            <Link className="text-link" href="/about">Read the full story →</Link>
          </div>
        </div>
      </section>

      <section className="section section-mist">
        <div className="container">
          <div className="eyebrow">Offers</div>
          <h2>Start with one clear diagnostic.</h2>
          <div className="offers-grid">
            <article className="offer-primary">
              <h3>Structure Diagnostic</h3>
              <p>A focused first step for founders who feel the business has become harder to run than it should.</p>
              <ul>
                <li>Operating Layers assessment</li>
                <li>Key bottlenecks and decision gaps</li>
                <li>90-day clarity roadmap</li>
                <li>Recommended next system to build</li>
              </ul>
              <Link className="button button-primary" href="/start">Start with Structure</Link>
            </article>
            <article className="offer-secondary">
              <h3>Next products</h3>
              <p>Business Blueprint, Product & Growth System and AI Operating System.</p>
              <Link className="text-link" href="/offers">Explore all offers →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="eyebrow">Latest Thinking</div>
          <h2>Ideas for founders who want better systems.</h2>
          <div className="three-grid">
            {insights.map(([title, description]) => (
              <article className="card" key={title}><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
          <div className="actions"><Link className="button button-secondary" href="/insights">View all insights</Link></div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <div className="eyebrow eyebrow-lime">Start here</div>
          <h2>Better systems create better businesses.</h2>
          <p>If your business feels harder to run than it should, start with a short diagnostic.</p>
          <Link className="button button-lime" href="/start">Start with Structure</Link>
        </div>
      </section>
    </main>
  );
}
