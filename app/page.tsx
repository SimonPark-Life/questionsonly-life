'use client';
import { useState } from 'react';
import Link from 'next/link';
import { stories, audienceLabels } from '@/lib/stories-data';

const featuredIds = [1, 16, 28, 32, 36, 39, 41];
const featured = featuredIds.map(id => stories.find(s => s.id === id)!).filter(Boolean);

const path1 = [1, 2, 4, 9, 16, 18, 21, 31, 36, 39];
const path2 = [2, 3, 5, 8, 17, 21, 28, 37, 38, 40];
const path3 = [26, 27, 29, 34, 35, 36, 38, 39, 41];

export default function HomePage() {
  const [filter, setFilter] = useState('all');

  const visible = stories.filter(s =>
    filter === 'all' || s.audiences.includes(filter)
  );

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <p className="hero__eyebrow">소그룹 나눔 자료 · Small Group Discussion Series</p>
        <h1 className="hero__title">베풂의 교만 이야기</h1>
        <p className="hero__subtitle">Arrogant Generosity</p>
        <p className="hero__author">박숭현 선교사 (Simon Park) · QuestionsOnly.Life</p>
        <div className="hero__rule" />
        <p className="hero__desc">
          선교 현장에서 배운 삶의 이야기 41편 — 겸손, 이웃 됨, 정의, 그리고 은혜에 관한
          성찰을 소그룹 나눔과 토론을 위해 모았습니다.
        </p>
        <p className="hero__desc" style={{ marginTop: 8 }}>
          41 stories from the mission field, gathered for small group sharing and discussion.
        </p>
      </section>

            {/* Notice banner */}
      <div style={{
        background: 'var(--cream-dark)',
        borderTop: '3px solid #8B6914',
        borderBottom: '3px solid #8B6914',
        padding: '24px',
      }}>
        <div style={{
          maxWidth: 860,
          margin: '0 auto',
          background: '#fffbea',
          border: '1px solid #e8d88a',
          borderRadius: 'var(--r)',
          padding: '20px 28px',
          display: 'flex',
          gap: 20,
          alignItems: 'flex-start',
        }}>

          {/* Icon */}
          <div style={{
            fontSize: 28,
            lineHeight: 1,
            flexShrink: 0,
            marginTop: 2,
          }}>
            📖
          </div>

          {/* Text */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 8,
            }}>
              <span style={{
                fontSize: 13,
                fontWeight: 700,
                color: '#5a3e00',
                letterSpacing: '.02em',
              }}>
                이야기 본문 안내 · About the Story Texts
              </span>
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
            </div>

            <p style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#4a3200',
              lineHeight: 1.7,
              marginBottom: 6,
            }}>
              이 사이트의 이야기 본문은 소개 목적으로 편집·요약되었습니다.
              완전한 원문과 소그룹 나눔 자료는 다운로드 파일에서 확인하세요.
            </p>

            <p style={{
              fontSize: 13,
              color: '#6a5200',
              lineHeight: 1.7,
            }}>
              The story texts on this site are edited summaries for preview purposes only.
              Full original texts and complete small group guides — including Church Community guides,
              Community Group guides, and Leader's Guides — are available in the{' '}
              <Link href="/download" style={{
                color: '#8B6914',
                fontWeight: 700,
                textDecoration: 'underline',
              }}>
                downloadable files
              </Link>
            </p>
          </div>

        </div>
      </div>
            {/* Download cards */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec__title">파일 다운로드 · Download Files</h2>
          <p className="sec__sub">Complete story files with discussion guides and leader's notes</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>

            <div style={{ background: 'var(--green-dark)', borderRadius: 'var(--r)', padding: '24px 28px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', letterSpacing: '.08em', textTransform: 'uppercase' as const, marginBottom: 8 }}>
                영어 · English
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', color: '#fff', marginBottom: 6 }}>
                Arrogant Generosity
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>
                42 files · Read Me First + Stories 1–41
              </div>
              <a href="https://drive.google.com/drive/folders/1fic0Tmt5yHOdDy0IFiQuq8ACBnBoFBAG" target="_blank" rel="noopener noreferrer" className="dl-btn dl-btn--en">
                ↓ Open English Folder
              </a>
            </div>

            <div style={{ background: 'var(--cream-dark)', border: '1px solid var(--green-mid)', borderRadius: 'var(--r)', padding: '24px 28px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', letterSpacing: '.08em', textTransform: 'uppercase' as const, marginBottom: 8 }}>
                한국어 · Korean
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--ink)', marginBottom: 6 }}>
                베풂의 교만 이야기
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
                42개 파일 · 먼저읽어주세요 + 이야기 1–41편
              </div>
              <a href="https://drive.google.com/drive/folders/1uSVy-diqAlv0s6KABtewHF7SYiG96jok" target="_blank" rel="noopener noreferrer" className="dl-btn dl-btn--ko">
                ↓ 한국어 폴더 열기
              </a>
            </div>

          </div>
        </div>
      </section>

     

      {/* Quote */}
      <section className="sec">
        <div className="wrap">
          <div className="pull-quote">
            <p className="pull-quote__text">
              "불치병이라는 적 너머, 나는 하나님이 사랑하시는 한 사람을 보았습니다."
            </p>
            <p className="pull-quote__attr">
              — 박숭현 (Simon Park), 이야기 28 · Beyond the Enemy
            </p>
          </div>
        </div>
      </section>

      {/* All Stories */}
      <section className="sec sec--alt" id="stories">
        <div className="wrap">
          <h2 className="sec__title">이야기 모음 · All 41 Stories</h2>
          <p className="sec__sub">베풂의 교만 이야기 · Arrogant Generosity</p>

          <div className="filter-bar">
            <span className="filter-bar__label">대상:</span>
            {[['all', '전체 All'], ...Object.entries(audienceLabels)].map(([k, v]) => (
              <button
                key={k}
                className={`fbtn${filter === k ? ' active' : ''}`}
                onClick={() => setFilter(k)}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="card-grid">
            {visible.map(s => (
              <Link href={`/stories/${s.slug}`} key={s.id} className="story-card">
                <span className="story-card__num">이야기 #{s.id}</span>
                <div className="story-card__ko">{s.titleKo}</div>
                <div className="story-card__en">{s.titleEn}</div>
                <div>
                  {s.tags.slice(0, 2).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Paths */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec__title">추천 코스 · Suggested Paths</h2>
          <p className="sec__sub">Three curated reading paths for different groups</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16
          }}>
            {[
              { title: '코스 1 — 있는 자리에서', sub: 'Young Adults & First Groups', ids: path1 },
              { title: '코스 2 — 이웃이 된다는 것', sub: 'Mid-Career & Organizations', ids: path2 },
              { title: '코스 3 — 눈을 들어', sub: 'Seniors & Retirees', ids: path3 },
            ].map((path) => (
              <div key={path.title} style={{
                background: '#fff',
                border: '1px solid var(--rule)',
                borderRadius: 'var(--r)',
                padding: 20
              }}>
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  marginBottom: 4
                }}>
                  {path.title}
                </div>
                <div style={{ fontSize: 11, color: 'var(--faint)', marginBottom: 14 }}>
                  {path.sub}
                </div>
                <ol style={{ listStyle: 'none', padding: 0 }}>
                  {path.ids.map((id, i) => {
                    const s = stories.find(x => x.id === id);
                    if (!s) return null;
                    return (
                      <li key={id} style={{
                        fontSize: 12,
                        padding: '5px 0',
                        borderBottom: '1px solid var(--rule)',
                        display: 'flex',
                        gap: 8
                      }}>
                        <span style={{
                          color: 'var(--green)',
                          fontWeight: 700,
                          minWidth: 18,
                          fontSize: 10
                        }}>
                          {i + 1}.
                        </span>
                        <Link href={`/stories/${s.slug}`} style={{ color: 'var(--muted)' }}>
                          {s.titleKo}{' '}
                          <em style={{ fontSize: 10, color: 'var(--faint)' }}>
                            {s.titleEn}
                          </em>
                        </Link>
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