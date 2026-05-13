'use client'

import { useLang } from '@/lib/language-context'
import { readMeFirst } from '@/lib/stories-data'

export default function ReadMeFirstCard() {
  const { lang } = useLang()

  const content = {
    ko: {
      badge: '먼저 읽어주세요',
      title: '베풂의 교만 이야기',
      subtitle: '이 시리즈를 시작하기 전에',
      description: '이야기들을 어떻게 읽고, 나누고, 활용하는지 안내합니다.',
      btn: '읽기 시작하기 →',
    },
    en: {
      badge: 'Read Me First',
      title: 'Arrogant Generosity',
      subtitle: 'Before you begin this series',
      description: 'How to read, share, and use these stories.',
      btn: 'Start Here →',
    },
  }

  const c = content[lang]
  const link = readMeFirst[lang]

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.card}
    >
      <span style={styles.badge}>{c.badge}</span>
      <h2 style={styles.title}>{c.title}</h2>
      <p style={styles.subtitle}>{c.subtitle}</p>
      <p style={styles.description}>{c.description}</p>
      <span style={styles.btn}>{c.btn}</span>
    </a>
  )
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    display: 'block',
    backgroundColor: 'var(--accent)',
    color: '#fff',
    borderRadius: '14px',
    padding: '1.75rem',
    textDecoration: 'none',
    marginBottom: '2.5rem',
    transition: 'opacity 0.15s',
    cursor: 'pointer',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: '999px',
    padding: '0.2rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 700,
    marginBottom: '0.25rem',
    color: '#fff',
  },
  subtitle: {
    fontSize: '0.9rem',
    opacity: 0.85,
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '0.95rem',
    opacity: 0.9,
    marginBottom: '1.25rem',
    lineHeight: 1.6,
  },
  btn: {
    display: 'inline-block',
    backgroundColor: '#fff',
    color: 'var(--accent)',
    borderRadius: '8px',
    padding: '0.5rem 1.25rem',
    fontWeight: 600,
    fontSize: '0.9rem',
  },
}
