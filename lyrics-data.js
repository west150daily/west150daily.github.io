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

/*
  WEST150 MUSIC — 가사 데이터
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
그분이 올라가셨네!`,

  "he-is-risen": `[Intro]
They thought it was over
그들은 모든 것이 끝났다고 생각했지
But He is risen!
하지만 그분이 살아나셨네!
Hallelujah
할렐루야

[Verse 1]
I stood at the tomb where they laid Him down
그들이 그분을 뉘어 둔 무덤 앞에 내가 섰을 때
Stone rolled away, nobody found
돌문은 굴려져 있었고, 아무도 찾을 수 없었네
Angels were shining, the morning broke clear
천사들은 빛나고 있었고, 아침은 선명하게 밝아왔지
Death lost its sting, and I felt no fear
죽음은 그 독침을 잃었고, 내겐 아무런 두려움도 없었네

[Verse 2]
Now the grave is empty, the story's told
이제 무덤은 비었고, 그 이야기가 전해지네
He walked out victorious, unshaken and bold
그분은 승리자로, 흔들림 없이 담대하게 걸어 나오셨네
What they thought was over was just the start
그들이 끝이라 생각했던 것은 단지 시작일 뿐이었고
Life beyond dying, He healed my heart
죽음을 넘어선 생명으로, 그분이 내 마음을 고치셨네

[Chorus 1]
He is risen! He is risen!
그분이 살아나셨네! 그분이 살아나셨네!
Hallelujah
할렐루야
Death could not hold Him
죽음은 그분을 붙잡아둘 수 없었네
He's alive today!
그분은 오늘 살아 계시네!

He is risen! He is risen!
그분이 살아나셨네! 그분이 살아나셨네!
Hallelujah
할렐루야
Rolled the stone away
돌문을 굴려 열어젖히셨네
He's alive today!
그분은 오늘 살아 계시네!

[Post-Chorus 1]
Up from the grave! (He is risen)
무덤에서 일어나셨네! (그분이 살아나셨네)
Nothing's the same! (He is risen)
모든 것이 달라졌네! (그분이 살아나셨네)
Early in the morning, women ran to see
이른 아침, 여인들이 보려고 달려갔었지
Empty tomb was waiting, set my spirit free
비어있는 무덤이 기다리고 있었고, 내 영혼을 자유케 했네

Step by step, disciples couldn't believe their eyes
한 걸음씩 다가오니, 제자들은 자신들의 눈을 믿을 수 없었지
He appeared among them, He's alive!
그분은 그들 가운데 나타나셨네, 그분은 살아 계시네!
He is risen!
그분이 살아나셨네!

[Chorus 2]
He is risen! He is risen!
그분이 살아나셨네! 그분이 살아나셨네!
Hallelujah
할렐루야
Death could not hold Him
죽음은 그분을 붙잡아둘 수 없었네
He's alive today!
그분은 오늘 살아 계시네!

He is risen! He is risen!
그분이 살아나셨네! 그분이 살아나셨네!
Hallelujah
할렐루야
Rolled the stone away
돌문을 굴려 열어젖히셨네
He's alive today!
그분은 오늘 살아 계시네!

[Post-Chorus 2]
Up from the grave! (He is risen)
무덤에서 일어나셨네! (그분이 살아나셨네)
Nothing's the same! (He is risen)
모든 것이 달라졌네! (그분이 살아나셨네)

[Bridge / Climax]
Can you feel the power breaking through the tomb?
무덤을 뚫고 나오는 그 권능이 느껴지나요?
(Yes, we feel the power)
네, 우리는 그 권능을 느껴요
Watch the darkness running from the empty room!
비어있는 방에서 어둠이 도망치는 것을 보라!
Hallelujah!
할렐루야!
Higher and higher, hear the angels sing
더 높이, 더 높이, 천사들의 노래를 들으라
We serve a risen King!
우리는 부활하신 왕을 섬기네!

[Outro - Final Chorus]
He is risen! He is risen!
그분이 살아나셨네! 그분이 살아나셨네!
Hallelujah
할렐루야
Death could not hold Him
죽음은 그분을 붙잡아둘 수 없었네
He's alive today!
그분은 오늘 살아 계시네!

He is risen! He is risen!
그분이 살아나셨네! 그분이 살아나셨네!
Hallelujah
할렐루야
Rolled the stone away
돌문을 굴려 열어젖히셨네
He's alive today!
그분은 오늘 살아 계시네!

Up from the grave! (He is risen)
무덤에서 일어나셨네! (그분이 살아나셨네)
Nothing's the same! (He is risen)
모든 것이 달라졌네! (그분이 살아나셨네)
Up from the grave! (He is risen)
무덤에서 일어나셨네! (그분이 살아나셨네)
Shining in His glory, come on praise!
그분의 영광 중에 빛나시니, 다 함께 찬양해!

Praise Him!
그분을 찬양하라!
He is risen!
그분이 살아나셨네!`,

  "redeemed": `[Intro]
Oh...
Yeah, I've been redeemed
네, 난 구속(구원)받았네

[Verse 1]
I was lost in a story I couldn't rewrite
난 스스로 다시 쓸 수 없는 이야기 속에 길을 잃었었고
Bound to a past that I couldn't fight
맞서 싸울 수 없는 과거에 얽매여 있었지
Then the chains fell off and the debt was paid
그때 사슬이 풀리고 모든 죗값이 치러졌네
A price too high, but You gave it all away
너무나 비싼 대가였지만, 주님은 전부 내어주셨네

Now I'm not who I used to be no more
이제 난 더 이상 예전의 내가 아니라네
Washed and made new, walking through that door
깨끗이 씻겨 새롭게 되어, 그 문을 걸어 지나가네
Grave couldn't hold me, sin lost its grip
무덤도 날 붙잡지 못했고, 죄도 그 움켜쥔 힘을 잃었네
All by a love that I don't deserve, no
이 모든 게 내가 감당할 수 없는 사랑 덕분이라네

[Chorus 1]
Redeemed!
구원받았네!
Redeemed, I've been redeemed
구원받았네, 난 구속받았네
Washed by the blood, made clean, set free
그 보혈로 씻겨 깨끗해지고 자유케 되었네
Redeemed!
구원받았네!
Redeemed, I've been redeemed
구원받았네, 난 구속받았네
Once I was lost, now found, that's me
한때 길을 잃었으나 이제 찾았으니, 그게 바로 나일세
All by a love
이 모든 게 그 사랑 덕분이네
Redeemed
구원받았네
All by a love
이 모든 게 그 사랑 덕분이네

[Verse 2]
Early in the morning I remember where I've been
이른 아침, 내가 어디에 있었는지 기억하네
Traded all my shame for a brand new skin
내 모든 수치를 완전히 새로운 삶으로 맞바꾸었지
Step by step, I'm walking in the light You made
한 걸음씩, 주님이 만드신 빛 가운데로 걸어가네
No condemnation, heavy debt to pay
더 이상 정죄함도, 치러야 할 무거운 빚도 없네

[Chorus 2]
Redeemed!
구원받았네!
Redeemed, I've been redeemed
구원받았네, 난 구속받았네
Washed by the blood, made clean, set free
그 보혈로 씻겨 깨끗해지고 자유케 되었네
Redeemed!
구원받았네!
Redeemed, I've been redeemed
구원받았네, 난 구속받았네
Once I was lost, now found, that's me
한때 길을 잃었으나 이제 찾았으니, 그게 바로 나일세
All by a love
이 모든 게 그 사랑 덕분이네
Redeemed
구원받았네
All by a love
이 모든 게 그 사랑 덕분이네

[Bridge / Climax]
Can you feel the weight just falling off tonight?
오늘 밤 그 무거운 짐이 툭 떨어져 나가는 게 느껴지나요?
(Yes, we feel it falling)
가벼워지는 게 느껴져요
Watch the old become the new, watch it come alive!
옛것이 새것이 되고, 다시 살아나는 것을 보라!
(Got to follow)
따라가야 해요
Higher and higher, I'm walking free
더 높이, 더 높이, 난 자유롭게 걸어가네
You are the reason why I am, why I am...
주님이 바로 내 존재의 이유, 내 존재의 이유라네...

[Outro - Final Chorus]
Redeemed!
구원받았네!
Redeemed, I've been redeemed
구원받았네, 난 구속받았네
Washed by the blood, made clean, set free
그 보혈로 씻겨 깨끗해지고 자유케 되었네
Redeemed!
구원받았네!
Redeemed, I've been redeemed
구원받았네, 난 구속받았네
Once I was lost, now found, that's me
한때 길을 잃었으나 이제 찾았으니, 그게 바로 나일세

Now I am alive
이제 난 살아있네
Redeemed
구원받았네
Now I am alive
이제 난 살아있네
Redeemed
구원받았네
Now I am alive
이제 난 살아있네
Every single day, shining His glory from up above
매일 매순간, 저 위로부터 오는 그분의 영광을 비추며
Praise Him
그분을 찬양하라
Oh, I've been redeemed
오, 난 구속받았네`,
};
