import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/language-context';
import NavClient from '@/components/NavClient';
import FooterClient from '@/components/FooterClient';

export const metadata: Metadata = {
  title: '베풂의 교만 이야기 · Arrogant Generosity',
  description: '박숭현 선교사 (Simon Park)의 소그룹 나눔 자료 · Small group discussion series by Simon Park',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <LangProvider>
          <NavClient />
          <main>{children}</main>
          <FooterClient />
        </LangProvider>
      </body>
    </html>
  );
}