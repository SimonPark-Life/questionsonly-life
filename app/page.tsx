'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from '@/lib/language-context';
import { readMeFirst } from '@/lib/stories-data';


const WELCOME_QUESTIONS = [
  { ko: '나는 지금 내 앞에 있는 이 사람을 어떻게 보고 있는가?', en: 'How am I seeing the person in front of me?' },
  { ko: '그리고 아직 모자를 기울이지 못한 사람은 누구인가?', en: 'And to whom have we not yet tipped our hat?' },
  { ko: '나와 다른 누군가를 처음 만날 때 — 이름을 묻기도 전에, 이야기를 듣기도 전에 — 나는 이미 내 틀 안에 담지 않나요?', en: 'Are we already placing people inside our own frame — without ever learning anything about them?' },
  { ko: '법을 지키는 것과 자비를 베푸는 것 — 둘은 정말 양립할 수 없는 것일까요?', en: 'Can justice and compassion never exist together?' },
  { ko: '그리고 나는 가끔 Yes and No를 말하고 있는가?', en: 'And am I saying yes and no — or only what the frame allows?' },
  { ko: '이것이 평양에서만 일어나는 일일까요?', en: 'Is this only happening in Pyongyang?' },
];

export default function WelcomePage() {
  const { lang, setLang, chosen } = useLang();
  const router = useRouter();

  useEffect(() => {
    if (chosen) {
      router.replace('/stories');
    }
  }, [chosen, router]);

  const [qIdx, setQIdx] = useState(0);
  const [qShow, setQShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setQShow(false);
      setTimeout(() => {
        setQIdx((i) => (i + 1) % WELCOME_QUESTIONS.length);
        setQShow(true);
      }, 450);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleChoose = (selected: 'ko' | 'en') => {
    setLang(selected);
    if (typeof window !== 'undefined') {
      localStorage.setItem('qol-lang', selected);
    }
    window.open(readMeFirst[selected], '_blank');
    router.push('/stories');
  };

  if (chosen) return null;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
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

        <div style={styles.questionBlock}>
          <p style={styles.questionCaption}>
            모든 이야기는 답이 아니라 질문으로 끝납니다<br />
            Every story ends not with an answer, but a question
          </p>
          <div style={{ ...styles.questionQuoteWrap, opacity: qShow ? 1 : 0 }}>
            <p style={styles.questionQuoteKo}>{WELCOME_QUESTIONS[qIdx].ko}</p>
            <p style={styles.questionQuoteEn}>{WELCOME_QUESTIONS[qIdx].en}</p>
          </div>
          <div style={styles.questionDots}>
            {WELCOME_QUESTIONS.map((_, i) => (
              <span
                key={i}
                style={{ ...styles.dot, ...(i === qIdx ? styles.dotActive : {}) }}
              />
            ))}
          </div>
        </div>

        <div style={styles.introBlock}>
          <p style={styles.introKo}>
            콩고, 니제르, 파키스탄, 네팔, 한국에서 보낸 15년 선교사의 삶과,
            은퇴 후 미국 허드슨 밸리에서의 삶에서 길어 올린 박숭현의 38편의
            이야기 — 각 이야기는 답이 아니라 질문으로 끝납니다.
            한국어와 영어로 제공됩니다.
          </p>
          <p style={styles.introEn}>
            Thirty-eight stories from Simon Park&apos;s fifteen years of missionary
            life in Congo, Niger, Pakistan, Nepal, and Korea, and his later
            years in a Hudson Valley neighborhood — each ending with a question
            rather than an answer. Available in Korean and English.
          </p>
        </div>

        <div style={styles.perspectiveBlock}>
          <p style={styles.perspectiveKo}>
            이 이야기들은, 내 앞에 있는 모든 사람 속에서 하나님의 자녀를 보도록
            — 누구도 나보다 아래에 두지 않도록 — 끊임없이 나를 떠밀어 온
            신앙에서 나온 것입니다. 아직 다 이룬 길이 아니며, 날마다의 만남
            속에서 나는 여전히 부족함을 느낍니다. 그 마음이 전해지기를 바랍니다.
          </p>
          <p style={styles.perspectiveEn}>
            These stories come from a faith that kept pushing me to see a child
            of God in every person before me — never to place anyone beneath me.
            It is not a journey I have completed; I still fall short in the
            encounters of each day. That is what I hope comes through.
          </p>
        </div>

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
    maxWidth: '520px',
    width: '100%',
    textAlign: 'center',
  },
  titleBlock: {
    marginBottom: '1.75rem',
  },
  questionBlock: {
    marginBottom: '1.5rem',
    paddingTop: '0.25rem',
  },
  questionCaption: {
    fontSize: '0.72rem',
    color: 'var(--faint)',
    letterSpacing: '0.03em',
    lineHeight: 1.7,
    marginBottom: '1rem',
  },
  questionQuoteWrap: {
    minHeight: '6.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'opacity 0.45s ease',
  },
  questionQuoteKo: {
    fontSize: '1.15rem',
    fontWeight: 600,
    color: 'var(--green)',
    lineHeight: 1.55,
    marginBottom: '0.5rem',
  },
  questionQuoteEn: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
    color: '#555',
    lineHeight: 1.5,
  },
  questionDots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.4rem',
    marginTop: '1rem',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'var(--rule)',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  },
  dotActive: {
    backgroundColor: 'var(--green)',
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
  introBlock: {
    backgroundColor: '#fafaf8',
    border: '1px solid var(--rule)',
    borderRadius: '12px',
    padding: '1.25rem 1.4rem',
    marginBottom: '1.25rem',
    textAlign: 'left',
  },
  introKo: {
    fontSize: '0.92rem',
    color: 'var(--text)',
    lineHeight: 1.65,
    marginBottom: '0.85rem',
  },
  introEn: {
    fontSize: '0.88rem',
    color: '#555',
    lineHeight: 1.6,
    fontStyle: 'italic',
  },
  perspectiveBlock: {
    borderLeft: '2px solid var(--green)',
    paddingLeft: '1.1rem',
    marginBottom: '1.75rem',
    textAlign: 'left',
  },
  perspectiveKo: {
    fontSize: '0.88rem',
    color: 'var(--text)',
    lineHeight: 1.7,
    marginBottom: '0.7rem',
  },
  perspectiveEn: {
    fontSize: '0.85rem',
    color: '#555',
    lineHeight: 1.65,
    fontStyle: 'italic',
  },
  choiceBlock: {
    backgroundColor: 'var(--card-bg)',
    borderRadius: '16px',
    padding: '1.75rem 1.5rem',
    border: '1px solid var(--rule)',
  },
  choiceLabel: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: 'var(--text)',
    marginBottom: '0.25rem',
  },
  choiceLabelEn: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: 'var(--green)',
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
