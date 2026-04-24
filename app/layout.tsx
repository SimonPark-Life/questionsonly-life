import type { Metadata } from 'next';
import './globals.css';
import NavClient from '@/components/NavClient';

export const metadata: Metadata = {
  title: '베풂의 교만 이야기 · Arrogant Generosity',
  description: '박숭현 선교사 (Simon Park)의 소그룹 나눔 자료 · Small group discussion series by Simon Park',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <NavClient />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="site-footer__title">베풂의 교만 이야기 · Arrogant Generosity</div>
          <nav className="site-footer__links">
            <a href="/">홈 Home</a>
            <a href="/stories">이야기 Stories</a>
            <a href="/how-to-use">활용법 How to Use</a>
            <a href="/about">소개 About</a>
            <a href="/download">다운로드 Download</a>
          </nav>
          <p className="site-footer__attr">
            © 박숭현 (Simon Park) · 동연출판사 · QuestionsOnly.Life · 비상업적 소그룹 사용 가능
          </p>
        </footer>
      </body>
    </html>
  );
}

