'use client'

import { useRouter } from 'next/navigation'
import { useLang, t } from '@/lib/language-context'
import { stories, partLabels, readMeFirst } from '@/lib/stories-data'

export default function StoriesPage() {
  const { lang } = useLang()
  const router = useRouter()

  // Group stories by part
  const parts = [1, 2, 3, 4, 5, 6]

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>
          {lang === 'ko' ? '베풂의 교만 이야기' : 'Arrogant Generosity'}
        </h1>
        /* Read Me First banner */
        <a
          href={readMeFirst[lang]}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.readMeFirstBanner}
        >
          <span style={styles.rmfLabel}>
            {lang === 'ko' ? '먼저 읽어주세요' : 'Read Me First'}
          </span>
          <span style={styles.rmfArrow}>↗</span>
        </a>

        <p style={styles.subheading}>
          {lang === 'ko' ? '38편 · 6부' : '38 Stories · 6 Parts'}
        </p>

        {parts.map(part => {
          const partStories = stories.filter(s => s.part === part)
          const label = partLabels[part]
          const partText = lang === 'ko' ? label.ko : label.en

          return (
            <div key={part} style={styles.partSection}>
              <h2 style={styles.partHeading}>{partText}</h2>
              <div style={styles.grid}>
                {partStories.map(story => {
                  const title = lang === 'ko' ? story.titleKo : story.titleEn
                  const subtitle = lang === 'ko' ? story.subtitleKo : story.subtitleEn
                  const hasPpt = !!story.drivePptKo

                  return (
                    <div
                      key={story.id}
                      style={styles.card}
                      onClick={() => router.push(`/stories/${story.id}`)}
                    >
                      <div style={styles.cardHeader}>
                        <span style={styles.storyNum}>
                          {lang === 'ko' ? `이야기 ${story.id}` : `Story ${story.id}`}
                        </span>
                        {hasPpt && (
                          <span style={styles.pptBadge}>PPT</span>
                        )}
                      </div>
                      <h3 style={styles.cardTitle}>{title}</h3>
                      {subtitle && (
                        <p style={styles.cardSubtitle}>{subtitle}</p>
                      )}
                      <span style={styles.readMore}>
                        {lang === 'ko' ? '읽기 →' : 'Read →'}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: 'var(--bg)',
    padding: '2rem 1rem 4rem',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--text)',
    marginBottom: '0.25rem',
  },
  subheading: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    marginBottom: '3rem',
  },
  partSection: {
    marginBottom: '3rem',
  },
  partHeading: {
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--accent)',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid var(--border)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1rem',
  },
  card: {
    backgroundColor: 'var(--card-bg)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '1.25rem',
    cursor: 'pointer',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  storyNum: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  pptBadge: {
    fontSize: '0.65rem',
    backgroundColor: 'var(--accent)',
    color: '#fff',
    borderRadius: '4px',
    padding: '0.1rem 0.4rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--text)',
    lineHeight: 1.35,
    marginBottom: '0.4rem',
  },
  cardSubtitle: {
    fontSize: '0.82rem',
    color: 'var(--text-muted)',
    lineHeight: 1.5,
    marginBottom: '0.75rem',
    flex: 1,
  },
  readMeFirstBanner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'var(--green)',
    color: '#fff',
    borderRadius: '10px',
    padding: '0.75rem 1.25rem',
    textDecoration: 'none',
    marginBottom: '1.5rem',
    fontSize: '0.95rem',
    fontWeight: 600,
  },
  rmfLabel: {
    display: 'inline' as const,
  },
  rmfArrow: {
    fontSize: '1.1rem',
  },
  readMore: {
    fontSize: '0.82rem',
    color: 'var(--accent)',
    fontWeight: 600,
    marginTop: 'auto',
  },
}
