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
  "cliff": `There’s a cliff right in front of me
바로 내 앞에 절벽이 서 있어
One more step and I’m falling in
한 걸음만 더 내디디면 아래로 떨어질 것 같아
I keep asking why I’m still standing
내가 왜 여전히 버티고 서 있는지 자꾸 묻게 돼
When everything in me gave in
내 안의 모든 것이 무너져 내렸는데도
I’ve been holding my breath too long
너무 오랫동안 숨을 죽인 채 살아왔어
Talking to a silence I made myself
내가 스스로 만들어낸 침묵 속에서 혼자 말하면서
But something’s steady beneath my feet I didn’t put it there
하지만 내 발밑엔 내가 놓지 않은, 단단하고 흔들림 없는 무언가가 있어
I look beside me, and You’re right there
곁을 돌아보니, 당신이 바로 거기에 있네
Closer than the fear I’m feeling
내가 느끼는 두려움보다 더 가까이
I look behind me, this whole time
지나온 길을 돌아보니, 이 모든 시간 동안
You were never far away
당신은 단 한 번도 멀리 있던 적이 없었어
Even standing at the edge
벼랑 끝에 서 있던 그 순간조차
I wasn’t standing there alone
나 혼자 서 있었던 게 아니었어
I thought the fall would be the end
추락이 모든 것의 끝일 거라 생각했어
That silence meant I’d made this bed
이 침묵은 결국 내가 자초한 결과라고 믿었지
But every time I look back down
하지만 내가 걸어온 길을 다시 내려다볼 때마다
I was closer to the ground I feel
내가 느꼈던 그 단단한 대지에 내가 더 가까이 있었을 뿐이야
So I stop and I breathe again
그래서 난 멈춰 서서 다시 숨을 쉬어
And there You are, You always were
그러자 당신이 보여, 언제나 늘 그랬듯이
Maybe faith is just me remembering
어쩌면 믿음이란 건 그저 내가 기억해 내는 것일지도 몰라
The edge was never the end
이 절벽 끝이 결코 마지막이 아니었다는 걸
I look beside me, and You’re right there
곁을 돌아보니, 당신이 바로 거기에 있네
Closer than the fear I’m feeling
내가 느끼는 두려움보다 더 가까이
I look behind me, this whole time
지나온 길을 돌아보니, 이 모든 시간 동안
You were never far away
당신은 단 한 번도 멀리 있던 적이 없었어
Even standing at the edge
벼랑 끝에 서 있던 그 순간조차
I wasn’t standing there alone
나 혼자 서 있었던 게 아니었어
Every cliff I thought would break me
나를 무너뜨릴 거라 생각했던 모든 절벽은
Was ground I hadn’t seen
그저 내가 보지 못했던 새로운 땅이었을 뿐
Every fall I thought was coming
내게 찾아올 거라 믿었던 모든 추락 속에서
I wasn’t falling, I was caught
난 떨어지고 있던 게 아니라, 단단히 붙잡혀 있던 거였어
I look beside me, and You’re right there
곁을 돌아보니, 당신이 바로 거기에 있네
Closer than the fear I’m feeling
내가 느끼는 두려움보다 더 가까이
I look behind me, this whole time
지나온 길을 돌아보니, 이 모든 시간 동안
You were never far away
당신은 단 한 번도 멀리 있던 적이 없었어
Even standing at the edge
벼랑 끝에 서 있던 그 순간조차
I wasn’t standing there alone
나 혼자 서 있었던 게 아니었어
I was never alone
난 절대로 혼자가 아니었어
I was never alone
단 한 순간도 혼자가 아니었어
You were right there
당신이 바로 거기에 있었으니까
You were right there
바로 거기에 계셔주었으니까` ,

  "get-up-now": `I’ve been sitting in the same old spot
늘 머물던 그 자리에 오랫동안 앉아 있었어
Telling myself I’m not ready yet
아직 준비가 되지 않았다고 스스로에게 말하면서
Making excuses like they’re gonna save me
마치 변명이 나를 구원해 주기라도 할 것처럼 핑계를 대며
But the clock is moving and I can’t forget
하지만 시간은 계속 흐르고 있고, 난 잊을 수가 없어
No more waiting for a perfect sign
완벽한 표적이 나타나길 더는 기다리지 않아
No more asking if the time is right
지금이 적절한 때인지 더는 묻지 않을 거야
I’ve been down here long enough
이곳 밑바닥에 오랫동안 머물렀으니
It’s time to rise
이제는 일어나야 할 시간이야
Don’t hesitate, get up right now
망설이지 마, 지금 당장 일어나
Get up now, don’t hesitate
지금 당장 일어나, 주저하지 마
Get up right now, get up now
지금 바로 일어나, 당장 일어나
The ground beneath you ain’t your home
네 발밑의 밑바닥은 네가 머물 보금자리가 아니야
Stand up, stand up, you’re not alone
일어나, 일어나, 넌 혼자가 아니니까
Don’t hesitate, get up right now
망설이지 마, 지금 당장 일어나
I was scared of what I’d find out there
저 세상 밖에서 무엇을 맞닥뜨리게 될지 두려웠어
Scared my feet would give up on me
내 두 발이 나를 버리고 무너져 내릴까 봐 겁이 났지
But fearing never carried anybody
하지만 두려움은 그 누구도 앞으로 끌어주지 못해
Faith is how you learn to walk free
믿음이야말로 자유롭게 걸어가는 법을 배우는 길이야
No more waiting for the fear to leave
두려움이 사라지기만을 더는 기다리지 않아
No more sitting in what used to be
지난날의 과거 속에 더는 주저앉아 있지 않을 거야
I’ve been down here long enough
이곳 밑바닥에 오랫동안 머물렀으니
It’s time to rise
이제는 일어나야 할 시간이야
Don’t hesitate, get up right now
망설이지 마, 지금 당장 일어나
Get up now, don’t hesitate
지금 당장 일어나, 주저하지 마
Get up right now, get up now
지금 바로 일어나, 당장 일어나
The ground beneath you ain’t your home
네 발밑의 밑바닥은 네가 머물 보금자리가 아니야
Stand up, stand up, you’re not alone
일어나, 일어나, 넌 혼자가 아니니까
Don’t hesitate, get up right now
망설이지 마, 지금 당장 일어나
Every time you thought you couldn’t, you got up anyway
할 수 없을 거라 생각했던 순간마다, 넌 어쨌든 다시 일어섰잖아
Every door that looked too heavy opened when you moved
너무나 무거워 보이던 모든 문도 네가 발을 내딛었을 때 열렸어
Don’t hesitate, get up right now
망설이지 마, 지금 당장 일어나
Get up now, don’t hesitate
지금 당장 일어나, 주저하지 마
Get up right now, get up now
지금 바로 일어나, 당장 일어나
The ground beneath you ain’t your home
네 발밑의 밑바닥은 네가 머물 보금자리가 아니야
Stand up, stand up, you’re not alone
일어나, 일어나, 넌 혼자가 아니니까
Don’t hesitate, get up right now
망설이지 마, 지금 당장 일어나
Get up now, get up now
지금 당장 일어나, 지금 바로 일어나
Get up now, get up now
지금 당장 일어나, 지금 바로 일어나
You’re not alone
넌 혼자가 아니야
Get up now, get up now
지금 당장 일어나, 지금 바로 일어나
You’re not alone
넌 결코 혼자가 아니야
Get up now, get up now
지금 당장 일어나, 지금 바로 일어나
You’re not alone
넌 혼자가 아니야
Get up now, get up now
지금 당장 일어나, 지금 바로 일어나
Get up now, get up now
지금 당장 일어나, 지금 바로 일어나
Get up now, get up now
지금 당장 일어나, 지금 바로 일어나` ,

  "you-were-never-gone": `I’ve been staring at a door I can’t open
열리지 않는 문만 줄곧 바라보고 있었어
Counting steps like they’re all I own
마치 가진 게 그것뿐인 것처럼 걸음 수만 세면서
Waiting for a voice from somewhere far away
어딘가 먼 곳에서 들려올 목소리만을 기다렸지
Never thought to turn around
뒤돌아볼 생각은 꿈에도 하지 못한 채
Something warm here beside me
내 곁에 있는 무언가 따스한 것
A quiet kind of light I hadn’t noticed
내가 미처 알아채지 못했던 은은한 빛 한 줄기
Maybe I’ve been looking too far out
어쩌면 너무 먼 곳만 바라보고 있었나 봐
When You were never gone
당신은 단 한 번도 떠난 적이 없었는데
Look beside you, look right there
네 곁을 바라봐, 바로 그곳을 봐
Closer than the air I’m breathing
내가 쉬는 숨보다 더 가까이 있어
Closer, closer right behind me this whole time
이 모든 시간 동안 내 바로 뒤에, 더 가까이 있었네
You were never far away
당신은 단 한 번도 멀리 있던 적이 없었어
Every step I thought I walked alone, You were holding my hand
혼자 걸었다고 생각했던 모든 걸음마다, 당신은 내 손을 잡고 계셨어
I used to think love had conditions
사랑에는 조건이 따르는 줄로만 알았어
A door that opens if I knock just right
내가 똑바로 올바르게 두드려야만 열리는 문처럼 말이야
But You’ve been standing in the hallway
하지만 당신은 이미 복도에 서 계셨지
Since before I learned to cry
내가 울음을 터뜨리는 법을 배우기도 전부터
So I stop, and I turn slowly
그래서 난 멈춰 서서 천천히 뒤를 돌아봐
And there You are, You always were
그러자 당신이 서 있네, 언제나 늘 그랬듯이
Maybe faith is just remembering
어쩌면 믿음이란 그저 기억해 내는 것일지도 몰라
To look beside instead of far
저 먼 곳 대신 내 옆을 바라보는 법을 말이야
Look beside you, look right there
네 곁을 바라봐, 바로 그곳을 봐
Closer than the air I’m breathing
내가 쉬는 숨보다 더 가까이 있어
Closer, closer right behind me this whole time
이 모든 시간 동안 내 바로 뒤에, 더 가까이 있었네
You were never far away
당신은 단 한 번도 멀리 있던 적이 없었어
Every step I thought I walked alone, You were holding my hand
혼자 걸었다고 생각했던 모든 걸음마다, 당신은 내 손을 잡고 계셨어
Every door I thought was locked
닫혀있다고 생각했던 모든 문은
Was open all along
처음부터 언제나 열려 있었어
Every silence I was scared of
내가 두려워했던 모든 정적은
Was You holding on
당신이 나를 꼭 안아주고 계시던 순간이었어
Look beside you, look right there
네 곁을 바라봐, 바로 그곳을 봐
Closer than the air I’m breathing
내가 쉬는 숨보다 더 가까이 있어
Closer, closer right behind me this whole time
이 모든 시간 동안 내 바로 뒤에, 더 가까이 있었네
You were never far away
당신은 단 한 번도 멀리 있던 적이 없었어
Every step I thought I walked alone, You were holding my hand
혼자 걸었다고 생각했던 모든 걸음마다, 당신은 내 손을 잡고 계셨어
Right beside me
바로 내 곁에
Right behind me
바로 내 뒤에
Right behind me
바로 내 뒤에
You were never gone
당신은 단 한 번도 떠난 적이 없었네
You were never gone
단 한 번도 날 떠나지 않으셨네` ,

  "time": `Tracing footsteps in the dark
어둠 속에서 지난 발자취를 되짚어가며
Looking for the rhythm
나만의 리듬을 찾아 헤매네
Every choice I gotta make
내가 내려야 하는 모든 선택들
Caught up in the vision
눈앞의 비전에 마음을 빼앗긴 채
Is this the turning of the page?
이것이 새로운 장을 넘기는 순간일까?
Time to step out of the cage
이 갇힌 새장에서 벗어나 발을 내딛을 시간이야
Feet on the edge, but my heart wants to fly
벼랑 끝에 서 있지만, 내 마음은 날아오르고 싶어 해
Looking for truth in the blur of the sky
아른거리는 하늘 속에서 진실을 찾으면서
Can you feel it? The moment is nigh
느껴지니? 그 순간이 바로 코앞에 다가왔어
We’re about to cross the line
우리는 이제 경계선을 넘어서려 해
Am I on the right path? Got me wondering
내가 올바른 길을 가고 있는 걸까? 자문해보게 돼
Chase the shadow, breaking through the wind
그림자를 쫓아, 바람을 뚫고 나아가
Am I on the right path? Keep it moving in
내가 올바른 길을 가고 있는 걸까? 계속 앞으로 나아가며
Hear the echo, let the change begin
그 울림을 들어봐, 변화를 시작하는 거야
Show me the way, let it burn so bright
길을 보여줘, 눈부시게 밝게 타오르도록
City lights are fading out
화려한 도시의 불빛들이 스러져가고
Questions in the mirror
거울 속에 비친 수많은 질문들
But the whisper in my soul’s getting a little clearer
하지만 내 영혼 속 나지막한 속삭임은 조금씩 더 선명해져 가
No more running from the past
지나간 과거로부터 더는 도망치지 않아
Make this second chance last
이 두 번째 기회를 영원히 내 것으로 만들겠어
Feet on the edge, but my heart wants to fly
벼랑 끝에 서 있지만, 내 마음은 날아오르고 싶어 해
Looking for truth in the blur of the sky
아른거리는 하늘 속에서 진실을 찾으면서
Can you feel it? The moment is nigh
느껴지니? 그 순간이 바로 코앞에 다가왔어
We’re about to cross the line
우리는 이제 경계선을 넘어서려 해
Am I on the right path? Got me wondering
내가 올바른 길을 가고 있는 걸까? 자문해보게 돼
Chase the shadow, breaking through the wind
그림자를 쫓아, 바람을 뚫고 나아가
Am I on the right path? Keep it moving in
내가 올바른 길을 가고 있는 걸까? 계속 앞으로 나아가며
Hear the echo, let the change begin
그 울림을 들어봐, 변화를 시작하는 거야
Show me the way, let it burn so bright
길을 보여줘, 눈부시게 밝게 타오르도록
Trust the motion, feel the flow, even in the blind
이 움직임을 믿고, 흐름을 느껴봐, 앞이 보이지 않는 순간조차도
Leave the heavy weight behind, clearing out my mind
무거운 짐은 뒤로 남겨둔 채, 머릿속을 맑게 비워내
Take me there, take me high
나를 그곳으로 이끌어줘, 저 높이 올라가게 해줘
Am I on the right path? Yeah, feel the beat
내가 올바른 길을 가고 있는 걸까? 그래, 이 리듬을 느껴봐
Chase the shadow, we can make it out
그림자를 쫓아, 우린 잘 헤쳐 나갈 수 있어
Am I on the right path? Never turning back
내가 올바른 길을 가고 있는 걸까? 절대 뒤돌아보지 않아
Hear the echo, staying on the track
그 울림을 들으며, 이 길 위에 그대로 서서
Show me the way, let it burn so bright
길을 보여줘, 눈부시게 밝게 타오르도록
Into the light
저 빛을 향해
This is the way
이것이 바로 나아갈 길이야
Yeah, I am ready now
그래, 난 이제 준비가 되었어` ,

  "get-Out-the-cell": `You’ve been locked up in a cell you built yourself
넌 스스로 만든 감옥 속에 갇혀 지내왔지
Chains you can’t see, but you feel 'em on your health
눈에 보이지 않지만, 네 삶을 짓누르는 사슬을 느끼며
Every sin’s a wall, every lie’s a lock
모든 죄는 벽이 되고, 모든 거짓말은 자물쇠가 되어
Been sitting in the dark so long, you stopped keeping track
너무 오랫동안 어둠 속에 앉아있어 얼마나 지났는지조차 잊어버렸어
You call it comfort, but it’s really just a cage
넌 그걸 편안함이라 부르지만, 사실은 그저 감옥일 뿐이야
You call it survival, but it’s just another stage
넌 그것이 생존이라 말하지만, 그저 또 다른 무대일 뿐이지
Ain’t nobody chained you, but the choices that you made
너를 쇠사슬로 묶은 건 다른 누구도 아닌 네가 한 선택들이지만
But there’s a door right here, and it ain’t never locked
바로 여기에 문이 있고, 그 문은 단 한 번도 잠긴 적이 없어
Open up the door, and step on out
문을 열고 밖으로 걸어 나오렴
His grace is calling, there’s no room for doubt
그분의 은혜가 부르고 있으니, 의심할 여지는 없어
Get out the cell, get out the cell
그 감옥에서 나와, 당장 밖으로 나와
He’s setting you free, He’s setting you free
그분이 널 자유롭게 하시네, 너에게 자유를 주시네
His love and His grace already paid the fee
그분의 사랑과 은혜가 이미 모든 대가를 치르셨어
Get out the cell, get out the cell
그 감옥에서 나와, 당장 밖으로 나와
He’s setting you free, He’s setting you free
그분이 널 자유롭게 하시네, 너에게 자유를 주시네
His love and His grace already paid the fee
그분의 사랑과 은혜가 이미 모든 대가를 치르셨어
I know the walls feel safe when they’ve been up so long
그 벽들이 너무 오래 서 있었기에 안전하다고 느껴지는 걸 알아
I know the silence feels like where you belong
그 적막함이 마치 네가 있어야 할 곳처럼 느껴지는 것도 알아
But freedom ain’t a feeling, it’s a choice you make
하지만 자유는 그저 감정이 아니라, 네가 내리는 선택이야
Get up out the cell before it’s all you’ll ever be
그 감옥이 네 존재의 전부가 되어버리기 전에 어서 일어나 나오렴
Grace don’t knock politely, grace knocks down the door
은혜는 얌전하게 문을 두드리지 않고, 문을 부수며 들어와
Time to leave that cell, you don’t live there no more
이제 그 감옥을 떠날 시간이야, 넌 더 이상 거기 사는 사람이 아니니까
Open up, open up, and step on out
문을 열어, 문을 열고 밖으로 걸어 나와
His grace is calling, there’s no room for doubt
그분의 은혜가 부르고 있으니, 의심할 여지는 없어
Oh, get out!
오, 어서 나와!
Get out the cell, get out the cell
그 감옥에서 나와, 당장 밖으로 나와
He’s setting you free, He’s setting you free
그분이 널 자유롭게 하시네, 너에게 자유를 주시네
His love and His grace already paid the fee
그분의 사랑과 은혜가 이미 모든 대가를 치르셨어
Get out the cell, get out the cell
그 감옥에서 나와, 당장 밖으로 나와
He’s setting you free, He’s setting you free
그분이 널 자유롭게 하시네, 너에게 자유를 주시네
His love and His grace already paid the fee
그분의 사랑과 은혜가 이미 모든 대가를 치르셨어
Clap your hands, stomp your feet
손뼉을 치고, 발을 구르렴
Clap your hands, stomp your feet
손뼉을 치고, 발을 굴러
His freedom inside makes my life complete
내 안의 그분의 자유가 내 삶을 완성하네
Clap your hands, stomp your feet
손뼉을 치고, 발을 구르렴
Walk out that door, walk into the street
그 문을 걸어 나와, 넓은 거리로 걸어 나가
Get out the cell, get out the cell
그 감옥에서 나와, 당장 밖으로 나와
He’s setting you free, He’s setting you free
그분이 널 자유롭게 하시네, 너에게 자유를 주시네
His love and His grace already paid the fee
그분의 사랑과 은혜가 이미 모든 대가를 치르셨어
Get out the cell, get out the cell
그 감옥에서 나와, 당장 밖으로 나와
He’s setting you free, He’s setting you free
그분이 널 자유롭게 하시네, 너에게 자유를 주시네
His love and His grace already paid the fee
그분의 사랑과 은혜가 이미 모든 대가를 치르셨어
Free!
자유로워!
You’re free! Free indeed!
넌 자유야! 참으로 자유로워!
Yeah! Free indeed!
그래! 참된 자유야!
God is gonna say you’re free!
하나님께서 네가 자유롭다고 말씀하시네!
Get out the cell! Yeah! You’re free, oh free!
그 감옥에서 나와! 그래! 넌 자유야, 오 자유로워!
Get out the cell! Yeah! You’re free, oh free!
그 감옥에서 나와! 그래! 넌 자유야, 오 자유로워!
Get out the cell! Yeah! You’re free, oh free!
그 감옥에서 나와! 그래! 넌 자유야, 오 자유로워!
Free indeed! Yeah! Free indeed! Oh free!
참으로 자유로워! 그래! 진정한 자유야! 오 자유로워!
Get out the cell! Yeah! Get out the cell! Oh free!
그 감옥에서 나와! 그래! 당장 밖으로 나와! 오 자유로워!
Get out the cell! Yeah! Get out the cell! Oh free!
그 감옥에서 나와! 그래! 당장 밖으로 나와! 오 자유로워!
His love and His grace already paid the fee
그분의 사랑과 은혜가 이미 모든 대가를 치르셨어
Get out the cell, get out the cell
그 감옥에서 나와, 당장 밖으로 나와
He’s setting you free, He’s setting you free
그분이 널 자유롭게 하시네, 너에게 자유를 주시네
His love and His grace already paid the fee
그분의 사랑과 은혜가 이미 모든 대가를 치르셨어
Oh, yeah! Open!
오, 그래! 문을 열어!
Get out the cell! Yeah! You’re free, oh free!
그 감옥에서 나와! 그래! 넌 자유야, 오 자유로워!
Get out the cell! Yeah!
그 감옥에서 어서 나와! 그래!
Open!
문을 열어!
Free indeed! Yeah! Free indeed!
참으로 자유로워! 그래! 진정한 자유야!` ,

  "job": `Where were you when I set the sky in place?
내가 하늘을 제자리에 펼쳐 놓을 때 넌 어디에 있었니?
When I hung the stars and called them by name?
내가 별들을 매달고 그들의 이름을 부를 때?
Do you know the way the ocean holds its line?
바다가 어떻게 자신의 경계를 지키는지 넌 알고 있니?
Do you know who told the morning when to rise?
아침에게 언제 떠올라야 하는지 말해준 이가 누구인지 알고 있니?
Where were you when I set the sky in place?
내가 하늘을 제자리에 펼쳐 놓을 때 넌 어디에 있었니?
When I hung the stars and called them by name?
내가 별들을 매달고 그들의 이름을 부를 때?
Do you know the way the ocean holds its line?
바다가 어떻게 자신의 경계를 지키는지 넌 알고 있니?
Do you know who told the morning when to rise?
아침에게 언제 떠올라야 하는지 말해준 이가 누구인지 알고 있니?
You’ve been asking why, you’ve been asking how
넌 왜냐고 물어왔고, 어떻게냐고 물어왔지
But have you asked who’s holding you right now?
하지만 지금 바로 너를 안고 있는 이가 누구인지 물어본 적이 있니?
Before you were formed, before you took a breath
네가 지어지기도 전에, 네가 첫 숨을 쉬기도 전에
I already knew the number of your days
난 이미 네 모든 날의 수를 알고 있었단다
Do you know me?
너는 나를 알고 있니?
Do you know me now?
이제는 나를 알고 있니?
Do you know?
너는 알고 있니?
I was there before the world found its sound
세상이 자신의 소리를 찾기도 전에 내가 거기에 있었단다
I hold the wind, I hold the sea
내가 바람을 쥐고 있고, 내가 바다를 품고 있어
I’ve been holding you before you knew me
네가 나를 알기도 전부터 난 너를 안고 있었단다
Do you know me? Do you know me now?
너는 나를 알고 있니? 이제는 나를 알겠니?
Where were you when the mountains learned to stand?
산들이 제자리에 서는 법을 배울 때 넌 어디에 있었니?
When I drew the line between the sea and land?
내가 바다와 육지 사이에 경계를 그을 때?
You question me from where you sit so small
넌 그렇게 작은 자리에 앉아 나에게 질문을 던지지만
But I was here before you asked at all
네가 물어보기도 전에 나는 이미 여기에 있었단다
You’ve been carrying what was never yours to hold
넌 네 것이 아니었던 무거운 짐들을 계속 짊어져 왔고
You’ve been running from a love that never let go
단 한 번도 너를 놓은 적 없는 사랑으로부터 도망쳐 왔지
Before you doubted, before you turned away
네가 의심하기 전에, 네가 돌아서기 전에
I already knew you’d come back home
난 네가 다시 집으로 돌아올 것을 이미 알고 있었단다
Do you know me?
너는 나를 알고 있니?
Do you know me now?
이제는 나를 알고 있니?
I was there before the world found its sound
세상이 자신의 소리를 찾기도 전에 내가 거기에 있었단다
I hold the wind, I hold the sea
내가 바람을 쥐고 있고, 내가 바다를 품고 있어
I’ve been holding you before you knew me
네가 나를 알기도 전부터 난 너를 안고 있었단다
Do you know me? Do you know me now?
너는 나를 알고 있니? 이제는 나를 알겠니?
I am not far
나는 멀리 있지 않단다
I was never far
단 한 번도 멀리 있었던 적이 없어
I am the voice inside the storm
나는 폭풍 속에서 들려오는 목소리란다
I am not new
나는 새로운 존재가 아니란다
I was never new
단 한 번도 생소한 존재였던 적이 없어
I was here before your first word
네가 첫마디를 떼기도 전에 내가 여기에 있었단다
I am here, I was here, I was here
내가 여기에 있다, 내가 여기에 있었단다, 내가 여기에 있었어
Before you asked, I am here
네가 묻기도 전에, 내가 여기에 있단다
Do you know me?
너는 나를 알고 있니?
Do you know me now?
이제는 나를 알고 있니?
I was there before the world found its sound
세상이 자신의 소리를 찾기도 전에 내가 거기에 있었단다
I hold the wind, I hold the sea
내가 바람을 쥐고 있고, 내가 바다를 품고 있어
I’ve been holding you before you knew me
네가 나를 알기도 전부터 난 너를 안고 있었단다
Do you know me? Do you know me now?
너는 나를 알고 있니? 이제는 나를 알겠니?
I am here, I was here, I was here
내가 여기에 있다, 내가 여기에 있었단다, 내가 여기에 있었어
Before you asked, I am here
네가 묻기도 전에, 내가 여기에 있단다` ,

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