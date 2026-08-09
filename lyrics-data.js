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
  "every": `Woke up breathing, that's a reason right there
숨을 쉬며 깨어났다는 것, 그것만으로도 충분한 이유예요
Every heartbeat is a reason to declare
모든 심장 박동은 선포할 이유가 되죠
Didn't have to open up my eyes today
오늘 눈을 뜨지 못했을 수도 있었지만
But I did, so I'm giving all the praise
눈을 떴기에, 전 모든 찬양을 올려 드립니다

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

Clock keep ticking but I'm counting blessings, not time
시계는 계속 흐르지만, 전 시간이 아니라 축복을 세고 있어요
Every second passing, every second is a sign
지나가는 모든 순간, 매 초가 다 주님의 징표이죠
Didn't earn this breath, didn't earn this day
내가 잘해서 얻은 숨결도, 내가 당연히 번 하루도 아니지만
But I'm gonna use it all to give it all away
이 모든 숨을 그분께 전부 돌려드리는 데 사용할 거예요

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
매 초마다... 

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

  "he-ascended": `Higher, higher, higher
더 높이, 더 높이, 더 높이
He has ascended
그분이 올라가셨네
Oh...
Higher...
더 높이...

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

He ascended! What an awesome story!
그분이 올라가셨네! 얼마나 놀라운 이야기인가!
He ascended!
그분이 올라가셨네!

Early in the morning angels stood and said
이른 아침, 천사들이 서서 말했지
"Why look up? He's risen from the dead!"
"어찌하여 위를 보느냐? 그분은 죽은 자 가운데서 살아나셨다!"
He will come again the way He went away
그분은 떠나가신 그 모습 그대로 다시 오시리라
Watching for that glorious day!
그 영광스러운 날을 기다리며 바라보네!

He ascended! Ascended!
그분이 올라가셨네! 올라가셨네!
He's gone up high
저 높은 곳으로 올라가셨네
Clouds received Him
구름이 그분을 맞이했고
He's alive on high
그분은 저 높은 곳에 살아 계시네

We ascended! Ascended!
우리가 올라갔네! 올라갔네!
He's gone up high
저 높은 곳으로 올라가셨네
Seated in His glory
그분의 영광 중에 앉으셨네
He's alive on high
그분은 저 높은 곳에 살아 계시네
Gone up to glory!
영광으로 올라가셨네!

He ascended! What an awesome story!
그분이 올라가셨네! 얼마나 놀라운 이야기인가!
He ascended!
그분이 올라가셨네!

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

  "he-is-risen": `They thought it was over
그들은 모든 것이 끝났다고 생각했지
But He is risen!
하지만 그분이 살아나셨네!
Hallelujah
할렐루야

I stood at the tomb where they laid Him down
그들이 그분을 뉘어 둔 무덤 앞에 내가 섰을 때
Stone rolled away, nobody found
돌문은 굴려져 있었고, 아무도 찾을 수 없었네
Angels were shining, the morning broke clear
천사들은 빛나고 있었고, 아침은 선명하게 밝아왔지
Death lost its sting, and I felt no fear
죽음은 그 독침을 잃었고, 내겐 아무런 두려움도 없었네

Now the grave is empty, the story's told
이제 무덤은 비었고, 그 이야기가 전해지네
He walked out victorious, unshaken and bold
그분은 승리자로, 흔들림 없이 담대하게 걸어 나오셨네
What they thought was over was just the start
그들이 끝이라 생각했던 것은 단지 시작일 뿐이었고
Life beyond dying, He healed my heart
죽음을 넘어선 생명으로, 그분이 내 마음을 고치셨네

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

  "redeemed": `Oh...
Yeah, I've been redeemed
네, 난 구속(구원)받았네

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

Early in the morning I remember where I've been
이른 아침, 내가 어디에 있었는지 기억하네
Traded all my shame for a brand new skin
내 모든 수치를 완전히 새로운 삶으로 맞바꾸었지
Step by step, I'm walking in the light You made
한 걸음씩, 주님이 만드신 빛 가운데로 걸어가네
No condemnation, heavy debt to pay
더 이상 정죄함도, 치러야 할 무거운 빚도 없네

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

  "song-01": `[THE LIGHTS IS COMING]

I’ve been walking through the dark so long
나는 너무나 오랫동안 어둠 속을 걸어왔었지
Couldn't see which way was right or wrong
어느 길이 맞고 그른지조차 분간할 수 없었어
But there’s something on the edge of night
하지만 이 어두운 밤의 가장자리 너머로 무언가가
Something soft and golden coming into sight
부드럽고 황금빛을 띤 무언가가 시야에 들어오고 있네

Can you feel it getting closer?
그것이 점점 더 가까워지는 게 느껴지니?
Can you feel it drawing near?
더욱 가까이 다가오고 있는 게 느껴져?

The light is coming, coming for me
빛이 오고 있어, 오직 나를 위해 다가오고 있어
Breaking through the dark, setting me free
어둠을 뚫고 나와, 나를 자유롭게 하네
The light is coming closer every day
그 빛은 매일매일 더 가까이 다가와
Chasing every shadow, chasing it away
그 모든 그림자들을 쫓아내고, 멀리 날려버리네

Used to run from morning, used to hide my face
아침이 오는 것으로부터 도망치곤 했고, 내 얼굴을 숨기곤 했었지
Now I’m standing open, standing in this place
하지만 이제 나는 당당히 마음을 열고, 이 자리에 서 있네
Every step I’m taking, every breath I take
내가 내딛는 모든 걸음과, 내가 내쉬는 모든 숨결마다
I can feel it shining, feel my heart awake
그 빛이 찬란히 빛나는 게 느껴져, 내 심장이 다시 깨어나는 게 느껴져

The light is coming, coming for me
빛이 오고 있어, 오직 나를 위해 다가오고 있어
Breaking through the dark, setting me free
어둠을 뚫고 나와, 나를 자유롭게 하네
The light is coming closer every day
그 빛은 매일매일 더 가까이 다가와
Chasing every shadow, chasing it away
그 모든 그림자들을 쫓아내고, 멀리 날려버리네

No more hiding, no more fear!
더 이상 숨는 것도, 그 어떤 두려움도 없어!
I can see it, I can feel it here!
내 눈으로 똑똑히 보고, 바로 여기 내 안에서 느껴지니까!
The light is coming...
그 빛이 마침내 오고 있어...
And it’s already here!
그리고 이미 이곳에 도착했어!

The light is coming!
빛이 오고 있어!
Coming for me!
오직 나를 위해 다가오고 있어!
Breaking through the dark, setting me free!
이 짙은 어둠을 깨부수고, 나를 온전히 자유롭게 하네!
The light is coming closer every day!
그 빛은 매일매일 더 가까이 다가와!
Chasing every shadow, chasing it away!
그 모든 그림자들을 단숨에 쫓아내고, 멀리 날려버리네!

Ah, yeah! I can see it!
아, 그래요! 내 눈에 보여요!
The light is here!
그 빛이 바로 여기에 있습니다!`,

  "song-02": `[LORD I'M LOST]

Walking through a maze I can't explain
설명할 수 없는 거대한 미로 속을 헤매어 걷고 있네
Every road I take just leaves me back again
선택하는 모든 길마다 나를 그저 제자리로 되돌려 놓을 뿐인데
Searching for a light that I can't seem to find
아무리 찾아도 보이지 않는 한 줄기 빛을 찾아 헤매며
Lost inside the corners of my mind
내 마음속 깊은 구석진 곳에서 길을 잃어버렸네

Can't tell up from down no more
이제는 어디가 위이고 어디가 아래인지조차 분간할 수 없고
Don't even know what I'm looking for
내가 지금 무엇을 찾고 있는지조차 알지 못하겠네
Lord, I'm lost!
주님, 저는 완전히 길을 잃었습니다!

Completely lost without a clue
아무런 실마리도 없이 완전히 미아가 되어버렸어요
Somebody tell me what I'm supposed to do
내가 이제 무엇을 해야 하는지 누군가 제발 말해줘요
Feel the darkness closing in on me
나를 향해 사방에서 숨 막히게 조여오는 이 어둠이 느껴지니
Lord, where are you?
주님, 당신은 도대체 어디에 계시나요?
Where could you be?
대체 어디에 계시는 건가요?

I used to know the way
예전에는 내가 갈 길을 잘 알고 있었고
I used to feel so sure
모든 것에 그토록 확신을 가지곤 했었는데
Now every door I try just shows me more
이제는 열어보려 애쓰는 문마다 나를 더 큰 혼란으로 이끄네
More confusion, more of this disguise
더 커져만 가는 혼란과, 나를 감싸는 이 거짓된 가면들 속에서
Can't recognize the man behind my eyes
내 거울 속에 비친 내 눈 뒤의 내 모습조차 이젠 알아볼 수가 없네

Can't tell up from down no more
이제는 어디가 위이고 어디가 아래인지조차 분간할 수 없고
Don't even know what I'm looking for
내가 지금 무엇을 찾고 있는지조차 알지 못하겠네
Lord, I'm lost!
주님, 저는 완전히 길을 잃었습니다!

Completely lost without a clue
아무런 실마리도 없이 완전히 미아가 되어버렸어요
Somebody tell me what I'm supposed to do
내가 이제 무엇을 해야 하는지 누군가 제발 말해줘요
Feel the darkness closing in on me
나를 향해 사방에서 숨 막히게 조여오는 이 어둠이 느껴지니
Lord, where are you?
주님, 당신은 도대체 어디에 계시나요?
Where could you be?
대체 어디에 계시는 건가요?

Is where I have to go
여기가 진정 내가 가야만 하는 길인가요
This is how I'm gonna know
이것이 참으로 내가 깨닫게 될 방법인가요
That you are never letting go of me!
당신이 결코 나를 놓지 않으실 거라는 사실을 말이죠!
Lord, I'm lost!
주님, 저는 길을 잃었습니다!

Completely lost without a clue!
그 어떤 실마리도 없이 완전히 미아가 되어버렸어요!
Somebody tell me what I'm supposed to do!
내가 이제 도대체 무엇을 해야 하는지 누군가 제발 좀 말해줘요!
Feel the darkness closing in on me!
나를 향해 숨 막히게 사방에서 압박해 오는 이 어둠이 느껴지니!
Lord, where are you?!
주님, 대체 어디에 계시나요?!
Where could you be?!
어디에 계시는 건가요?!

(콰이어와 솔로 보컬의 강력한 주고받기 파트)
Hear that, yeah! (이 부르짖음을 들으소서, 그래요!)
Find me now! (지금 나를 찾아내어 구원하소서!)
Hear that, yeah! (내 애원을 들으소서!)
Find me now! (지금 어둠 속의 나를 찾아내소서!)
Hear that, yeah! (이 목소리를 들으소서!)
Find me now! (헤매고 있는 나를 지금 찾아주소서!)
Hear that, yeah! (지금 당장!)
Find me now... (나를 찾아내어 건져주소서...)`,

  "song-03": `[TROUBLE DON'T LAST ALWAYS]
Oh, yeah...
오, 그래요...
Listen to me now
이제 내 말을 들어보세요

I’ve been down so low
나는 너무나 깊은 바닥까지 내려갔었죠
I thought I’d never rise
다시는 일어서지 못할 줄 알았어요
Seen so many tears
참으로 수많은 눈물이
Fall from my eyes
내 두 눈에서 흘러내리는 걸 보았죠

Carrying burdens
그 누구도 보지 못하는
That nobody could see
무거운 짐들을 홀로 짊어진 채
Wondered if the Lord had
주님께서 혹시 나를
Forgotten me
잊으신 건 아닐까 생각하기도 했어요

But trouble don't last always
하지만 고난은 영원하지 않아요
(No, it don't)
(그럼요, 영원하지 않죠)
Storm clouds gather
폭풍우 먹구름이 몰려와도
But they always break
결국엔 다 걷히기 마련이니까요

Every valley
내가 걸어와야 했던
That I’ve had to walk through
그 모든 어두운 골짜기들이
Made me stronger
나를 더 강하게 만들어 주었죠
Than I ever knew
내가 알았던 것보다 훨씬 더요

Trouble don't last always
고난은 영원하지 않아요
(No, it don't)
(그럼요, 영원하지 않죠)
Joy’s gonna come in the morning light
아침 햇살과 함께 기쁨이 찾아올 테니까요

Trouble don't last always
고난은 영원하지 않아요
(No, it don't)
(결코 영원하지 않죠)
He’s gonna turn my dark into light
그분께서 나의 어둠을 빛으로 바꾸어 주실 겁니다

Hold on a little longer
조금만 더 버텨내세요, 조금만 더요
He’s got something better
그분께서는 나를 위해
For me
더 좋은 것을 예비해 두셨으니까요

They said I wouldn't make it
사람들은 내가 해내지 못할 거라 말했죠
Said I’d surely fall
내가 결국 무너질 거라고 말이에요
Talked about me
내가 마치 아무런 믿음도
Like I had no faith at all
가지지 못한 사람인 것처럼 수군댔어요

But I kept on praying
하지만 나는 계속해서 기도했어요
Through the lonely night
그 외롭고 쓸쓸한 밤들을 지나오며
Now I’m walking, walking in the light
이제 나는 걷고 있네요, 그 빛 가운데를 걸어가고 있어요
Walking in the light, walking in the light
빛 속을 걷고 있어요, 빛 속을 당당히 걷고 있죠

Trouble! Trouble don't last always
고난은! 고난은 영원하지 않아요!
(No, it don't)
(그럼요, 영원하지 않죠)
Joy’s gonna come in the morning light
아침 햇살과 함께 반드시 기쁨이 찾아올 겁니다!

Trouble don't last always
고난은 영원하지 않아요
(No, it don't)
(결코 영원하지 않죠)
He’s gonna turn my dark into light
그분께서 나의 어둠을 찬란한 빛으로 바꾸어 주실 테니까요

Hold on a little longer
조금만 더 버텨내세요, 조금만 더
He’s got something better
그분께서는 더 멋진 것을 준비해 두셨어요
For me
바로 나를 위해서요

Somebody here been through the fire like me?
여기 나와 같은 뜨거운 불시험을 겪어낸 분이 있나요?
(Yes!)
(네, 있습니다!)

Somebody here still believing what they can't see?
보이지 않는 것을 여전히 믿음으로 바라보는 분이 있나요?
(Yes!)
(네, 믿습니다!)

We do! Well, hold your head up!
우리가 그렇습니다! 그러니 고개를 높이 드세요!
Keep on walking through!
낙심하지 말고 계속 걸어가세요!
He’s gonna see us through!
그분께서 우리를 끝까지 돌보아 주실 테니까요!

Trouble! Trouble don't last always!
고난은! 고난은 영원하지 않아요!
(No, it don't)
(그럼요, 결코 영원하지 않죠)

Joy’s gonna come in the morning light!
아침 햇살과 함께 찬란한 기쁨이 찾아올 겁니다!

Trouble don't last always
고난은 영원하지 않아요
(No, it don't)
(결코 영원하지 않죠)

He’s gonna turn my dark into light
그분께서 나의 모든 어둠을 빛으로 바꾸어 주실 겁니다

Hold on a little longer
조금만 더 버텨내세요, 조금만 더
He’s got something better
그분께서 훨씬 더 좋은 것을 예비하셨어요
For me
바로 나를 위해서요

Hold on every single day!
매일매일, 낙심하지 말고 버텨내세요!
Into day!
오늘 이 순간에도!

Trouble don't last always...
고난은 영원하지 않아요...
(No, it don't) (No, it don't)
(그럼요, 결코 영원하지 않죠)
No, it don't!
결코 영원하지 않습니다!

He’s gonna see us through...
그분께서 우리를 마침내 승리하게 하실 테니까요`,

  "song-04": `[IT IS WELL]

Birds up in the sky, they don't worry about the fall
하늘 높이 날아오르는 새들은 추락하는 것을 걱정하지 않네
Stars up in the night, they don't question why at all
밤하늘을 수놓은 별들은 왜 그 자리에 있는지 전혀 의문하지 않네
I've been through the fire, I've been through the flood
나는 거센 불길을 지나왔고, 휘몰아치는 홍수를 거쳐왔지만
Standing here today, and I'm certain who I trust
오늘 바로 이 자리에 서서, 내가 누구를 신뢰하는지 확신하네

No more shaking, no more doubt in my soul
내 영혼에 더 이상의 흔들림도, 더 이상의 의심도 없네
For the first time in my life, I know, I know
내 평생 처음으로, 나는 이제야 확실히 아네, 정말 아네
It is well, it is well with my soul
모든 것이 평안하네, 내 영혼은 참으로 평안하네
I've got a peace that I've never known
이전에는 미처 알지 못했던 깊은 평화를 얻었네

It is well, it is well, yeah it's well
평안하네, 모든 것이 평안하네, 그래요 참 평안하네
This confidence, Lord, You made me whole
주님, 이 확신 속에서 당신은 나를 온전하게 회복시키셨네

Used to live in question, used to live in fear
늘 끊임없는 의문 속에 살았고, 늘 두려움 속에 갇혀 살았었지
Now I stand up different, now the sky is clear
하지만 이제 난 완전히 다르게 서 있고, 이제 내 하늘은 맑게 갰네
It's not about my striving, it's not about my might
이것은 나의 처절한 노력 때문도 아니요, 나의 힘으로 이룬 것도 아니네
It's the One who holds me steady, holds me through the night
오직 칠흑 같은 밤새도록 나를 단단히 붙드시고 지켜주시는 그분 덕분이네

No more shaking, no more doubt in my soul
내 영혼에 더 이상의 흔들림도, 더 이상의 의심도 없네
For the first time in my life, I know, I know
내 평생 처음으로, 나는 이제야 확실히 아네, 정말 아네
It is well, it is well with my soul
모든 것이 평안하네, 내 영혼은 참으로 평안하네
I've got a peace that I've never known
이전에는 미처 알지 못했던 깊은 평화를 얻었네

It is well, it is well, yeah it's well
평안하네, 모든 것이 평안하네, 그래요 참 평안하네
This confidence, Lord, You made me whole
주님, 이 확신 속에서 당신은 나를 온전하게 회복시키셨네

Let the storm rage on, let the wind blow strong
폭풍우가 거세게 휘몰아쳐도, 거친 바람이 강하게 불어 닥쳐도 상관없네
I know where I stand, and I know where I belong
나는 내가 어떤 기초 위에 서 있는지, 내가 진정 어디에 속해 있는지 알고 있으니
Nothing's gonna move me, nothing's gonna shake this ground
그 무엇도 나를 흔들 수 없고, 그 어떤 것도 내가 디딘 이 땅을 무너뜨리지 못하리

It is well, it is well with my soul
모든 것이 평안하네, 내 영혼은 참으로 평안하네
I've got a peace that I've never known
이전에는 미처 알지 못했던 깊은 평화를 얻었네

It is well, it is well, yeah it's well
평안하네, 모든 것이 평안하네, 그래요 참 평안하네
This confidence, Lord, You made me whole
주님, 이 확신 속에서 당신은 나를 온전하게 회복시키셨네
It is well, it is well with my soul
내 영혼은 참으로 평안하네, 깊이 평안하네`,

  "song-05": `[MASK]
Woo! Everybody wins something
우! 누구나 무언가는 얻기 마련이지
Woo! Everybody hides something
우! 누구나 무언가는 숨기기 마련이고
(Uh)
Let’s see who you really are
당신이 진짜 어떤 사람인지 이제 한번 가려보자고
Yeah, yeah! Woo!
그래, 바로 그거야! 우!

You quote the Bible but you never read it right
성경 구절을 입에 달고 살지만 정작 제대로 읽어본 적은 없지
Cherry-pick the verses that excuse the way you fight
네가 부리는 성질과 싸움을 합리화해 줄 구절들만 쏙쏙 골라내니까
You call it convictions when it’s really just your pride
사실은 그저 네 오만함일 뿐이면서, 그걸 굳건한 '신념'이라 부르고
You call it boundaries when you just want to hide
그저 비겁하게 숨고 싶으면서, 그걸 너만의 '경계선'이라 포장하지

You fast for likes, you pray for the applause
사람들의 '좋아요'를 얻으려 금식하고, 박수갈채를 받으려 기도하네
Your worship is a business and you know it, that’s the cause
너의 예배는 그저 비즈니스일 뿐이고, 너도 그 속사정을 잘 알고 있지
You cry on front row, camera ready, timed it right
제일 앞줄에 앉아 카메라가 켜지는 정확한 타이밍에 맞춰 눈물을 흘리지만
Same tears don't show up when nobody’s in sight
아무도 보는 사람이 없을 때는 그런 눈물 따윈 눈 씻고 찾아볼 수 없잖아

Screenshot the sins of everybody but your own
남들의 죄악은 낱낱이 캡처해 박제하면서도 네 자신의 죄는 묻어두고
Post a Bible verse right after tearing someone down
누군가를 처참하게 짓밟아놓고는 곧바로 경건한 성경 구절을 포스팅하지
Your image took years, but the cracks are showing fast
네 이미지를 쌓아 올리는 덴 수년이 걸렸겠지만, 금이 가는 건 한순간이야
Question is, you good for life or just for the cast?
하나 묻자, 넌 진정한 삶을 사는 거냐, 아니면 그저 연기를 하는 거냐?

Take it off!
다 벗어던져!
(Take it off, take it off) (전부 벗어버려)
Stop the fronting, stop the show
가식적인 척도, 위선적인 쇼도 이제 그만 멈춰
Let it go!
전부 놓아버려!
(Take it off, take it off) (모두 벗어던져)
Let the real one finally show
진짜 네 모습을 마침내 세상에 드러내란 말이야

Take off the mask and we gonna be all right
가면을 벗어던져, 그럼 우린 다 괜찮아질 거야
Take off the mask and we gonna be all right
그 거짓된 가면을 벗어, 그럼 우린 비로소 온전해질 거야
Do this again and we gonna be all right
다시 한번 해보는 거야, 그럼 우린 다 괜찮아질 거야
Do this again and we gonna be all right
다시 제대로 시작한다면 우린 정말 괜찮아질 거야

He wants your soul, He wants your soul
그분은 네 영혼을 원하셔, 온전한 네 영혼을 바라신다고
Take it off, take it off, let it go
그러니 가식을 벗어, 전부 벗어던지고 놓아버려
He wants your soul, He wants your soul
그분은 너의 진짜 영혼을 원하신단 말이야
We gonna be all right
그러면 우리는 진정 괜찮아질 거야

He used "I pray for you" like it’s a loaded gun
마치 장전된 총을 겨누듯 "널 위해 기도할게"라는 말을 무기로 휘두르고
Smile while you say it but the damage still gets done
생글생글 웃으며 말하지만 그 속의 독설로 상처는 이미 입혀졌지
You want the platform but you dodge accountability
화려한 무대와 자리는 원하면서도 책임감은 교묘하게 회피하고
Call it spiritual warfare when it’s just your hostility
그저 네 안의 적개심일 뿐이면서, 그걸 '영적 전쟁'이라 포장하네

Funny how your faith is loud when people watching
사람들이 지켜볼 때는 네 믿음이 세상 요란하게 울려 퍼지는 게 참 웃겨
But it’s silent as a grave when nobody’s counting
정작 지켜보는 눈이 없을 때는 무덤 속처럼 고요하면서 말이야
I ain't talking about them, I’m talking to me too
남 얘기 하는 게 아냐, 지금 이건 나 자신에게도 하는 소리지
Every mask I ever wore, He already knew
내가 썼던 그 모든 가식적인 가면들을, 그분은 이미 다 알고 계셨으니까

Take it off!
다 벗어던져!
(Take it off, take it off) (전부 벗어버려)
Stop the fronting, stop the show
가식적인 척도, 위선적인 쇼도 이제 그만 멈춰
Let it go!
전부 놓아버려!
(Take it off, take it off) (모두 벗어던져)
Let the real one finally show
진짜 네 모습을 마침내 세상에 드러내란 말이야

Take off the mask and we gonna be all right
가면을 벗어던져, 그럼 우린 다 괜찮아질 거야
Take off the mask and we gonna be all right
그 거짓된 가면을 벗어, 그럼 우린 비로소 온전해질 거야
Do this again and we gonna be all right
다시 한번 해보는 거야, 그럼 우린 다 괜찮아질 거야
Do this again and we gonna be all right
다시 제대로 시작한다면 우린 정말 괜찮아질 거야

He wants your soul, He wants your soul
그분은 네 영혼을 원하셔, 온전한 네 영혼을 바라신다고
Take it off, take it off, let it go
그러니 가식을 벗어, 전부 벗어던지고 놓아버려
He wants your soul, He wants your soul
그분은 너의 진짜 영혼을 원하신단 말이야
We gonna be all right
그러면 우리는 진정 괜찮아질 거야

I can see it
이젠 똑똑히 보여요
The light is here
그 찬란한 빛이 바로 여기에 있어요
Take it off!
다 벗어던져요!
Let it go!
전부 다 내려놓으세요!
We gonna be all right
우리는 다 괜찮아질 겁니다`,

  "song-06": `[OPEN PAGE]

Go!
가자!

I’ve been taking pills that don't heal a thing
아픔을 고치지도 못할 약들만 삼켜왔어
Chasing every high that don't mean anything
아무 의미도 없는 덧없는 짜릿함만 쫓으면서
Bought the max from everybody selling lies
거짓을 파는 자들의 말에 전부 속아 넘어갔고
Followed every star that turned out to be a satellite
별인 줄 알고 쫓았던 건 결국 인공위성이었을 뿐이지
There’s a book on the shelf, collecting dust and shame
책장 위엔 먼지와 부끄러움 속에 방치된 책 한 권
Every page a mirror, but I never said its name
모든 페이지가 내 거울 같았지만 외면하며 이름조차 부르지 않았어
I’ve been sick for years, self-diagnosed and blind
영적으로 눈먼 채 스스로를 진단하며 오랫동안 앓아왔네
Medicine was here the whole entire time
진짜 치료제는 늘 여기, 언제나 곁에 있었는데 말이야

Open it up, open it up
이제 펼쳐봐, 어서 열어봐
There’s a cure I’ve been avoiding
그토록 외면해 왔던 답이 그 안에 있어
Open it up, open it up
마음을 열고 펼쳐봐, 어서 열어봐
Stop the noise and start this deciding
세상의 소음은 끄고 이제 결단하는 거야

Open the page! Face what’s true!
책장을 펼쳐! 진실과 마주해!
Open the page! It’s talking to you!
책장을 펼쳐! 네게 말을 건네고 있잖아!
No more running, no more disguise
더는 도망치지도, 가면을 쓰지도 마
Open the page and open your eyes!
책장을 펼쳐 눈을 똑똑히 떠!
This the medicine, this the cure
이것이 치료제요, 진정한 구원이야
This the only thing that’s ever been pure
이 세상에 유일하게 순수한 진리지
Open the page! Face what’s true!
책장을 펼쳐! 진실과 마주해!
Open the page! It’s talking to you!
책장을 펼쳐! 네게 말씀하고 계셔!

I dressed my wounds with everything but the Word
정작 '말씀'만 쏙 빼놓은 채 온갖 세상 것들로 상처를 감쌌어
Tried every remedy, tried every voice I heard
민간요법을 다 써보고 들리는 온갖 조언을 따라 해봤지
But the fever kept coming back around
하지만 영혼의 열병은 계속해서 도질 뿐이었어
Till I stopped and opened up and finally sat down
방황을 멈추고, 마음을 열어 마침내 그 자리에 앉기 전까지는
Every chapter is a scalpel, every verse a stitch
모든 장(Chapter)은 메스가 되어 째고, 모든 구절(Verse)은 바늘이 되어 꿰매주네
Cutting out the cancer, cutting out the itch
내 안의 암 덩어리를 도려내고, 괴롭히던 갈증을 없애주지
I ain't looking for religion, I’m looking for the truth
난 고리타분한 종교가 아니라 진짜 진리를 찾고 있어
And it’s been sitting on my shelf since I was in my youth
그리고 그 진리는 어린 시절부터 내 책장에 늘 놓여 있었지

Open it up, open it up
이제 펼쳐봐, 어서 열어봐
There’s a cure I’ve been avoiding
그토록 외면해 왔던 답이 그 안에 있어
Open it up, open it up
마음을 열고 펼쳐봐, 어서 열어봐
Stop the noise and start this deciding
세상의 소음은 끄고 이제 결단하는 거야

Open the page! Face what’s true!
책장을 펼쳐! 진실과 마주해!
Open the page! It’s talking to you!
책장을 펼쳐! 네게 말을 건네고 있잖아!
No more running, no more disguise
더는 도망치지도, 가면을 쓰지도 마
Open the page and open your eyes!
책장을 펼쳐 눈을 똑똑히 떠!
This the medicine, this the cure
이것이 치료제요, 진정한 구원이야
This the only thing that’s ever been pure
이 세상에 유일하게 순수한 진리지
Open the page! Face what’s true!
책장을 펼쳐! 진실과 마주해!
Open the page! It’s talking to you!
책장을 펼쳐! 네게 말씀하고 계셔!

I don't need another pill to numb the pain
고통을 잊게 만들 또 다른 약 따윈 필요 없어
I need the truth to cut me open, start again
내 속을 완전히 도려내 새롭게 시작하게 해줄 '진리'가 필요할 뿐
Open the page!
책장을 펼쳐!
Open the page!
책장을 펼쳐!
Open the page!
책장을 펼쳐!

Open the page! Face what’s true!
책장을 펼쳐! 진실과 마주해!
Open the page! It’s talking to you!
책장을 펼쳐! 네게 외치고 있잖아!
No more running, no more disguise
더는 도망치지도, 가면을 쓰지도 마
Open the page and open your eyes!
책장을 펼쳐 눈을 똑똑히 떠!
This the medicine, this the cure
이것이 치료제요, 진정한 구원이야
This the only thing that’s ever been pure
이 세상에 유일하게 순수한 진리지
Open the page! Face what’s true!
책장을 펼쳐! 진실과 마주해!
Open the page! It’s talking to you!
책장을 펼쳐! 네게 말씀하고 계셔!
Open the page!
책장을 펼쳐!
Face what’s true!
진실과 마주해!
Open the page!
책장을 펼쳐!
This the cure!
이것이 바로 해답이야!`
};