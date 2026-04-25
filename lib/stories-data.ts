// lib/stories-data.ts

export interface Story {
  id: number;
  slug: string;
  titleKo: string;
  titleEn: string;
  tags: string[];
  audiences: string[];
  textEn: string;
  questionsEn: string[];
  driveFileEn?: string;
  driveFileKo?: string;
}

// English file links (42 files: 00=ReadMe, 01-41=Stories)
const EN = [
  'https://docs.google.com/document/d/1DJ1RivJ876jChKSAyxscHHskrsQUEy3k/edit?usp=drive_link', // 00 ReadMe
  'https://docs.google.com/document/d/1xf51YOW8sha_zYIZFaJjZaWTR03Zy5ek/edit?usp=drive_link', // 01
  'https://docs.google.com/document/d/1_vofaDacmh1nxIFuH2Iow6AnKReQjCfg/edit?usp=drive_link', // 02
  'https://docs.google.com/document/d/1u8rpdC50zsNSI6N7eBCfhrMuRKYfbdtc/edit?usp=drive_link', // 03
  'https://docs.google.com/document/d/1U45hWW2MKBetTAsJP9c5p9RZiOlN9S8q/edit?usp=drive_link', // 04
  'https://docs.google.com/document/d/1tqOs6pVslfLRa4DFKgGOmqMCELOzPQiW/edit?usp=drive_link', // 05
  'https://docs.google.com/document/d/1Xs2Xzt6iAevkuTkVC_NqTpDLvW0MIU62/edit?usp=drive_link', // 06
  'https://docs.google.com/document/d/1nD6uWXyq2q5XuQR_Pn-x_EBeuWlyKBBW/edit?usp=drive_link', // 07
  'https://docs.google.com/document/d/1IZCSBNBoaIqwWq8F2TO0pN8Mhvksu4Lh/edit?usp=drive_link', // 08
  'https://docs.google.com/document/d/1QkWh67OVuo9H9rzEW3mzSovV0Bv7uJAs/edit?usp=drive_link', // 09
  'https://docs.google.com/document/d/1CxLhr869z9PFyti_lQBHHuHyLK6DATbx/edit?usp=drive_link', // 10
  'https://docs.google.com/document/d/100FxFnNuaVv9CMTniO98cNmrISDiTc0x/edit?usp=drive_link', // 11
  'https://docs.google.com/document/d/122ePSzSpLG6OG8ta5Vx4txAHXXVobYNb/edit?usp=drive_link', // 12
  'https://docs.google.com/document/d/1npUkWWjfE8aFIUSUvyeQslxaHqXwXi49/edit?usp=drive_link', // 13
  'https://docs.google.com/document/d/1HrT9tGbz9n9_WP4efk2RxK_EikqjSDer/edit?usp=drive_link', // 14
  'https://docs.google.com/document/d/1Inc42aRacEBrz-eAfKMhQIHK1wLN6gPJ/edit?usp=drive_link', // 15
  'https://docs.google.com/document/d/1jK_ltelFN9LkTdy0nxvz8Eh0aXOVbGFF/edit?usp=drive_link', // 16
  'https://docs.google.com/document/d/1-dkaITP2H-FDtIlV8nRfmi4VkMmpRzxq/edit?usp=drive_link', // 17
  'https://docs.google.com/document/d/1wLLS0sSa6NiyjRlHi3cTG-5tEEqelNST/edit?usp=drive_link', // 18
  'https://docs.google.com/document/d/1fJV29t6u-DQmFK-wLKcoiXzmVQ8MEPlo/edit?usp=drive_link', // 19
  'https://docs.google.com/document/d/1QFBtoymQs3uFZD86EhHO3zUY36C79qbZ/edit?usp=drive_link', // 20
  'https://docs.google.com/document/d/1pQ0UtuZhKjH18x2F2H9axGkOs5j-0JNU/edit?usp=drive_link', // 21
  'https://docs.google.com/document/d/1eShMcCBDpGeI9HNNMY3p-NUcCIIr6lDJ/edit?usp=drive_link', // 22
  'https://docs.google.com/document/d/1p0b-ap4Xc86XhMizgon5D6irTDjU2pBC/edit?usp=drive_link', // 23
  'https://docs.google.com/document/d/1OT0f54IFE_Ws2maA9aFZ0KDhioU2uPDh/edit?usp=drive_link', // 24
  'https://docs.google.com/document/d/15V93XvzayMSuFezIdLkA7BxuP6zxs0xm/edit?usp=drive_link', // 25
  'https://docs.google.com/document/d/1HDItjzdndvsI7qZK2Tyz-fwLGst2r2Zp/edit?usp=drive_link', // 26
  'https://docs.google.com/document/d/1BstoWqXlEMdGwsNtz5K7Wzh1_gcnQ4AD/edit?usp=drive_link', // 27
  'https://docs.google.com/document/d/1GRKjFfMMJ_d87jiKcvOy7NMMpOc67PhV/edit?usp=drive_link', // 28
  'https://docs.google.com/document/d/1PenqwDh18_F-3eO2Kqn4Mrz3v0oeVXIh/edit?usp=drive_link', // 29
  'https://docs.google.com/document/d/1QiP6a9HCKNaGsMVlP344qU_bdipaN3z0/edit?usp=drive_link', // 30
  'https://docs.google.com/document/d/10roRzQhNGCoVUDusC67tws_6dwrtkzoR/edit?usp=drive_link', // 31
  'https://docs.google.com/document/d/1g-yYBB1IrddX-E-nyW8iQr-ExBQr-QnC/edit?usp=drive_link', // 32
  'https://docs.google.com/document/d/1lEmZ_B3pu5vbmlgloAx5R0owFrYLskBO/edit?usp=drive_link', // 33
  'https://docs.google.com/document/d/1IMhtJVBs-m3qGNfOACZMWb5XEUNI9Dti/edit?usp=drive_link', // 34
  'https://docs.google.com/document/d/1sXzAyDIcSYjnC8EKbieYN2KBmY1C_zyo/edit?usp=drive_link', // 35
  'https://docs.google.com/document/d/1hd3jOkh4EPB6H5ST_yvlHKlBX7mJaGxK/edit?usp=drive_link', // 36
  'https://docs.google.com/document/d/17QD51DGDOM2NRtWUxox6N50qvIlN1Adv/edit?usp=drive_link', // 37
  'https://docs.google.com/document/d/1WO9H9vQJhC8pLKbpj2IMGYUIef9WH0MY/edit?usp=drive_link', // 38
  'https://docs.google.com/document/d/1DzOJ7WiLNoM5xWTEUaYelg6B-sUa9W6x/edit?usp=drive_link', // 39
  'https://docs.google.com/document/d/17UZMqsKenPkkDOxe-n4dvkh2Zyx0ggyx/edit?usp=drive_link', // 40
  'https://docs.google.com/document/d/1rUMNlz4ciLC35WnJCFEoOXUYVEVfwtoD/edit?usp=drive_link', // 41
];

// Korean file links (42 files: 00=ReadMe, 01-41=Stories)
const KO = [
  'https://docs.google.com/document/d/1cpyixwSLd-UBHdl06NT6ycMmY82SEe23/edit?usp=drive_link', // 00 ReadMe
  'https://docs.google.com/document/d/1CwzUEX5-PSMdUyiBr6wypIOCuhPGM_Ag/edit?usp=drive_link', // 01
  'https://docs.google.com/document/d/1ppL6khnlrm3BtxDPWvsJ3pJacdG4cSP3/edit?usp=drive_link', // 02
  'https://docs.google.com/document/d/1Dk6qJZCM4oYef8p1qASjXCiCdeU2e0eY/edit?usp=drive_link', // 03
  'https://docs.google.com/document/d/18VlAlUZN_K1CIqJqSkyR3fyPoKaztJ4I/edit?usp=drive_link', // 04
  'https://docs.google.com/document/d/1gAwREYZd7Y3dhL6tp-y3roOOBuMKDjoz/edit?usp=drive_link', // 05
  'https://docs.google.com/document/d/1heRsn2MoLRr93ETJk2KCRUSrhKdiPKGW/edit?usp=drive_link', // 06
  'https://docs.google.com/document/d/14XCkAg9G34JZR6STCsFs65LoF_qZFs7U/edit?usp=drive_link', // 07
  'https://docs.google.com/document/d/1Kscmb_u2aDc5eLvkXn7lCPaGJqtNObNa/edit?usp=drive_link', // 08
  'https://docs.google.com/document/d/1jHxka8hmMaDh7mz5FyRmLP1awPkJRRmI/edit?usp=drive_link', // 09
  'https://docs.google.com/document/d/1E6cM1D436EDHyLAxEwMrzHrAAzHHxvW4/edit?usp=drive_link', // 10
  'https://docs.google.com/document/d/1GOVCdeZ2TMGOxKrcLLr9iz44Id_Bxs0f/edit?usp=drive_link', // 11
  'https://docs.google.com/document/d/1b2ktibOkhhJa6oPLE9tEzfUlUMhsgh8z/edit?usp=drive_link', // 12
  'https://docs.google.com/document/d/1xHibnhaaUzSffhRIij-Xa5r6W-HsLP9r/edit?usp=drive_link', // 13
  'https://docs.google.com/document/d/14_M9bWSmRjLM9iCV53IiJk_dZoWsSNTy/edit?usp=drive_link', // 14
  'https://docs.google.com/document/d/14tZyLn5jnJEuTVkbem8WLJ-VZYiYdoEd/edit?usp=drive_link', // 15
  'https://docs.google.com/document/d/15YEt7s-ybs6Y-qHM4XvFczf33pADRj1J/edit?usp=drive_link', // 16
  'https://docs.google.com/document/d/1VfsHd8jFciFSvmjJQKcIqTgBfi1dGNDy/edit?usp=drive_link', // 17
  'https://docs.google.com/document/d/1HCEi5ZVlVlIGkQwdqspY0ItzyCsGPMrh/edit?usp=drive_link', // 18
  'https://docs.google.com/document/d/177Ze5tioVn1QmJ9gFufxvicANIMCgGKB/edit?usp=drive_link', // 19
  'https://docs.google.com/document/d/1TX-BT1PVS2FtugtFhIKz1bDXDyiyZFsO/edit?usp=drive_link', // 20
  'https://docs.google.com/document/d/1Kn_IMxNnX2bPQwET5Vc_6P-4OMwEoLq8/edit?usp=drive_link', // 21
  'https://docs.google.com/document/d/14H10Q2fFiAkxjA4hpsrYvP-QhgovZI-t/edit?usp=drive_link', // 22
  'https://docs.google.com/document/d/1mwW2ZGAR3dTVIC1cVhMLVKo212QpOCIr/edit?usp=drive_link', // 23
  'https://docs.google.com/document/d/1N58qRs1642nrx0-iBdUgulgNG68KmV4B/edit?usp=drive_link', // 24
  'https://docs.google.com/document/d/1y9bcqVXFhrgmD4rykHoX0wlXphc7EKmX/edit?usp=drive_link', // 25
  'https://docs.google.com/document/d/10AaOMbpOR97KB8pFr67y72LPgY2eYktB/edit?usp=drive_link', // 26
  'https://docs.google.com/document/d/1GFvJc6dh6gf3WFu2Xy2MlIDC3mKXl6hc/edit?usp=drive_link', // 27
  'https://docs.google.com/document/d/163fHpkxx1zmQ9Q27MtWSdcTNIGPKMRMy/edit?usp=drive_link', // 28
  'https://docs.google.com/document/d/1jZuv9adl3KykoT6yNYSXaReZTCXFfrDT/edit?usp=drive_link', // 29
  'https://docs.google.com/document/d/100qNMYv6gyIdRIC-CqhIm-fxXNrTEFMN/edit?usp=drive_link', // 30
  'https://docs.google.com/document/d/1DEojH3Z6uljkDR-Kihfn9MfkSHQFbXah/edit?usp=drive_link', // 31
  'https://docs.google.com/document/d/1vbVdRKGnKebspnMEyY1czP9oBIqj6uvX/edit?usp=drive_link', // 32
  'https://docs.google.com/document/d/15HZQO59pcRY5Gxq7OGunAk42x5DpnqzQ/edit?usp=drive_link', // 33
  'https://docs.google.com/document/d/1jUhINK-WmX2BWEctXr3hzimvivjQE42J/edit?usp=drive_link', // 34
  'https://docs.google.com/document/d/1dIXQV8WUJ12UPaK_MADD9yg1iR1Ma_iA/edit?usp=drive_link', // 35
  'https://docs.google.com/document/d/15skZ513aok6O6PUxpXtLrd9d84_i1az5/edit?usp=drive_link', // 36
  'https://docs.google.com/document/d/1oa2_tClNXaqeWdRiQY4ZC414QBsHz_ZM/edit?usp=drive_link', // 37
  'https://docs.google.com/document/d/1E3GWzqPd15DkRmPWNCPvJ7v5mDHYXMIn/edit?usp=drive_link', // 38
  'https://docs.google.com/document/d/1LcaL3rX-IdMld8otsGBAvcHGnZrhFDem/edit?usp=drive_link', // 39
  'https://docs.google.com/document/d/1P80WP-fRT9lOd_Iav5diSvrjNRNAhjBd/edit?usp=drive_link', // 40
  'https://docs.google.com/document/d/1hw1jUWNOg3hTwtDoj2lHdax-qeQd7ClM/edit?usp=drive_link', // 41
];

export const stories: Story[] = [
  {
    id: 1, slug: 'pride-of-giving',
    titleKo: '베풂의 교만', titleEn: 'The Pride of Giving',
    tags: ['humility', 'giving'],
    audiences: ['young-adults', 'mid-career', 'retirees', 'first-small-group'],
    driveFileEn: EN[1], driveFileKo: KO[1],
    textEn: `If I am not kind to myself, who will be kind to me? But if I am not kind to others, what kind of person am I? — Rabbi Hillel\n\nIn 1976, I joined the faculty at the University of Illinois. Korean students were beginning to arrive in the United States one by one. My wife and I were already there, and we naturally helped them settle in. A night or two on our couch before their apartment was ready. A warm meal. A ride to the bank.\n\nBefore long, the students would cautiously bring it up: "Professor, we'd like to take you and your wife to dinner sometime — just to say thank you."\n\nEach time, I waved them off. "What have I done? I just did it because I was happy to. It's fine." I thought I was being humble.\n\nThen one day, a student said quietly: "We know you helped us willingly and without expecting anything in return — and we're truly grateful. But we're not inviting you out of obligation. We simply want to share a meal with you, for our own joy. So why won't you let us? Isn't that refusal also a kind of pride?"\n\nWithout noticing, I had positioned myself permanently as the giver — the one who helps freely, who needs nothing in return. Sometimes, the most generous thing you can do is to be a gracious receiver.`,
    questionsEn: [
      'Have you recently done something kind for someone? How did it feel when someone tried to thank you?',
      'Have you ever felt awkward receiving someone else\'s kindness? What was underneath that?',
      'The student said: "Isn\'t that also a form of pride?" Do you agree?',
      'Between giving and receiving, which comes more naturally to you? Why?',
      'Is there an area of your life where you hold onto the giver\'s role?',
    ],
  },
  {
    id: 2, slug: 'avocado-tree',
    titleKo: '아보카도 나무', titleEn: 'The Avocado Tree',
    tags: ['neighbor', 'being-vs-doing'],
    audiences: ['young-adults', 'mid-career', 'mission-trainees'],
    driveFileEn: EN[2], driveFileKo: KO[2],
    textEn: `My wife and I were assigned to our first mission field — Good Shepherd Hospital in the DR Congo. In the front yard of our house stood a large avocado tree. Avocados were precious — the most sought-after food in the neighborhood.\n\nOur gardener Bilolo suggested: "Papa Simon, the avocados are ripe. Let the neighborhood children knock them down with long poles. Whatever falls and breaks — the children can take home."\n\nI agreed without much thought. But the number of broken avocados kept growing. Bilolo blamed the children: "They're unreliable and dishonest."\n\nIt was only after leaving Congo that I finally understood. The children were not the problem. From the beginning, I had structured our relationship as owner and worker. They understood the system clearly: the only way to get a fair share was for more fruit to break.\n\nWhat if I had regarded those children as my neighbors — as equals — from the very start? Doing flows from being. You cannot produce the right being through doing alone.`,
    questionsEn: [
      'Have you ever treated someone as less than an equal — without meaning to?',
      'At what point does it become clear that Dr. Park saw the children as workers rather than neighbors?',
      'If the children broke avocados intentionally to get a fair share — is that their fault?',
      'What is the difference between serving people and receiving them as equals?',
      '"Doing flows from being." Where do you see that in your own life?',
    ],
  },
  {
    id: 3, slug: 'hasty-solutions',
    titleKo: '섣부른 해결책', titleEn: 'Hasty Solutions',
    tags: ['cross-cultural', 'good-intentions'],
    audiences: ['young-adults', 'mid-career', 'mission-trainees'],
    driveFileEn: EN[3], driveFileKo: KO[3],
    textEn: `Shortly after arriving at Good Shepherd Hospital in Congo — my first mission post — I began seeing things that puzzled me. Problems with seemingly simple solutions.\n\nWe attended Sunday worship at a church the missionaries had begun building. The congregation sat on logs. We offered to provide lumber for proper benches. They thanked us. When the service ended — the girls carried the heavy benches out on their heads. "If we leave them here, they will be stolen before next Sunday."\n\nThe logs they had used before were not worth stealing. But the benches were. I had wanted to provide comfort, only to create a new burden.\n\nChristmas was coming. I bought umbrellas for all 200 hospital staff. The next heavy rain — nothing had changed. "The umbrellas are precious gifts. We keep them for special occasions."\n\nOne doctor said afterward: "We could see it wouldn't work. But we couldn't intervene beforehand. So we said nothing."`,
    questionsEn: [
      'Have you tried to help with something and made it worse?',
      'How often does outside knowledge override accurate local knowledge?',
      'The doctor stayed silent. What would it have cost him to speak up beforehand?',
      'What adaptations has your community developed that outsiders might label as problems?',
    ],
  },
  {
    id: 4, slug: 'yohani',
    titleKo: '요한이', titleEn: 'Yohani',
    tags: ['identity', 'prejudice'],
    audiences: ['young-adults', 'mid-career', 'retirees'],
    driveFileEn: EN[4], driveFileKo: KO[4],
    textEn: `In June 2012, I was pushing our first grandson Yo-han's stroller at Seoul Station when an elderly woman looked down and asked: "Is that child a twi-gi?" — a pejorative term meaning mixed breed.\n\nI paused briefly: "Yes. But this baby is my grandson."\n\nThe woman disappeared without another word.\n\nTo her, Yo-han was a mixed breed. To me, Yo-han was Yo-han — my precious grandchild. We were looking at the same child. We were seeing completely different things.\n\nShe was not a bad person. A perspective formed over a lifetime in a mono-ethnic society had simply taken root in her. If Yo-han had not been my grandson, what would I have seen first?`,
    questionsEn: [
      'Have you ever had a thought cross your mind when you first encountered someone different from you?',
      'What did you feel when you read the word twi-gi?',
      'Dr. Park asks: "If Yo-han had not been my grandson, what would I have seen first?" How does that apply to you?',
      'What is the difference between a church that serves multicultural families as a ministry target, and one that welcomes them as full members?',
    ],
  },
  {
    id: 5, slug: 'gift-of-dakoro',
    titleKo: '다코로의 선물', titleEn: 'The Gift of Dakoro',
    tags: ['mutuality', 'community'],
    audiences: ['mission-trainees', 'mid-career'],
    driveFileEn: EN[5], driveFileKo: KO[5],
    textEn: `In September 2005, I was asked to join a famine relief team in Niger. On distribution day, a young man approached with a neighbor whose child was just born — but there was no food at home.\n\nThree options flashed through my mind. All three were wrong: Give a special distribution — breaking agreed rules. Use my own money — Message: problems are solved by wealthy outsiders. Refuse — Message: rules matter more than a newborn.\n\nI asked quietly: "How did you handle situations like this before the famine?"\n\n"Before the famine, we would all share a little."\n\nA young man rose silently, took the empty sack, and walked into the village. Ten minutes later, he returned — the sack held food. Each household had contributed a small portion.\n\n"Sir, today you did not only give us food. You gave our custom back to us."\n\nI had not shared any food. I had simply helped them remember what their village already possessed.`,
    questionsEn: [
      'Have you ever faced a situation where following the rules felt wrong, but breaking them also felt wrong?',
      '"How did you handle this before?" — Why was that question so important?',
      'Can outside help sometimes weaken what a community already has?',
      'What distinguishes a genuine leader from someone who is merely good at solving problems?',
    ],
  },
  {
    id: 6, slug: 'motor-boat-sailboat-barge',
    titleKo: '기선, 범선, 부선', titleEn: 'Motor Boat, Sailboat, Barge',
    tags: ['mission', 'self-reflection'],
    audiences: ['mission-trainees', 'mid-career', 'retirees'],
    driveFileEn: EN[6], driveFileKo: KO[6],
    textEn: `There are three types of vessels that traverse open waters.\n\nMotor Boat: Propelled by engine power. Advances by overcoming its environment. The captain's will determines everything.\n\nSail Boat: Moves through the harmony of wind and sails. It heads toward its destination — but moves with the wind.\n\nBarge: No self-propulsion. Its direction is determined entirely by whatever vessel is towing it.\n\nLooking back at myself — I have lived much of my life as a motor boat. Admission, employment, promotion: a hurdle race, clearing one wall only to find the next.\n\nBut now, as I look toward the end of my life, I want to live like a sail boat. A life moving with the wind — toward meaningful relationships with neighbors, toward positive influence and harmony.`,
    questionsEn: [
      'What kind of vessel does your life feel like right now?',
      'Where do you see the motor boat mentality most in your daily life?',
      'What would it look like to shift from motor boat to sail boat mode?',
      'Is barge life always negative, or are there seasons when it makes sense?',
    ],
  },
  {
    id: 7, slug: 'sacrificing-myself',
    titleKo: '나 하나를 바쳐서', titleEn: 'Sacrificing Myself',
    tags: ['devotion', 'witness'],
    audiences: ['young-adults', 'mid-career'],
    driveFileEn: EN[7], driveFileKo: KO[7],
    textEn: `When I joined Korea University's Business School as a new professor in 1975, student activism was at its height. On May 18, 1982, I tried to talk a student leader out of joining a demonstration.\n\n"Do you really think democracy will come faster if you clash with the police today?"\n\n"I don't expect democracy to arrive today. But today is the second anniversary of the Gwangju uprising. If we go out and get arrested, people will ask why — and we'll say: Today is Gwangju. If our being arrested keeps that memory alive, I am willing."\n\nI had no answer for that.\n\n"I will go to the police station to get you out," I said. "To preserve my self-respect."`,
    questionsEn: [
      'Has there been a time when you did something costly with no realistic chance of immediate change?',
      'What is the difference between the student\'s logic (memory and witness) and Dr. Park\'s strategic question (effectiveness)?',
      'When is witness — keeping something true in public memory — a sufficient reason for action?',
    ],
  },
  {
    id: 8, slug: 'justice-and-mercy',
    titleKo: '정의와 자비', titleEn: 'Justice and Mercy',
    tags: ['justice', 'mercy'],
    audiences: ['young-adults', 'mid-career', 'retirees'],
    driveFileEn: EN[8], driveFileKo: KO[8],
    textEn: `In 1964, two immigration officers arrived at my job in Washington, D.C.\n\n"You entered on a student visa, took a leave, and got a job. You are subject to deportation."\n\nOne officer quietly said: "We must proceed according to the law. But I will give you the contact information for an immigration attorney."\n\nWith that help, I applied for permanent residency — made possible by the 1965 Immigration Act, itself the fruit of the Black civil rights movement.\n\nYears later, when my own family expressed anti-immigrant sentiment, I said: "You all live in America because of your connection to me — an undocumented immigrant. And because of rights won by Black Americans."\n\nWhy can't we first build relationships with those who suffer as neighbors — and then find a way forward together?`,
    questionsEn: [
      'The immigration officer enforced the law and showed compassion in the same moment. How was that possible?',
      'Dr. Park\'s family\'s life in America was built on rights won by the Black civil rights movement. Does awareness of that change anything?',
      '"Build relationships first, then find the way forward" — is that realistic?',
    ],
  },
  {
    id: 9, slug: 'speaking-to-my-son',
    titleKo: '내 아들에게 말하는 중이다', titleEn: 'I Am Speaking to My Son',
    tags: ['burnout', 'faith'],
    audiences: ['young-adults', 'mid-career', 'mission-trainees'],
    driveFileEn: EN[9], driveFileKo: KO[9],
    textEn: `In early 1999, I set foot for the first time in the rural Congo. By my third year, I began to protest to God:\n\n"Why did You send us to this land, only to disappoint these people? Why make us look at them not with love, but with resentment? Either give us the strength — or let us go."\n\nThen one early morning, something came to me with unusual clarity:\n\n"What I am asking of you is not for you, Simon, to carry alone. I am asking it of my Son Jesus — the one who lives within you. Empty your heart and follow."\n\nSince then, whenever something exceeds my capacity, I try to take one deliberate step back. And every time, the same thought follows: I should have done that sooner.`,
    questionsEn: [
      'When you face a situation that exceeds your capacity, what is your instinct?',
      'How does Dr. Park\'s prayer of protest strike you — too honest, or recognizable?',
      'Stepping back one step — how is that different from giving up?',
      'Is there something you are currently trying to carry alone?',
    ],
  },
  {
    id: 10, slug: 'sexual-minority-discrimination',
    titleKo: '오늘의 성 소수자 차별', titleEn: 'Sexual Minority Discrimination Today',
    tags: ['justice', 'human-rights'],
    audiences: ['young-adults', 'mid-career'],
    driveFileEn: EN[10], driveFileKo: KO[10],
    textEn: `Recently in Seoul, I had the opportunity to hear a presentation about discrimination that sexual minorities face. Listening, I saw many similarities to the racial discrimination I experienced in America fifty years ago.\n\nI asked an older colleague: "How can anti-discrimination laws make white people love people of color?"\n\nHis answer: "You can't make people love each other by law. But the law can stop people from hitting each other. That gives time for a normal relationship to grow."\n\nThe treatment I received — not because of anything I had done, but because of who I was — feels similar to the suffering experienced by sexual minorities today.`,
    questionsEn: [
      'Have you ever been treated differently because of something about you that you did not choose?',
      'What similarities do you see between racial discrimination and discrimination against sexual minorities?',
      '"You can\'t make people love each other by law, but you can stop them from hitting each other" — what do you make of that?',
      'What does it mean concretely to welcome someone as a neighbor?',
    ],
  },
  {
    id: 11, slug: 'how-many-did-you-evangelize',
    titleKo: '몇 명이나 전도 했어요?', titleEn: 'How Many Did You Evangelize?',
    tags: ['witness', 'mission'],
    audiences: ['mission-trainees', 'young-adults'],
    driveFileEn: EN[11], driveFileKo: KO[11],
    textEn: `As a missionary, this is a question I hear often — but it's the wrong question.\n\nAfter four weeks working in Niger, Amodou asked: "Simon, our country is Muslim. Why do you and your Christian colleagues endure such hardship to help us?"\n\n"Amodou, I don't think I can make you understand. But I'm certain that if you keep asking that question, someday you will meet my Savior, Jesus."\n\nSix months later, returning to check on the relief system, Amodou said: "I still think about our conversation. I haven't met the Jesus you speak of yet. But I wanted to remember our time together — so I'm giving you this cross, made by the nomads of our desert."\n\nThis gift stands as the closest thing to an evangelistic event during my entire ministry.`,
    questionsEn: [
      'Has someone\'s life — not their words — ever created a question in you?',
      'Amodou gave a cross without fully understanding what it meant. What does that act say?',
      'What sustains a relationship whose outcome is still unknown?',
    ],
  },
  {
    id: 12, slug: 'nth-degree-equation',
    titleKo: 'N차 방정식', titleEn: 'The Nth Degree Equation',
    tags: ['life-possibilities', 'education'],
    audiences: ['young-adults', 'mid-career'],
    driveFileEn: EN[12], driveFileKo: KO[12],
    textEn: `Ko OO was a mathematics education student participating in a multicultural leadership training program. During a break, I shared:\n\n"My life has not been a straight line toward goals. It has been a mix — a weaving together — of everything I have done: the successes and the failures, all of it."\n\nKo OO heard something in it as a student of mathematics:\n\n"I knew that an nth-degree equation doesn't have just one answer — it has n answers. But I have been living in a world that ranks people by test scores, as if there is only one right answer. I think I can live more fully from now on."`,
    questionsEn: [
      'Does the "one right answer" mentality resonate with your experience?',
      'Does your life feel more like a straight line or a weaving?',
      'What is the "one right answer" that the system around you has been grading your life against?',
    ],
  },
  {
    id: 13, slug: 'disaster',
    titleKo: '재난', titleEn: 'Disaster',
    tags: ['disaster-relief', 'healing'],
    audiences: ['mission-trainees', 'mid-career'],
    driveFileEn: EN[13], driveFileKo: KO[13],
    textEn: `When we watch disaster news on TV, the camera almost always shows collapsed buildings. But those of us who do disaster relief focus on the people.\n\nWe define a disaster as any situation where people cannot get back to normal life on their own.\n\nDisaster relief means walking alongside people until they can stand on their own. A full life means three things: being able to carry the hard experience — not just surviving it, but growing through it; working to prevent man-made disasters from happening again; and finding ways to reduce the damage when a natural disaster strikes in the future.\n\nThe real work begins after the TV cameras and reporters have left. That is where the neighbor is.`,
    questionsEn: [
      'Does Dr. Park\'s definition of disaster surprise you?',
      '"The real work begins after the TV cameras have left." What does that mean in practice?',
      'Where in your community might there be a disaster — by Dr. Park\'s definition — that no camera covers?',
    ],
  },
  {
    id: 14, slug: 'power-of-humility',
    titleKo: '겸손의 힘', titleEn: 'The Power of Humility',
    tags: ['humility', 'faith'],
    audiences: ['young-adults', 'mid-career', 'retirees', 'first-small-group'],
    driveFileEn: EN[14], driveFileKo: KO[14],
    textEn: `Dr. Lee — top of his class from Seoul National University Physics — smiled and said: "Mr. Park, if you sing just one hymn for us, I'll attend church."\n\nEveryone knew I have absolutely no musical talent. My wife Haejung said: "How can you refuse just because you're embarrassed? I'll sing with you."\n\nWe began. We got halfway through the first verse before stopping. I was completely off-key. Everyone burst out laughing.\n\nA dozen years later, Dr. Lee said: "It was that night you sang the hymn. I was a man of logic and pride. But I saw a man willing to be completely humiliated for something he cared about. Who is this Jesus, that he values him more than the shame he endures? A true scientist must explore that question."`,
    questionsEn: [
      'Has an embarrassing moment ever opened a door in a relationship?',
      'Dr. Lee was not moved by argument — but by watching someone endure humiliation. Why?',
      'How can showing weakness create trust?',
      'If Haejung had not stepped in, how does this story end?',
    ],
  },
  {
    id: 15, slug: 'quantity-quality-truth',
    titleKo: '양과 질, 그리고 진실', titleEn: 'Quantity, Quality, and Truth',
    tags: ['history', 'prejudice'],
    audiences: ['mission-trainees', 'mid-career', 'young-adults'],
    driveFileEn: EN[15], driveFileKo: KO[15],
    textEn: `On January 1, 1983, I got a five-day visa to visit Guangzhou, China. A Party official said: "The jacket I wear and Comrade Deng Xiaoping's are exactly the same."\n\nI asked the guide: "Was the official's jacket really the same?" "Yes and no. The cut and style are the same. But the quality of the cloth is completely different."\n\nBack in Korea, I showed photos to students. When one saw a photo of Chinese children, he looked up in genuine surprise: "Wait — they smile too!"\n\nAt the time, Korean education had sorted the world into two opposing camps. This student had grown up learning that people on the other side were fundamentally different. The photo undid that in a moment.`,
    questionsEn: [
      'Has something you saw — a photo, a face — made you realize your picture of a group was wrong?',
      '"They smile too" — what does it mean to grow up inside a system where the basic humanity of the other side is invisible?',
      'What photograph or encounter might undo the packaging you are living inside?',
    ],
  },
  {
    id: 16, slug: 'elder-of-congo-village-church',
    titleKo: '콩고 시골교회 어른', titleEn: 'The Elder of the Congo Village Church',
    tags: ['presence', 'faith'],
    audiences: ['young-adults', 'mid-career', 'retirees', 'first-small-group'],
    driveFileEn: EN[16], driveFileKo: KO[16],
    textEn: `In December 2000, the Presbyterian Church (USA) asked me to visit churches, schools, and clinics in Congo. American Presbyterian missionaries had served these communities for many years before pulling out in the mid-1960s when civil war made it too dangerous to stay.\n\nThe journey was hard: broken roads, soldiers demanding money at roadblocks, nights full of insects. I also knew that people along the way were hoping I had brought gifts. I had not.\n\nBut when I arrived at one village, an elderly man came to speak to me:\n\n"When the missionaries left, they told us they would come back soon. But thirty years passed, and no one came. We began to think the missionaries had abandoned us. We even began to think that God had forgotten us. But today — you have come. Now I know: God still remembers us."\n\nEvery complaint I had been carrying — the roads, the roadblocks, the insects — all of it was gone.`,
    questionsEn: [
      'Have you been waiting for someone to come back — any sign you had not been forgotten?',
      'The old man took one person showing up as evidence that God has not forgotten. Is that a sound way to read a visit?',
      'Dr. Park arrived with no gifts. What did the old man actually receive?',
      'Who is waiting for a sign that they have not been forgotten?',
    ],
  },
  {
    id: 17, slug: 'neighbor-not-geographical',
    titleKo: '이웃은 지리적 용어가 아닙니다', titleEn: 'Neighbor Is Not a Geographical Term',
    tags: ['neighbor', 'mission'],
    audiences: ['young-adults', 'mid-career', 'mission-trainees', 'first-small-group'],
    driveFileEn: EN[17], driveFileKo: KO[17],
    textEn: `"Neighbor is not a geographical term. It is a moral concept." — Rabbi Joachim Prinz\n\nMission is not about focusing on reaching distant places. It is about caring for one another — building a whole and mutually respectful community. Mission begins in cherishing one another as equals within marriage, the home, the church, and the workplace.\n\nIt is a lifelong task, both obvious and difficult. It also means we are all living on the mission field at all times.\n\nEven at my age — 78 — when I still crave work and rush out of the house whenever someone asks for help, my wife one day said something different: "I need you too."\n\n"The darkest place is under the lamp," I realized. When I said, "I can't do it," my neighbors replied, "We understand," and I felt grateful.`,
    questionsEn: [
      '"Neighbor is not a geographical term, but a moral concept." What does that mean to you in practice?',
      '"I need you too." Why does it take courage to say that? Why might it be hard to hear?',
      '"The darkest place is under the lamp." Where is your lamp? Who might be in that shadow?',
      'We are all living on the mission field at all times. What does that ask of you this week?',
    ],
  },
  {
    id: 18, slug: 'stepping-aside-tipping-hat',
    titleKo: '길에서 벗어나 모자를 기울이기', titleEn: 'Stepping Off the Path and Tipping the Hat',
    tags: ['dignity', 'equality'],
    audiences: ['young-adults', 'mid-career', 'retirees'],
    driveFileEn: EN[18], driveFileKo: KO[18],
    textEn: `When a BBC interviewer asked Desmond Tutu about the defining moment of his life, he spoke of an ordinary day — a walk with his mother.\n\nIn apartheid South Africa, when a Black person and a white person met on the sidewalk, the Black person stepped aside and bowed. But that day, before young Tutu and his mother could move, the white man stepped off the sidewalk first — and tipped his hat to her.\n\nThat man was Trevor Huddleston, an Anglican priest and fierce opponent of apartheid. When Tutu's mother explained he was a man of God, Tutu found his direction.\n\nMy prayer is that we all strive to be God's people — who willingly step aside, who tip our hats, to our sisters and brothers, especially those the world has made invisible.`,
    questionsEn: [
      'Has a small gesture — something someone may not remember doing — stayed with you?',
      'Huddleston did not give a speech. He just stepped aside. Why does a body speak louder than an argument?',
      'Who is required to step aside in your daily world, and have you accepted that as normal?',
    ],
  },
  {
    id: 19, slug: 'taxila-christian-hospital',
    titleKo: '탁실라 기독 병원', titleEn: 'Taxila Christian Hospital',
    tags: ['forgiveness', 'martyrdom'],
    audiences: ['mission-trainees', 'mid-career', 'retirees'],
    driveFileEn: EN[19], driveFileKo: KO[19],
    textEn: `In August 2002, four nurses walking out of the chapel at Taxila Christian Hospital in Pakistan were killed in a bomb attack.\n\nThree years later, Dr. Park visited. The same staff — who had buried their sisters — were fundraising for earthquake victims and treating the injured. Most were Muslim.\n\nDr. Park asked: "How can you show such love to the Muslims who killed your sisters?"\n\nThey answered: "We are convinced that the most glorious way to honor our sisters is to repay evil with good."\n\nThis missionary is convinced that they — who accept Muslims as neighbors in the name of their fallen sisters — are more mature disciples of Jesus than this missionary.`,
    questionsEn: [
      'Has someone ever responded to being wronged in a way that surprised you?',
      'The staff did not say "we have forgiven." They said "we are honoring our sisters." What is the difference?',
      'Is there a person who has wronged you whom you now encounter? What would honoring what was lost look like?',
    ],
  },
  {
    id: 20, slug: 'learning-a-language',
    titleKo: '언어 배우기', titleEn: 'Learning a Language',
    tags: ['empathy', 'cross-cultural'],
    audiences: ['mission-trainees', 'young-adults'],
    driveFileEn: EN[20], driveFileKo: KO[20],
    textEn: `I started learning French at fifty — to go as a missionary to the French-speaking Congo. On the first day, English was banned. I sat there as if deaf and mute for three weeks.\n\nIn Nepal, I saw the caste system deny lower castes and women any voice. The French classroom came back to me: the frustration of having thoughts and no words for them.\n\nPeople with limited language are treated as if they have no thoughts at all. The erasure is the same.\n\nIn the markets of Nepal, when I spoke a few halting words of Nepali, the merchants would all clap and welcome me warmly. They were honoring the effort of a foreigner who had tried to reach toward them.`,
    questionsEn: [
      'What does it feel like to have thoughts and no way to express them?',
      'Dr. Park\'s broken Nepali did not impress anyone — but gave the merchants something. What?',
      '"People with limited language are treated as thought-limited." Where do you see that today?',
    ],
  },
  {
    id: 21, slug: 'teaching-with-humility',
    titleKo: '겸손과 신뢰로 가르치다', titleEn: 'Teaching with Humility and Trust',
    tags: ['neighbor', 'humility'],
    audiences: ['mission-trainees', 'mid-career', 'first-small-group'],
    driveFileEn: EN[21], driveFileKo: KO[21],
    textEn: `Before we left for our first mission post, we were introduced to Pastor Charles McKee, who had served in Congo for many years. He told us a story.\n\nA missionary retiring after thirty years called in Kalonji — his assistant for years — and asked what he wanted as a gift. Kalonji declined twice. Then:\n\n"Since you encourage me to be boldly honest, I will say it. I have always wished to enter your house through the door that your fellow missionaries use. To sit at the table where they sat. To drink coffee from the same porcelain cup."\n\nHearing this, the missionary realized that for all his years of labor, he had failed the Lord's command.\n\nCharles did not tell Dr. Park what not to do. He told a story and trusted him to find himself in it. That is still the finest teaching Dr. Park has ever received.`,
    questionsEn: [
      'Kalonji needed explicit permission before he could speak honestly. Who in your life needs that kind of permission from you?',
      'The missionary educated seven of Kalonji\'s children — and got the door wrong. How do we miss something that obvious?',
      'What is the difference between serving people and receiving them?',
    ],
  },
  {
    id: 22, slug: 'as-i-go',
    titleKo: '내가 가서', titleEn: 'As I Go',
    tags: ['mission', 'cultural-humility'],
    audiences: ['mission-trainees', 'mid-career'],
    driveFileEn: EN[22], driveFileKo: KO[22],
    textEn: `When I began my life as a missionary in the United States, I came across a letter written in the early 1900s by a missionary about to leave for Korea. He wrote: "Armed with the Word, I obey the command to make these savages children of God."\n\nBefore that missionary arrived, the Korean people were a people with thousands of years of history, culture, art, and philosophy.\n\nToday, it is sometimes Korean missionaries who arrive in Southeast Asia with wealth and power — impatient for results, rushing communities they serve.\n\nI have lived in America for over sixty years. For most of those years, I was embarrassed by my accent. Only recently have I learned to speak without that shame.\n\nThe title is As I Go. Not Where I Arrived. Constant re-examination is not a phase. It is the practice.`,
    questionsEn: [
      'Has there been a moment when you realized you had been operating from an assumption that turned out to be completely wrong?',
      'What does it mean to inherit the victim\'s history and reproduce the oppressor\'s pattern?',
      'What assumption are you still carrying that the people you serve could correct, if you asked?',
    ],
  },
  {
    id: 23, slug: 'missionary-learning-from-neighbors',
    titleKo: '이웃에게서 배우는 선교사', titleEn: 'A Missionary Learning from Neighbors',
    tags: ['neighbor', 'learning'],
    audiences: ['mission-trainees', 'mid-career', 'young-adults'],
    driveFileEn: EN[23], driveFileKo: KO[23],
    textEn: `When we served in Nepal, the government required our mission organization to conduct English classes. I taught using parables. I asked: "Which character in the Good Samaritan would you like to be?"\n\nEveryone said: the Samaritan. The hero.\n\nOne quiet security guard took a long time before answering:\n\n"I have neither knowledge nor skill. But I would want to be like the innkeeper — the one who faithfully carried out the Samaritan's request, who received the injured man, and tended to him with all her heart."\n\nI bowed my head. I had read that parable many times. I had never stopped to consider the innkeeper. Without her faithfulness, the story could not have been completed.`,
    questionsEn: [
      'Has someone outside your usual circles ever said something about faith or life that stopped you?',
      'Everyone said the Samaritan. The security guard said the innkeeper. What made it possible for him to see what everyone missed?',
      'The innkeeper has no lines. She acts faithfully without credit. What does it mean to aspire to be that character?',
    ],
  },
  {
    id: 24, slug: 'sacrificing-myself-2',
    titleKo: '나 하나를 바쳐서 (2)', titleEn: 'Sacrificing Myself — Revisited',
    tags: ['devotion', 'legacy'],
    audiences: ['mid-career', 'retirees'],
    driveFileEn: EN[24], driveFileKo: KO[24],
    textEn: `Looking back at the student I tried to discourage from demonstrating in 1982 — I realize now what I missed.\n\nHis logic was not about winning. It was about witness. He was willing to be arrested not because he thought it would end the dictatorship, but because he believed that keeping the memory of Gwangju alive was itself an act of faithfulness.\n\nI asked the strategic question: will this work? He was asking the moral question: is this true? Is this worth remembering?\n\nThirty years later, I think he was right. Some things are worth being arrested for — not because arrest changes things, but because the willingness to pay a cost is itself a form of testimony.`,
    questionsEn: [
      'When have you asked the strategic question when the moral question was more important?',
      'Is there a cause or truth you would be willing to pay a cost for — not because it would work, but because it is true?',
      'What does it mean to be a witness rather than an agent of change?',
    ],
  },
  {
    id: 25, slug: 'nothing-i-dont-know',
    titleKo: '모르는 것 없어요', titleEn: 'There Is Nothing I Don\'t Know',
    tags: ['humility', 'education'],
    audiences: ['young-adults', 'mid-career', 'first-small-group'],
    driveFileEn: EN[25], driveFileKo: KO[25],
    textEn: `In November 2011, I visited Pyongyang University of Science and Technology. I asked six graduate students: what would you like to learn?\n\nThey discussed among themselves. Their answer: "Nothing."\n\nThrough continued conversation, we arrived at the explanation. They had all been taught exactly the same content. Independent additional study was not permitted. They had therefore never encountered the boundary of what they knew.\n\nNot knowing what you don't know had been interpreted as knowing everything.\n\nUniform education and the mindset it produces had turned not-knowing into knowing-everything. Society as a whole becomes a religious cult: a convenient mob to govern.`,
    questionsEn: [
      'What does it take to discover the edge of your own knowledge?',
      'These were the best students in the country. What does that say about high performance and epistemic blindness?',
      'Can you honestly say "I don\'t know what I don\'t know" — and mean it as an invitation?',
    ],
  },
  {
    id: 26, slug: 'pursuing-the-best',
    titleKo: '선교사의 은퇴, 은퇴 후 선교', titleEn: 'Pursuing the Best — and Finding It Late',
    tags: ['retirement', 'mission'],
    audiences: ['retirees', 'mid-career'],
    driveFileEn: EN[26], driveFileKo: KO[26],
    textEn: `Before becoming a missionary, my life was always about pursuing the best. Especially as a consultant, only the person providing the greatest value to the client that day gets the call. The phone never rings for second place.\n\nAfter fifteen years in the mission field, my retirement budget came in 40% less than my colleagues' projections — not because I sacrificed, but because I no longer needed what they needed.\n\nI no longer feel the urge to pay four times the economy fare to fly business class. I no longer need a corner office.\n\nAbove all, we learned to live contentedly without criticizing others' maximized lifestyles. We discovered that God's grace is sufficient for us.`,
    questionsEn: [
      'Is there a framework that helped you navigate a difficult transition?',
      'Dr. Park stepped down from management to sit at the table. Is there a role you hold that keeps you at a distance from the work you actually want to do?',
      'The story opens with pursuing the best and closes with a folding table. What did "the best" mean at the beginning — and at the end?',
    ],
  },
  {
    id: 27, slug: 'gods-grace-is-sufficient',
    titleKo: '극대화와 충분함', titleEn: 'God\'s Grace Is Sufficient',
    tags: ['simplicity', 'sufficiency'],
    audiences: ['retirees', 'mid-career'],
    driveFileEn: EN[27], driveFileKo: KO[27],
    textEn: `Before becoming a missionary, my life was always about pursuing the best. As a consultant, only the person providing the greatest value to the client that day gets the call.\n\nAfter fifteen years in the mission field, my post-retirement living expenses came in 40% less than my colleagues projected — not because I sacrificed, but because I no longer needed what they needed.\n\nWorking in the field for 15 years taught me that living simply can yield 40% more income for the work itself.\n\nAbove all, we learned to live contentedly without criticizing the maximized lifestyles of our friends. We discovered that God's grace is sufficient for us.`,
    questionsEn: [
      'What changed in what you needed after a particular experience or season?',
      'His desires changed through proximity — not through argument. Do you believe that kind of change is possible without that kind of experience?',
      'What has your life taught you about the gap between what you pursued and what turned out to be enough?',
    ],
  },
  {
    id: 28, slug: 'beyond-the-enemy',
    titleKo: 'HIV/AIDS — 누구의 책임인가?', titleEn: 'Beyond the Enemy',
    tags: ['justice', 'care'],
    audiences: ['mission-trainees', 'mid-career', 'retirees'],
    driveFileEn: EN[28], driveFileKo: KO[28],
    textEn: `In the early 2000s, Africa was helpless against HIV/AIDS. The women of LISAP in northern Malawi began caring for patients — bathing them, serving meals, training children who would become orphans.\n\nThe number of infected women was three times higher than men. Regardless of the route of infection, blame fell on women.\n\nBeyond the enemy of incurable disease, I saw a human being whom God loves. That is what the women of LISAP saw first. That is what made everything else possible.`,
    questionsEn: [
      'Have you been afraid of a situation and found that getting closer changed what you saw?',
      'These women saw beyond the "enemy of incurable disease" to see one human being loved by God. What does it take to make that shift?',
      'Is there someone in your life who needs not a solution but proximity — the signal that they have not been abandoned?',
    ],
  },
  {
    id: 29, slug: 'preferences-for-after-death',
    titleKo: '사후 시신 처리 선호 순위', titleEn: 'Preferences for After Death',
    tags: ['death', 'stewardship'],
    audiences: ['retirees', 'mid-career'],
    driveFileEn: EN[29], driveFileKo: KO[29],
    textEn: `Now that I have reached eighty, news of people departing from this world comes more frequently.\n\nMy preference order: organ donation first, then body donation for medical education, then natural burial without chemicals in a woodland, then alkaline hydrolysis, then cremation.\n\nThis is not a recommendation for others to follow. The invitation is simply this: think about it while you are alive, and share your wishes with your family and medical team.\n\nHow we treat what remains of us after we are gone is one final act of stewardship — of the earth, of the people we leave behind, and of the values we carried.`,
    questionsEn: [
      'Have you thought about what happens to your body after death?',
      'Does your family know your wishes?',
      'What values shape your preferences?',
      'How does thinking about death change how you live?',
    ],
  },
  {
    id: 30, slug: 'disease-of-the-zealous',
    titleKo: '열심 있는 사람들의 병', titleEn: 'The Disease of the Zealous',
    tags: ['zeal', 'burnout'],
    audiences: ['mission-trainees', 'mid-career'],
    driveFileEn: EN[30], driveFileKo: KO[30],
    textEn: `The zealous have a particular disease: they believe their cause is so important that they have no time for rest, no time for relationships, no time for self-care.\n\nThe irony: the very intensity that makes them effective also makes them destructive — to others and to themselves.\n\nThe antidote is not less zeal but different zeal: zeal for the person in front of you, not only for the cause.`,
    questionsEn: [
      'Have you seen zeal become destructive — in yourself or in someone you know?',
      'What is the difference between zeal for a cause and zeal for the person in front of you?',
      'Is there a cause you are serving that is crowding out the people the cause is for?',
    ],
  },
  {
    id: 31, slug: 'hamburger-and-fries',
    titleKo: 'Hamburger and Fries', titleEn: 'Hamburger and Fries',
    tags: ['honesty', 'integrity'],
    audiences: ['young-adults', 'mid-career', 'first-small-group'],
    driveFileEn: EN[31], driveFileKo: KO[31],
    textEn: `When I began my life in Washington, D.C. in 1964, the only Western food I was familiar with was hamburgers. I ordered one at every opportunity.\n\nOne day the server asked: "How was everything?" The hamburger had been excellent. The fries were terrible.\n\nI said: "Excellent."\n\nA small lie. But a lie. And I realized: I do this constantly. I smooth over the truth to avoid discomfort — for them and for me.\n\nThe question is not just about fries. It is about whether I am willing to tell the truth with love when it costs me something.`,
    questionsEn: [
      'Have you recently told a small smoothing-over lie? What was underneath it?',
      'What is the difference between honesty and cruelty?',
      'Where in your life is telling the truth with love most difficult?',
    ],
  },
  {
    id: 32, slug: 'react-and-respond',
    titleKo: '반응하기 vs 응답하기', titleEn: 'React and Respond',
    tags: ['maturity', 'communication'],
    audiences: ['young-adults', 'mid-career', 'retirees'],
    driveFileEn: EN[32], driveFileKo: KO[32],
    textEn: `These two terms both refer to a verbal or behavioral response to a given situation. But they are fundamentally different.\n\nReact: A primal, instinctive behavior — an emotional response without consideration for the consequences of one's actions.\n\nRespond: An action taken after careful consideration of how one's behavior will affect the person interacting with them and whether it will lead to a more harmonious outcome for everyone.\n\nAs I grow older, I don't regret the responses I've given over the years, but I often think how wonderful it would be if I could take back the reactions I've shown.`,
    questionsEn: [
      'Think of the last time you said something you immediately wished you could take back. Was it a reaction or a response?',
      'How do you tell the difference between a reaction and a response when you\'re inside it?',
      'Is there a relationship where you find it hardest to move from reacting to responding?',
    ],
  },
  {
    id: 33, slug: 'may-i-help-you',
    titleKo: 'May I Help YOU?', titleEn: 'May I Help YOU?',
    tags: ['service', 'presence'],
    audiences: ['young-adults', 'mid-career'],
    driveFileEn: EN[33], driveFileKo: KO[33],
    textEn: `There is a difference between efficiency and effectiveness.\n\nEfficiency: doing things right.\nEffectiveness: doing the right things.\n\n"May I help you?" — asked efficiently, from behind a counter, while already reaching for the next customer.\n\n"May I help YOU?" — asked with full attention, looking at this specific person in front of me.\n\nThe emphasis changes everything. The question becomes real.`,
    questionsEn: [
      'When did you last receive help that was truly focused on you — not on the transaction?',
      'Where in your daily work do you offer efficient help rather than effective presence?',
      'What would it look like to ask "May I help YOU?" with full attention — once today?',
    ],
  },
  {
    id: 34, slug: 'what-difference-one-death',
    titleKo: '한 사람의 죽음이 무슨 차이를 만드는가', titleEn: 'What Difference Does One Death Make?',
    tags: ['legacy', 'gratitude'],
    audiences: ['retirees', 'mid-career', 'young-adults'],
    driveFileEn: EN[34], driveFileKo: KO[34],
    textEn: `In 2022, I lost my younger brother. He was 69.\n\nWhat do I want my death to mean?\n\nI would like everything physical about my life to blend into nature. No building with my name on it. No marker for my remains.\n\nI would like to stay alive in a few people's lives — as something that makes them laugh, or think, or find a reason to keep going.\n\nAfter fifteen years as a missionary, I now serve in the AARP Tax-Aide program. I value these encounters more and more. I am learning to see the people I sit across from past the labels the world puts on them.`,
    questionsEn: [
      'Has the death of someone changed your understanding of what your own life is for?',
      'Dr. Park wants no headstone, no named building. What do you want to leave?',
      'He values the Tax-Aide encounters more than his decorated missionary career. Why might that be?',
    ],
  },
  {
    id: 35, slug: 'story-made-with-readers',
    titleKo: '독자들과 같이 만드는 이야기', titleEn: 'A Story Made Together with Readers',
    tags: ['self-reflection', 'legacy'],
    audiences: ['retirees', 'mid-career'],
    driveFileEn: EN[35], driveFileKo: KO[35],
    textEn: `Story 35 is a reserved seat.\n\nIt is being held for the stories you carry — the ones that belong to you and to the people in your group.\n\nDr. Park has shared 34 stories from his own life. Now he asks: what is the story from your life that belongs in this conversation?\n\nWe spend enormous energy avoiding the thought of our own death. But the people who have thought carefully about their death — their wishes, their values, what they want to leave — seem to live differently. More deliberately. With less anxiety about approval.\n\nHow about thinking about it while you are alive? Not as a morbid exercise. As a clarifying one.`,
    questionsEn: [
      'Have you thought seriously about your own death? What has prompted that?',
      'What would change about how you live if you were clearer about what you want to leave?',
      'What story from your own life belongs in this conversation?',
      'What would it mean to live more deliberately starting this week?',
    ],
  },
  {
    id: 36, slug: 'school-uniform',
    titleKo: '경기고 교복', titleEn: 'The School Uniform',
    tags: ['dignity', 'identity'],
    audiences: ['young-adults', 'mid-career', 'retirees'],
    driveFileEn: EN[36], driveFileKo: KO[36],
    textEn: `In the early 1960s, when I was in high school, I was returning home from a difficult day when I passed an elderly woman carrying a baby on her back. She murmured to herself:\n\n"How proud the parents of that Gyeonggi High School boy must be."\n\nShe was not speaking to me. She did not know I was the boy she was talking about.\n\nSixty years later, I still remember her words. She did not know what she gave me that day. A stranger's unsolicited acknowledgment — at exactly the moment I needed it.`,
    questionsEn: [
      'Has a stranger\'s word or gesture stayed with you unexpectedly? What was it?',
      'What does an unsolicited word of acknowledgment do for a person?',
      'Is there someone in your life who is walking home from a difficult day and could use a quiet word?',
    ],
  },
  {
    id: 37, slug: 'reality-is-different',
    titleKo: '현실은 다르다', titleEn: 'Reality Is Different',
    tags: ['principle', 'reality'],
    audiences: ['mid-career', 'retirees', 'young-adults'],
    driveFileEn: EN[37], driveFileKo: KO[37],
    textEn: `I sometimes — or rather, often — come up with unconventional ideas. The usual response: "Your idea is correct in principle, but not practical."\n\nSelfish interest: motivation shaped by the constraints of reality.\nSelf-interest: making the achievement of a right, principled goal one's own.\n\nIf we set aside selfish interests and make principled goals our self-interest, we have a possibility of resolving the problems of reality one by one.\n\nReality is different — yes. But that is not the end of the sentence. It is the beginning of the work.`,
    questionsEn: [
      'Have you been told "correct in principle but not practical"? How did you respond?',
      'What is the difference between selfish interest and self-interest?',
      'Is there a principle you have quietly set aside as "not practical"?',
    ],
  },
  {
    id: 38, slug: 'whole-person-healing',
    titleKo: '전인 치유', titleEn: 'Whole Person Healing',
    tags: ['healing', 'community'],
    audiences: ['mid-career', 'retirees', 'mission-trainees'],
    driveFileEn: EN[38], driveFileKo: KO[38],
    textEn: `In Osaka, Japan, there is Yodogawa Christian Hospital. After World War II, in 1955, the Women's Missionary Society donated their entire birthday offering — $208,077 — to establish a medical clinic in a poor neighborhood.\n\nBy 2009 it had become one of Japan's top three private medical institutions — operating under the motto of Whole Person Healing.\n\nWhen the hospital needed to relocate, 50,000 residents petitioned to keep it. The city sold them a former water treatment site without auction.\n\nFifty years after the original gift, the hospital donated the same amount — $208,077 — to medical missions in Southeast Asia.\n\nBefore the hospital moved in, residents got off one stop early and walked back, ashamed. After the hospital arrived, they got off at their own station.`,
    questionsEn: [
      'What does "Whole Person Healing" mean beyond physical care?',
      '$208,077 planted in 1955, returned in the same amount fifty years later. What does that journey of a seed offering mean?',
      'Who in your community is "getting off one stop early"?',
    ],
  },
  {
    id: 39, slug: 'a-small-smile',
    titleKo: '작은 미소', titleEn: 'A Small Smile',
    tags: ['legacy', 'gratitude'],
    audiences: ['young-adults', 'mid-career', 'retirees', 'first-small-group'],
    driveFileEn: EN[39], driveFileKo: KO[39],
    textEn: `Tigers leave their hides; people leave their names.\n\nAn old Korean proverb. And not a wrong one. There are people who have left their names — in history, on buildings, on plaques.\n\nBut now, at 78, I find myself thinking differently when I stand before this proverb.\n\nI do not want to leave my name.\n\nInstead, I want to leave something small in the lives of the people I have met. Laughter. Reflection. In some cases, hope.\n\nI simply wish to leave a small smile in the hearts of those I encounter.`,
    questionsEn: [
      'What does "leaving your name behind" mean to you?',
      'Leaving a name versus leaving a smile — what is the difference between these two kinds of legacy?',
      'Complete the sentence: "The tiger leaves its hide. A person leaves their name. I want to leave ___."',
      'What small smile have you received from someone that still lives in you?',
    ],
  },
  {
    id: 40, slug: 'social-justice',
    titleKo: '사회정의', titleEn: 'Social Justice',
    tags: ['justice', 'hope'],
    audiences: ['young-adults', 'mid-career', 'retirees'],
    driveFileEn: EN[40], driveFileKo: KO[40],
    textEn: `Many people speak out for social justice at great personal cost. I have deep respect for them.\n\nTwo postures toward social justice:\n\nStruggle — Victory or Defeat: We must win. Not winning is losing. Anyone who opposes my struggle is an enemy.\n\nHope — Standing with the Vulnerable: Aims for progress rather than victory. Views opponents as people to be persuaded, not enemies to be defeated.\n\nEfforts to defeat cancer at its root are necessary. But treatments that extend life — and treatments that ease suffering — are also essential.\n\nEven as we fight for justice, we must not turn away from the neighbors who are suffering because of injustice.`,
    questionsEn: [
      'Have you seen both "struggle" and "hope" postures in action? What was the difference?',
      '"Anyone who opposes my struggle is an enemy" — what does that framing produce over time?',
      'Is there one person near you suffering from injustice where a small act of standing beside them is possible this week?',
    ],
  },
  {
    id: 41, slug: 'finding-mission-field-at-home',
    titleKo: '집 동네에서 나의 선교지를 찾다', titleEn: 'Finding My Mission Field at Home',
    tags: ['neighbor', 'mission', 'retirement'],
    audiences: ['young-adults', 'mid-career', 'retirees', 'first-small-group'],
    driveFileEn: EN[41], driveFileKo: KO[41],
    textEn: `For fifteen years, I served as a missionary across Africa and Asia. Though my assignments and locations varied, my work distilled to a single essential truth: becoming a neighbor to people whose lives differed vastly from my own.\n\nMuch of my work centered on disaster relief, where I drew on my administrative and business background to help communities rebuild. The most profound moments arrived unexpectedly — people in the depths of suffering extending hospitality, offering their meager possessions as expressions of gratitude. I learned to weep and laugh alongside them, and discovered that these shared human moments enriched both our lives far more than any material assistance ever could.\n\nWhen I retired from field service, I assumed that chapter had closed — precious memories carefully filed away. Then everything changed. After relocating to a 55+ community in Orange County, NY, a friend suggested AARP Tax-Aide, recognizing my accounting background. I decided to volunteer.\n\nOver the past nine years, I have discovered something remarkable: our own communities are filled with neighbors whose stories are every bit as diverse and compelling as those I encountered on distant mission fields. I now look forward to each tax season with genuine anticipation, eager to reconnect with familiar faces and welcome new ones. When clients ask for my schedule so they can find me the following year, it moves my 80-year-old heart more deeply than any lucrative consulting engagement once did.\n\nBoth experiences have affirmed the same truth: genuine service transcends transaction. The missionary does not simply give — both parties are transformed. In the same way, Tax-Aide counselors and clients enrich one another in ways that extend far beyond the filing of a return.\n\nI have found my mission field right here at home. As a wise Rabbi once said, "Neighbor is not a geographical term, but a moral concept." Thank you, AARP, for reawakening my sense of purpose and reminding me that the work of neighboring never truly ends.`,
    questionsEn: [
      'When you think of "serving others," what image comes to mind? Is it near or far from where you live?',
      'Dr. Park says the most profound moments were "shared human moments" — not material assistance. What does that distinction mean to you?',
      '"Both parties are transformed." Have you experienced that in a service relationship?',
      '"Neighbor is not a geographical term, but a moral concept." Where does that idea challenge you most?',
      'Without traveling anywhere — where is your mission field this week?',
    ],
  },
];

export const tagLabels: Record<string, string> = {
  'humility': '겸손 · Humility',
  'giving': '베풂 · Giving',
  'neighbor': '이웃됨 · Neighbor',
  'being-vs-doing': '존재vs행위',
  'cross-cultural': '문화이해 · Cross-Cultural',
  'good-intentions': '선의 · Good Intentions',
  'identity': '정체성 · Identity',
  'prejudice': '편견 · Prejudice',
  'mutuality': '상호성 · Mutuality',
  'community': '공동체 · Community',
  'mission': '선교 · Mission',
  'self-reflection': '성찰 · Reflection',
  'cultural-humility': '문화겸손',
  'justice': '정의 · Justice',
  'mercy': '자비 · Mercy',
  'human-rights': '인권 · Rights',
  'faith': '신앙 · Faith',

  'burnout': '번아웃 · Burnout',
  'witness': '증거 · Witness',
  'life-possibilities': '삶의가능성',
  'education': '교육 · Education',
  'disaster-relief': '재난구호',
  'healing': '치유 · Healing',
  'presence': '임재 · Presence',
  'empathy': '공감 · Empathy',
  'communication': '소통 · Communication',
  'maturity': '성숙 · Maturity',
  'dignity': '존엄 · Dignity',
  'equality': '평등 · Equality',
  'forgiveness': '용서 · Forgiveness',
  'martyrdom': '순교 · Martyrdom',
  'learning': '배움 · Learning',
  'history': '역사 · History',
  'truth': '진실 · Truth',
  'retirement': '은퇴 · Retirement',
  'simplicity': '단순함 · Simplicity',
  'sufficiency': '충분함 · Sufficiency',
  'care': '돌봄 · Care',
  'death': '죽음 · Death',
  'stewardship': '청지기 · Stewardship',
  'zeal': '열심 · Zeal',
  'honesty': '솔직함 · Honesty',
  'integrity': '진실성 · Integrity',
  'service': '봉사 · Service',
  'legacy': '유산 · Legacy',
  'gratitude': '감사 · Gratitude',
  'principle': '원칙 · Principle',
  'reality': '현실 · Reality',
  'hope': '소망 · Hope',
  'devotion': '헌신 · Devotion',
};

export const audienceLabels: Record<string, string> = {
  'young-adults': '청년 · Young Adults',
  'mid-career': '중장년 · Mid-Career',
  'retirees': '은퇴자 · Seniors',
  'mission-trainees': '선교훈련 · Mission',
  'first-small-group': '첫모임 · First Group',
};