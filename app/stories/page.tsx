'use client';
import { useState } from 'react';
import Link from 'next/link';
import { stories, audienceLabels } from '@/lib/stories-data';

export default function StoriesPage() {
  const [filter, setFilter] = useState('all');

  const visible = stories.filter(s =>
    filter === 'all' || s.audiences.includes(filter)
  );

  return (
    <div className="wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>

      <h1 className="sec__title">이야기 모음 · All 41 Stories</h1>
      <p className="sec__sub" style={{ marginBottom: 28 }}>
        베풂의 교만 이야기 · Arrogant Generosity · 박숭현 선교사 (Simon Park)
      </p>

      {/* Filter bar */}
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

      <p style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 20 }}>
        {visible.length}편 · {visible.length} stories
      </p>

      {/* Story cards */}
      <div className="card-grid">
        {visible.map(s => (
          <Link
            href={`/stories/${s.slug}`}
            key={s.id}
            className="story-card"
          >
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
  );
}