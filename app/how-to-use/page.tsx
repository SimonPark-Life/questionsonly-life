'use client';
import { useLang, t } from '@/lib/language-context';
import { stories } from '@/lib/stories-data';
import Link from 'next/link';

const path1 = [1, 2, 4, 9, 16, 18, 21, 31, 36, 39];
const path2 = [2, 3, 5, 8, 17, 21, 28, 37, 38, 40];
const path3 = [26, 27, 29, 34, 35, 36, 38, 39, 41];

function PathList({ ids }: { ids: number[] }) {
  const { lang } = useLang();
  return (
    <ol style={{ listStyle: 'none', padding: 0, marginTop: 12 }}>
      {ids.map((id, i) => {
        const s = stories.find(x => x.id === id);
        if (!s) return null;
        return (
          <li key={id} style={{
            fontSize: 13, padding: '6px 0',
            borderBottom: '1px solid var(--rule)',
            display: 'flex', gap: 10,
          }}>
            <span style={{
              color: 'var(--green)', fontWeight: 700,
              fontSize: 11, minWidth: 22,
            }}>
              {i + 1}.
            </span>
            
              <a href={lang === 'ko' ? (s.driveFileKo || '/download') : (s.driveFileEn || '/download')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--muted)', textDecoration: 'none' }}
            >
              {lang === 'ko' ? s.titleKo : s.titleEn}{' '}
              <em style={{ fontSize: 11, color: 'var(--faint)' }}>
                {lang === 'ko' ? s.titleEn : s.titleKo}
              </em>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export default function HowToUsePage() {
  const { lang } = useLang();
  const T = (key: string) => t[key][lang];

  const churchSteps = lang === 'ko'
    ? [['도입 · Opening', '5분'], ['본문 나눔 · Discussion', '20분'], ['성경 연결 · Scripture', '10분'], ['삶에 적용 · Application', '5분']]
    : [['Opening', '5 min'], ['Discussion', '20 min'], ['Scripture', '10 min'], ['Application', '5 min']];

  const communitySteps = lang === 'ko'
    ? [['이야기 들어가기', '5분'], ['함께 생각해봐요', '20분'], ['한 발 더', '10분'], ['오늘의 실천', '5분']]
    : [['Getting In', '5 min'], ['Discussion', '20 min'], ['Going Further', '10 min'], ['One Step', '5 min']];

  return (
    <div className="wrap--narrow" style={{ paddingTop: 48, paddingBottom: 60 }}>

      <h1 className="sec__title">{T('howTitle')}</h1>
      <p className="sec__sub" style={{ marginBottom: 32 }}>{T('howSub')}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 20 }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', marginBottom: 8 }}>
            {T('anyOrder')}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8 }}>
            {T('anyOrderDesc')}
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 20 }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', marginBottom: 4 }}>
            {lang === 'ko' ? '추천 코스 1 — 있는 자리에서' : 'Path 1 — Where You Are'}
          </h2>
          <p style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 4 }}>
            {lang === 'ko' ? '청년 및 첫 소그룹' : 'Young Adults & First Small Groups'}
          </p>
          <PathList ids={path1} />
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 20 }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', marginBottom: 4 }}>
            {lang === 'ko' ? '추천 코스 2 — 이웃이 된다는 것' : 'Path 2 — Becoming a Neighbor'}
          </h2>
          <p style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 4 }}>
            {lang === 'ko' ? '중장년 및 조직' : 'Mid-Career & Organizations'}
          </p>
          <PathList ids={path2} />
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 20 }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', marginBottom: 4 }}>
            {lang === 'ko' ? '추천 코스 3 — 눈을 들어' : 'Path 3 — Looking Up'}
          </h2>
          <p style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 4 }}>
            {lang === 'ko' ? '은퇴자 및 시니어' : 'Seniors & Retirees'}
          </p>
          <PathList ids={path3} />
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 20 }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', marginBottom: 12 }}>
            {T('sessionTitle')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', marginBottom: 8 }}>
                {T('church')}
              </p>
              {churchSteps.map(([label, time]) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontSize: 12, color: 'var(--muted)',
                  padding: '5px 0', borderBottom: '1px solid var(--rule)',
                }}>
                  <span>{label}</span>
                  <span style={{ color: 'var(--faint)' }}>{time}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', marginBottom: 8 }}>
                {T('community')}
              </p>
              {communitySteps.map(([label, time]) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontSize: 12, color: 'var(--muted)',
                  padding: '5px 0', borderBottom: '1px solid var(--rule)',
                }}>
                  <span>{label}</span>
                  <span style={{ color: 'var(--faint)' }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 20 }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', marginBottom: 8 }}>
            {T('leaderGuide')}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
            {T('leaderDesc')}
          </p>
          <Link href="/download" className="dl-btn dl-btn--en" style={{ display: 'inline-flex' }}>
            {T('downloadFiles')}
          </Link>
        </div>

      </div>
    </div>
  );
}