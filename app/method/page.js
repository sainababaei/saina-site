import Link from 'next/link';
const layers = [
  ['01','Direction','Vision, strategy, positioning, priorities and decision logic.'],
  ['02','Value','Product, customer, pricing, offer and value proposition.'],
  ['03','Growth','Marketing, sales, acquisition, retention and expansion.'],
  ['04','Operations','Process, people, ownership, rituals and execution rhythm.'],
  ['05','Intelligence','Data, AI, automation, dashboards and decision support.'],
  ['06','Scale','Documentation, governance, repeatability and system maturity.'],
];
export const metadata = { title: 'Method' };
export default function MethodPage(){return <main className="subpage"><section className="page-hero section-dark"><div className="container"><div className="eyebrow eyebrow-lime">Method</div><h1>The Operating Layers™</h1><p className="lead">A way to diagnose, redesign and scale the invisible systems behind growing companies.</p></div></section><section className="section section-light"><div className="container"><h2>Business is not a collection of departments.</h2><p className="lead dark-text">It is a connected system. Product affects growth. Growth affects operations. Operations affect customer experience. AI affects all of it.</p><div className="layers-grid light-layers">{layers.map(([n,t,b])=><article className="layer-card" key={n}><div className="layer-number">{n}</div><h3>{t}</h3><p>{b}</p></article>)}</div><div className="actions"><Link className="button button-primary" href="/start">Start with Structure</Link></div></div></section></main>}
