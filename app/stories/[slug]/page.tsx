'use client'
import { useParams, useRouter } from 'next/navigation'
import { useLang } from '@/lib/language-context'
import { stories, partLabels } from '@/lib/stories-data'
import ShareButtons from '@/components/ShareButtons'

export default function StoryDigestPage() {
  const params = useParams()
  const router = useRouter()
  const { lang } = useLang()

  // Support both slug (old) and id (new) routing
  const param = params.slug as string
  const id = Number(param)
  const story = isNaN(id)
    ? stories.find(s => (s as any).slug === param)
    : stories.find(s => s.id === id)

  if (!story) {
    return (
      <div style={styles.notFound}>
        <p>{lang === 'ko' ? '이야기를 찾을 수 없습니다.' : 'Story not found.'}</p>
        <button onClick={() => router.push('/stories')} style={styles.backBtn}>
          {lang === 'ko' ? '← 목록으로' : '← Back to Stories'}
        </button>
      </div>
    )
  }

  const title = lang === 'ko' ? story.titleKo : story.titleEn
  const subtitle = lang === 'ko' ? story.subtitleKo : story.subtitleEn
  const digest = lang === 'ko' ? story.digestKo : story.digestEn
  const primaryDrive = lang === 'ko' ? story.driveKo : story.driveEn
  const secondaryDrive = lang === 'ko' ? story.driveEn : story.driveKo
  const partLabel = partLabels[story.part]
  const partText = lang === 'ko' ? partLabel.ko : partLabel.en
  const otherLangLabel = lang === 'ko' ? 'Read in English' : '한국어로 읽기'
  const downloadLabel = lang === 'ko' ? '전체 이야기 읽기' : 'Read Full Story'
  const pptLabel = lang === 'ko' ? 'PPT 배경 슬라이드' : 'PPT Background Slides'
  const pptKoLabel = 'PPT 배경 슬라이드 (한국어)'
  const pptEnLabel = 'PPT Background Slides (English)'
  const activePpt = lang === 'ko' ? story.drivePptKo : (story.drivePptEn || story.drivePptKo)
  const otherPpt = lang === 'ko' ? story.drivePptEn : null
  const backLabel = lang === 'ko' ? '← 목록으로' : '← Back to Stories'
  const storyNum = lang === 'ko' ? `이야기 ${story.id}` : `Story ${story.id}`

  const isPlaceholder = digest && digest.startsWith('<!-- TODO')

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Back button */}
        <button onClick={() => router.push('/stories')} style={styles.backBtn}>
          {backLabel}
        </button>

        {/* Part label */}
        <p style={styles.partLabel}>{partText}</p>

        {/* Story number + title */}
        <p style={styles.storyNum}>{storyNum}</p>
        <h1 style={styles.title}>{title}</h1>
        {subtitle && <p style={styles.subtitle}>{subtitle}</p>}

        {/* Divider */}
        <div style={styles.divider} />

        {/* Digest text */}
        <div style={styles.digestBox}>
          {isPlaceholder ? (
            <p style={styles.placeholder}>
              {lang === 'ko' ? '(준비 중입니다)' : '(Coming soon)'}
            </p>
          ) : (
            <div style={styles.digestText}>
              {digest && digest.split('\n').map((line, i) =>
                line.trim() === ''
                  ? <br key={i} />
                  : <p key={i} style={styles.digestParagraph}>{line}</p>
              )}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div style={styles.buttonGroup}>
          {primaryDrive && (
            <a
              href={primaryDrive}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.primaryBtn}
            >
              {downloadLabel} ↗
            </a>
          )}
          {secondaryDrive && (
            <a
              href={secondaryDrive}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.secondaryBtn}
            >
              {otherLangLabel} ↗
            </a>
          )}
          {activePpt && (
            <a
              href={activePpt}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.pptBtn}
            >
              📊 {pptLabel} ↗
            </a>
          )}
          {otherPpt && (
            <a
              href={otherPpt}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.pptBtnAlt}
            >
              📊 {pptEnLabel} ↗
            </a>
          )}
        </div>

        {/* Navigation: prev / next */}
        <div style={styles.navRow}>
          {story.id > 1 && (
            <button
              onClick={() => router.push(`/stories/${story.id - 1}`)}
              style={styles.navBtn}
            >
              ← {lang === 'ko' ? '이전 이야기' : 'Previous'}
            </button>
          )}
          {story.id < stories.length && (
            <button
              onClick={() => router.push(`/stories/${story.id + 1}`)}
              style={styles.navBtn}
            >
              {lang === 'ko' ? '다음 이야기' : 'Next'} →
            </button>
          )}
        </div>

        {/* Google Form — Share Your Thoughts */}
        <div style={styles.formSection}>
          <div style={styles.formDivider} />
          <p style={styles.formLabel}>
            {lang === 'ko'
              ? '이 이야기에 대한 생각을 나눠주세요'
              : 'Share your thoughts on this story'}
          </p>
          <a
            href={lang === 'ko'
              ? 'https://docs.google.com/forms/d/e/1FAIpQLSeaiJ-EpFhlIhl4mQe33x7pk3OnL0FFj_RlWwTYMzdLmDU-BQ/viewform'
              : 'https://docs.google.com/forms/d/e/1FAIpQLSfJ16vyd9xgIL1vJA1XlJGaxFYZyJK5ugKAZPkESZDtFi9H1w/viewform'}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.formBtn}
          >
            💬 {lang === 'ko' ? '생각을 나눠주세요 →' : 'Share Your Thoughts →'}
          </a>
        </div>

        {/* Share this story */}
        <ShareButtons lang={lang} path={`/stories/${story.id}`} title={title} />

      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: 'var(--bg)',
    padding: '1.25rem 1rem 3rem',
  },
  container: {
    maxWidth: '680px',
    margin: '0 auto',
  },
  notFound: {
    padding: '3rem',
    textAlign: 'center',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--green)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    padding: '0',
    marginBottom: '2rem',
    fontFamily: 'inherit',
  },
  partLabel: {
    fontSize: '0.8rem',
    color: 'var(--faint)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    marginBottom: '0.5rem',
  },
  storyNum: {
    fontSize: '0.85rem',
    color: 'var(--green)',
    marginBottom: '0.25rem',
    fontWeight: 600,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--text)',
    lineHeight: 1.25,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--faint)',
    fontStyle: 'italic',
    marginBottom: '0',
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--rule)',
    margin: '1rem 0',
  },
  digestBox: {
    backgroundColor: 'var(--card-bg, #f9f9f9)',
    borderRadius: '12px',
    padding: '1.4rem',
    marginBottom: '1.5rem',
    border: '1px solid var(--rule)',
  },
  digestText: {
    color: 'var(--text)',
    lineHeight: 1.65,
  },
  digestParagraph: {
    marginBottom: '0.45rem',
    fontSize: '1.05rem',
    lineHeight: 1.65,
  },
  placeholder: {
    color: 'var(--faint)',
    fontStyle: 'italic',
    textAlign: 'center' as const,
    padding: '1rem 0',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
    marginBottom: '2.5rem',
  },
  primaryBtn: {
    display: 'block',
    textAlign: 'center' as const,
    backgroundColor: 'var(--green)',
    color: '#fff',
    padding: '0.9rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
  },
  secondaryBtn: {
    display: 'block',
    textAlign: 'center' as const,
    backgroundColor: 'transparent',
    color: 'var(--green)',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.95rem',
    border: '1px solid var(--green)',
  },
  pptBtn: {
    display: 'block',
    textAlign: 'center' as const,
    backgroundColor: '#e8f0fb',
    color: '#1a4a8a',
    padding: '0.65rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
  },
  pptBtnAlt: {
    display: 'block',
    textAlign: 'center' as const,
    backgroundColor: 'transparent',
    color: '#1a4a8a',
    padding: '0.5rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.85rem',
    border: '1px solid #c5d8f5',
  },
  navRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBottom: '3rem',
  },
  navBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--green)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    padding: '0.5rem 0',
  },
  formSection: {
    marginTop: '1.5rem',
  },
  formDivider: {
    height: '1px',
    backgroundColor: 'var(--rule)',
    marginBottom: '1.25rem',
  },
  formLabel: {
    fontSize: '0.82rem',
    color: 'var(--faint)',
    marginBottom: '0.75rem',
    textAlign: 'center' as const,
  },
  formBtn: {
    display: 'block',
    textAlign: 'center' as const,
    backgroundColor: 'transparent',
    color: 'var(--green)',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    border: '1.5px solid var(--green)',
    transition: 'all 0.15s',
  },
}

