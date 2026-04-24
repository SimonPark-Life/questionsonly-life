'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavClient() {
  const path = usePathname();

  const isActive = (href: string) =>
    href === '/' ? path === '/' : path.startsWith(href);

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__logo">
          베풂의 교만 이야기
          <span>Arrogant Generosity · QuestionsOnly.Life</span>
        </Link>
        <div className="site-nav__links">
          <Link href="/" className={isActive('/') ? 'active' : ''}>
            홈 Home
          </Link>
          <Link href="/stories" className={isActive('/stories') ? 'active' : ''}>
            이야기 Stories
          </Link>
          <Link href="/how-to-use" className={isActive('/how-to-use') ? 'active' : ''}>
            활용법 How to Use
          </Link>
          <Link href="/about" className={isActive('/about') ? 'active' : ''}>
            소개 About
          </Link>
          <Link href="/download" className={isActive('/download') ? 'active' : ''}>
            다운로드 Download
          </Link>
        </div>
      </div>
    </nav>
  );
}