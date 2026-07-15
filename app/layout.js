import './globals.css';
import Nav from '../components/Nav';

export const metadata = {
  metadataBase: new URL('https://sainababaei.com'),
  title: {
    default: 'SAINA — Business Systems Designer',
    template: '%s | SAINA',
  },
  description:
    'Designing the systems behind better businesses across product, growth, operations and AI.',
  openGraph: {
    title: 'SAINA — Business Systems Designer',
    description: 'Structure creates freedom.',
    url: 'https://sainababaei.com',
    siteName: 'SAINA',
    images: [{ url: '/saina-portrait.png', width: 1200, height: 1200 }],
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <div className="wordmark">SAINA</div>
              <p>Designing the systems behind better businesses.</p>
            </div>
            <div className="footer-links">
              <a href="/method">Method</a>
              <a href="/offers">Offers</a>
              <a href="/insights">Insights</a>
              <a href="/about">About</a>
              <a href="/start">Start with Structure</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
