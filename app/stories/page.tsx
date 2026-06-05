'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLang } from '@/lib/language-context'
import { stories, partLabels, readMeFirst, readingPaths, Story } from '@/lib/stories-data'
import ShareButtons from '@/components/ShareButtons'

// ── Story Card with hover effect ────────────────────────────────
function StoryCard({ story, lang, onClick }: {
  story: Story
  lang: 'ko' | 'en'
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const title = lang === 'ko' ? story.titleKo : story.titleEn
  const subtitle = lang === 'ko' ? story.subtitleKo : story.subtitleEn
  const hasPpt = !!story.drivePptKo
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#f0f7f0' : '#fafaf8',
        border: hovered ? '1.5px solid var(--green)' : '1px solid #d8d4cc',
        borderRadius: '12px',
        padding: '1.1rem 1.25rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: hovered
          ? '0 6px 20px rgba(0,0,0,0.12)'
          : '0 2px 6px rgba(0,0,0,0.06)',
        transition: 'all 0.18s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.45rem',
      }}>
        <span style={{
          fontSize: '0.72rem',
          color: '#999',
          fontWeight: 500,
        }}>
          {lang === 'ko' ? `이야기 ${story.id}` : `Story ${story.id}`}
        </span>
        {hasPpt && (
          <span style={{
            fontSize: '0.62rem',
            backgroundColor: hovered ? 'var(--green)' : '#e8f0fb',
            color: hovered ? '#fff' : '#1a4a8a',
            borderRadius: '4px',
            padding: '0.1rem 0.4rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            transition: 'all 0.18s ease',
          }}>
            PPT
          </span>
        )}
      </div>
      <h3 style={{
        fontSize: '0.97rem',
        fontWeight: 600,
        color: hovered ? 'var(--green)' : 'var(--text)',
        lineHeight: 1.35,
        marginBottom: '0.35rem',
        transition: 'color 0.18s ease',
      }}>
        {title}
      </h3>
      {subtitle && (
        <p style={{
          fontSize: '0.79rem',
          color: '#888',
          lineHeight: 1.45,
          marginBottom: '0.6rem',
          flex: 1,
        }}>
          {subtitle}
        </p>
      )}
      <span style={{
        fontSize: '0.8rem',
        color: 'var(--green)',
        fontWeight: 600,
        marginTop: 'auto',
        opacity: hovered ? 1 : 0.7,
        transition: 'opacity 0.18s ease',
      }}>
        {lang === 'ko' ? '읽기 →' : 'Read →'}
      </span>
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────────
export default function StoriesPage() {
  const { lang } = useLang()
  const router = useRouter()
  const parts = [1, 2, 3, 4, 5, 6]
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>
          {lang === 'ko' ? '베풂의 교만 이야기' : 'Arrogant Generosity'}
        </h1>

        {/* Banner row: Read Me First + Reading Paths */}
        <div style={styles.bannerRow}>
          <a
            href={readMeFirst[lang]}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.readMeFirstBanner}
          >
            <span>{lang === 'ko' ? '📖 먼저 읽어주세요' : '📖 Read Me First'}</span>
            <span>↗</span>
          </a>
          <a
            href={readingPaths[lang]}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.readingPathsBanner}
          >
            <span>{lang === 'ko' ? '🧭 인도자 코스 안내' : '🧭 Reading Paths'}</span>
            <span>↗</span>
          </a>
        </div>

        <p style={styles.subheading}>
          {lang === 'ko' ? '38편 · 6부' : '38 Stories · 6 Parts'}
        </p>

        {/* Share the whole collection */}
        <ShareButtons
          lang={lang}
          path="/stories"
          title={lang === 'ko' ? '베풂의 교만 이야기' : 'Arrogant Generosity'}
          heading={lang === 'ko' ? '이야기 모음 공유하기' : 'Share the collection'}
        />
        {parts.map(part => {
          const partStories = stories.filter(s => s.part === part)
          const label = partLabels[part]
          const partText = lang === 'ko' ? label.ko : label.en
          return (
            <div key={part} style={styles.partSection}>
              <h2 style={styles.partHeading}>{partText}</h2>
              <div style={styles.grid}>
                {partStories.map(story => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    lang={lang}
                    onClick={() => router.push(`/stories/${story.id}`)}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Styles ───────────────────────────────────────────────────────
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
    marginBottom: '0.75rem',
  },
  subheading: {
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '2.5rem',
  },
  partSection: {
    marginBottom: '2.5rem',
  },
  partHeading: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: 'var(--green)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.07em',
    marginBottom: '0.85rem',
    paddingBottom: '0.4rem',
    borderBottom: '1.5px solid var(--green)',
    opacity: 0.8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
    gap: '0.85rem',
  },
  bannerRow: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '1.25rem',
    flexWrap: 'wrap' as const,
  },
  readMeFirstBanner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
    flex: '1 1 220px',
    backgroundColor: 'var(--green)',
    color: '#fff',
    borderRadius: '10px',
    padding: '0.75rem 1.25rem',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 600,
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  },
  readingPathsBanner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
    flex: '1 1 220px',
    backgroundColor: '#fff',
    color: 'var(--green)',
    border: '1.5px solid var(--green)',
    borderRadius: '10px',
    padding: '0.75rem 1.25rem',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 600,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
}
