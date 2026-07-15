import Link from 'next/link';
export const metadata = { title: 'Offers' };
const offers=[
['Structure Diagnostic','For founders who need a clear view of where the operating system is breaking.','Diagnosis, bottlenecks, 90-day roadmap and recommended next system.'],
['Business Blueprint','For companies preparing for the next stage of growth.','Strategy, priorities, KPIs, ownership and operating roadmap.'],
['Product & Growth System','For teams that need product, marketing and retention to work together.','Product direction, GTM, customer journey and growth system.'],
['AI Operating System','For businesses that want practical AI adoption.','Use cases, workflows, prompt systems and implementation roadmap.']
];
export default function OffersPage(){return <main className="subpage"><section className="page-hero section-light"><div className="container"><div className="eyebrow">Offers</div><h1>Systems, not hours.</h1><p className="lead">Each engagement is designed around a clear transformation, not a vague consulting scope.</p></div></section><section className="section section-mist"><div className="container offer-list">{offers.map(([t,forText,out])=><article className="offer-row" key={t}><div><h2>{t}</h2></div><div><p><strong>For:</strong> {forText}</p><p><strong>Outcome:</strong> {out}</p><Link className="text-link" href="/start">Start this conversation →</Link></div></article>)}</div></section></main>}
