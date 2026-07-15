'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="site-nav">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)}>SAINA</Link>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <nav id="mobile-menu" className={`nav-links ${open ? 'is-open' : ''}`}>
        <Link href="/method" onClick={() => setOpen(false)}>Method</Link>
        <Link href="/offers" onClick={() => setOpen(false)}>Offers</Link>
        <Link href="/insights" onClick={() => setOpen(false)}>Thinking</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link className="button button-primary nav-cta" href="/start" onClick={() => setOpen(false)}>
          Start with Structure
        </Link>
      </nav>
    </header>
  );
}
