/*
  WEST150 MUSIC — 가사 데이터
  -----------------------------------------
  트랙 ID를 key로, 가사 전체를 value로 넣습니다.
  index.html의 각 track-item 버튼에는 data-track-id="키이름" 만 넣으면 됩니다.

  새 곡을 추가할 때:
  1) 아래 LYRICS 객체에 새 key: `가사...` 를 추가
  2) index.html의 새 track-item 버튼에 data-track-id="그 key"를 넣기
  (백틱 ` ` 로 감싸므로 따옴표나 줄바꿈을 신경쓰지 않고 그대로 붙여넣으면 됩니다.
   단, 가사 안에 백틱(`)이나 ${ } 는 사용하지 마세요.)
*/

const LYRICS = {
  "every": `[Verse 1]
Woke up breathing, that's a reason right there
숨을 쉬며 깨어났다는 것, 그것만으로도 충분한 이유예요
Every heartbeat is a reason to declare
모든 심장 박동은 선포할 이유가 되죠
Didn't have to open up my eyes today
오늘 눈을 뜨지 못했을 수도 있었지만
But I did, so I'm giving all the praise
눈을 떴기에, 전 모든 찬양을 올려 드립니다

[Chorus 1]
Every hour, every minute, every second, praise Him
매 시간, 매 분, 매 초마다 그분을 찬양해요
Every hour, every minute, every second, praise Him
매 시간, 매 분, 매 초마다 그분을 찬양해요
Can't stop, won't stop, got to praise Him
멈출 수 없고, 멈추지 않을 거예요, 그분을 찬양해야만 해요
Can't stop, won't stop, got to praise Him
멈출 수 없고, 멈추지 않을 거예요, 그분을 찬양해야만 해요
Praise Him, praise Him
그분을 찬양해요, 찬양해요
Every second, every second
매 초마다, 매 초마다

[Verse 2]
Clock keep ticking but I'm counting blessings, not time
시계는 계속 흐르지만, 전 시간이 아니라 축복을 세고 있어요
Every second passing, every second is a sign
지나가는 모든 순간, 매 초가 다 주님의 징표이죠
Didn't earn this breath, didn't earn this day
내가 잘해서 얻은 숨결도, 내가 당연히 번 하루도 아니지만
But I'm gonna use it all to give it all away
이 모든 숨을 그분께 전부 돌려드리는 데 사용할 거예요

[Chorus 2]
Every hour, every minute, every second, praise Him
매 시간, 매 분, 매 초마다 그분을 찬양해요
Every hour, every minute, every second, praise Him
매 시간, 매 분, 매 초마다 그분을 찬양해요
Can't stop, won't stop, got to praise Him
멈출 수 없고, 멈추지 않을 거예요, 그분을 찬양해야만 해요
Can't stop, won't stop, got to praise Him
멈출 수 없고, 멈추지 않을 거예요, 그분을 찬양해야만 해요
Praise Him, praise Him
그분을 찬양해요, 찬양해요
Every second...
매 초마다... (이어서 피아노 연주 파트)

[Bridge & Outro]
Every hour, every minute, every second that I breathe
내가 숨 쉬는 매 시간, 매 분, 매 초마다
Every hour, every minute, every second, praise Him, praise Him
매 시간, 매 분, 매 초마다 그분을 찬양해요, 찬양해요
No stopping, no stopping, praise Him, praise Him, praise Him, praise Him
멈춤은 없어요, 절대 멈추지 않아요, 그분을 찬양해요, 찬양해요
No stopping, no stopping, praise Him, praise Him, praise Him, praise Him
멈춤은 없어요, 절대 멈추지 않아요, 그분을 찬양해요, 찬양해요
Every hour, every minute, every second, praise Him
매 시간, 매 분, 매 초마다 그분을 찬양해요
Every hour, every minute, every second, praise Him
매 시간, 매 분, 매 초마다 그분을 찬양해요
Can't stop, won't stop, got to praise Him
멈출 수 없고, 멈추지 않을 거예요, 그분을 찬양해야만 해요
Can't stop, won't stop, got to praise Him
멈출 수 없고, 멈추지 않을 거예요, 그분을 찬양해야만 해요
Praise Him, praise Him
그분을 찬양해요, 찬양해요
Every second, every second
매 초마다, 매 초마다`,

  "he-ascended": `[Intro]
Higher, higher, higher
더 높이, 더 높이, 더 높이
He has ascended
그분이 올라가셨네
Oh...
Higher...
더 높이...

[Verse 1]
I watch Him standing on that mountainside
산 중턱에 서 계신 그분을 바라보네
Clouds rolled in and lifted Him up high
구름이 밀려와 그분을 높이 들어 올렸지
Forty days He walked among us here
40일 동안 우리 곁을 걸으셨던 그분
Now He's going home, no need to fear
이제 집으로 돌아가시니, 두려워할 필요 없네

Now His hands are raised in blessing over me
이제 나를 축복하시려 그분의 두 손이 들려있고
Rising higher than the eye can see
눈에 보이지 않을 만큼 더 높이 오르시네
Disciples stood there watching in the sky
제자들은 하늘을 바라보며 서 있었지
He's not gone forever, He's on high
영원히 떠나신 게 아니라, 저 높은 곳에 계신다네

[Chorus 1]
He ascended! Ascended!
그분이 올라가셨네! 올라가셨네!
He's gone up high
저 높은 곳으로 올라가셨네
Clouds received Him
구름이 그분을 맞이했고
He's alive on high
그분은 저 높은 곳에 살아 계시네

He ascended! Ascended!
그분이 올라가셨네! 올라가셨네!
He's gone up high
저 높은 곳으로 올라가셨네
Seated in His glory
그분의 영광 중에 앉으셨네
He's alive on high
그분은 저 높은 곳에 살아 계시네
Gone up to glory!
영광으로 올라가셨네!

[Refrain]
He ascended! What an awesome story!
그분이 올라가셨네! 얼마나 놀라운 이야기인가!
He ascended!
그분이 올라가셨네!

[Verse 2]
Early in the morning angels stood and said
이른 아침, 천사들이 서서 말했지
"Why look up? He's risen from the dead!"
"어찌하여 위를 보느냐? 그분은 죽은 자 가운데서 살아나셨다!"
He will come again the way He went away
그분은 떠나가신 그 모습 그대로 다시 오시리라
Watching for that glorious day!
그 영광스러운 날을 기다리며 바라보네!

[Chorus 2]
He ascended! Ascended!
그분이 올라가셨네! 올라가셨네!
He's gone up high
저 높은 곳으로 올라가셨네
Clouds received Him
구름이 그분을 맞이했고
He's alive on high
그분은 저 높은 곳에 살아 계시네

We ascended! Ascended!
우리가 올라갔네! 올라갔네! (영적으로 동참함)
He's gone up high
저 높은 곳으로 올라가셨네
Seated in His glory
그분의 영광 중에 앉으셨네
He's alive on high
그분은 저 높은 곳에 살아 계시네
Gone up to glory!
영광으로 올라가셨네!

[Refrain 2]
He ascended! What an awesome story!
그분이 올라가셨네! 얼마나 놀라운 이야기인가!
He ascended!
그분이 올라가셨네!

[Bridge / Climax]
(웅장한 오케스트라와 피아노 연주 파트)

Can you see the clouds departing way up high?
저 높은 곳에서 구름이 걷히는 것이 보이나요?
Watch the King of glory rising through the air
영광의 왕께서 공중으로 떠오르시는 모습을 보라
Higher, higher and higher
더 높이, 더 높고 높이
He's seated on the throne
그분이 보좌에 앉으셨네
We are never left alone!
우리는 결코 혼자가 아니네!

[Outro - Final Chorus]
He ascended! Ascended!
그분이 올라가셨네! 올라가셨네!
He's gone up high
저 높은 곳으로 올라가셨네
Clouds received Him
구름이 그분을 맞이했고
He's alive on high
그분은 저 높은 곳에 살아 계시네

He ascended! Ascended!
그분이 올라가셨네! 올라가셨네!
He's gone up high
저 높은 곳으로 올라가셨네
Seated in His glory
그분의 영광 중에 앉으셨네
He's alive on high
그분은 저 높은 곳에 살아 계시네

Gone up to glory! He ascended!
영광으로 올라가셨네! 그분이 올라가셨네!
Oh, what an awesome story!
오, 얼마나 놀라운 이야기인가!
Gone up to glory! He ascended!
영광으로 올라가셨네! 그분이 올라가셨네!
Seated in His glory!
그분의 영광 중에 앉으셨네!
He's alive on high!
그분은 저 높은 곳에 살아 계시네!
Praise Him!
그분을 찬양하라!
He has ascended!
그분이 올라가셨네!`
};
