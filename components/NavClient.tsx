'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang, t } from '@/lib/language-context';

export default function NavClient() {
  const path = usePathname();
  const { lang, setLang } = useLang();
  const T = (key: string) => t[key][lang];
  const isActive = (href: string) =>
    href === '/' ? path === '/' : path.startsWith(href);

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__logo">
          {lang === 'ko' ? '베풂의 교만 이야기' : 'Arrogant Generosity'}
          <span>
            {lang === 'ko'
              ? '박숭현 선교사 (Simon Park) · QuestionsOnly.Life'
              : 'Simon Park (박숭현) · QuestionsOnly.Life'}
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="site-nav__links">
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              {T('home')}
            </Link>
            <Link href="/stories" className={isActive('/stories') ? 'active' : ''}>
              {T('stories')}
            </Link>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>
              {T('about')}
            </Link>
            <Link href="/download" className={isActive('/download') ? 'active' : ''}>
              {T('download')}
            </Link>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
              {T('contact')}
            </Link>
          </div>

          {/* Language toggle — more prominent */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: '1.5px solid rgba(255,255,255,0.5)',
            borderRadius: 999,
            overflow: 'hidden',
            marginLeft: 12,
            flexShrink: 0,
          }}>
            <button
              onClick={() => setLang('ko')}
              style={{
                padding: '6px 14px',
                fontSize: 12,
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--body)',
                transition: 'all .2s',
                background: lang === 'ko' ? '#fff' : 'transparent',
                color: lang === 'ko' ? 'var(--green-dark)' : 'rgba(255,255,255,0.9)',
                letterSpacing: '0.02em',
              }}
            >
              한국어
            </button>
            <div style={{
              width: '1px',
              height: '16px',
              backgroundColor: 'rgba(255,255,255,0.3)',
              flexShrink: 0,
            }} />
            <button
              onClick={() => setLang('en')}
              style={{
                padding: '6px 14px',
                fontSize: 12,
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--body)',
                transition: 'all .2s',
                background: lang === 'en' ? '#fff' : 'transparent',
                color: lang === 'en' ? 'var(--green-dark)' : 'rgba(255,255,255,0.9)',
                letterSpacing: '0.02em',
              }}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
