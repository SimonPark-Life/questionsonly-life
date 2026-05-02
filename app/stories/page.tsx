'use client';
import { useState } from 'react';
import { useLang, t } from '@/lib/language-context';
import { stories } from '@/lib/stories-data';

const audienceKeys: Record<string, string> = {
  'young-adults':      'youngAdults',
  'mid-career':        'midCareer',
  'retirees':          'retirees',
  'mission-trainees':  'missionTrainees',
  'first-small-group': 'firstSmallGroup',
};

export default function StoriesPage() {
  const { lang } = useLang();
  const T = (key: string) => t[key][lang];
  const [filter, setFilter] = useState('all');

  const visible = stories.filter(s =>
    filter === 'all' || s.audiences.includes(filter)
  );

  return (
    <div className="wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>

      <h1 className="sec__title">{T('storiesTitle')}</h1>
      <p className="sec__sub" style={{ marginBottom: 28 }}>
        {T('storiesSub')}
      </p>

      <div className="filter-bar">
        <span className="filter-bar__label">{T('filterLabel')}</span>
        <button
          className={`fbtn${filter === 'all' ? ' active' : ''}`}
          onClick={() => setFilter('all')}
        >
          {T('allAudience')}
        </button>
        {Object.entries(audienceKeys).map(([k, tk]) => (
          <button
            key={k}
            className={`fbtn${filter === k ? ' active' : ''}`}
            onClick={() => setFilter(k)}
          >
            {T(tk)}
          </button>
        ))}
      </div>

      <p style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 20 }}>
        {visible.length}{lang === 'ko' ? '편' : ' stories'}
      </p>

           <div className="card-grid">
            {visible.map(s => (
              <div
                key={s.id}
                className="story-card"
                onClick={() => window.open(lang === 'ko' ? (s.driveFileKo || '/download') : (s.driveFileEn || '/download'), '_blank')}
                style={{ cursor: 'pointer' }}
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
                    <span style={{
                      display: 'inline-block',
                      fontSize: 9,
                      fontWeight: 700,
                      background: '#e8f0fb',
                      color: '#1a4a8a',
                      padding: '2px 7px',
                      borderRadius: 999,
                    }}>
                      배경자료 PPT
                    </span>
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 5,
                  marginTop: 8,
                }}>
                  <div style={{
                    background: 'var(--green)',
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '6px 10px',
                    borderRadius: 6,
                    textAlign: 'center',
                  }}>
                    {lang === 'ko' ? '↓ 한국어 다운로드' : '↓ Download English'}
                  </div>

                  
                  <a href={lang === 'ko' ? (s.driveFileEn || '/download') : (s.driveFileKo || '/download')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      display: 'block',
                      background: 'transparent',
                      color: 'var(--faint)',
                      fontSize: 10,
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 6,
                      textDecoration: 'none',
                      textAlign: 'center',
                      border: '1px solid var(--rule)',
                    }}
                  >
                    {lang === 'ko' ? '↓ English' : '↓ 한국어'}
                  </a>

                  {lang === 'ko' && s.drivePptKo && (
                    
                  <a href={s.drivePptKo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: 'block',
                        background: '#e8f0fb',
                        color: '#1a4a8a',
                        fontSize: 10,
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: 6,
                        textDecoration: 'none',
                        textAlign: 'center',
                      }}
                    >
                      ↓ 배경자료 PPT
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
    </div>
  );
}