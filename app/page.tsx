'use client';
import { useRouter } from 'next/navigation';
import { useLang, t } from '@/lib/language-context';
import { stories, partLabels, readMeFirst } from '@/lib/stories-data';

export default function HomePage() {
  const { lang } = useLang();
  const router = useRouter();
  const T = (key: string) => t[key][lang];
  const parts = [1, 2, 3, 4, 5, 6];

  return (
    <div className="wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>

      {/* ── Read Me First Card ── */}
      <a
        href={readMeFirst[lang]}
        target="_blank"
        rel="noopener noreferrer"
        style={rmfStyles.card}
      >
        <span style={rmfStyles.badge}>
          {lang === 'ko' ? '먼저 읽어주세요' : 'Read Me First'}
        </span>
        <div style={rmfStyles.title}>
          {lang === 'ko' ? '베풂의 교만 이야기' : 'Arrogant Generosity'}
        </div>
        <div style={rmfStyles.desc}>
          {lang === 'ko'
            ? '이야기들을 어떻게 읽고, 나누고, 활용하는지 안내합니다.'
            : 'How to read, share, and use these stories.'}
        </div>
        <span style={rmfStyles.btn}>
          {lang === 'ko' ? '읽기 시작하기 →' : 'Start Here →'}
        </span>
      </a>

      {/* ── Page heading ── */}
      <h1 className="sec__title">{T('storiesTitle')}</h1>
      <p className="sec__sub" style={{ marginBottom: 28 }}>
        {lang === 'ko' ? '38편 · 6부' : '38 Stories · 6 Parts'}
      </p>

      {/* ── Stories by part ── */}
      {parts.map(part => {
        const partStories = stories.filter(s => s.part === part);
        const label = partLabels[part];
        const partText = lang === 'ko' ? label.ko : label.en;

        return (
          <div key={part} style={{ marginBottom: '2.5rem' }}>
            <h2 style={partHeadingStyle}>{partText}</h2>
            <div className="card-grid">
              {partStories.map(s => {
                const title = lang === 'ko' ? s.titleKo : s.titleEn;
                const otherTitle = lang === 'ko' ? s.titleEn : s.titleKo;
                const hasPpt = !!s.drivePptKo;

                return (
                  <div
                    key={s.id}
                    className="story-card"
                    onClick={() => router.push(`/stories/${s.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="story-card__num">
                      {lang === 'ko' ? `이야기 #${s.id}` : `Story #${s.id}`}
                    </span>

                    <div className="story-card__ko">{title}</div>
                    <div className="story-card__en">{otherTitle}</div>

                    {hasPpt && (
                      <div style={{ marginBottom: 6 }}>
                        <span style={pptBadgeStyle}>
                          {lang === 'ko' ? '배경자료 PPT' : 'PPT'}
                        </span>
                      </div>
                    )}

                    <div style={{ marginTop: 8 }}>
                      <div style={readBtnStyle}>
                        {lang === 'ko' ? '읽기 →' : 'Read →'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Styles ──

const rmfStyles: Record<string, React.CSSProperties> = {
  card: {
    display: 'block',
    backgroundColor: 'var(--green)',
    color: '#fff',
    borderRadius: '14px',
    padding: '1.5rem',
    textDecoration: 'none',
    marginBottom: '2.5rem',
    cursor: 'pointer',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: '999px',
    padding: '0.2rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '0.4rem',
  },
  desc: {
    fontSize: '0.9rem',
    opacity: 0.9,
    marginBottom: '1rem',
    lineHeight: 1.6,
  },
  btn: {
    display: 'inline-block',
    backgroundColor: '#fff',
    color: 'var(--green)',
    borderRadius: '8px',
    padding: '0.4rem 1rem',
    fontWeight: 700,
    fontSize: '0.85rem',
  },
};

const partHeadingStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--faint)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  marginBottom: '0.75rem',
  paddingBottom: '0.4rem',
  borderBottom: '1px solid var(--rule)',
};

const pptBadgeStyle: React.CSSProperties = {
  display: 'inline-block',
  fontSize: 9,
  fontWeight: 700,
  background: '#e8f0fb',
  color: '#1a4a8a',
  padding: '2px 7px',
  borderRadius: 999,
};

const readBtnStyle: React.CSSProperties = {
  background: 'var(--green)',
  color: '#fff',
  fontSize: 11,
  fontWeight: 700,
  padding: '6px 10px',
  borderRadius: 6,
  textAlign: 'center',
};
