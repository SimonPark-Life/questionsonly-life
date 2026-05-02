'use client';
import Link from 'next/link';
import { useLang, t } from '@/lib/language-context';

export default function FooterClient() {
  const { lang } = useLang();
  const T = (key: string) => t[key][lang];

  return (
    <footer className="site-footer">
      <div className="site-footer__title">{T('footerTitle')}</div>
      <nav className="site-footer__links">
        <Link href="/">{T('home')}</Link>
        <Link href="/stories">{T('stories')}</Link>
        <Link href="/how-to-use">{T('howToUse')}</Link>
        <Link href="/about">{T('about')}</Link>
        <Link href="/download">{T('download')}</Link>
        <Link href="/contact">{T('contact')}</Link>
      </nav>
      <p className="site-footer__attr">{T('copyright')}</p>
    </footer>
  );
}