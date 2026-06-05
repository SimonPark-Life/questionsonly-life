'use client'
import { useState } from 'react'

type Lang = 'ko' | 'en'

interface ShareButtonsProps {
  lang: Lang
  path: string
  title: string
  heading?: string
}

export default function ShareButtons({ lang, path, title, heading }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const label = {
    heading: heading ?? (lang === 'ko' ? '이 이야기 공유하기' : 'Share this story'),
    share: lang === 'ko' ? '공유' : 'Share',
    copy: lang === 'ko' ? '링크 복사' : 'Copy link',
    copied: lang === 'ko' ? '복사됨!' : 'Copied!',
    facebook: lang === 'ko' ? '페이스북' : 'Facebook',
    email: lang === 'ko' ? '이메일' : 'Email',
  }

  const getUrl = () =>
    (typeof window !== 'undefined' ? window.location.origin : 'https://www.questionsonly.life') + path

  const message =
    lang === 'ko'
      ? `이 이야기를 나누고 싶어 보내요: ${title}`
      : `I thought you might like this: ${title}`

  const handleShare = async () => {
    const url = getUrl()
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text: message, url })
      } catch {
        /* user cancelled the share sheet — nothing to do */
      }
    } else {
      handleCopy()
    }
  }

  const handleCopy = async () => {
    const url = getUrl()
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt(lang === 'ko' ? '링크를 복사하세요:' : 'Copy this link:', url)
    }
  }

  const handleFacebook = () => {
    const url = getUrl()
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const handleEmail = () => {
    const url = getUrl()
    const subject = `${title} — QuestionsOnly.Life`
    const body = `${message}\n\n${url}`
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div style={styles.wrap}>
      <p style={styles.label}>{label.heading}</p>
      <div style={styles.row}>
        <button onClick={handleShare} style={{ ...styles.btn, ...styles.shareBtn }}>
          📤 {label.share}
        </button>
        <button onClick={handleCopy} style={{ ...styles.btn, ...styles.copyBtn }}>
          {copied ? `✓ ${label.copied}` : `🔗 ${label.copy}`}
        </button>
        <button onClick={handleFacebook} style={{ ...styles.btn, ...styles.fbBtn }}>
          <span style={styles.fbMark}>f</span> {label.facebook}
        </button>
        <button onClick={handleEmail} style={{ ...styles.btn, ...styles.emailBtn }}>
          ✉️ {label.email}
        </button>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    marginTop: '1.5rem',
    textAlign: 'center' as const,
  },
  label: {
    fontSize: '0.82rem',
    color: 'var(--faint)',
    marginBottom: '0.75rem',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: '0.6rem',
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.6rem 1.1rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 600,
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  shareBtn: {
    backgroundColor: 'var(--green)',
    color: '#fff',
    border: '1.5px solid var(--green)',
  },
  copyBtn: {
    backgroundColor: 'transparent',
    color: 'var(--green)',
    border: '1.5px solid var(--green)',
  },
  fbBtn: {
    backgroundColor: '#fff',
    color: '#1a4a8a',
    border: '1.5px solid #c5d8f5',
  },
  fbMark: {
    fontWeight: 800,
    fontFamily: 'Georgia, serif',
    fontSize: '1rem',
    lineHeight: 1,
  },
  emailBtn: {
    backgroundColor: 'transparent',
    color: 'var(--green)',
    border: '1.5px solid var(--green)',
  },
}

