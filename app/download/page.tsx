export default function DownloadPage() {
 const EN = 'https://drive.google.com/drive/folders/1fic0Tmt5yHOdDy0IFiQuq8ACBnBoFBAG?usp=drive_link';
  const KO = 'https://drive.google.com/drive/folders/1uSVy-diqAlv0s6KABtewHF7SYiG96jok?usp=drive_link';

  return (
    <div className="wrap" style={{ paddingTop: 48, paddingBottom: 60 }}>
      <h1 className="sec__title">파일 다운로드 · Download Files</h1>
      <p className="sec__sub" style={{ marginBottom: 32 }}>
        베풂의 교만 이야기 · Arrogant Generosity — 41 stories + Read Me First
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 20,
        marginBottom: 36
      }}>

        <div style={{
          background: '#fff',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--r)',
          padding: 28
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: 'var(--green)',
            letterSpacing: '.06em', textTransform: 'uppercase' as const,
            marginBottom: 10
          }}>
            영어 · English
          </div>
          <h2 style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: '1.3rem', marginBottom: 8
          }}>
            Arrogant Generosity
          </h2>
          <p style={{
            fontSize: 13, color: 'var(--muted)',
            lineHeight: 1.8, marginBottom: 20
          }}>
            42 files: Read Me First + Stories 1–41 in English.
            Each story file includes the story text, Church Community
            discussion guide, Community Group discussion guide,
            and Leader's Guide.
          </p>
          <a href={EN} target="_blank" rel="noopener noreferrer"
            className="dl-btn dl-btn--en">
            ↓ Open English Folder (Google Drive)
          </a>
        </div>

        <div style={{
          background: '#fff',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--r)',
          padding: 28
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: 'var(--green)',
            letterSpacing: '.06em', textTransform: 'uppercase' as const,
            marginBottom: 10
          }}>
            한국어 · Korean
          </div>
          <h2 style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: '1.3rem', marginBottom: 8
          }}>
            베풂의 교만 이야기
          </h2>
          <p style={{
            fontSize: 13, color: 'var(--muted)',
            lineHeight: 1.8, marginBottom: 20
          }}>
            42개 파일: 먼저읽어주세요 + 이야기 1–41편 (한국어).
            각 이야기 파일에는 이야기 본문, 교회 공동체 나눔 자료,
            일반 커뮤니티 나눔 자료, 인도자 가이드가 포함되어 있습니다.
          </p>
          <a href={KO} target="_blank" rel="noopener noreferrer"
            className="dl-btn dl-btn--ko">
            ↓ 한국어 폴더 열기 (Google Drive)
          </a>
        </div>

      </div>

      <div style={{
        background: 'var(--cream-dark)',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--r)',
        padding: 24,
        marginBottom: 24
      }}>
        <h2 style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: '1rem', marginBottom: 16
        }}>
          파일 사용 안내 · How to Use the Files
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 20
        }}>
          {[
            {
              step: '1. 폴더 열기',
              ko: '위 버튼을 클릭해 Google Drive 폴더를 엽니다.',
              en: 'Click the button above to open the Google Drive folder.',
            },
            {
              step: '2. 파일 선택',
              ko: '원하는 이야기 파일을 클릭합니다. 00_ReadMeFirst 파일을 먼저 읽어보세요.',
              en: 'Click any story file. Start with the Read Me First file.',
            },
            {
              step: '3. 다운로드',
              ko: '파일을 다운로드하거나 Google Docs에서 바로 열 수 있습니다.',
              en: 'Download or open directly in Google Docs.',
            },
            {
              step: '4. 인쇄',
              ko: '각 파일에는 인쇄 가능한 소그룹 나눔 자료가 포함되어 있습니다.',
              en: 'Each file includes printable small group guides.',
            },
          ].map(({ step, ko, en }) => (
            <div key={step}>
              <div style={{
                fontSize: 12, fontWeight: 700,
                color: 'var(--green)', marginBottom: 6
              }}>
                {step}
              </div>
              <p style={{
                fontSize: 12, color: 'var(--muted)',
                lineHeight: 1.7, marginBottom: 4
              }}>
                {ko}
              </p>
              <p style={{
                fontSize: 11, color: 'var(--faint)', lineHeight: 1.6
              }}>
                {en}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p style={{
        fontSize: 12, color: 'var(--faint)',
        textAlign: 'center' as const
      }}>
        © 박숭현 (Simon Park) · 동연출판사 · QuestionsOnly.Life ·
        비상업적 소그룹 사용 가능 · Free for non-commercial small group use
      </p>
    </div>
  );
}