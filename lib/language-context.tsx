'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

export type Lang = 'en' | 'ko';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  chosen: boolean;
}

const LangContext = createContext<LangContextType>({
  lang: 'ko',
  setLang: () => {},
  chosen: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ko');
  const [chosen, setChosen] = useState(false);

  // On first load, check if visitor has already chosen a language
  useEffect(() => {
    try {
      const saved = localStorage.getItem('qol-lang');
      if (saved === 'en' || saved === 'ko') {
        setLangState(saved);
        setChosen(true);
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    setChosen(true);
    try {
      localStorage.setItem('qol-lang', l);
    } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, setLang, chosen }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

// ── Translation helper ─────────────────────────────────────────
type Translations = {
  [key: string]: { en: string; ko: string };
};

export const t: Translations = {
  // Nav
  home:        { en: 'Home',        ko: '홈' },
  stories:     { en: 'Stories',     ko: '이야기' },
  howToUse:    { en: 'How to Use',  ko: '활용법' },
  about:       { en: 'About',       ko: '소개' },
  download:    { en: 'Download',    ko: '다운로드' },
  contact:     { en: 'Contact',     ko: '문의' },

  // Homepage
  seriesLabel: { en: 'Small Group Discussion Series', ko: '소그룹 나눔 자료' },
  heroTitleEn: { en: 'Arrogant Generosity',           ko: 'Arrogant Generosity' },
  heroTitleKo: { en: '베풂의 교만 이야기',              ko: '베풂의 교만 이야기' },
  heroAuthor:  { en: 'Simon Park (박숭현) · QuestionsOnly.Life', ko: '박숭현 선교사 (Simon Park) · QuestionsOnly.Life' },
  heroDescEn:  { en: '41 stories from the mission field, gathered for small group sharing and discussion.', ko: '선교 현장에서 배운 삶의 이야기 41편 — 소그룹 나눔과 토론을 위해 모았습니다.' },
  allStories:  { en: 'All 41 Stories', ko: '이야기 모음 · 41편' },
  filterAll:   { en: 'All',            ko: '전체' },
  storyNum:    { en: 'Story',          ko: '이야기' },
  download1:   { en: 'Download English (.docx)', ko: '한국어 다운로드 (.docx)' },
  downloadAlt: { en: '↓ 한국어',                 ko: '↓ English' },
  pptLabel:    { en: 'Background Slides',        ko: '배경자료 PPT' },
  suggestedPaths: { en: 'Suggested Paths',       ko: '추천 코스' },
  path1Title:  { en: 'Path 1 — Where You Are',           ko: '코스 1 — 있는 자리에서' },
  path1Sub:    { en: 'Young Adults & First Groups',       ko: '청년 및 첫 소그룹' },
  path2Title:  { en: 'Path 2 — Becoming a Neighbor',     ko: '코스 2 — 이웃이 된다는 것' },
  path2Sub:    { en: 'Mid-Career & Organizations',        ko: '중장년 및 조직' },
  path3Title:  { en: 'Path 3 — Looking Up',              ko: '코스 3 — 눈을 들어' },
  path3Sub:    { en: 'Seniors & Retirees',                ko: '은퇴자 및 시니어' },

  // Notice banner
  noticeLabel: { en: 'Note',          ko: '안내' },
  noticeHead:  { en: 'These are edited digests', ko: '이야기 요약본입니다' },
  noticeBodyKo: {
    en: 'The story texts on this site are edited digests for preview purposes. Complete original texts and full small group guides are available in the downloadable files.',
    ko: '이 사이트의 이야기는 소개를 위한 요약본입니다. 완전한 원문과 소그룹 나눔 자료는 다운로드 파일에서 확인하세요.',
  },

  // Download cards
  downloadSection: { en: 'Download Files',    ko: '파일 다운로드' },
  downloadSub:     { en: 'Complete story files with discussion guides and leader\'s notes', ko: '이야기 본문, 나눔 자료, 인도자 가이드 포함' },
  enFolder:        { en: 'English',           ko: '영어 · English' },
  koFolder:        { en: '한국어 · Korean',    ko: '한국어' },
  enFiles:         { en: '42 files · Read Me First + Stories 1–41', ko: '42 files · Read Me First + Stories 1–41' },
  koFiles:         { en: '42개 파일 · 먼저읽어주세요 + 이야기 1–41편', ko: '42개 파일 · 먼저읽어주세요 + 이야기 1–41편' },
  openEnFolder:    { en: '↓ Open English Folder',  ko: '↓ Open English Folder' },
  openKoFolder:    { en: '↓ 한국어 폴더 열기',       ko: '↓ 한국어 폴더 열기' },

  // Stories page
  storiesTitle:  { en: 'All 41 Stories',    ko: '이야기 모음 · 41편' },
  storiesSub:    { en: 'Arrogant Generosity · Simon Park', ko: '베풂의 교만 이야기 · 박숭현 선교사' },
  filterLabel:   { en: 'Audience:',         ko: '대상:' },

  // How to use
  howTitle:      { en: 'How to Use This Series',    ko: '이 시리즈를 어떻게 사용하나요?' },
  howSub:        { en: 'How to Use This Series',    ko: 'How to Use This Series' },
  anyOrder:      { en: 'Read in any order',         ko: '어떤 순서로 읽어도 됩니다' },
  anyOrderDesc:  { en: 'Each story stands on its own. Read in any order that fits your group.', ko: '각 이야기는 독립적입니다. 그룹의 필요에 따라 어떤 이야기든 먼저 선택할 수 있습니다.' },
  sessionTitle:  { en: 'Session Structure (approx. 40 min)', ko: '모임 구조 (약 40분)' },
  church:        { en: 'Church Community',   ko: '교회 공동체' },
  community:     { en: 'Community Groups',   ko: '일반 커뮤니티' },
  leaderGuide:   { en: "Leader's Guide",     ko: '인도자 가이드' },
  leaderDesc:    { en: 'Each downloadable story file includes a complete Leader\'s Guide.', ko: '각 이야기 파일 말미에 인도자 가이드가 포함되어 있습니다.' },
  downloadFiles: { en: 'Download Files →',   ko: '파일 다운로드 →' },

  // About
  aboutTitle:    { en: 'About the Author',   ko: '지은이 소개' },
  aboutSub:      { en: 'Simon Park (박숭현)', ko: '박숭현 선교사 (Simon Park)' },
  pubTitle:      { en: 'Publication',        ko: '출판 정보' },
  contactTitle:  { en: 'Contact',            ko: '문의' },
  freeUse:       { en: 'Free for non-commercial small group use.', ko: '비상업적 소그룹 사용 가능.' },

  // Contact page
  contactHead:   { en: 'Contact',            ko: '문의하기' },
  contactIntroEn: { en: 'Have a question after reading a story? Would you like to request a small group session or a Zoom conversation? Fill out the form below and I will respond as soon as I am able.', ko: '이야기를 읽고 질문이 생기셨나요? 소그룹 나눔이나 줌 세션을 요청하고 싶으신가요? 아래 양식을 통해 연락해 주세요.' },
  nameLabel:     { en: 'Name',               ko: '이름' },
  emailLabel:    { en: 'Email',              ko: '이메일' },
  typeLabel:     { en: 'Message Type',       ko: '문의 유형' },
  messageLabel:  { en: 'Message',            ko: '메시지' },
  sendBtn:       { en: 'Send Message',       ko: '보내기' },
  sendingBtn:    { en: 'Sending...',         ko: '전송 중...' },
  successHead:   { en: 'Message Sent',       ko: '메시지가 전송되었습니다' },
  successDesc:   { en: 'Thank you — I will be in touch as soon as possible.', ko: '감사합니다. 가능한 한 빨리 답변 드리겠습니다.' },
  errorDesc:     { en: 'Something went wrong. Please try again.', ko: '전송 중 오류가 발생했습니다. 다시 시도해 주세요.' },
  allRequired:   { en: '* All fields are required', ko: '* 모든 필드는 필수입니다' },
  typeQ:         { en: 'Question',           ko: '질문 · Question' },
  typeZ:         { en: 'Zoom Session Request', ko: '줌 세션 요청 · Zoom Session Request' },
  typeSG:        { en: 'Small Group Inquiry', ko: '소그룹 나눔 문의 · Small Group Inquiry' },
  typeO:         { en: 'Other',              ko: '기타 · Other' },

  // Download page
  dlTitle:       { en: 'Download Files',     ko: '파일 다운로드' },
  dlSub:         { en: 'Arrogant Generosity — 41 stories + Read Me First', ko: '베풂의 교만 이야기 — 41편 + 먼저읽어주세요' },
  dlEnDesc:      { en: '42 files: Read Me First + Stories 1–41 in English. Each story file includes the story text, Church Community discussion guide, Community Group discussion guide, and Leader\'s Guide.', ko: '42 files: Read Me First + Stories 1–41 (English).' },
  dlKoDesc:      { en: '42개 파일: 먼저읽어주세요 + 이야기 1–41편 (한국어).', ko: '42개 파일: 먼저읽어주세요 + 이야기 1–41편. 각 이야기 파일에는 이야기 본문, 교회 공동체 나눔 자료, 일반 커뮤니티 나눔 자료, 인도자 가이드가 포함되어 있습니다.' },
  howUseTitle:   { en: 'How to Use the Files', ko: '파일 사용 안내' },
  step1T:        { en: '1. Open Folder',     ko: '1. 폴더 열기' },
  step1Ko:       { en: 'Click the button above to open the Google Drive folder.', ko: '위 버튼을 클릭해 Google Drive 폴더를 엽니다.' },
  step2T:        { en: '2. Select File',     ko: '2. 파일 선택' },
  step2Ko:       { en: 'Click any story file. Start with the Read Me First file.', ko: '원하는 이야기 파일을 클릭합니다. 먼저읽어주세요 파일을 먼저 읽어보세요.' },
  step3T:        { en: '3. Download',        ko: '3. 다운로드' },
  step3Ko:       { en: 'Download or open directly in Google Docs.', ko: '파일을 다운로드하거나 Google Docs에서 바로 열 수 있습니다.' },
  step4T:        { en: '4. Print',           ko: '4. 인쇄' },
  step4Ko:       { en: 'Each file includes printable small group guides.', ko: '각 파일에는 인쇄 가능한 소그룹 나눔 자료가 포함되어 있습니다.' },
  copyright:     { en: '© Park Sung-hyun (Simon Park) · 동연출판사 · QuestionsOnly.Life · Free for non-commercial small group use', ko: '© 박숭현 (Simon Park) · 동연출판사 · QuestionsOnly.Life · 비상업적 소그룹 사용 가능' },

  // Footer
  footerTitle:   { en: 'Arrogant Generosity · QuestionsOnly.Life', ko: '베풂의 교만 이야기 · QuestionsOnly.Life' },
  footerAttr:    { en: '© Park Sung-hyun (Simon Park) · 동연출판사 · QuestionsOnly.Life · Free for non-commercial small group use', ko: '© 박숭현 (Simon Park) · 동연출판사 · QuestionsOnly.Life · 비상업적 소그룹 사용 가능' },

  // Audience labels
  allAudience:       { en: 'All',              ko: '전체' },
  youngAdults:       { en: 'Young Adults',     ko: '청년' },
  midCareer:         { en: 'Mid-Career',       ko: '중장년' },
  retirees:          { en: 'Seniors',          ko: '은퇴자' },
  missionTrainees:   { en: 'Mission',          ko: '선교훈련' },
  firstSmallGroup:   { en: 'First Group',      ko: '첫모임' },
};