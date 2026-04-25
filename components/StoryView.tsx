'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Story } from '@/lib/stories-data';

interface Props {
  story: Story;
  prev: Story | null;
  next: Story | null;
}

export default function StoryView({ story, prev, next }: Props) {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');

  const bodyParagraphs = story.textEn
    .split('\n\n')
    .filter(Boolean);

  const enHref = story.driveFileEn || '/download';
  const koHref = story.driveFileKo || '/download';

  return (
    <div className="story-view">

      <Link href="/stories" className="story-view__back">
        ← 이야기 목록으로 · Back to Stories
      </Link>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
        flexWrap: 'wrap' as const,
        gap: 12
      }}>
        <div>
          <div className="story-view__meta">
            이야기 #{story.id} · 베풂의 교만 이야기
          </div>
          <h1 className="story-view__title-ko">
            {lang === 'ko' ? story.titleKo : story.titleEn}
          </h1>
          <div className="story-view__title-en">
            {lang === 'ko' ? story.titleEn : story.titleKo}
          </div>
        </div>

        <div className="lang-tog">
          <button
            className={`lang-btn${lang === 'ko' ? ' active' : ''}`}
            onClick={() => setLang('ko')}
          >
            한국어
          </button>
          <button
            className={`lang-btn${lang === 'en' ? ' active' : ''}`}
            onClick={() => setLang('en')}
          >
            English
          </button>
        </div>
      </div>

      <hr style={{
        border: 'none',
        borderTop: '1px solid var(--rule)',
        marginBottom: 24
      }} />

      <div className="story-view__body">
        {lang === 'ko' && (
          <div style={{
            background: 'var(--green-pale)',
            borderRadius: 'var(--r)',
            padding: '10px 14px',
            marginBottom: 20,
            fontSize: 12,
            color: 'var(--green)'
          }}>
            한국어 원문은 다운로드 파일에서 확인하세요. · Korean original available in the downloadable file below.
          </div>
        )}
        {bodyParagraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="dl-bar">
        <span style={{
          fontSize: 12,
          color: 'var(--faint)',
          alignSelf: 'center',
          marginRight: 4
        }}>
          다운로드 · Download:
        </span>
        <a href={enHref} target="_blank" rel="noopener noreferrer"
          className="dl-btn dl-btn--en">
          ↓ English Story + Guide (.docx)
        </a>
        <a href={koHref} target="_blank" rel="noopener noreferrer"
          className="dl-btn dl-btn--ko">
          ↓ 한국어 이야기 + 나눔 자료 (.docx)
        </a>
      </div>

      <div className="disc-sec">
        <div className="disc-title">
          토론 질문 · Discussion Questions
        </div>
        <ol className="q-list">
          {story.questionsEn.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ol>
      </div>

      <div className="story-nav">
        {prev ? (
          <Link href={`/stories/${prev.slug}`} className="story-nav__btn">
            <small>← 이전 Previous</small>
            <span>{prev.titleKo}</span>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link href={`/stories/${next.slug}`}
            className="story-nav__btn story-nav__btn--next">
            <small>다음 Next →</small>
            <span>{next.titleKo}</span>
          </Link>
        )}
      </div>

    </div>
  );
}