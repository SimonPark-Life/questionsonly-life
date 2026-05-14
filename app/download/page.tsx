'use client';
import { useRouter } from 'next/navigation';
import { useLang, t } from '@/lib/language-context';

export default function DownloadPage() {
  const { lang } = useLang();
  const router = useRouter();
  const T = (key: string) => t[key][lang];

  return (
    <div className="wrap" style={{ paddingTop: 48, paddingBottom: 60 }}>
      <h1 className="sec__title">{T('dlTitle')}</h1>
      <p className="sec__sub" style={{ marginBottom: 32 }}>{T('dlSub')}</p>

      {/* Main guidance card */}
      <div style={{
        background: '#fff',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--r)',
        padding: 32,
        marginBottom: 24,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 40,
          marginBottom: 16,
        }}>
          📖
        </div>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: '1.3rem',
          marginBottom: 12,
        }}>
          {lang === 'ko'
            ? '각 이야기를 개별적으로 다운로드하세요'
            : 'Download each story individually'}
        </h2>
        <p style={{
          fontSize: 13,
          color: 'var(--muted)',
          lineHeight: 1.8,
          marginBottom: 24,
          maxWidth: 480,
          margin: '0 auto 24px',
        }}>
          {lang === 'ko'
            ? '이야기 목록에서 원하는 이야기를 선택하면 요약을 볼 수 있고, 전체 이야기와 나눔 자료를 다운로드할 수 있습니다. 한국어와 영어 파일을 각각 받으실 수 있습니다.'
            : 'Select any story from the stories page to read the digest, then download the full story and discussion guide. Both Korean and English versions are available for each story.'}
        </p>
        <button
          onClick={() => router.push('/stories')}
          style={{
            backgroundColor: 'var(--green)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '0.9rem 2rem',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {lang === 'ko' ? '이야기 목록으로 →' : 'Go to Stories →'}
        </button>
      </div>

      {/* How it works */}
      <div style={{
        background: 'var(--cream-dark)',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--r)',
        padding: 24,
        marginBottom: 24,
      }}>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: '1rem',
          marginBottom: 16,
        }}>
          {lang === 'ko' ? '이용 방법' : 'How to Download'}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 20,
        }}>
          {[
            {
              step: lang === 'ko' ? '1단계' : 'Step 1',
              desc: lang === 'ko'
                ? '이야기 목록에서 읽고 싶은 이야기 카드를 클릭하세요'
                : 'Click any story card from the stories page',
            },
            {
              step: lang === 'ko' ? '2단계' : 'Step 2',
              desc: lang === 'ko'
                ? '이야기 요약(다이제스트)을 읽으세요'
                : 'Read the story digest',
            },
            {
              step: lang === 'ko' ? '3단계' : 'Step 3',
              desc: lang === 'ko'
                ? '"전체 이야기 읽기" 버튼을 눌러 Google Docs에서 전체 이야기를 여세요'
                : 'Click "Read Full Story" to open in Google Docs',
            },
            {
              step: lang === 'ko' ? '4단계' : 'Step 4',
              desc: lang === 'ko'
                ? 'Google Docs에서 파일 → 다운로드 → Word 또는 PDF로 저장하세요'
                : 'In Google Docs: File → Download → Word or PDF',
            },
          ].map(({ step, desc }) => (
            <div key={step}>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: 'var(--green)',
                marginBottom: 6,
              }}>
                {step}
              </div>
              <p style={{
                fontSize: 12,
                color: 'var(--muted)',
                lineHeight: 1.7,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PPT note */}
      <div style={{
        background: '#e8f0fb',
        border: '1px solid #c5d8f5',
        borderRadius: 'var(--r)',
        padding: '16px 20px',
        marginBottom: 24,
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: 20 }}>📊</span>
        <p style={{ fontSize: 13, color: '#1a4a8a', lineHeight: 1.7, margin: 0 }}>
          {lang === 'ko'
            ? '일부 이야기에는 소그룹 나눔을 위한 PPT 배경 슬라이드가 있습니다. 이야기 카드에 PPT 배지가 표시된 이야기에서 다운로드할 수 있습니다.'
            : 'Some stories include PPT background slides for group discussion. Look for the PPT badge on story cards to access them.'}
        </p>
      </div>

      <p style={{ fontSize: 12, color: 'var(--faint)', textAlign: 'center' }}>
        {T('copyright')}
      </p>
    </div>
  );
}
