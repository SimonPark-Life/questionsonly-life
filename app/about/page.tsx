'use client';
import { useLang, t } from '@/lib/language-context';

export default function AboutPage() {
  const { lang } = useLang();
  const T = (key: string) => t[key][lang];

  return (
    <div className="wrap" style={{ paddingTop: 48, paddingBottom: 60 }}>
      <div className="about-wrap" style={{ maxWidth: '66ch' }}>
        <h1 className="sec__title">{T('aboutTitle')}</h1>
        <p className="sec__sub" style={{ marginBottom: 32 }}>{T('aboutSub')}</p>

        <h2>
          {lang === 'ko' ? '박숭현 선교사 (Dr. Simon Park)' : 'Dr. Simon Park'}
        </h2>

        {lang === 'ko' ? (
          <>
            <p>
              1946년 서울의 기독교 가정에서 태어난 박숭현은 고등학교 졸업 후
              미국으로 건너가 학사·석사·박사 학위를 취득했습니다. 1976년 일리노이
              대학교에서 회계학 교수로 학문의 길을 시작한 그는, 이후 고려대학교와
              싱가포르 국립대학교에서도 가르쳤고 국제 컨설턴트로도 활동했습니다.
            </p>
            <p>
              1998년, 부인 신혜정과 함께 미국장로교회(PCUSA) 선교사로 삶의 방향을
              바꾸어 콩고, 니제르, 파키스탄, 네팔, 한국에서 15년간 사역했습니다.
              2013년 선교 현장에서 은퇴한 후, 현재는 뉴욕 허드슨 밸리에서 아내
              혜정과 함께 살며 AARP TaxAide 프로그램에서 자원봉사하고 있습니다.
            </p>
          </>
        ) : (
          <>
            <p>
              Born in Seoul in 1946 to a Christian family, Simon Park moved to the
              United States after high school, where he earned his bachelor&apos;s,
              master&apos;s, and doctoral degrees. He began his academic career as a
              professor of accounting at the University of Illinois in 1976, later
              teaching at Korea University and the National University of Singapore,
              and working as an international consultant.
            </p>
            <p>
              In 1998, together with his wife Haejung, he redirected his life and
              was commissioned as a mission co-worker with the Presbyterian Church (USA),
              serving for fifteen years in the DR Congo, Niger, Pakistan, Nepal,
              and South Korea. He retired from the field service in 2013, and now
              lives in the Hudson Valley of New York with his wife Haejung,
              volunteering with the AARP TaxAide program.
            </p>
          </>
        )}

        <h2>
          {lang === 'ko'
            ? '이 시리즈에 관하여'
            : 'About This Series'}
        </h2>
        <p>
          {lang === 'ko'
            ? '베풂의 교만 이야기(Arrogant Generosity)는 박숭현 선교사가 선교 현장에서, 그리고 다른 삶의 통로에서 경험한 이야기들을 모은 성찰 모음집입니다. 총 38편의 이야기가 6부로 구성되어 있으며, 소그룹 나눔과 토론을 위한 자료로 재편집되었습니다.'
            : 'Arrogant Generosity gathers 38 stories from the mission field and other paths of his life — reflections on humility, neighborliness, justice, and grace, organized in six parts for small group discussion. Each story includes discussion questions and a complete small group guide for both church communities and general community groups.'}
        </p>

        <div className="about-quote">
          <p>
            {lang === 'ko'
              ? '이 이야기들은, 내 앞에 있는 모든 사람 속에서 하나님의 자녀를 보도록 — 누구도 나보다 아래에 두지 않도록 — 끊임없이 나를 떠밀어 온 신앙에서 나온 것입니다. 아직 다 이룬 길이 아니며, 날마다의 만남 속에서 나는 여전히 부족함을 느낍니다. 그 마음이 전해지기를 바랍니다.'
              : 'These stories come from a faith that kept pushing me to see a child of God in every person before me — never to place anyone beneath me. It is not a journey I have completed; I still fall short in the encounters of each day. That is what I hope comes through.'}
          </p>
          <cite>
            {lang === 'ko' ? '— 박숭현 ' : '— Simon Park'}
          </cite>
        </div>

        <div className="about-quote">
          <p>
            {lang === 'ko'
              ? '"나는 그저 만나는 사람들의 마음속에 작은 미소를 남기고 싶습니다. 이름도 아니고, 기념비도 아닙니다. 그냥 작은 미소."'
              : '"I want to leave a small smile in the hearts of the people I have met. Not a name. Not a monument. Just a very small smile."'}
          </p>
          <cite>
            {lang === 'ko'
              ? '— 박숭현 (Simon Park), 이야기 38 · 작은 미소'
              : '— Simon Park, Story 38 · A Small Smile'}
          </cite>
        </div>

        <div className="about-quote">
          <p>"Neighbor is not a geographical term, but a moral concept."</p>
          <cite>
            {lang === 'ko'
              ? '— 랍비 요아킴 프린츠, 이야기 37 · 집 동네에서 나의 선교지를 찾다에서 인용'
              : '— Rabbi Joachim Prinz, quoted in Story 37 · Finding My Mission Field at Home'}
          </cite>
        </div>

        <h2>{T('pubTitle')}</h2>
        <p>
          <a href="https://www.QuestionsOnly.Life" target="_blank" rel="noopener noreferrer">
            www.QuestionsOnly.Life
          </a>
        </p>
        <p>{T('freeUse')}</p>

        <h2>{T('contactTitle')}</h2>
        <p>
          {lang === 'ko'
            ? '이 시리즈에 관한 문의나 나눔 이야기는 이 사이트의 문의 페이지를 통해 연락해 주세요.'
            : 'For questions about the series or to share how you have used these stories in your group, please reach out through the Contact page on this site.'}
        </p>
      </div>
    </div>
  );
}
