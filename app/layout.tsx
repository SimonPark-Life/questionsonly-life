import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/language-context';
import NavClient from '@/components/NavClient';
import FooterClient from '@/components/FooterClient';
import { Analytics } from '@vercel/analytics/react';

const SITE_URL = 'https://www.questionsonly.life';
const TITLE = '베풂의 교만 이야기 · Arrogant Generosity';
const DESCRIPTION =
  '박숭현 선교사 (Simon Park)의 38편의 이야기 — 각 이야기는 답이 아니라 질문으로 끝납니다. Thirty-eight stories by Simon Park, each ending with a question rather than an answer. Korean & English.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'QuestionsOnly.Life',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '베풂의 교만 이야기 · Arrogant Generosity',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
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
        <Analytics />
      </body>
    </html>
  );
}
