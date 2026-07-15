import Link from 'next/link';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <main className="subpage">
      <section className="page-hero section-light"><div className="container"><div className="eyebrow">About</div><h1>Why I think this way.</h1><p className="lead">My work sits between business, product, marketing, technology and systems design.</p></div></section>
      <section className="section section-light"><div className="container editorial-grid"><aside><div className="sticky-note">Architecture taught me to see the structure behind complexity.</div></aside><div className="long-copy"><h2>From architecture to business systems.</h2><p>I started in architecture, but what stayed with me wasn't buildings. It was structure — the invisible logic that makes complex things work.</p><p>Over the years, I moved through product, marketplaces, marketing, digital marketing and business strategy. Different disciplines, one recurring challenge: when companies grow, complexity grows with them.</p><p>My work is about making that complexity visible, then designing the systems that help teams make better decisions, move faster and scale with confidence.</p><div className="mini-grid"><div><strong>Product</strong><span>Strategy, roadmap and customer logic</span></div><div><strong>Growth</strong><span>Marketing, GTM and funnels</span></div><div><strong>Systems</strong><span>Operations, AI and dashboards</span></div></div><Link className="button button-primary" href="/start">Start with Structure</Link></div></div></section>
    </main>
  );
}
