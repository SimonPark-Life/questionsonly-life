// stories-data.ts
// 베풂의 교만 이야기 · Arrogant Generosity
// 38편 · 6부 — Final arrangement

export type Lang = 'ko' | 'en'

export interface Story {
  id: number
  part: number
  titleKo: string
  titleEn: string
  subtitleKo: string
  subtitleEn: string
  digestKo: string
  digestEn: string
  driveKo: string
  driveEn: string
  driveFileKo: string
  driveFileEn: string
  drivePptKo?: string
  slug?: string
  audiences?: string[]
  tags?: string[]
  textEn?: string
  questionsEn?: string[]
}

const d = (id: string) => `https://docs.google.com/document/d/${id}/edit`
const p = (id: string) => `https://docs.google.com/presentation/d/${id}/edit`

export const stories: Story[] = [

  // ─── 1부 · Part 1 — 받고, 자라고, 베풀고 · Receiving, Growing, Giving ───

  {
    id: 1,
    part: 1,
    titleKo: '베풂의 교만',
    titleEn: 'Arrogant Generosity',
    subtitleKo: '주는 것도 교만이 될 수 있다',
    subtitleEn: "On giving, receiving, and the pride we don't see",
    digestKo: `1976년, 일리노이. 미국에 막 도착한 한국 유학생들이 찾아오면 기꺼이 도왔습니다. 소파 하루 이틀, 따뜻한 밥 한 끼, 은행까지 태워다 주는 것.

그러던 어느 날 한 학생이 조용히, 그러나 분명하게 말했습니다.

"저희가 의무감으로 초대하는 게 아닙니다. 그냥 함께 식사하고 싶어서요. 그런데 왜 받아주지 않으세요? 그것도 하나의 교만 아닌가요?"

그 순간, 저는 할 말을 잃었습니다.

나도 모르는 사이에 나는 항상 주는 사람이었습니다. 그 역할에 너무 익숙해져서 받는 기쁨을 상대에게서 빼앗고 있었던 것입니다.

때로는 받는 것이 가장 너그러운 행동입니다.`,
    digestEn: `Illinois, 1976. When Korean students arrived in America, we helped them settle in — a meal, a couch for a night, a ride to the bank.

Before long, they would ask us to dinner. Each time, I waved them off.

Then one student said it plainly:

"We're not inviting you out of obligation. We simply want to share a meal with you, for our own joy. So why won't you let us? Isn't that refusal also a kind of arrogance?"

I had no answer.

Without noticing, I had made myself permanently the giver — and shut the door on genuine fellowship.

Sometimes, the most generous thing you can do is let someone else give.`,
    driveKo: d('1UAjceY0LwK3dHCY4Hs5T5aB9qBaUBAUc'),
    driveEn: d('1rUMNlz4ciLC35WnJCFEoOXUYVEVfwtoD'),
    driveFileKo: d('1UAjceY0LwK3dHCY4Hs5T5aB9qBaUBAUc'),
    driveFileEn: d('1rUMNlz4ciLC35WnJCFEoOXUYVEVfwtoD'),
  },
  {
    id: 2,
    part: 1,
    titleKo: 'Hamburger and Fries',
    titleEn: 'Hamburger and Fries',
    subtitleKo: '모르면서 모른다고 하지 못할 때',
    subtitleEn: "On not knowing what you don't know — and ordering anyway",
    digestKo: `워싱턴 DC, 1964년. 아는 음식이라고는 두 가지뿐이었습니다.
오므라이스. 그리고 hamburger and fries.

매일 세 끼, 같은 식당, 같은 주문.
종업원들이 저를 부르는 별명이 생겼습니다. "저기 hamburger 온다."

도저히 계속할 수 없어 지인에게 물었습니다. 아침에는 무엇을 먹으면 좋으니? "ham and eggs를 try 해 보렴."

다음 날 식당에서 용기를 냈습니다. "오늘은 ham and eggs 주세요!"

종업원이 물었습니다. "계란은 어떻게 요리할까요?"

한참을 고민했습니다.

"hamburger and fries 주세요."

모르면서 모른다고 하지 못할 때 — 우리는 알던 것으로 돌아갑니다.

지금은 당뇨 때문에 hamburger and fries를 먹지 못합니다. 어쩔 수 없이 배운 것이 더 건강했습니다.`,
    digestEn: `Washington D.C., 1964. The only Western food I knew: omurice from childhood, and hamburger and fries from a military base.

Three meals a day. Same diner. Same order.

The staff had a name for me: "The hamburger guy."

When I couldn't take it anymore, a friend suggested: "Try ham and eggs."

The next day at the diner —

"The usual? Hamburger and fries?"

"No — ham and eggs today!"

The server looked at me with something close to admiration.

"How would you like your eggs cooked?"

After a long pause.

"Hamburger and fries, please."

When we don't know what we don't know — we order what we always order.

These days, because of diabetes, I can no longer eat hamburger and fries. What I learned by necessity turned out to be healthier.`,
    driveKo: d('1xHibnhaaUzSffhRIij-Xa5r6W-HsLP9r'),
    driveEn: d('100FxFnNuaVv9CMTniO98cNmrISDiTc0x'),
    driveFileKo: d('1xHibnhaaUzSffhRIij-Xa5r6W-HsLP9r'),
    driveFileEn: d('100FxFnNuaVv9CMTniO98cNmrISDiTc0x'),
  },
  {
    id: 3,
    part: 1,
    titleKo: 'May I Help YOU?',
    titleEn: 'May I Help YOU?',
    subtitleKo: '유효함과 효율성 사이에서',
    subtitleEn: 'Between effectiveness and efficiency',
    digestKo: `굿 프라이데이, 1964년. 워싱턴 DC. 미국에 도착한 지 며칠 되지 않았습니다.

일자리를 찾아 중국 식당 문을 열고 들어갔습니다.
매니저가 물었습니다. "May I help you?"

일자리를 찾아왔다는 말이 생각나지 않았습니다. 식은땀만 흘리다 튀어나온 말은 —

"NO, may I help YOU?!!"

매니저가 박장대소하며 일을 주었습니다. 바에서 잔을 닦는 일이었습니다.

문제가 있었습니다. 술잔의 종류를 몰랐습니다.

해결책을 찾았습니다. 주문이 들어올 때마다 네 종류의 잔을 모두 올려놓았습니다. 바텐더는 원하는 잔을 골랐습니다.

저녁이 끝날 때 바텐더는 흡족했습니다. 저는 지쳐 있었습니다.

유효(Effective) — 결과가 좋았습니다. 효율(Efficient) — 과정은 엉망이었습니다.

모르는 것을 모른다고 하지 못할 때 — 우리는 네 개의 잔을 다 닦습니다.`,
    digestEn: `Good Friday, 1964. Washington D.C. First day looking for work.

I pushed open the door of a Chinese restaurant. The manager looked up.

"May I help you?"

The words for "I've come looking for work" had vanished. What came out instead:

"NO, may I help YOU?!!"

The manager laughed and offered me a job — assisting at the bar, washing glasses.

The only glass I knew was a water glass.

My solution: whenever a drink order came in, I set out all four types of glasses. The bartender picked what he needed.

I washed all four. Every single time.

Effective — the bartender always got the right glass.
Efficient — remarkably poor.

When we don't know what we don't know — we set out all four glasses and wash them all.`,
    driveKo: d('1jHxka8hmMaDh7mz5FyRmLP1awPkJRRmI'),
    driveEn: d('1QkWh67OVuo9H9rzEW3mzSovV0Bv7uJAs'),
    driveFileKo: d('1jHxka8hmMaDh7mz5FyRmLP1awPkJRRmI'),
    driveFileEn: d('1QkWh67OVuo9H9rzEW3mzSovV0Bv7uJAs'),
  },
  {
    id: 4,
    part: 1,
    titleKo: '반응하기 vs 응답하기',
    titleEn: 'React and Respond',
    subtitleKo: '후회하는 것과 후회하지 않는 것',
    subtitleEn: "What we regret — and what we don't",
    digestKo: `비슷하게 들리는 두 단어. 그러나 전혀 다른 방향을 가리킵니다.

반응(React) — 본능적입니다. 무언가가 위협하면, 생각하기 전에 움직입니다.

응답(Respond) — 잠깐 멈춥니다. 그리고 묻습니다: 내가 하려는 것이 더 나은 곳으로 이어질까?

미국에서 처음 몇 년간, 낯선 표현이 나올 때마다 당황했습니다. 모른다고 물어보면 될 것을 — 반응했습니다. 조용히 물러나거나, 설명할 수도 없는 적대감을 보이기도 했습니다.

세월이 흐른 후, 이번에는 상대방이 제 말을 오해하고 같은 방식으로 반응하는 것을 경험했습니다.

낯설지 않았습니다.

서두르지 않고 진짜 의도를 확인했을 때 — 다른 것이 가능해졌습니다. 존중, 진심 어린 대화, 두 사람 모두를 더 나은 상태로 남기는 만남.

지난 세월의 응답들은 후회하지 않습니다. 어려운 것이었어도.

그러나 반응들은? 생각하기 전에 했던 말들?

말하기 전에 — 이것이 반응인가, 응답인가?`,
    digestEn: `Two words that sound alike — but point in entirely different directions.

To react is instinctive. Something threatens, and we move before we have thought.

To respond is to pause — and ask: will what I am about to do lead somewhere better?

In my early years in America, unfamiliar expressions would throw me off. Rather than asking what something meant, I would react — going quiet, pulling back, sometimes showing a hostility I couldn't explain.

Years later, others misunderstood my words and reacted toward me the same way.

I recognized it immediately.

On the occasions when we slowed down — when we took the time to understand what had actually been said — something else became possible. Respect. Genuine conversation. Something worth having.

As I grow older, I do not regret the responses I have given. Even the difficult ones.

But the reactions? The words I cannot take back?

Before I speak — is this a reaction, or a response?`,
    driveKo: d('1GOVCdeZ2TMGOxKrcLLr9iz44Id_Bxs0f'),
    driveEn: d('1CxLhr869z9PFyti_lQBHHuHyLK6DATbx'),
    driveFileKo: d('1GOVCdeZ2TMGOxKrcLLr9iz44Id_Bxs0f'),
    driveFileEn: d('1CxLhr869z9PFyti_lQBHHuHyLK6DATbx'),
  },
  {
    id: 5,
    part: 1,
    titleKo: '기선, 범선, 부선',
    titleEn: 'Motor Boats, Sail Boats, Barges',
    subtitleKo: '나는 어떤 배인가',
    subtitleEn: 'On the direction of a life',
    digestKo: `세 종류의 배가 있습니다.

기선(Motor Boat) — 자체 엔진으로 움직입니다. 선장의 의도대로 방향과 속도를 조절합니다. 환경을 극복하며 나아갑니다.

범선(Sail Boat) — 바람과 돛의 조화로 앞으로 나아갑니다. 자연이 주는 힘을 활용합니다. 목적지를 향하되, 바람과 함께 움직입니다.

부선(Barge) — 자체 동력이 없습니다. 다른 배가 밀거나 끌어주는 대로 움직입니다. 방향은 전적으로 끌어주는 배에 달려 있습니다.

돌이켜보면 — 저는 인생의 많은 부분을 기선처럼 살았습니다. 입학, 취직, 승진: 한 담을 넘으면 다음 담이 기다리는 장애물 경주였습니다.

그러나 이제, 인생의 끝을 바라보며, 저는 범선처럼 살고 싶습니다.

바람과 싸우지 않고 읽는 것.

바람은 이미 불고 있습니다. 돛을 올리고 있는가?`,
    digestEn: `Three kinds of vessels cross open water.

A motor boat is driven by its own engine — direction set by the captain, obstacles overcome by force.

A sail boat moves through the harmony of wind and sail — heading toward its destination, but moving with what nature provides.

A barge has no engine of its own. It goes wherever it is pulled.

Looking back at my own life — I have lived much of it as a motor boat. Admission, employment, promotion: one wall cleared, the next one waiting.

But now, looking toward the end, I want to live like a sail boat.

Not fighting the wind. Reading it.

The wind is already blowing. Do I have my sails up?`,
    driveKo: d('1LcaL3rX-IdMld8otsGBAvcHGnZrhFDem'),
    driveEn: d('1hd3jOkh4EPB6H5ST_yvlHKlBX7mJaGxK'),
    driveFileKo: d('1LcaL3rX-IdMld8otsGBAvcHGnZrhFDem'),
    driveFileEn: d('1hd3jOkh4EPB6H5ST_yvlHKlBX7mJaGxK'),
  },

  // ─── 2부 · Part 2 — 이웃으로 산다는 것 · On Living as a Neighbor ───

  {
    id: 6,
    part: 2,
    titleKo: '이웃은 지리적 용어가 아닙니다',
    titleEn: 'Neighbor Is Not a Geographical Term',
    subtitleKo: '등잔 밑이 어두웠네',
    subtitleEn: "The lamp that doesn't shine on its own base",
    digestKo: `콩고, 니제르, 파키스탄, 네팔, 한국.
수십 년을 멀리 있는 이웃을 위해 달려갔습니다.

그러던 어느 날, 아내가 말했습니다.
"나도 당신이 필요해."

등잔 밑이 어두웠습니다.

"이웃은 지리적인 용어가 아니다. 그것은 도덕적 개념이다." — 랍비 요아킴 프린츠

"못 하겠습니다"라고 말하니, "잘 알겠습니다"라는 이웃들께 고마운 마음.

우리는 모두, 언제나, 이미 선교 현장에 살고 있습니다. 선교 현장은 바로 옆에 앉은 사람을 포함합니다.`,
    digestEn: `Congo. Niger. Pakistan. Nepal. Korea.

For decades, I rushed toward distant neighbors whenever I was needed.

Then one day, my wife said four words.

"I need you too."

The darkest place is under the lamp.

When I finally said "I can't" to the requests that kept coming, my neighbors said "We understand."

It turns out receiving grace is also part of the work.

"Neighbor is not a geographical term. It is a moral concept."
— Rabbi Joachim Prinz

We are all living on the mission field at all times. The field includes the person sitting beside you.`,
    driveKo: d('15HZQO59pcRY5Gxq7OGunAk42x5DpnqzQ'),
    driveEn: d('1QiP6a9HCKNaGsMVlP344qU_bdipaN3z0'),
    driveFileKo: d('15HZQO59pcRY5Gxq7OGunAk42x5DpnqzQ'),
    driveFileEn: d('1QiP6a9HCKNaGsMVlP344qU_bdipaN3z0'),
  },
  {
    id: 7,
    part: 2,
    titleKo: '길에서 벗어나 모자를 기울이기',
    titleEn: 'Stepping Aside and Tipping the Hat',
    subtitleKo: '작은 몸짓, 그 엄청난 결과',
    subtitleEn: 'On small gestures and their enormous consequences',
    digestKo: `데스몬드 투투는 인생의 결정적 순간으로 어머니와 함께 걷던 어느 날을 말했습니다.

아파르트헤이트 남아프리카. 흑인과 백인이 인도에서 마주치면 흑인이 비켜서고 고개를 숙여야 했습니다.

그런데 그날, 어린 투투와 어머니가 비키기도 전에 — 백인 남자가 먼저 인도에서 내려섰습니다. 그리고 어머니에게 모자를 기울였습니다.

단순한 한 발자국.
모자 하나 벗음.
법이 필요 없다고 했던 자리에서 건넨 인사.

그가 트레버 허들스턴 신부였습니다.

"나도 성공회 신부가 되고 싶다. 무엇보다, 하나님의 사람이 되고 싶다."
— 데스몬드 투투

허들스턴은 모든 인간이 하나님의 형상을 지닌다고 믿었습니다. 그리고 그 믿음이 투투의 평생의 싸움이 되었습니다.

오늘 우리는 누구를 위해 비켜서고 있는가?
그리고 아직 모자를 기울이지 못한 사람은 누구인가?`,
    digestEn: `When asked what the defining moment of his life was, Desmond Tutu described a walk with his mother.

In apartheid South Africa, the rule was absolute: when a black person and a white person met on the sidewalk, the black person stepped aside and bowed their head.

But that day, before young Tutu and his mother could move — the white man stepped off the sidewalk first. And tipped his hat to her.

A simple step. A hat removed. A greeting given where the law said none was owed.

That man was Trevor Huddleston — an Anglican priest.

"When my mother told me he was an Anglican priest, I decided right there that I wanted to be an Anglican priest too. Moreover, I wanted to be a man of God."
— Desmond Tutu

Huddleston did not see a black woman required to step aside. He saw the image of God — and greeted her accordingly.

Who are we stepping aside for today?
And to whom have we not yet tipped our hat?`,
    driveKo: d('1GFvJc6dh6gf3WFu2Xy2MlIDC3mKXl6hc'),
    driveEn: d('1OT0f54IFE_Ws2maA9aFZ0KDhioU2uPDh'),
    driveFileKo: d('1GFvJc6dh6gf3WFu2Xy2MlIDC3mKXl6hc'),
    driveFileEn: d('1OT0f54IFE_Ws2maA9aFZ0KDhioU2uPDh'),
  },
  {
    id: 8,
    part: 2,
    titleKo: '아보카도 나무',
    titleEn: 'The Avocado Tree',
    subtitleKo: '구조, 공정함, 그리고 시선',
    subtitleEn: 'On structure, fairness, and the way we see',
    digestKo: `콩고. 우리 집 앞마당에는 커다란 아보카도 나무가 있었습니다. 정원사 빌롤로가 제안했습니다. 동네 아이들이 나무에 올라가 열매를 두드리면, 땅에 떨어져 깨진 것은 아이들이 가져가게 하자고.

저는 동의했습니다.

그런데 며칠 후, 온전한 아보카도는 줄고 깨진 것은 늘었습니다.

그 선교지를 떠난 후에야 — 저는 이해했습니다.

아이들이 문제가 아니었습니다. 처음부터 저는 주인과 노동자의 관계를 구조화했습니다. 온전한 열매는 나에게, 깨진 조각만 아이들에게. 공정한 길이 없는 구조에서 아이들은 유일한 방법을 찾았습니다 — 더 많이 깨뜨리는 것.

저는 나쁜 의도가 없었습니다. 그저 그 자리에 있었을 뿐입니다. 그런데 그 존재 자체가 이미 구조를 만들고 있었습니다.

세상의 모든 불공정한 구조를 당장 바꿀 수는 없습니다. 그러나 지금 내 앞에 있는 이 사람을 이웃으로 보는 것 — 그것은 지금 이 순간 제가 선택할 수 있는 일입니다.

나는 지금 내 앞에 있는 이 사람을 어떻게 보고 있는가?`,
    digestEn: `Congo. Our house had a large avocado tree in the front yard. The gardener suggested the neighborhood kids knock the fruit down with long poles — whatever fell and broke, they could take home.

I agreed. I wanted to respect local custom.

Days later, the whole avocados kept shrinking. The broken ones kept growing.

The gardener blamed the children.

It was only after I left that I understood. The children were not the problem. From the beginning, I had structured our relationship as owner and laborer — whole fruit for me, broken scraps for them. In a system with no fair path, the children found the only means available: break more avocados deliberately.

I had good intentions. The structure did not care.

The world's unfair structures cannot all be changed at once. But seeing the person in front of me as a neighbor — that is a choice available right now.

How am I seeing the person in front of me?`,
    driveKo: d('1xy-uc0-qvZcinmPF6iEPIzYKYQ84B9bu'),
    driveEn: d('17UZMqsKenPkkDOxe-n4dvkh2Zyx0ggyx'),
    driveFileKo: d('1xy-uc0-qvZcinmPF6iEPIzYKYQ84B9bu'),
    driveFileEn: d('17UZMqsKenPkkDOxe-n4dvkh2Zyx0ggyx'),
    drivePptKo: p('11xgA0Ei'),
  },
  {
    id: 9,
    part: 2,
    titleKo: '겸손과 신뢰로 가르치다',
    titleEn: 'Teaching with Humility and Trust',
    subtitleKo: '칼론지의 소원이 드러낸 것',
    subtitleEn: 'On the door thirty years of labor left unopened',
    digestKo: `콩고로 떠나기 전, 한 선배 선교사가 이야기를 들려주었습니다.

30년을 함께 일한 조수 칼론지에게 물었습니다. "특별히 원하는 것이 있으면 말씀해 주세요."

칼론지가 답했습니다.

"저도 선교사님의 동료들이 드나든 문으로 집에 들어가, 그들이 앉았던 테이블에 앉아, 같은 도자기 컵에 커피 한 잔을 마시고 싶습니다."

30년이었습니다. 그 소원 하나를 말하지 못한 30년이었습니다.

선배 선교사는 이 이야기를 들려준 후 아무 말도 덧붙이지 않았습니다.

그런데 그 침묵이 — 어떤 강의보다 더 깊이, 더 오래 남았습니다.

저는 콩고에서 같은 실수를 하지 않겠다고 다짐했습니다. 그리고 다른 방식으로 반복했습니다.

강의는 머리에 남습니다. 이야기는 삶에 남습니다.

칼론지가 원했던 것은 커피 한 잔이 아니었습니다. 동등한 존재로 대우받는 것이었습니다.

나는 지금 내 앞에 있는 이 사람을 어떻게 대하고 있는가?`,
    digestEn: `Before leaving for Congo, a seasoned missionary told us a story.

A colleague had served in Congo for thirty years. On the day of his retirement, he called in Kalonji, his longtime assistant.

"You have served faithfully for years. I want to give you something special. What would you like?"

Kalonji declined. The missionary pressed him.

"Since you encourage me to be boldly honest — I will say it.

I have always wished to enter your house through the door your fellow missionaries use. To sit at their table. To drink coffee from the same porcelain cup."

Thirty years. That was what thirty years of faithful service had left unopened.

The storyteller finished — and said nothing more.

He simply told the story and trusted us to find ourselves in it.

A lecture reaches the mind. A story reaches the life.

Am I treating the person in front of me as an equal?
And what am I teaching — without knowing it — by the way I live?`,
    driveKo: d('1N58qRs1642nrx0-iBdUgulgNG68KmV4B'),
    driveEn: d('1pQ0UtuZhKjH18x2F2H9axGkOs5j-0JNU'),
    driveFileKo: d('1N58qRs1642nrx0-iBdUgulgNG68KmV4B'),
    driveFileEn: d('1pQ0UtuZhKjH18x2F2H9axGkOs5j-0JNU'),
  },
  {
    id: 10,
    part: 2,
    titleKo: '겸손의 힘',
    titleEn: 'The Power of Humility',
    subtitleKo: '약함이 진정한 변화의 조건',
    subtitleEn: "On weakness, witness, and the questions we don't expect to answer",
    digestKo: `1980년대 후반, 뉴저지. 우리 집에서 주간 성경 공부를 했습니다. 대학교수, 벨연구소 연구원, 은행가들.

1989년, 싱가포르로 이사하게 되었습니다. 마지막 모임에서 이 박사가 말했습니다.
"박 선생님, 찬송가 한 곡만 불러주시면 교회에 나가겠습니다."

모두 알고 있었습니다 — 저는 음치였습니다.

아내 해정이 나섰습니다. "창피하다고 거절하면 안 되죠. 같이 부를게요."

우리는 시작했습니다. 1절 중간에 멈춰야 했습니다. 방 안이 웃음으로 가득 찼습니다.

10여 년 후, 목사가 된 이 박사가 말했습니다.

"성경 공부의 논리로는 지금도 반박할 수 있습니다. 싱가포르 가시기 전 찬송가를 부르실 때 — 창피함을 감수하며 약함을 드러내시는 걸 보고 생각했습니다. '이 예수가 누구기에 저 분이 이 수치를 감당하는가?' 진정한 과학자라면 그 질문을 탐구해야 했습니다."

약함이, 때로 어떤 논리보다 더 강합니다.`,
    digestEn: `New Jersey, 1989. Our Bible study group was ending — we were moving to Singapore.

Dr. Lee, top of his class at Seoul National University, smiled and said:

"Mr. Park, if you sing just one hymn for us, I'll attend church."

Everyone knew I had no musical talent whatsoever.

My wife stepped in. "How can you refuse just because you're embarrassed? I'll sing with you."

We made it halfway through the first verse. I was completely off-key. The room burst out laughing.

A dozen years later, Dr. Lee — now a pastor — wanted to see us.

"Do you know how I came to accept Jesus?"

He shook his head.

"I could still argue against your reasoning today. I accepted the Lord when you sang that hymn. At that moment I thought — who is this Jesus, that he values him more than the shame he endures? A true scientist must explore that question."

Weakness, it turns out, can open doors that argument cannot.`,
    driveKo: d('1E3GWzqPd15DkRmPWNCPvJ7v5mDHYXMIn'),
    driveEn: d('1sXzAyDIcSYjnC8EKbieYN2KBmY1C_zyo'),
    driveFileKo: d('1E3GWzqPd15DkRmPWNCPvJ7v5mDHYXMIn'),
    driveFileEn: d('1sXzAyDIcSYjnC8EKbieYN2KBmY1C_zyo'),
  },
  {
    id: 11,
    part: 2,
    titleKo: '이웃에게서 배우는 선교사',
    titleEn: 'A Missionary Learning from Neighbors',
    subtitleKo: '대사 한 마디 없는 역이 완성한 이야기',
    subtitleEn: 'On the character with no lines — and the one who saw him first',
    digestKo: `네팔 영어 수업. 선한 사마리아인 이야기를 나눈 후 물었습니다.
"이 이야기에서 누가 되고 싶습니까?"

대부분이 답했습니다. 사마리아인이 되고 싶다고.

말수 적은 경비원에게도 물었습니다.

한참을 생각하더니 그가 말했습니다.

"저는 지식도 기술도 없지만 — 사마리아인의 뜻을 잘 받들어 강도 만난 이를 정성껏 간호한 그 여인숙 주인이 되고 싶습니다."

고개가 숙여졌습니다.

그 여인숙 주인은 성경에 대사가 없습니다. 그러나 그가 없었다면 그 이야기는 완성될 수 없었습니다.

선교사인 저와 그 경비원 — 누가 더 진정한 이웃이었을까요?`,
    digestEn: `Nepal. English class. After reading the parable of the Good Samaritan, we asked:

"Which character would you like to be?"

Most people said: the Samaritan. The hero.

I asked a quiet security guard. He took a long time.

"I have neither knowledge nor skill. But I would want to be like the innkeeper — the one who received the injured man and tended to him with all his heart."

I bowed my head.

I had read that parable many times. I had taught it. I had never once stopped to consider the innkeeper.

The Samaritan's compassion alone was not enough. Someone had to receive it — sustain it — carry it forward while the hero moved on.

The innkeeper has not a single line of dialogue.

And yet a Hindu security guard, in a country where I was not permitted to evangelize, saw him first.

Between that security guard and me — who was the more genuine neighbor?`,
    driveKo: d('14H10Q2fFiAkxjA4hpsrYvP-QhgovZI-t'),
    driveEn: d('1fJV29t6u-DQmFK-wLKcoiXzmVQ8MEPlo'),
    driveFileKo: d('14H10Q2fFiAkxjA4hpsrYvP-QhgovZI-t'),
    driveFileEn: d('1fJV29t6u-DQmFK-wLKcoiXzmVQ8MEPlo'),
    drivePptKo: p('1ShrpJjd'),
  },
  {
    id: 12,
    part: 2,
    titleKo: '언어 배우기',
    titleEn: 'Learning a Language',
    subtitleKo: '발언하지 못하는 이들의 고난을 이해하고 공유하기',
    subtitleEn: 'On voicelessness, power, and what broken Nepali can do',
    digestKo: `나이 50이 넘어 불어 공부를 시작했습니다.
수업 첫날, 선생님이 선언했습니다. "교실에서는 영어를 쓰면 안 됩니다."
그날부터 저는 귀머거리이자 벙어리가 되었습니다.

3주 후, 처음으로 선생님의 말을 알아들었습니다. 반가운 마음에 그동안의 답답함을 쏟아냈습니다.
"Toutes les questions doivent être posées uniquement en français." (모든 질문은 불어로만 받겠습니다.)
다시 입을 닫았습니다.

그 답답함이 나중에 네팔에서 깨달음이 되었습니다. 계급 때문에, 성별 때문에 발언권을 박탈당한 사람들 — 그들의 고통이 낯설지 않았습니다.

말을 못 한다고 해서 생각이 없는 것이 아닙니다.

네팔 시장에서 초보적인 몇 마디에 상인들이 손뼉을 쳤습니다.

다가오려는 노력 자체가 — 이미 선물이었습니다.

우리 이웃의 언어로 다가가는 것이 — 이웃을 존중하고 우리의 열린 마음을 전하는 문이 되는 것 같습니다.`,
    digestEn: `I started learning French at fifty-two. On the first day of class, the teacher announced: no English allowed.

I sat there deaf and mute.

Three weeks later, I finally understood something she said: "Do you have any questions?"

I let everything out.

"Toutes les questions doivent être posées uniquement en français." (All questions must be asked in French only.)

I shut my mouth again.

Later, in Nepal, I saw people silenced not by a classroom rule — but by caste. Lower castes and women, denied any meaningful voice in public life.

The French classroom came back to me. Having thoughts and no words for them. Being treated as if you have nothing to say — simply because you cannot say it well.

In the markets of Nepal, I spoke a few halting words of Nepali. The merchants clapped and welcomed me warmly.

They were not impressed by my Nepali. They were honoring the effort — a foreigner who had tried to reach toward them.

Approaching our neighbors in their language — however imperfectly — is one way of saying: you are worth crossing toward.`,
    driveKo: d('1y9bcqVXFhrgmD4rykHoX0wlXphc7EKmX'),
    driveEn: d('1eShMcCBDpGeI9HNNMY3p-NUcCIIr6lDJ'),
    driveFileKo: d('1y9bcqVXFhrgmD4rykHoX0wlXphc7EKmX'),
    driveFileEn: d('1eShMcCBDpGeI9HNNMY3p-NUcCIIr6lDJ'),
  },
  {
    id: 13,
    part: 2,
    titleKo: '몇 명이나 전도했어요?',
    titleEn: 'How Many People Have You Converted?',
    subtitleKo: 'Amodou의 십자가에 대하여',
    subtitleEn: "On Amodou's cross — and the power of a relationship with no result yet",
    digestKo: `선교사로서 자주 듣는 질문입니다. 저는 항상 답하기 어려웠습니다.

니제르, 2005년. 4주간의 기아 구호를 마치고 공항으로 가는 차 안에서 무슬림 동료 Amodou가 물었습니다.
"이슬람 국가에서, 왜 기독교인인 너희는 어려운 고생을 견뎌가며 우리를 도우려 하나? 몇 주 같이 지냈지만 답을 모르겠다."

저는 말했습니다.
"네가 계속 그 질문을 하다 보면, 언젠가는 너도 내 구세주 예수를 만나리라 확신한다."

6개월 후, 다시 만난 Amodou가 건넸습니다.
"아직 네가 말하는 예수를 만나지는 못했다. 그러나 너와의 시간을 기억하고 싶어서."

사막 유목민이 만든 작은 십자가였습니다.

별로 잘 만든 것 같지 않았습니다.

그것이 제 선교 사역 전체에서 가장 전도에 가까운 순간이었습니다.

"아직." 그는 아직이라고 말했습니다.`,
    digestEn: `As a missionary, I hear this question often. I find it hard to answer.

Niger, 2005. Four weeks of famine relief work. On the way to the airport, my Muslim colleague Amodou asked:

"Our country is Muslim. All the people we help are Muslim. Why do you and your Christian colleagues endure such hardship to help us? I still don't understand."

"I'm certain that if you keep asking that question, someday you will meet my Savior, Jesus."

We said goodbye.

Six months later, I returned. On the way back to the airport, Amodou spoke.

"I still think about our conversation. I haven't met the Jesus you speak of yet. But I wanted to remember our time together."

He handed me a cross — made by the nomads of the desert.

It didn't look particularly well-made.

That gift stands as the closest thing to an evangelistic moment in my entire ministry.

"Yet." He said yet.`,
    driveKo: d('1jUhINK-WmX2BWEctXr3hzimvivjQE42J'),
    driveEn: d('10roRzQhNGCoVUDusC67tws_6dwrtkzoR'),
    driveFileKo: d('1jUhINK-WmX2BWEctXr3hzimvivjQE42J'),
    driveFileEn: d('10roRzQhNGCoVUDusC67tws_6dwrtkzoR'),
    drivePptKo: p('1ShrpJjd'),
  },
  {
    id: 14,
    part: 2,
    titleKo: '콩고 시골교회 어른',
    titleEn: 'An Elderly Man from a Rural Church in Congo',
    subtitleKo: '하나님이 아직 우리를 기억하신다',
    subtitleEn: 'God still remembers us',
    digestKo: `2000년 12월, 콩고 오지.
험한 길, 검문소, 밤새 벌레들. 선물을 기대했던 이들의 실망도 감당해야 했습니다.

어느 마을에 이르렀을 때, 한 연로한 어른이 말씀하셨습니다.

"선교사님들이 떠나면서 곧 돌아오겠다고 하셨는데 30년이 지나도록 소식이 없어서 — 하나님이 우리를 잊으셨다고 생각하게 되었습니다."

잠시 멈추셨다가, 이어 말씀하셨습니다.

"오늘 당신이 우리를 찾아주니, 하나님이 아직 우리를 기억하신다는 확신이 생깁니다."

그 순간, 험한 길도, 검문소도, 벌레도 — 모든 불평이 사라졌습니다.

누군가를 찾아간다는 것이 때로 그런 의미가 됩니다.`,
    digestEn: `December 2000, Congo. The roads were broken. Soldiers demanded money at every roadblock. The insects fed well — they were the only ones who received gifts from me that journey.

People had been hoping I brought something for them. I hadn't.

But at one village, an elderly man came to speak to me.

"When the missionaries left, they said they would come back soon. Thirty years passed. No word. No visit.

We began to think the missionaries had abandoned us. We even began to think that God had forgotten us.

But today — you have come.

Now I know: God still remembers us."

Every complaint I had been carrying — the roads, the roadblocks, the insects — disappeared in that moment.

Sometimes, simply showing up is the message.`,
    driveKo: d('1jZuv9adl3KykoT6yNYSXaReZTCXFfrDT'),
    driveEn: d('1HDItjzdndvsI7qZK2Tyz-fwLGst2r2Zp'),
    driveFileKo: d('1jZuv9adl3KykoT6yNYSXaReZTCXFfrDT'),
    driveFileEn: d('1HDItjzdndvsI7qZK2Tyz-fwLGst2r2Zp'),
    drivePptKo: p('1fhFd4q3'),
  },

  // ─── 3부 · Part 3 — 배우며 실수하며 · Learning Through Mistakes ───

  {
    id: 15,
    part: 3,
    titleKo: '섣부른 해결책',
    titleEn: 'Hasty Solutions',
    subtitleKo: '이해하지 못하면서 해결하려 할 때',
    subtitleEn: 'On the assumptions we carry — and the silences that teach us',
    digestKo: `콩고 선교지. 저는 문제들이 보였습니다. 그리고 해결책도 보였습니다.

벤치
교회 신도들이 통나무 위에 앉아 예배드렸습니다. 목재와 못을 제공해 벤치를 만들었습니다.

예배 후, 여자 아이들이 무거운 벤치를 머리에 이고 집으로 가져갔습니다.
"교회에 놔두면 주중에 도둑맞습니다. 주일마다 가져오기로 했습니다."

없던 짐을 새로 만들어준 것이었습니다.

우산
폭우에 직원들이 점심 후 돌아오지 않았습니다. 200명에게 우산을 나누어 주었습니다.

다음 폭우 날, 병원은 여전히 텅 비었습니다.
"귀한 선물이라 망가지지 않게 아낍니다. 비가 그칠 때까지 기다리는 건 익숙한 생활 방식입니다."

나중에 한 의사가 말했습니다.
"기대한 대로 되지 않을 것도 알았지만, 미리 말릴 수 없어서 잠잠히 있었습니다."

이해하지 못하면서 해결하려 할 때 — 선의는 종종 새로운 짐이 됩니다.`,
    digestEn: `Congo. Shortly after arriving, I began noticing things — problems that seemed to have obvious solutions, left unaddressed.

The benches. The congregation sat on logs for hours of worship. We provided lumber and nails. Benches were built.

After the service, the girls carried the heavy benches out on their heads.

"If we leave them, they'll be stolen before next Sunday."

I had solved a problem that didn't exist — and created a new one.

The umbrellas. Staff didn't return from lunch when it rained. I bought nearly two hundred umbrellas. I watched everyone smile and quietly congratulated myself.

The next heavy rain — nothing changed.

"The umbrellas are precious gifts. We keep them for special occasions. During rainy season, we wait until the rain stops. That is how life is organized here."

Afterward, one doctor said:

"We could see it wouldn't work out the way you expected. But we couldn't intervene beforehand. So we said nothing."

Understanding what the problem actually is — that comes before any solution.`,
    driveKo: d('163fHpkxx1zmQ9Q27MtWSdcTNIGPKMRMy'),
    driveEn: d('15V93XvzayMSuFezIdLkA7BxuP6zxs0xm'),
    driveFileKo: d('163fHpkxx1zmQ9Q27MtWSdcTNIGPKMRMy'),
    driveFileEn: d('15V93XvzayMSuFezIdLkA7BxuP6zxs0xm'),
    drivePptKo: p('1Aq0-QyF'),
  },
  {
    id: 16,
    part: 3,
    titleKo: '다코로의 선물',
    titleEn: "Dakoro's Gift",
    subtitleKo: '규칙, 생명, 그리고 공동체가 가진 지혜',
    subtitleEn: 'On rules, lives, and the wisdom a community already holds',
    digestKo: `니제르, 기아 구호 현장. 배급을 마치고 떠나려는 순간, 한 청년이 다가왔습니다.
"옆 마을에서 오늘 아이가 태어났습니다. 집에 식량이 없어 산모와 아기가 위험합니다. 특별히 나누어 주실 수 없겠습니까?"

세 가지 방법이 떠올랐습니다. 모두 좋지 않았습니다.

저는 대신 물었습니다. "전에는 어떻게 하셨나요?"

십여 분 후, 마을 사람들이 각자 조금씩 덜어낸 식량이 그 아기 아빠의 자루를 채웠습니다.

떠나는 저에게 청년이 말했습니다.

"오늘 식량만 주신 것이 아니라, 우리의 좋은 풍습을 돌려주셨습니다."`,
    digestEn: `Niger, famine relief. Distribution day in the village of Dakoro — ten days of food for every resident. We were saying our farewells when a young man approached, another young man beside him clutching an empty sack.

"His child was born today. There is no food at home — the mother and newborn are both in critical need. Could you make a special exception?"

Three options came to mind. All three were wrong.

I asked instead:

"How did you handle situations like this before?"

A young man rose silently. He took the empty sack and walked into the village. Ten minutes later he returned — the sack held food. Each household had contributed a little.

As we left, the young man came to me.

"Today you did not only give us food. You gave our custom back to us."`,
    driveKo: d('1P80WP-fRT9lOd_Iav5diSvrjNRNAhjBd'),
    driveEn: d('17QD51DGDOM2NRtWUxox6N50qvIlN1Adv'),
    driveFileKo: d('1P80WP-fRT9lOd_Iav5diSvrjNRNAhjBd'),
    driveFileEn: d('17QD51DGDOM2NRtWUxox6N50qvIlN1Adv'),
  },
  {
    id: 17,
    part: 3,
    titleKo: '내가 가서',
    titleEn: 'As I Go',
    subtitleKo: '"미개인"을 하나님의 자녀로 — 이 과오는 어디서 오는가',
    subtitleEn: 'On the assumption of arrival — and the discipline of staying on the way',
    digestKo: `1900년대 초, 한 선교사가 후원 교회에 편지를 썼습니다.
"이 미개인들을 하나님의 자녀로 만들라는 명령에 순종하여……"

선의였습니다. 그러나 그 편지에는 수천 년의 역사와 문화가 없었습니다.

"내가 한국에 대해 아는 것이 없다"가 아니라 "한국에는 고유의 문화와 역사가 없다"로 정리해버린 것입니다.

저도 아프리카에서 같은 실수를 했습니다. 깨닫는 데 오랜 시간이 걸렸습니다.

제목은 "내가 가서"입니다. "내가 도착해서"가 아닙니다.

가는 길에서도, 도착한 후에도, 떠난 후에도 — 계속 재검토하는 것이 선교의 자세입니다.

"내가 모르는 것은 없다"는 착각 — 그것이 선의를 과오로 만듭니다.`,
    digestEn: `In the early 1900s, a missionary wrote to his sending church before leaving for Korea.

"Armed with the Word, I obey the command to make these savages children of God…"

Before he arrived, the Korean people were a people with thousands of years of history, culture, and learned coexistence.

Those who knew nothing of Korea did not say: "I do not yet know what is here."

They said: "There is nothing here worth preserving."

It is easier to say "there is nothing here" than to admit you have not looked.

I served in Africa and made similar mistakes. It took a long time to see them.

The title is As I Go. Not Where I Arrived.

The going is still in progress.
Constant re-examination is not a phase. It is the practice.`,
    driveKo: d('1mwW2ZGAR3dTVIC1cVhMLVKo212QpOCIr'),
    driveEn: d('1QFBtoymQs3uFZD86EhHO3zUY36C79qbZ'),
    driveFileKo: d('1mwW2ZGAR3dTVIC1cVhMLVKo212QpOCIr'),
    driveFileEn: d('1QFBtoymQs3uFZD86EhHO3zUY36C79qbZ'),
  },
  {
    id: 18,
    part: 3,
    titleKo: '열심 있는 사람들의 병',
    titleEn: 'The Disease of the Zealous',
    subtitleKo: '열심과 소명을 혼동하는 위험',
    subtitleEn: 'On mistaking passion for calling — and serving for leading',
    digestKo: `선교사 파송 준비 과정에서 하루 종일 심리 검사를 받았습니다.

담당자에게 물었습니다.
"하나님의 부름에 순종하여 예수의 가르침에 따라 일하겠다는 사람들을 이렇게까지 철저히 검증해야 합니까?"

대답이 돌아왔습니다.
"대다수는 말씀하신 대로 순종과 따름이 목적입니다. 그러나 개중에 일부는 자기가 예수인 줄 알고 나가려 하는 이들도 있기 때문에 — 걸러내야 합니다."

열심 있는 사람들이 걸릴 수 있는 병이 있습니다.

소명인 줄 알았는데 열심이고,
따르는 줄 알았는데 이끌고 있고,
섬기는 줄 알았는데 군림하고 있는 것.

나는 어느 쪽입니까?`,
    digestEn: `Around 2002, preparing for our second missionary assignment, I spent a full day undergoing psychological assessments.

I asked the assessor:

"Do you really need to evaluate missionaries this thoroughly — people committed to obeying God's call and following Jesus' teaching?"

The reply:

"Yes. Most are exactly as you describe. But among them, a few go out thinking they are Jesus. Those are the ones we need to screen out."

There is a disease that the zealous can catch.

What you thought was a calling — turns out to be passion.
What you thought was following — turns out to be leading.
What you thought was serving — turns out to be ruling.

Which one am I?`,
    driveKo: d('14_M9bWSmRjLM9iCV53IiJk_dZoWsSNTy'),
    driveEn: d('122ePSzSpLG6OG8ta5Vx4txAHXXVobYNb'),
    driveFileKo: d('14_M9bWSmRjLM9iCV53IiJk_dZoWsSNTy'),
    driveFileEn: d('122ePSzSpLG6OG8ta5Vx4txAHXXVobYNb'),
  },
  {
    id: 19,
    part: 3,
    titleKo: '재난',
    titleEn: 'Disaster',
    subtitleKo: 'TV 카메라가 떠난 후부터 시작되는 것',
    subtitleEn: 'What begins after the TV cameras leave',
    digestKo: `재난 뉴스는 무너진 건물을 보여줍니다. 그리고 길이 치워지면 — 카메라는 떠납니다.

2004년 쓰나미, 일 년 후. 길은 다 치워져 있었습니다. 그러나 어머니는 아직 아이들의 이름을 부르며 해변을 걸었습니다. 어부들은 일 년째 바다에 나가지 못했습니다. 아이들은 파도 소리가 들리면 책상 밑으로 숨었습니다.

세상은 그 재난이 끝났다고 생각했습니다. 그 사람들에게 재난은 끝나지 않았습니다.

재난이란 피해당한 생명들이 자기 능력만으로는 정상 생활로 복귀할 수 없는 상황입니다. 무너진 건물이 아닙니다. 스스로 일어설 수 없는 생명들의 상태입니다.

말라위 북부 LISAP의 여신도들은 HIV/AIDS 환자들 곁에 남았습니다.

"불치병이라는 적 너머, 하나님이 사랑하시는 한 사람을 보았습니다."

카메라는 이것을 잡을 수 없습니다. 그러나 이 시선이 구제 사역의 진짜 출발점입니다.

지금 내 주변에도 카메라가 없는 재난이 있습니다.`,
    digestEn: `Disaster news shows collapsed buildings. When the roads are cleared — the cameras leave.

One year after the 2004 tsunami, I entered the affected area. The roads were clear. The debris was gone.

But a mother still walked the beach, calling her children's names. Fishermen hadn't returned to sea in a year. Children were back in school — but when they heard waves, they hid under their desks.

The world thought the disaster was over. For those people, it had not ended.

A disaster is not a collapsed building. It is the condition of lives that cannot yet stand up on their own.

In northern Malawi, women of a church fellowship stayed beside HIV/AIDS patients when no one else would.

"Beyond the enemy of an incurable disease, we saw a person God loves."

The cameras cannot capture that. But that is where the real work begins.

Right now, near you, there are disasters with no cameras.

The loneliness of an elderly neighbor. The grief of someone still walking the beach.

Real relief begins after the cameras have completely forgotten.`,
    driveKo: d('1vbVdRKGnKebspnMEyY1czP9oBIqj6uvX'),
    driveEn: d('1PenqwDh18_F-3eO2Kqn4Mrz3v0oeVXIh'),
    driveFileKo: d('1vbVdRKGnKebspnMEyY1czP9oBIqj6uvX'),
    driveFileEn: d('1PenqwDh18_F-3eO2Kqn4Mrz3v0oeVXIh'),
  },
  {
    id: 20,
    part: 3,
    titleKo: '내 아들에게 말하는 중이다',
    titleEn: 'I Am Speaking to My Son',
    subtitleKo: '감당할 수 없을 때 — 한 발자국 물러나는 것에 대하여',
    subtitleEn: 'On limits, burnout, and the discipline of stepping back',
    digestKo: `콩고 선교지, 3년째.
음식, 교통, 언어 — 모든 것에 지쳐가고 있었습니다. 현지인들이 공연히 밉게 보이기 시작했습니다.

마침내 하나님께 항의했습니다.
"능력을 주시던지, 아니면 피할 수 있게 해 주십시오."

어느 날 새벽, 뚜렷하게 다가왔습니다.
"내가 네게 시키는 것은 네 안에 있는 내 아들 예수에게 시키는 것이지, 너 박숭현이 감당하라는 것이 아니다."

그 후로 저는 도저히 감당할 수 없는 일이 닥쳐올 때, 한 발자국 물러납니다.

항상 이런 생각과 함께.
"진작 그렇게 했어야 했는데."`,
    digestEn: `Congo, third year of our assignment.

The food, the transportation, the language — everything grated. I missed my sons. I found myself resenting the very people I had come to serve.

I began to protest — to God.

"Why did You send us to this land, only to disappoint these people? Why make us look at them not with love, but with resentment? Either give us the strength — or let us go."

Then one early morning, something came with unusual clarity:

"What I am asking of you is not for you, Simon, to carry alone. I am asking it of my Son Jesus — the one who lives within you. Empty your heart and follow."

Since then, whenever something exceeds what I can handle, I try to step back — one deliberate step.

Even now, years later, I still need that step.

And every time, the same thought follows:

I should have done that sooner.`,
    driveKo: d('15skZ513aok6O6PUxpXtLrd9d84_i1az5'),
    driveEn: d('1lEmZ_B3pu5vbmlgloAx5R0owFrYLskBO'),
    driveFileKo: d('15skZ513aok6O6PUxpXtLrd9d84_i1az5'),
    driveFileEn: d('1lEmZ_B3pu5vbmlgloAx5R0owFrYLskBO'),
  },

  // ─── 4부 · Part 4 — 편견에 갇힌 우리 · Caught Inside Our Own Frames ───

  {
    id: 21,
    part: 4,
    titleKo: '요한이',
    titleEn: 'Yo-han',
    subtitleKo: '다문화 가정 · 첫인상 · 이름',
    subtitleEn: 'Multicultural Family',
    digestKo: `2012년 6월, 서울역. 저는 유모차를 밀고 있었습니다.

한 어르신이 유모차 안을 내려다보며 물었습니다.
"이 아이 튀기예요?"

저는 잠시 멈췄다가 답했습니다.
"네. 그런데 이 아이는 제 손자에요."

어르신은 아무 말 없이 사라졌습니다.

우리는 같은 아이를 보고 있었습니다. 우리는 전혀 다른 것을 보고 있었습니다.

그 어르신이 나쁜 사람이 아니었습니다. 그리고 솔직히 — 요한이가 내 손자가 아니었다면, 나는 무엇을 먼저 보았을까요?

나와 다른 누군가를 처음 만날 때 — 이름을 묻기도 전에, 이야기를 듣기도 전에 — 나는 이미 내 틀 안에 담지 않나요?`,
    digestEn: `June 2012, Seoul Station. I was pushing my grandson's stroller, waiting.

An elderly woman looked down and asked:
"Is that child a twi-gi?"

I paused.
"Yes. But this baby is my grandson."

She disappeared without another word.

To her, Yo-han was a "mixed breed."
To me, Yo-han was Yo-han.

We were looking at the same child. We were seeing completely different things.

She was not a bad person. A perspective formed over a lifetime had simply taken root — naturally, without her choosing it.

But I might not have been any different. If Yo-han had not been my grandson — what would I have seen first?

Before their name. Before their story. Before a single word.

Are we already placing people inside our own frame — without knowing it?`,
    driveKo: d('1hw1jUWNOg3hTwtDoj2lHdax-qeQd7ClM'),
    driveEn: d('1WO9H9vQJhC8pLKbpj2IMGYUIef9WH0MY'),
    driveFileKo: d('1hw1jUWNOg3hTwtDoj2lHdax-qeQd7ClM'),
    driveFileEn: d('1WO9H9vQJhC8pLKbpj2IMGYUIef9WH0MY'),
  },
  {
    id: 22,
    part: 4,
    titleKo: '오늘의 성소수자 차별',
    titleEn: "Today's Discrimination Against Sexual Minorities",
    subtitleKo: '행동(Doing)이 아니라 존재(Being) 때문에 받는 대우에 대하여',
    subtitleEn: 'On being treated not for what you do, but for who you are',
    digestKo: `1960년대, 미국 중서부. 저는 동양인이었습니다.

대학 룸메이트의 결혼식. 들러리로 초대받아 예복까지 준비했습니다.

리허설 디너에서 신부 아버지가 언성을 높였습니다.
"내 딸 결혼에 동양 공산당놈이 들러리를 선다니, 이는 안 되는 일이다."

1969년, 앤드루 영 목사에게 물었습니다.
"인종 차별 금지법이 어떻게 백인이 유색인종을 사랑하게 할 수 있겠습니까?"

"법으로 사랑하게 할 수는 없습니다. 하지만 때리지 못하게 함으로써 정상적인 관계로 이어가는 시간을 벌 수 있습니다."

제 행동(Doing)이 아니라 제 존재(Being) 때문에 받은 대우.

오늘 우리 사회에서 성 소수자들이 받는 고통이 낯설지 않은 이유입니다.`,
    digestEn: `1960s America. I was asked to be a groomsman at my roommate's wedding. During the rehearsal dinner, the bride's father raised his voice across the room:

"Having an Asian Communist in my daughter's wedding? This is unacceptable."

The wedding went smoothly. The couple remains happily married.

In 1969, I asked Reverend Andrew Young — aide to Martin Luther King Jr. — a question:

"How can anti-discrimination laws make white people love people of color?"

His answer:

"You can't make people love each other by law. But the law can stop people from hitting each other. That gives time — time for a normal relationship to grow."

The treatment I received — not for anything I had done, but for who I was — feels similar to what sexual minorities face today.

Being treated differently not for your actions. For your existence.

You cannot legislate love. But you can create the conditions in which it becomes possible.`,
    driveKo: d('1dIXQV8WUJ12UPaK_MADD9yg1iR1Ma_iA'),
    driveEn: d('1g-yYBB1IrddX-E-nyW8iQr-ExBQr-QnC'),
    driveFileKo: d('1dIXQV8WUJ12UPaK_MADD9yg1iR1Ma_iA'),
    driveFileEn: d('1g-yYBB1IrddX-E-nyW8iQr-ExBQr-QnC'),
  },
  {
    id: 23,
    part: 4,
    titleKo: '양과 질, 그리고 숨길 수 없는 진실',
    titleEn: 'Quantity, Quality, and the Truth That Cannot Be Hidden',
    subtitleKo: 'Yes and No',
    subtitleEn: 'Yes and No',
    digestKo: `1983년, 중국 광주. 지금과는 전혀 다른 세상이었습니다. 모든 관광객은 공산당 본부에서 체제 우월성 설명을 들어야 했습니다.

지역당 간부가 말했습니다.
"내가 입은 상의와 등소평 동지의 상의는 모두 같다."

저는 안내원에게 조용히 물었습니다.
"정말 같은가요?"

그가 미소 지으며 답했습니다.
"Yes and No. 모양은 같으나, 소재의 질은 다릅니다."

며칠 후 서울. 중국 아이들이 웃는 사진을 보여주자 한 학생이 놀라며 말했습니다.
"어, 쟤네들도 웃네!!!"

중국에서는 공산주의 이념이 사실을 가렸습니다.
한국에서는 반공 이념이 사실을 가렸습니다.
방향은 달랐습니다. 작동 방식은 같았습니다.

나는 지금 어떤 틀 안에서 세상을 보고 있는가.
그리고 나는 가끔 Yes and No를 말하고 있는가?`,
    digestEn: `Guangzhou, January 1983. Every foreign tourist had to sit through a Communist Party presentation.

The official said: "The jacket I wear and the jacket Comrade Deng Xiaoping wears are exactly the same."

Afterward I asked our guide quietly: "Was it really the same jacket?"

He smiled. "Yes and No. The cut is the same. The quality of the cloth is different."

Back in Seoul, I showed students photographs from the trip. When one saw a picture of Chinese children laughing, he looked up in genuine surprise.

"Wait — they smile too!"

In Guangzhou, ideology had hidden the truth about a jacket.
In Seoul, ideology had hidden the truth about a smile.
The direction was opposite. The mechanism was the same.

What frame am I inside right now?
And am I saying yes and no — or only what the frame allows?`,
    driveKo: d('100qNMYv6gyIdRIC-CqhIm-fxXNrTEFMN'),
    driveEn: d('1BstoWqXlEMdGwsNtz5K7Wzh1_gcnQ4AD'),
    driveFileKo: d('100qNMYv6gyIdRIC-CqhIm-fxXNrTEFMN'),
    driveFileEn: d('1BstoWqXlEMdGwsNtz5K7Wzh1_gcnQ4AD'),
    drivePptKo: p('1mJLohny'),
  },
  {
    id: 24,
    part: 4,
    titleKo: '역사적 사실과 진실',
    titleEn: 'Historical Facts and Truth',
    subtitleKo: '부분적 진실, 전체 진실, 그리고 다른 목소리를 들을 용기',
    subtitleEn: 'On partial truths, whole truth, and the courage to listen',
    digestKo: `히로시마 평화기념관. 같은 장소에 선 미국, 한국, 일본 학생들.

미국: 트루먼의 결정 덕분에 전쟁이 조기에 끝났고, 더 많은 생명이 구해졌다.
한국: 원폭 투하 후 일본의 항복으로 대한민국이 독립을 되찾을 수 있었다.
일본: 수만 명의 목숨을 앗아간 이 비극은 다시는 반복되어서는 안 된다.

세 진술 모두 사실이었습니다. 그런데 그 중 하나도, 혼자서는 전체 진실이 아니었습니다.

그리고 세 이야기 어디에도 등장하지 않는 목소리가 있었습니다. 히로시마와 나가사키에서 함께 죽어간 수만 명의 조선인 강제 징용자들. 그들의 부재 자체가 하나의 사실입니다.

나와 다른 관점을 가진 사람의 이야기를 — 내가 불편할 때도 — 끝까지 들을 수 있는가?`,
    digestEn: `Hiroshima Peace Memorial Museum. Three groups standing in the same place.

American: Thanks to Truman's decision, the war ended early.
Korean: Japan's surrender allowed Korea to regain independence.
Japanese: This tragedy must never be repeated.

A moment of silence.

All three were facts. Not one was wrong. And none of them, alone, was the whole truth.

None of the three accounts mentioned the tens of thousands of Korean forced laborers also killed in Hiroshima and Nagasaki. Their absence from every perspective is itself a kind of fact.

Can I listen — all the way to the end — to someone whose experience differs from mine? Even when it makes me uncomfortable?

What part of the truth do we permanently lose — when we stop trying to find out?`,
    driveKo: d('1Z-LzHPJUiuxBkS1qSFqTQbp4oYAI9cYe'),
    driveEn: d('1DzOJ7WiLNoM5xWTEUaYelg6B-sUa9W6x'),
    driveFileKo: d('1Z-LzHPJUiuxBkS1qSFqTQbp4oYAI9cYe'),
    driveFileEn: d('1DzOJ7WiLNoM5xWTEUaYelg6B-sUa9W6x'),
    drivePptKo: p('1C5Q7uwR'),
  },
  {
    id: 25,
    part: 4,
    titleKo: '모르는 것 없어요',
    titleEn: "There's Nothing We Don't Know",
    subtitleKo: '모르는 것을 모르는 것이 가장 위험한 모름이다',
    subtitleEn: 'On the most dangerous kind of not-knowing',
    digestKo: `2011년, 평양과학기술대학. 북한 정부가 선발한 최우수 대학원생 6명에게 물었습니다.
"여러분이 모르는 것을 말해주면 함께 나누겠습니다."

6명이 머리를 맞대고 의논했습니다.
돌아온 답은 —
"없습니다."

대화를 이어가며 깨달았습니다. 모두 똑같은 것만 배웠고, 독자적인 공부가 허락되지 않았습니다. "무엇을 모르는지 모른다" — 그것이 "모르는 것이 없다"가 되었습니다.

우리가 북한을 떠나기 이틀 전, 김정일이 사망했습니다. 조문에 참석했고 김정은과 악수했습니다. 한국으로 돌아오자 사람들이 물었습니다. "저 통곡이 진심일까요?"

저의 답은 — "그들도 모를 수 있습니다."

모르는 것을 모르는 것이 — 가장 위험한 모름입니다.`,
    digestEn: `Pyongyang University of Science and Technology, 2011.

I asked six elite graduate students to discuss among themselves what they didn't know — so we could study it together.

They put their heads together.

Then they answered.

"Nothing."

I asked again. They were certain.

Through conversation, I understood. They had all been taught exactly the same content. Independent study was not permitted. They had never reached the edge of what they knew.

Not knowing what you don't know had become knowing everything.

Two days before I left, Kim Jong-il died. Back in South Korea, people asked me: was the grief real — or performance?

I told them what I believed:

"They may not know either."

When uniform education continues long enough, the line between sincere and performed disappears.

Is this only happening in Pyongyang?`,
    driveKo: d('1TX-BT1PVS2FtugtFhIKz1bDXDyiyZFsO'),
    driveEn: d('1-dkaITP2H-FDtIlV8nRfmi4VkMmpRzxq'),
    driveFileKo: d('1TX-BT1PVS2FtugtFhIKz1bDXDyiyZFsO'),
    driveFileEn: d('1-dkaITP2H-FDtIlV8nRfmi4VkMmpRzxq'),
    drivePptKo: p('1dyCBh20'),
  },
  {
    id: 26,
    part: 4,
    titleKo: 'N차 방정식',
    titleEn: 'Nth-Degree Equation',
    subtitleKo: '답은 하나가 아닐 수 있습니다',
    subtitleEn: 'Life has more than one answer',
    digestKo: `한 수학도가 말했습니다.

"n차 방정식에 답은 하나가 아니라 n개까지 있다는 것을 알면서도, 점수와 자격증으로 등수가 매겨지는 시스템 안에 살다 보니 삶에 부여된 다양한 기회를 못 본 것 같습니다."

그 말을 꺼내게 한 것은 제가 무심코 던진 한 마디였습니다.

"인생은 이루어낸 목표들의 합(linear)이 아니라, 모든 성공과 실패의 경험들의 융합(organic)이더군요."

대단한 뜻을 담은 말이 아니었습니다.

그런데 그는 제 말에서 제가 담았던 것보다 훨씬 깊은 의미를 찾아냈습니다.

마음을 열고 나누는 대화는 말하는 사람과 듣는 사람 — 둘 다를 성장하게 합니다.

그날 더 많이 성장한 것은 저였습니다.`,
    digestEn: `During a break at a leadership program, I said something unremarkable — just what came to mind:

"My life has not been a straight line toward goals. It has been a weaving together of everything — the successes and the failures. Not linear. Organic."

A mathematics student named Ko OO went quiet for a moment. Then:

"I knew that an nth-degree equation doesn't have just one answer — it has up to n answers. But I've been living as if there is only one right answer. I think I missed a lot of what life was offering."

He found far more in my words than I had put there.

When two people talk openly, both of them can grow.

The one who grew more that day was me.`,
    driveKo: d('1DEojH3Z6uljkDR-Kihfn9MfkSHQFbXah'),
    driveEn: d('1GRKjFfMMJ_d87jiKcvOy7NMMpOc67PhV'),
    driveFileKo: d('1DEojH3Z6uljkDR-Kihfn9MfkSHQFbXah'),
    driveFileEn: d('1GRKjFfMMJ_d87jiKcvOy7NMMpOc67PhV'),
  },
  {
    id: 27,
    part: 4,
    titleKo: '나 하나를 바쳐서',
    titleEn: 'Sacrificing Myself',
    subtitleKo: '이 사건이 사람들의 기억에서 사라지지 않는 불씨가 된다면',
    subtitleEn: 'On a student willing to be beaten for a spark',
    digestKo: `1982년 5월 18일, 서울.
학생들과 진압 경찰 모두 평소보다 긴장되어 있었습니다.

기독 학생회 리더를 붙잡고 말렸습니다.
"길에 나가 충돌한다고 민주화가 빨라진다고 생각하나?"
"오늘 민주주의가 오리라고 생각하지 않습니다. 더 빨라질 것도 기대하지 않습니다."
"그럼 왜 무모한 짓을 하나?"

"오늘은 광주에서 많은 젊은이들이 생명을 바친 날 두 돐입니다. 저희가 잡혀가면, 동네 어르신들이 묻습니다. '쟤네들 왜 저래?' 그러면 누군가 답합니다. '오늘이 광주 사태 난 날이래.'"

잠시 멈추었다가 이어 말했습니다.

"이 사건이 사람들의 기억에서 사라지지 않는 불씨가 된다면 — 저는 기꺼이 구타당하고 잡혀 가렵니다."

저는 말했습니다.
"그래, 네가 존경스럽다."

기억이 사라지지 않는 것 — 그것도 하나의 소명입니다.`,
    digestEn: `May 18, 1982. Seoul. Students and riot police were both coiled.

I found the Christian Association's student leader and tried to talk him out of going into the street.

"Do you really think democracy will come faster if you clash with the police today?"

"I don't expect democracy to arrive today. I don't expect it to come any faster."

"Then why do something reckless that gets you beaten and arrested?"

"Today is the second anniversary of the Gwangju Uprising — when many young people gave their lives.

If we get arrested, the neighbors will ask: Why are those students out again? And someone will answer: Today is the anniversary of Gwangju.

This must not be forgotten. If our being arrested keeps that memory alive — if it becomes a spark — then I am willing to be beaten and arrested."

I had no answer.

"I will go to the police station to get you out — to preserve my self-respect."

Memory that refuses to die — that too is a kind of calling.`,
    driveKo: d('1Kn_IMxNnX2bPQwET5Vc_6P-4OMwEoLq8'),
    driveEn: d('1wLLS0sSa6NiyjRlHi3cTG-5tEEqelNST'),
    driveFileKo: d('1Kn_IMxNnX2bPQwET5Vc_6P-4OMwEoLq8'),
    driveFileEn: d('1wLLS0sSa6NiyjRlHi3cTG-5tEEqelNST'),
  },

  // ─── 5부 · Part 5 — 정의와 치유 · Justice and Healing ───

  {
    id: 28,
    part: 5,
    titleKo: '정의와 자비',
    titleEn: 'Justice and Mercy',
    subtitleKo: '법을 지키는 것과 자비를 베푸는 것은 양립할 수 있는가',
    subtitleEn: 'On law, compassion, and the doors others opened for us',
    digestKo: `1964년, 이민국 직원 두 사람이 직장으로 찾아왔습니다.
"학생 비자로 취업했습니다. 이민법을 두 가지 위반했습니다. 추방 대상입니다."

그때 한 직원이 조용히 다가왔습니다.
"법대로 진행해야 합니다. 하지만 당신의 사정을 이해합니다. 이민 담당 변호사 연락처를 드릴 테니, 상의해 보세요."

그 작은 자비 하나가 — 영주권, 시민권, 가족들의 미래로 이어졌습니다.

수십 년 후, 반이민 정서가 불붙던 시절. 가족 중에도 동조하는 목소리가 있었습니다.
저는 오래된 이야기를 꺼냈습니다.
"지금 너희 모두는 불법 체류자였던 나와의 연고로 미국에 살고 있는 것이야."

법을 지키는 것과 자비를 베푸는 것 — 둘은 정말 양립할 수 없는 것일까요?`,
    digestEn: `1964, Washington D.C. Two immigration officers arrived at my workplace.

"You entered on a student visa and got a job. You've violated two laws. You are subject to deportation."

Then one officer stepped closer.

"We must proceed according to the law. But I understand your situation. Here is the contact information for an immigration attorney."

That one quiet act led to permanent residency, then citizenship, then my siblings' residency.

Years later, during the height of anti-immigrant sentiment, some in my own family echoed those views. I brought up a story I had long forgotten.

"You all live in America because of your connection to me — an undocumented immigrant. You and your children are all descendants of an undocumented immigrant."

The immigration officer upheld the law and showed compassion — in the same moment. They were not opposites.

Why is it so hard to build a relationship with those who suffer first — and find the way forward from there?`,
    driveKo: d('1oa2_tClNXaqeWdRiQY4ZC414QBsHz_ZM'),
    driveEn: d('1IMhtJVBs-m3qGNfOACZMWb5XEUNI9Dti'),
    driveFileKo: d('1oa2_tClNXaqeWdRiQY4ZC414QBsHz_ZM'),
    driveFileEn: d('1IMhtJVBs-m3qGNfOACZMWb5XEUNI9Dti'),
  },
  {
    id: 29,
    part: 5,
    titleKo: '탁실라 기독병원',
    titleEn: 'Taxila Christian Hospital',
    subtitleKo: '악을 선으로 갚는 성숙함에 대하여',
    subtitleEn: 'On repaying evil with good',
    digestKo: `2002년 8월, 파키스탄 탁실라 기독병원 채플에서 나오던 간호사 네 명이 폭탄 테러로 순교했습니다.

3년 후, 대규모 지진이 파키스탄을 강타했습니다. 저는 구호를 돕기 위해 탁실라 병원을 방문했습니다.

자매들을 땅에 묻었던 그 직원들이 — 지금 지진 피해자들을 위해 모금하고 병동을 열고 있었습니다.

피해자 대부분이 무슬림이었습니다.

저는 물었습니다.
"자매들을 죽인 무슬림들에게 어떻게 이런 사랑을 보일 수 있습니까?"

그들이 답했습니다.
"우리는 확신합니다. 자매들을 가장 영광스럽게 기리는 방법은 악을 선으로 갚는 것입니다."

저는 고백했습니다.

"순교한 자매들의 이름으로 무슬림을 이웃으로 받아들이는 이들이 — 이 선교사보다 더 성숙한 예수의 제자입니다."`,
    digestEn: `August 2002. Four nurses walking out of the chapel at Taxila Christian Hospital in Pakistan were killed in a bomb attack.

Three years later, a massive earthquake struck. The same staff who had buried their sisters were fundraising for victims and opening their wards to treat the injured.

Most of those victims were Muslim.

I asked:

"How can you show such love to the Muslims who killed your sisters?"

They answered:

"We are convinced that the most glorious way to honor our sisters is to repay evil with good."

I confessed:

"They — who accept Muslims as neighbors in the name of their fallen sisters — are more mature disciples of Jesus than this missionary."`,
    driveKo: d('10AaOMbpOR97KB8pFr67y72LPgY2eYktB'),
    driveEn: d('1p0b-ap4Xc86XhMizgon5D6irTDjU2pBC'),
    driveFileKo: d('10AaOMbpOR97KB8pFr67y72LPgY2eYktB'),
    driveFileEn: d('1p0b-ap4Xc86XhMizgon5D6irTDjU2pBC'),
    drivePptKo: p('1yZQ8P9i'),
  },
  {
    id: 30,
    part: 5,
    titleKo: '전인치유',
    titleEn: 'Whole Person Healing',
    subtitleKo: '한 생명의 보호로부터 역 한 정거장까지',
    subtitleEn: 'From protecting one life — to one train stop away',
    digestKo: `1955년, 미국 장로교 여선교회가 생일 헌금 전액을 드렸습니다. $208,077.
오사카 빈민 지역에 진료소 하나가 세워졌습니다.

2009년, 그 진료소는 일본 사립 의료 기관 3위가 되어 있었습니다.
이른둥이 치료부터 노인 요양까지. 자택 방문 간호부터 가족과 함께하는 임종실까지.

2005년, 병원 이전 결정이 났습니다. 주민 50,000명이 탄원했습니다.
"이 병원은 우리 지역에 꼭 필요합니다."
시 정부는 특별 매각으로 부지를 내주었습니다.

새 부지는 천민 취급받는 동네였습니다. 주민들은 수치스러워 한 정거장을 더 가서 걸어 돌아오곤 했습니다.

병원이 들어온 후 — 주민들은 이제 자기 역에서 내립니다.

이전 후, 병원은 같은 금액 $208,077을 동남아시아 의료 선교에 헌금했습니다.

전인 치유만이 아니라 온 동네까지 치유했습니다.`,
    digestEn: `1955. The Presbyterian Women's Birthday Offering — the full amount, $208,077 — was donated to establish a medical clinic in a poor district of Osaka.

By 2009, it had become one of Japan's top three private medical institutions. Preterm babies to elderly care. Home nursing to family-centered end-of-life rooms. Japan's first pediatric palliative care unit.

Around 2005, relocation was proposed. More than 50,000 residents petitioned the city: "This hospital is essential. Please let it stay."

The city sold a former waterworks site — without auction. The hospital moved one train stop away.

After the move, it donated the same amount — $208,077 — to medical missions in Southeast Asia.

The new neighborhood was home to slaughterhouse workers — outcasts in Osaka. Even residents were ashamed to live there. They would ride past their own station, Sōzenji, and walk back from the next stop.

After the hospital arrived — they began getting off at Sōzenji.

Not only whole person healing. A whole neighborhood healed.`,
    driveKo: d('1ppL6khnlrm3BtxDPWvsJ3pJacdG4cSP3'),
    driveEn: d('1DJ1RivJ876jChKSAyxscHHskrsQUEy3k'),
    driveFileKo: d('1ppL6khnlrm3BtxDPWvsJ3pJacdG4cSP3'),
    driveFileEn: d('1DJ1RivJ876jChKSAyxscHHskrsQUEy3k'),
    drivePptKo: p('1yZQ8P9i'),
  },
  {
    id: 31,
    part: 5,
    titleKo: 'HIV/AIDS — 누구의 책임인가?',
    titleEn: 'Beyond the Enemy',
    subtitleKo: '불치병 너머의 사람을 본 여인들',
    subtitleEn: 'On seeing the person inside the crisis',
    digestKo: `2000년대 초, 말라위. 약도 없고 돈도 없었습니다. AIDS는 산불처럼 번지고 있었습니다.

교회 여선교회 여인들이 나섰습니다. 환자의 목욕을 도왔습니다. 식사를 챙겼습니다. 고아가 될 아이들에게 기술을 가르쳤습니다.

조사 결과, 여성 감염자 수가 남성보다 3배 많았습니다. 감염 경로가 어찌 되었든 — 책임은 여자에게 돌아갔습니다.

우리는 묻게 됩니다. 문제의 책임을 피해자에게 돌리는 것은 아닌가.

그 여인들은 그 질문 앞에서 — 행동했습니다.

불치병이라는 원수를 넘어, 하나님이 사랑하시는 인간 한 사람을 보았습니다.`,
    digestEn: `Northern Malawi, early 2000s. HIV/AIDS was spreading like wildfire. No medicine. No money.

The women of LISAP — a church women's fellowship — began going to the patients.

They bathed them. They brought meals. They taught skills to the children who would soon be orphans.

Our survey found infected women outnumbered men by three to one. Regardless of how infection occurred — the blame fell on women.

We must ask: are we placing responsibility for a problem onto its victims?

The women of LISAP asked the same question.

Then they got up and went to work.

Beyond the enemy of incurable disease — they saw one human being loved by God.`,
    driveKo: d('1VfsHd8jFciFSvmjJQKcIqTgBfi1dGNDy'),
    driveEn: d('1HrT9tGbz9n9_WP4efk2RxK_EikqjSDer'),
    driveFileKo: d('1VfsHd8jFciFSvmjJQKcIqTgBfi1dGNDy'),
    driveFileEn: d('1HrT9tGbz9n9_WP4efk2RxK_EikqjSDer'),
    drivePptKo: p('1mDUazuA'),
  },
  {
    id: 32,
    part: 5,
    titleKo: '사회정의',
    titleEn: 'Social Justice',
    subtitleKo: '설탕 한 포대 — 거시와 미시, 그리고 지금 내 앞의 이 사람',
    subtitleEn: 'On the macro and the micro — and the sugar sack in between',
    digestKo: `많은 분들이 희생을 감수하며 사회정의를 위해 싸웁니다. 저는 그 싸움을 존경합니다. 그러나 저는 그 싸움을 할 수 없었습니다.

콩고 시골 마을. 남편이 AIDS로 죽으면 부인은 시댁에서 쫓겨났습니다. 갈 곳 없는 여인은 후처가 되거나 — 성매매로 살아가거나. 그것이 다시 AIDS를 퍼뜨렸습니다.

저는 그 악순환을 끊을 수 없었습니다.

그러나 한 가지는 할 수 있었습니다.

설탕 50kg 포대를 — 아무도 모르게, 조용히. 그 여인들이 소매로 팔아 스스로 살아갈 수 있도록.

익명으로 한 것은 편의가 아니었습니다. 창피함 속에서 살아가던 그 여인들의 존엄을 지키는 방식이었습니다.

해결책은 아니었습니다. 그러나 출발점이었습니다.

둘 다 사회정의를 향한 발걸음입니다. 같은 사람이 둘 다 할 수 없어도 — 우리가 함께 할 수 있습니다.

나는 어디에 서 있는가?`,
    digestEn: `Many people fight for social justice at great cost — some giving their lives. I respect that fight. I believe it is necessary.

But I could not do it.

In Congo, when a husband died of AIDS, his wife was driven from the family home. With nowhere to go, she became a second wife — or survived through prostitution. The cycle spread the disease further.

I could not stop AIDS. I could not change the custom.

But one thing I could do.

I bought sacks of sugar — so those women could sell it and support themselves. Through the hospital chaplain. Quietly. So no one knew who gave or who received.

The anonymity was for dignity. Women already living in shame did not need one more moment of exposure.

It was not a solution. But it was a beginning.

Both tracks move toward justice. The same person cannot do both. But we can do both together.

Where are you standing?
And what can you do from exactly there?`,
    driveKo: d('1cpyixwSLd-UBHdl06NT6ycMmY82SEe23'),
    driveEn: d('1xf51YOW8sha_zYIZFaJjZaWTR03Zy5ek'),
    driveFileKo: d('1cpyixwSLd-UBHdl06NT6ycMmY82SEe23'),
    driveFileEn: d('1xf51YOW8sha_zYIZFaJjZaWTR03Zy5ek'),
  },

  // ─── 6부 · Part 6 — 풍성한 삶이란? · What Is a Full Life? ───

  {
    id: 33,
    part: 6,
    titleKo: '선교사의 은퇴, 은퇴 후 선교',
    titleEn: 'Pursuing the Best',
    subtitleKo: '새로운 환경에서의 이웃됨은 반복된다',
    subtitleEn: 'On missionary stages, retirement stages, and the folding table',
    digestKo: `선교사 훈련에서 배웠습니다. 선교지 삶에는 3단계가 있다고.
관광객의 설렘 → 향수와 회의 → 새로운 이웃과의 풍성한 삶.
그리고 선교지를 옮길 때마다 — 처음부터 다시.

은퇴 후에도 같은 과정이 반복되었습니다.
휴가의 해방감 → 공허와 상실 → 시행착오 → 그리고 다시, 이웃.

콩고에서 배운 것을 뉴욕에서 다시 배웠습니다.

지금 저는 AARP TaxAide에서 저소득층과 노년층의 세금 신고를 돕습니다. 관리자 자리는 내려놓았습니다. 이웃의 기쁨과 근심에 동참하는 것 — 그것이 제 기쁨의 통로입니다.

어려움이 크면 기쁨도 큽니다.

새로운 환경마다 이웃됨은 처음부터 다시 시작됩니다. 그리고 그것은 — 끝나지 않습니다.`,
    digestEn: `In consulting, the phone never goes to second place.

Missionary training taught me the stages of missionary life — tourist, homesickness, taking root. The cycle repeated with every new field.

Retirement had its own stages — vacation, loss, trial and error, new roots.

I recognized the territory.

After retiring in New York State, I found TaxAide — free tax help for low-income and elderly residents. I sat across a table from people navigating a system that frightened them. I watched them celebrate their refund like a lottery win — even knowing it was just their own money coming back.

I stepped down from management. Sitting with neighbors through their specific confusion, their specific life — that was something I needed to do myself.

I came looking for the best.

I found it at a folding table in the Hudson Valley, with a neighbor's tax form between us.

The greater the difficulty, the greater the joy.`,
    driveKo: d('177Ze5tioVn1QmJ9gFufxvicANIMCgGKB'),
    driveEn: d('1jK_ltelFN9LkTdy0nxvz8Eh0aXOVbGFF'),
    driveFileKo: d('177Ze5tioVn1QmJ9gFufxvicANIMCgGKB'),
    driveFileEn: d('1jK_ltelFN9LkTdy0nxvz8Eh0aXOVbGFF'),
  },
  {
    id: 34,
    part: 6,
    titleKo: '극대화와 충분함',
    titleEn: "God's Grace Is Sufficient",
    subtitleKo: '40% 작은 삶이 더 풍성했다',
    subtitleEn: 'On what a life of less taught about enough',
    digestKo: `선교사 이전의 내 삶은 언제나 최고를 추구하는 삶이었습니다. 컨설턴트 세계에서 전화는 결코 2등에게 오지 않습니다.

15년 선교 사역 후 은퇴를 앞두고 동료들에게 물었습니다. 편안한 은퇴를 위해 얼마가 필요하냐고.

그들의 답은 제 예상 소득의 두 배였습니다. 그런데 실제로 저는 그들보다 40% 적게 필요했습니다.

숫자가 달라진 것이 아니었습니다. 무엇을 위해 사는가가 달라진 것이었습니다.

콩고에서 화물기 후미에 앉아 이동했습니다. 사파리에서는 만날 수 없는 사람들을 거기서 만났습니다.

이것은 40% 적게 쓰라는 이야기가 아닙니다. 제게 일어난 일에 대한 고백입니다. 사람들과 함께 살다 보니 — 저도 모르는 사이에 — 풍요를 보는 눈이 달라졌습니다.

하나님의 은혜가 참으로 우리에게 족합니다.`,
    digestEn: `Before missionary work, only the best got the call. The phone never rings for second place.

Fifteen years later, approaching retirement, I asked former colleagues what a comfortable retirement would cost.

Their estimates were nearly double what I expected to need.

When I worked out my own budget — it came to 40% less than theirs.

In Congo, I traveled in the rear of cargo planes packed to the rafters. I no longer felt the urge to pay 400% more for business class — not because I had learned to endure discomfort, but because those journeys gave me something business class cannot: the people, the stories, the relationships.

The abundance had not diminished. My understanding of it had changed.

This is not a call to live on less. It is a confession.

Fifteen years alongside people who had less — and were not poor in the ways that matter — changed what I see when I look at enough.

God's grace is truly sufficient for us.`,
    driveKo: d('1HCEi5ZVlVlIGkQwdqspY0ItzyCsGPMrh'),
    driveEn: d('1Inc42aRacEBrz-eAfKMhQIHK1wLN6gPJ'),
    driveFileKo: d('1HCEi5ZVlVlIGkQwdqspY0ItzyCsGPMrh'),
    driveFileEn: d('1Inc42aRacEBrz-eAfKMhQIHK1wLN6gPJ'),
  },
  {
    id: 35,
    part: 6,
    titleKo: '한 사람의 죽음이 무슨 차이를 만드는가',
    titleEn: "What Difference Does One Person's Death Make?",
    subtitleKo: '유산, 겸손, 그리고 세금 신고서',
    subtitleEn: 'On legacy, humility, and tax returns',
    digestKo: `2022년, 남동생을 잃었습니다. 그는 69세였습니다.

한 사람의 죽음이 내 삶에 어떤 차이를 만드는가. 내 죽음이 어떤 의미를 지니길 바라는가.

비석도, 무덤도, 이름 붙은 건물도 원하지 않습니다. 그 대신 —

내가 만난 몇몇 사람의 마음속에 웃음, 성찰, 어떤 이에게는 희망을 남기고 싶습니다.

늘 감사했고, 사랑으로 진실을 말했고, 모든 이웃을 자신과 동등한 존재로 대하려 했던 사람으로.

높은 기준임을 압니다. 거듭 미치지 못합니다. 그러나 포기하지 않습니다.

오늘도 AARP TaxAide에서 노인과 저소득층의 세금 신고서를 작성합니다. 환급금을 복권 당첨처럼 기뻐하는 이들과 함께 기뻐하고, 세금 고지서를 걱정하는 이들의 염려를 함께 짊어집니다.

한 사람의 죽음이 만드는 차이는 — 그 사람이 살아온 매일이 결정합니다.`,
    digestEn: `In 2022, I lost my younger brother. He was 69.

What difference does the death of one person make?
What do I want my death to mean?

I would like everything physical about my life to blend into nature. Like an ant. Like a whale. No monument. No institution. Not even a marked grave.

Instead — something small in the hearts of a few people I have met.

Laughter. Reflection. Hope, for some.

Someone who tried to be grateful. Who told the truth with love. Who treated every neighbor as an equal.

I know this is a high standard. I fall short again and again. But what matters is not giving up.

Today I sit across from people at a folding table — elderly residents, low-income neighbors — helping with their tax returns. I am learning to celebrate their refund the way they celebrate it.

What difference does one person's death make?
The answer is made every day — in the ordinary encounters before it.`,
    driveKo: d('14XCkAg9G34JZR6STCsFs65LoF_qZFs7U'),
    driveEn: d('1nD6uWXyq2q5XuQR_Pn-x_EBeuWlyKBBW'),
    driveFileKo: d('14XCkAg9G34JZR6STCsFs65LoF_qZFs7U'),
    driveFileEn: d('1nD6uWXyq2q5XuQR_Pn-x_EBeuWlyKBBW'),
  },
  {
    id: 36,
    part: 6,
    titleKo: '독자들과 같이 만드는 이야기',
    titleEn: 'A Story Made Together with Readers',
    subtitleKo: '예약된 자리',
    subtitleEn: 'A reserved seat',
    digestKo: `이 자리는 비워두었습니다.

사후기(추가 부록)가 아닙니다. 이 시리즈의 중심입니다. 독자의 이야기가 이 자리를 채울 때 — 이야기 36번은 완성됩니다.

34편의 이야기들을 읽으시는 동안 무언가가 떠오르셨을 것입니다. 비슷한 경험, 비슷한 실수, 비슷한 깨달음. 혹은 전혀 다른 자리에서 본 전혀 다른 이야기.

이야기는 혼자 완성되지 않습니다.

읽고 · 생각하고 · 나누고 · 보내주세요.
QuestionsOnly.Life 에서 의견을 나누거나
QuestionsOnly.Life@gmail.com 으로 보내주세요.

당신의 이야기를 기다립니다.`,
    digestEn: `This space is being held.

Not for an appendix. Not for a postscript.

For the stories forming in your own life — as you read, reflect, and share.

The conversations in your living room. Your small group. Your daily encounters.

They belong here. At the center.

Story 36 is not yet written.
It will be written by you.

Read · Reflect · Share · Send it in
QuestionsOnly.Life
or QuestionsOnly.Life@gmail.com

We are waiting for your story.`,
    driveKo: d('1gAwREYZd7Y3dhL6tp-y3roOOBuMKDjoz'),
    driveEn: d('1tqOs6pVslfLRa4DFKgGOmqMCELOzPQiW'),
    driveFileKo: d('1gAwREYZd7Y3dhL6tp-y3roOOBuMKDjoz'),
    driveFileEn: d('1tqOs6pVslfLRa4DFKgGOmqMCELOzPQiW'),
  },
  {
    id: 37,
    part: 6,
    titleKo: '집 동네에서 나의 선교지를 찾다',
    titleEn: 'Finding My Mission Field at Home',
    subtitleKo: '새로운 환경마다 이웃됨은 처음부터 다시 시작됩니다',
    subtitleEn: 'The work of neighboring never truly ends',
    digestKo: `15년간 콩고, 니제르, 파키스탄, 네팔, 한국.
은퇴하고 돌아왔을 때, 저는 그 장이 끝났다고 생각했습니다.

그런데 집 근처 커뮤니티에서 AARP 세무 봉사를 시작했습니다.

9년째입니다.

고객들이 다음 해를 위해 제 일정을 요청할 때면 — 80세의 제 심장이 예전의 어떤 컨설팅 계약보다 더 두근거립니다.

멀리 있는 이웃과 가까이 있는 이웃. 저는 같은 진실을 두 번 배웠습니다.

"이웃은 지리적인 용어가 아니라 도덕적인 개념입니다." — 랍비 요아킴 프린츠

선교지는 끝나지 않았습니다. 장소가 바뀌었을 뿐입니다.`,
    digestEn: `Congo. Niger. Pakistan. Nepal. Korea.

Fifteen years. One purpose: becoming a neighbor to people whose lives differed vastly from my own.

When I retired from field service, I assumed that chapter had closed.

Then a friend suggested AARP TaxAide. I decided to volunteer.

That was nine years ago.

When clients ask for my schedule so they can find me the following year — it moves my 80-year-old heart more deeply than any consulting engagement once did.

The missionary does not simply give. Both parties are transformed.

"Neighbor is not a geographical term. It is a moral concept."
— Rabbi Joachim Prinz

The mission field did not close.

The location changed.`,
    driveKo: d('1no9VgPF71gM1t0xWiwmt_3SuhQ-ebbX1'),
    driveEn: d('1Y362Bn0BpHBszqmIdyvTWuOpqp-p4udGI10FnAISjtg'),
    driveFileKo: d('1no9VgPF71gM1t0xWiwmt_3SuhQ-ebbX1'),
    driveFileEn: d('1Y362Bn0BpHBszqmIdyvTWuOpqp-p4udGI10FnAISjtg'),
  },
  {
    id: 38,
    part: 6,
    titleKo: '작은 미소',
    titleEn: 'A Small Smile',
    subtitleKo: '이름이 아니라 미소를 남기고 싶다',
    subtitleEn: 'I want to leave a smile, not a name',
    digestKo: `호랑이는 가죽을 남기고, 사람은 이름을 남긴다.

80세가 된 나는 이 속담 앞에서 다른 생각을 합니다.

아버지, 어머니, 남동생. 그리고 이웃의 부고가 자주 들려오는 동네.

이 죽음들이 묻습니다. 한 사람의 죽음은 무엇을 남기는가.

비석도, 무덤도, 이름 붙은 건물도 원하지 않습니다.

그 대신 —
내가 만난 몇몇 사람의 마음속에 웃음, 성찰, 어떤 이에게는 희망을 남기고 싶습니다.

늘 감사했고, 사랑으로 진실을 말했고, 모든 이웃을 자신과 동등한 존재로 대하려 했던 사람으로.

높은 기준임을 압니다. 거듭 미치지 못합니다. 그러나 포기하지 않습니다.

호랑이는 가죽을 남깁니다. 사람은 이름을 남깁니다.

나는 내가 만난 사람들의 마음에 작은 미소 하나를 남기고 싶습니다.
이름이 아니라. 그냥, 아주 작은 미소 하나.`,
    digestEn: `Tigers leave their hides. People leave their names.

At 78, I find myself thinking differently.

My father died at 61. My mother at 77. My younger brother at 69. In the community where I live, a neighbor's passing comes often.

These deaths ask me: what do I want mine to leave behind?

I want every physical trace of my life to dissolve into nature. No gravestone. No monument. No building with my name.

Instead — something small in the hearts of a few people I have met.

Laughter. Reflection. Hope, for some.

Someone who tried to be grateful. Who told the truth with love. Who treated every neighbor as an equal.

I know this is a high standard. I fall short again and again. But what matters is not giving up.

Tigers leave their hides. People leave their names.

I want to leave a small smile in the hearts of the people I have met.

Not a name. Not a monument. Not a building.

Just a very small smile.`,
    driveKo: d('1CwzUEX5-PSMdUyiBr6wypIOCuhPGM_Ag'),
    driveEn: d('1_vofaDacmh1nxIFuH2Iow6AnKReQjCfg'),
    driveFileKo: d('1CwzUEX5-PSMdUyiBr6wypIOCuhPGM_Ag'),
    driveFileEn: d('1_vofaDacmh1nxIFuH2Iow6AnKReQjCfg'),
  },
]

// Part labels
export const partLabels: Record<number, { ko: string; en: string }> = {
  1: { ko: '1부 — 받고, 자라고, 베풀고', en: 'Part 1 — Receiving, Growing, Giving' },
  2: { ko: '2부 — 이웃으로 산다는 것', en: 'Part 2 — On Living as a Neighbor' },
  3: { ko: '3부 — 배우며 실수하며', en: 'Part 3 — Learning Through Mistakes' },
  4: { ko: '4부 — 편견에 갇힌 우리', en: 'Part 4 — Caught Inside Our Own Frames' },
  5: { ko: '5부 — 정의와 치유', en: 'Part 5 — Justice and Healing' },
  6: { ko: '6부 — 풍성한 삶이란?', en: 'Part 6 — What Is a Full Life?' },
}

// Read Me First links
export const readMeFirst = {
  ko: 'https://docs.google.com/document/d/1nqi3Ms9JqXTuMPLAK7QzkmpLNTg-sS3V/edit',
  en: 'https://docs.google.com/document/d/1bhCEx6M7Y9_9Uiql62jpugu_B0JiM2SP/edit',
}
