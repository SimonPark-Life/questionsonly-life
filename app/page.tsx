'use client';
import { useState } from 'react';
import { useLang, t } from '@/lib/language-context';
import { stories } from '@/lib/stories-data';

const path1 = [1, 2, 4, 9, 16, 18, 21, 31, 36, 39];
const path2 = [2, 3, 5, 8, 17, 21, 28, 37, 38, 40];
const path3 = [26, 27, 29, 34, 35, 36, 38, 39, 41];

const audiences = [
  { key: 'young-adults',      tk: 'youngAdults' },
  { key: 'mid-career',        tk: 'midCareer' },
  { key: 'retirees',          tk: 'retirees' },
  { key: 'mission-trainees',  tk: 'missionTrainees' },
  { key: 'first-small-group', tk: 'firstSmallGroup' },
];

const cardStyle = {
  cursor: 'pointer' as const,
};

const primaryBtnStyle = {
  background: 'var(--green)',
  color: '#fff',
  fontSize: 11,
  fontWeight: 700,
  padding: '6px 10px',
  borderRadius: 6,
  textAlign: 'center' as const,
};

const secondaryBtnStyle = {
  display: 'block',
  background: 'transparent',
  color: 'var(--faint)',
  fontSize: 10,
  fontWeight: 600,
  padding: '4px 10px',
  borderRadius: 6,
  textDecoration: 'none',
  textAlign: 'center' as const,
  border: '1px solid var(--rule)',
};

const pptBtnStyle = {
  display: 'block',
  background: '#e8f0fb',
  color: '#1a4a8a',
  fontSize: 10,
  fontWeight: 700,
  padding: '4px 10px',
  borderRadius: 6,
  textDecoration: 'none',
  textAlign: 'center' as const,
};

const pptBadgeStyle = {
  display: 'inline-block',
  fontSize: 9,
  fontWeight: 700,
  background: '#e8f0fb',
  color: '#1a4a8a',
  padding: '2px 7px',
  borderRadius: 999,
};

export default function HomePage() {
  const { lang, setLang, chosen } = useLang();
  const T = (key: string) => t[key][lang];
  const [filter, setFilter] = useState('all');

  const visible = stories.filter(s =>
    filter === 'all' || s.audiences.includes(filter)
  );

  const openFile = (url: string | undefined) => {
    window.open(url || '/download', '_blank');
  };

  const primaryUrl = (s: typeof stories[0]) =>
    lang === 'ko' ? s.driveFileKo : s.driveFileEn;

  const secondaryUrl = (s: typeof stories[0]) =>
    lang === 'ko' ? s.driveFileEn : s.driveFileKo;

  // ── Welcome screen ────────────────────────────────────────
  if (!chosen) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--green-dark)',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        textAlign: 'center' as const,
      }}>
        <div style={{ maxWidth: 560, width: '100%' }}>

          <p style={{
            fontSize: 11,
            letterSpacing: '.14em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,.45)',
            marginBottom: 20,
          }}>
            소그룹 나눔 자료 · Small Group Discussion Series
          </p>

          <h1 style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 6vw, 3.2rem)',
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 8,
          }}>
            베풂의 교만 이야기
          </h1>

          <h2 style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            color: 'rgba(255,255,255,.6)',
            marginBottom: 24,
            fontWeight: 400,
          }}>
            Arrogant Generosity
          </h2>

          <p style={{
            fontSize: 14,
            color: 'rgba(255,255,255,.45)',
            marginBottom: 40,
          }}>
            박숭현 선교사 (Simon Park) · QuestionsOnly.Life
          </p>

          <div style={{
            width: 40, height: 1,
            background: 'rgba(255,255,255,.2)',
            margin: '0 auto 40px',
          }} />

          <p style={{
            fontSize: 15,
            color: 'rgba(255,255,255,.75)',
            marginBottom: 8,
            lineHeight: 1.7,
          }}>
            언어를 선택해 주세요
          </p>
          <p style={{
            fontSize: 13,
            color: 'rgba(255,255,255,.5)',
            marginBottom: 36,
            lineHeight: 1.7,
          }}>
            Please choose your preferred language
          </p>

          {/* Language buttons */}
          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap' as const,
            marginBottom: 20,
          }}>
            <button
              onClick={() => {
                setLang('ko');
                window.open('https://docs.google.com/document/d/1nqi3Ms9JqXTuMPLAK7QzkmpLNTg-sS3V/edit', '_blank');
              }}
              style={{
                padding: '18px 40px',
                background: '#fff',
                color: 'var(--green-dark)',
                border: 'none',
                borderRadius: 'var(--r)',
                fontSize: 17,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--body)',
                minWidth: 200,
                lineHeight: 1.4,
              }}
            >
              한국어로 시작하기
              <div style={{ fontSize: 11, fontWeight: 400, marginTop: 4, color: 'var(--muted)' }}>
                먼저읽어주세요 열기 →
              </div>
            </button>

            <button
              onClick={() => {
                setLang('en');
                window.open('https://docs.google.com/document/d/1bhCEx6M7Y9_9Uiql62jpugu_B0JiM2SP/edit', '_blank');
              }}
              style={{
                padding: '18px 40px',
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255,255,255,.5)',
                borderRadius: 'var(--r)',
                fontSize: 17,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--body)',
                minWidth: 200,
                lineHeight: 1.4,
              }}
            >
              Start in English
              <div style={{ fontSize: 11, fontWeight: 400, marginTop: 4, color: 'rgba(255,255,255,.6)' }}>
                Open Read Me First →
              </div>
            </button>
          </div>

          <p style={{
            fontSize: 12,
            color: 'rgba(255,255,255,.35)',
            lineHeight: 1.7,
            marginTop: 16,
          }}>
            언제든지 다른 언어로 전환할 수 있습니다
            <br />
            You can switch languages at any time while browsing
          </p>

        </div>
      </div>
    );
  }

  // ── Main homepage ─────────────────────────────────────────
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <p className="hero__eyebrow">{T('seriesLabel')}</p>
        <h1 className="hero__title">
          {lang === 'ko' ? '베풂의 교만 이야기' : 'Arrogant Generosity'}
        </h1>
        <p className="hero__subtitle">
          {lang === 'ko' ? 'Arrogant Generosity' : '베풂의 교만 이야기'}
        </p>
        <p className="hero__author">{T('heroAuthor')}</p>
        <div className="hero__rule" />
        <p className="hero__desc">{T('heroDescEn')}</p>
      </section>


      {/* All Stories */}
      <section className="sec sec--alt" id="stories">
        <div className="wrap">
          <h2 className="sec__title">{T('allStories')}</h2>
          <p className="sec__sub">
            {lang === 'ko'
              ? '베풂의 교만 이야기 · 박숭현 선교사'
              : 'Arrogant Generosity · Simon Park'}
          </p>

          <div className="filter-bar">
            <span className="filter-bar__label">{T('filterLabel')}</span>
            <button
              className={filter === 'all' ? 'fbtn active' : 'fbtn'}
              onClick={() => setFilter('all')}
            >
              {T('allAudience')}
            </button>
            {audiences.map(({ key, tk }) => (
              <button
                key={key}
                className={filter === key ? 'fbtn active' : 'fbtn'}
                onClick={() => setFilter(key)}
              >
                {T(tk)}
              </button>
            ))}
          </div>

          <div className="card-grid">
            {visible.map(s => (
              <div
                key={s.id}
                className="story-card"
                style={cardStyle}
                onClick={() => openFile(primaryUrl(s))}
              >
                <span className="story-card__num">
                  {lang === 'ko' ? `이야기 #${s.id}` : `Story #${s.id}`}
                </span>
                <div className="story-card__ko">
                  {lang === 'ko' ? s.titleKo : s.titleEn}
                </div>
                <div className="story-card__en">
                  {lang === 'ko' ? s.titleEn : s.titleKo}
                </div>

                {lang === 'ko' && s.drivePptKo && (
                  <div style={{ marginBottom: 6 }}>
                    <span style={pptBadgeStyle}>배경자료 PPT</span>
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 5, marginTop: 8 }}>
                  <a
                    href={primaryUrl(s) || '/download'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={primaryBtnStyle}
                    onClick={e => e.stopPropagation()}
                  >
                    {lang === 'ko' ? '↓ 한국어 다운로드' : '↓ Download English'}
                  </a>

                  <a
                    href={secondaryUrl(s) || '/download'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={secondaryBtnStyle}
                    onClick={e => e.stopPropagation()}
                  >
                    {lang === 'ko' ? '↓ English' : '↓ 한국어'}
                  </a>

                  {lang === 'ko' && s.drivePptKo && (
                    <a
                      href={s.drivePptKo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={pptBtnStyle}
                      onClick={e => e.stopPropagation()}
                    >
                      ↓ 배경자료 PPT
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Paths */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec__title">{T('suggestedPaths')}</h2>
          <p className="sec__sub">
            {lang === 'ko'
              ? '대상별 추천 읽기 코스'
              : 'Three curated reading paths for different groups'}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {[
              { titleKey: 'path1Title', subKey: 'path1Sub', ids: path1 },
              { titleKey: 'path2Title', subKey: 'path2Sub', ids: path2 },
              { titleKey: 'path3Title', subKey: 'path3Sub', ids: path3 },
            ].map((path) => (
              <div key={path.titleKey} style={{
                background: '#fff',
                border: '1px solid var(--rule)',
                borderRadius: 'var(--r)',
                padding: 20,
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic',
                  fontSize: '1rem', marginBottom: 4,
                }}>
                  {T(path.titleKey)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--faint)', marginBottom: 14 }}>
                  {T(path.subKey)}
                </div>
                <ol style={{ listStyle: 'none', padding: 0 }}>
                  {path.ids.map((id, i) => {
                    const s = stories.find(x => x.id === id);
                    if (!s) return null;
                    return (
                      <li
                        key={id}
                        style={{
                          fontSize: 12, padding: '5px 0',
                          borderBottom: '1px solid var(--rule)',
                          display: 'flex', gap: 8,
                          cursor: 'pointer',
                        }}
                        onClick={() => openFile(primaryUrl(s))}
                      >
                        <span style={{
                          color: 'var(--green)', fontWeight: 700,
                          minWidth: 18, fontSize: 10,
                        }}>
                          {i + 1}.
                        </span>
                        <span style={{ color: 'var(--muted)' }}>
                          {lang === 'ko' ? s.titleKo : s.titleEn}
                          {' '}
                          <em style={{ fontSize: 10, color: 'var(--faint)' }}>
                            {lang === 'ko' ? s.titleEn : s.titleKo}
                          </em>
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}