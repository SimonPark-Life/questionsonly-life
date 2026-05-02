'use client';
import { useLang, t } from '@/lib/language-context';

const EN_FOLDER = 'https://drive.google.com/drive/folders/1fic0Tmt5yHOdDy0IFiQuq8ACBnBoFBAG';
const KO_FOLDER = 'https://drive.google.com/drive/folders/1uSVy-diqAlv0s6KABtewHF7SYiG96jok';

export default function DownloadPage() {
  const { lang } = useLang();
  const T = (key: string) => t[key][lang];

  const steps = [
    { step: T('step1T'), desc: T('step1Ko') },
    { step: T('step2T'), desc: T('step2Ko') },
    { step: T('step3T'), desc: T('step3Ko') },
    { step: T('step4T'), desc: T('step4Ko') },
  ];

  return (
    <div className="wrap" style={{ paddingTop: 48, paddingBottom: 60 }}>

      <h1 className="sec__title">{T('dlTitle')}</h1>
      <p className="sec__sub" style={{ marginBottom: 32 }}>{T('dlSub')}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 20, marginBottom: 36,
      }}>

        <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 10 }}>
            영어 · English
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', marginBottom: 8 }}>
            Arrogant Generosity
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
            {T('dlEnDesc')}
          </p>
          <a href={EN_FOLDER} target="_blank" rel="noopener noreferrer" className="dl-btn dl-btn--en">
            ↓ Open English Folder (Google Drive)
          </a>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 10 }}>
            한국어 · Korean
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', marginBottom: 8 }}>
            베풂의 교만 이야기
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
            {T('dlKoDesc')}
          </p>
          <a href={KO_FOLDER} target="_blank" rel="noopener noreferrer" className="dl-btn dl-btn--ko">
            ↓ 한국어 폴더 열기 (Google Drive)
          </a>
        </div>

      </div>

      <div style={{ background: 'var(--cream-dark)', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 24, marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', marginBottom: 16 }}>
          {T('howUseTitle')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
          {steps.map(({ step, desc }) => (
            <div key={step}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', marginBottom: 6 }}>
                {step}
              </div>
              <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 12, color: 'var(--faint)', textAlign: 'center' }}>
        {T('copyright')}
      </p>

    </div>
  );
}