import Link from 'next/link';
import { stories } from '@/lib/stories-data';

const path1 = [1, 2, 4, 9, 16, 18, 21, 31, 36, 39];
const path2 = [2, 3, 5, 8, 17, 21, 28, 37, 38, 40];
const path3 = [26, 27, 29, 34, 35, 36, 38, 39, 41];

function PathList({ ids }: { ids: number[] }) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, marginTop: 12 }}>
      {ids.map((id, i) => {
        const s = stories.find(x => x.id === id);
        if (!s) return null;
        return (
          <li key={id} style={{
            fontSize: 13,
            padding: '6px 0',
            borderBottom: '1px solid var(--rule)',
            display: 'flex',
            gap: 10
          }}>
            <span style={{
              color: 'var(--green)',
              fontWeight: 700,
              fontSize: 11,
              minWidth: 22
            }}>
              {i + 1}.
            </span>
            <Link href={`/stories/${s.slug}`} style={{ color: 'var(--muted)' }}>
              {s.titleKo}{' '}
              <em style={{ fontSize: 11, color: 'var(--faint)' }}>
                {s.titleEn}
              </em>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export default function HowToUsePage() {
  return (
    <div className="wrap--narrow" style={{ paddingTop: 48, paddingBottom: 60 }}>

      <h1 className="sec__title">이 시리즈를 어떻게 사용하나요?</h1>
      <p className="sec__sub" style={{ marginBottom: 32 }}>
        How to Use This Series
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Any order */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--r)',
          padding: 20
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: '1rem',
            marginBottom: 8
          }}>
            41편을 어떤 순서로 읽어도 됩니다
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8 }}>
            각 이야기는 독립적입니다. 1편부터 순서대로 읽을 수 있지만,
            그룹의 필요에 따라 어떤 이야기든 먼저 선택할 수 있습니다.
            Each story stands on its own. Read in any order that fits your group.
          </p>
        </div>

        {/* Path 1 */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--r)',
          padding: 20
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: '1rem',
            marginBottom: 4
          }}>
            추천 코스 1 — 있는 자리에서
          </h2>
          <p style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 4 }}>
            For Young Adults &amp; First Small Groups
          </p>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>
            이웃 됨, 겸손, 정체성을 중심으로
          </p>
          <PathList ids={path1} />
        </div>

        {/* Path 2 */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--r)',
          padding: 20
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: '1rem',
            marginBottom: 4
          }}>
            추천 코스 2 — 이웃이 된다는 것
          </h2>
          <p style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 4 }}>
            For Mid-Career &amp; Organizations
          </p>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>
            정의, 구조, 지속 가능한 섬김을 중심으로
          </p>
          <PathList ids={path2} />
        </div>

        {/* Path 3 */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--r)',
          padding: 20
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: '1rem',
            marginBottom: 4
          }}>
            추천 코스 3 — 눈을 들어
          </h2>
          <p style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 4 }}>
            For Seniors &amp; Retirees
          </p>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>
            유산, 충분함, 섬김의 의미를 중심으로
          </p>
          <PathList ids={path3} />
        </div>

        {/* Session structure */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--r)',
          padding: 20
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: '1rem',
            marginBottom: 12
          }}>
            모임 구조 · Session Structure (각 이야기 · approx. 40 min)
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20
          }}>
            <div>
              <p style={{
                fontSize: 12,
                fontWeight: 700,
                color: 'var(--green)',
                marginBottom: 8
              }}>
                교회 공동체 · Church Community
              </p>
              {[
                ['도입 · Opening', '5분'],
                ['본문 나눔 · Discussion', '20분'],
                ['성경 연결 · Scripture', '10분'],
                ['삶에 적용 · Application', '5분'],
              ].map(([label, time]) => (
                <div key={label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 12,
                  color: 'var(--muted)',
                  padding: '5px 0',
                  borderBottom: '1px solid var(--rule)'
                }}>
                  <span>{label}</span>
                  <span style={{ color: 'var(--faint)' }}>{time}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={{
                fontSize: 12,
                fontWeight: 700,
                color: 'var(--green)',
                marginBottom: 8
              }}>
                일반 커뮤니티 · Community Groups
              </p>
              {[
                ['이야기 들어가기 · Getting In', '5분'],
                ['함께 생각해봐요 · Discussion', '20분'],
                ['한 발 더 · Going Further', '10분'],
                ['오늘의 실천 · One Step', '5분'],
              ].map(([label, time]) => (
                <div key={label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 12,
                  color: 'var(--muted)',
                  padding: '5px 0',
                  borderBottom: '1px solid var(--rule)'
                }}>
                  <span>{label}</span>
                  <span style={{ color: 'var(--faint)' }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leader's guide */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--r)',
          padding: 20
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: '1rem',
            marginBottom: 8
          }}>
            인도자 가이드 · Leader's Guide
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
            각 이야기 파일 말미에 인도자 가이드가 포함되어 있습니다.
            이야기의 핵심, 모임 시작 방법, 주의할 순간, 그룹별 접근,
            저자의 한 마디가 담겨 있습니다.
            Each downloadable story file includes a complete Leader's Guide.
          </p>
          <Link
            href="/download"
            className="dl-btn dl-btn--en"
            style={{ display: 'inline-flex' }}
          >
            파일 다운로드 · Download Files →
          </Link>
        </div>

      </div>
    </div>
  );
}