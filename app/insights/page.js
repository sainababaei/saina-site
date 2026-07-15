export const metadata = { title: 'Insights' };
const articles=[
['The End of the Best Practice Era','Why the age of universal answers is giving way to context-specific systems.'],
['Why Growing Businesses Become Harder to Run','Growth adds complexity faster than most operating systems can absorb it.'],
["AI Doesn't Fix Broken Systems",'AI creates leverage only when it is attached to clear workflows and decisions.']
];
export default function InsightsPage(){return <main className="subpage"><section className="page-hero section-light"><div className="container"><div className="eyebrow">Insights</div><h1>Thinking in systems.</h1><p className="lead">Essays on business structure, product, growth and AI.</p></div></section><section className="section section-light"><div className="container article-list">{articles.map(([t,d],i)=><article key={t} className="article-row"><span>0{i+1}</span><div><h2>{t}</h2><p>{d}</p><div className="coming-soon">Article publishing in v1.1</div></div></article>)}</div></section></main>}
