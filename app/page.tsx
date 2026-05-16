'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from '@/lib/language-context';
import { readMeFirst } from '@/lib/stories-data';

export default function WelcomePage() {
  const { lang, setLang, chosen } = useLang();
  const router = useRouter();

  // If language already chosen, go straight to stories
  useEffect(() => {
    if (chosen) {
      router.replace('/stories');
    }
  }, [chosen, router]);

  const handleChoose = (selected: 'ko' | 'en') => {
    setLang(selected);
    // Save to localStorage so next visit skips welcome
    if (typeof window !== 'undefined') {
      localStorage.setItem('qol-lang', selected);
    }
    window.open(readMeFirst[selected], '_blank');
    router.push('/stories');
  };

  // Don't flash welcome screen if already chosen
  if (chosen) return null;

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Series title */}
        <div style={styles.titleBlock}>
          <p style={styles.seriesLabel}>
            소그룹 나눔 자료 · Small Group Discussion Series
          </p>
          <h1 style={styles.titleKo}>베풂의 교만 이야기</h1>
          <h2 style={styles.titleEn}>Arrogant Generosity</h2>
          <p style={styles.author}>
            박숭현 선교사 (Simon Park) · QuestionsOnly.Life
          </p>
        </div>

        {/* Language choice */}
        <div style={styles.choiceBlock}>
          <p style={styles.choiceLabel}>언어를 선택해 주세요</p>
          <p style={styles.choiceLabelEn}>Please choose your preferred language</p>

          <div style={styles.btnRow}>
            <button
              onClick={() => handleChoose('ko')}
              style={styles.btnKo}
            >
              <span style={styles.btnMain}>한국어로 시작하기</span>
              <span style={styles.btnSub}>먼저읽어주세요 열기 →</span>
            </button>
            <button
              onClick={() => handleChoose('en')}
              style={styles.btnEn}
            >
              <span style={styles.btnMain}>Start in English</span>
              <span style={styles.btnSub}>Open Read Me First →</span>
            </button>
          </div>

          <p style={styles.switchNote}>
            언제든지 다른 언어로 전환할 수 있습니다<br />
            You can switch languages at any time while browsing
          </p>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg)',
    padding: '2rem 1rem',
  },
  container: {
    maxWidth: '480px',
    width: '100%',
    textAlign: 'center',
  },
  titleBlock: {
    marginBottom: '3rem',
  },
  seriesLabel: {
    fontSize: '0.8rem',
    color: 'var(--faint)',
    letterSpacing: '0.05em',
    marginBottom: '1rem',
  },
  titleKo: {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--text)',
    marginBottom: '0.25rem',
  },
  titleEn: {
    fontSize: '1.3rem',
    fontWeight: 400,
    color: 'var(--faint)',
    marginBottom: '0.75rem',
  },
  author: {
    fontSize: '0.85rem',
    color: 'var(--faint)',
  },
  choiceBlock: {
    backgroundColor: 'var(--card-bg)',
    borderRadius: '16px',
    padding: '2rem 1.5rem',
    border: '1px solid var(--rule)',
  },
  choiceLabel: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: 'var(--text)',
    marginBottom: '0.25rem',
  },
  choiceLabelEn: {
    fontSize: '0.9rem',
    color: 'var(--faint)',
    marginBottom: '1.5rem',
  },
  btnRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  btnKo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
    backgroundColor: 'var(--green)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '1rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    width: '100%',
  },
  btnEn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
    backgroundColor: 'transparent',
    color: 'var(--text)',
    border: '1px solid var(--rule)',
    borderRadius: '10px',
    padding: '1rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    width: '100%',
  },
  btnMain: {
    fontSize: '1rem',
    fontWeight: 700,
  },
  btnSub: {
    fontSize: '0.8rem',
    opacity: 0.8,
  },
  switchNote: {
    fontSize: '0.78rem',
    color: 'var(--faint)',
    lineHeight: 1.6,
  },
};
