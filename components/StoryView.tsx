'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Story } from '@/lib/stories-data';
import GiscusComments from '@/components/GiscusComments';

interface Props {
  story: Story;
  prev: Story | null;
  next: Story | null;
}

export default function StoryView({ story, prev, next }: Props) {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const router = useRouter();

  const bodyText = story.textEn || story.digestEn || '';
  const bodyParagraphs = bodyText
    .split('\n\n')
    .filter(Boolean);

  const enHref = story.driveFileEn || story.driveEn || '/download';
  const koHref = story.driveFileKo || story.driveKo || '/download';

  const getStoryHref = (s: Story) =>
    s.slug ? `/stories/${s.slug}` : `/stories/${s.id}`;

  return (
    <div className="story-view">
      <button
        onClick={() => router.push('/stories')}
        className="story-view__back"
        style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
      >
        ← 이야기 목록으로 · Back to Stories
      </button>

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
        <div style={{
          background: '#fffbea',
          border: '1px solid #e8d88a',
          borderLeft: '4px solid #8B6914',
          borderRadius: 'var(--r)',
          padding: '14px 18px',
          marginBottom: 24,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 6,
          }}>
            <span style={{
              background: '#8B6914',
              color: '#fff',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '.08em',
              textTransform: 'uppercase' as const,
              padding: '2px 8px',
              borderRadius: 4,
            }}>
              안내 · Note
            </span>
            <span style={{
              fontSize: 13,
              fontWeight: 700,
              color: '#5a3e00',
            }}>
              이야기 요약본입니다
            </span>
          </div>
          <p style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#4a3200',
            lineHeight: 1.7,
            marginBottom: 4,
          }}>
            이 페이지에 표시된 이야기는 소개를 위한 요약본입니다.
            이야기 원문을 보시려면 아래 다운로드 파일에서 확인하세요.
          </p>
          <p style={{
            fontSize: 12,
            color: '#6a5200',
            lineHeight: 1.7,
          }}>
            The story shown on this page is an edited digest for preview purposes.
            The complete original story is available in the downloadable file below.
          </p>
        </div>

        {bodyParagraphs.length > 0 ? (
          bodyParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))
        ) : (
          <p style={{ color: 'var(--faint)', fontStyle: 'italic' }}>
            {lang === 'ko' ? '(준비 중입니다)' : '(Coming soon)'}
          </p>
        )}
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
          ↓ English Story + Guide
        </a>
        <a href={koHref} target="_blank" rel="noopener noreferrer"
          className="dl-btn dl-btn--ko">
          ↓ 한국어 이야기 + 나눔 자료
        </a>
        {story.drivePptKo && (
          <a href={story.drivePptKo} target="_blank" rel="noopener noreferrer"
            className="dl-btn dl-btn--ko">
            ↓ 배경 자료 · Background Slides
          </a>
        )}
      </div>

      {story.questionsEn && story.questionsEn.length > 0 && (
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
      )}

      <div className="story-nav">
        {prev ? (
          <button
            onClick={() => router.push(getStoryHref(prev))}
            className="story-nav__btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}
          >
            <small>← 이전 Previous</small>
            <span>{prev.titleKo}</span>
          </button>
        ) : (
          <div />
        )}
        {next && (
          <button
            onClick={() => router.push(getStoryHref(next))}
            className="story-nav__btn story-nav__btn--next"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'right' }}
          >
            <small>다음 Next →</small>
            <span>{next.titleKo}</span>
          </button>
        )}
      </div>

      <GiscusComments />
    </div>
  );
}
