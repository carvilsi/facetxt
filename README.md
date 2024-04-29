<div align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/carvilsi/textfaces/tests.yml?logo=github&label=tests" alt="test">
  <p></p>
</div>

<h1 align="center">FaceTxT</h1>
<p align="center"><3 text faces for the laughs :)</p>
<p></p>

<div align="center">
<i>"My mama always said, 'FaceTXT was like a box of chocolates.</i> 
<i>You never know what you're gonna get.'"</i>
</div>

<p></p>
<p></p>

<div align="center">
<p>Have a random text face, or the one that you choose, on your command line or in your project.</p>
<p></p>
<p></p>
<p>Now with 754 awesome faces! o_O</p>
</div>

## Usage

### As dependency

`npm install --save facetxt`

```javascript
import facetxt from 'facetxt';

// get a random face
// facetxt.rand
console.log(facetxt.rand);
// output: (◕‿◕✿)

// get a random face with description
// facetxt.randDesc
console.dir(facetxt.randDesc);
// output: { face: 'UwU', description: 'joy cute' }

// get one by name.
// facetxt.like(name);
// If there are more than one face for the same name,
// returns one randomly
console.log(facetxt.like('cat'));
// output: =3

// get an array by name;
// facetxt.likes(name);
console.dir(facetxt.likes('cat'));
// output: [
  //':-3',      ':3',
  //'=3',       'x3',
  //'X3',       '>:3',
  //'(=^・^=)', '(=^・・^=)',
  //'=^_^='
//] 

// get an array with all faces
const faces = facetxt.all;
console.log(faces[0]);
// output: :‑)

// prety prints all the faces
// check "The Faces" section bellow for output example
console.log(facetxt.list);
```
### CLI (Command line)

#### Install

`$ npm install -g facetxt`

#### Usage

`$ facetxt [commands]`

```
Commands:
        version    toutput the version number
        help       display this text

        rand       get a random face
        randDesc   get a random face with description
        list       pretty prints all the faces
        all        get an array with all faces
        like       get one face by name; if more than one, will be return randomly
        likes      get an array of faces by name

Note: all commands also supports "--" e.g. $ facetext --version
```

```bash
# get one random face
$ facetxt 
(°レ°)
# same as: "$ facetxt rand"

# get one random face with description
$ facetxt randDesc
:') --tear of happinesis--

# get one face by name
# if there are more than one for the name
# one will be return randomly
$ facetxt like flip
┻━┻┬─┬ノ( º _ ºノ)

# get array of faces by name
$ facetxt likes flip
[
  '(╯°□°）╯︵',
  '┻━┻┬──┬ ¯\\_(ツ)',
  '┻━┻︵ヽ(`Д´)ﾉ︵ ',
  '┻━┻┬─┬ノ( º _ ºノ)',
  '(ノಠ益ಠ)ノ彡┻━┻'
]

# get array with all faces
$ facetxt all
[
  ':‑)',  ':)',  ':-]', ':]',  ':->',  ':>',   '8-)', '8)',
  ':-}',  ':}',  ':o)', ':c)', ':^)',  '=]',   '=)',  ':‑D',
  '8‑D',  ':D',  '8D',  '=D',  '=3',   'c:',   'C:',  'B^D',
  'x‑D',  'X‑D', 'xD',  'XD',  ':_))', ":'‑(", ":'(", ':=(',
  ":'‑)", ":')", ':"D', '>:(', '>:[',  "D‑':", 'D:<', 'D:',
  'D8',   'D;',  'D=',  'DX',  ':‑O',  ':‑o',  ':O',  ':o',
  ':0',   ':-0', '8‑0', '>:O', '=O',   '=o',   '=0',  ':-3',
  ':3',   '=3',  'x3',  'X3',  '>:3',  ':-*',  ':*',  ':×',
  ';‑)',  ';)',  '*-)', '*)',  ';‑]',  ';]',   ';^)', ';>',
  ':‑,',  ';D',  ';3',  ':‑P', ':P',   'X‑P',  'XP',  'x‑p',
  'xp',   ':‑p', ':p',  ':‑Þ', ':Þ',   ':‑þ',  ':þ',  ':‑b',
  ':b',   'd:',  '=p',  '>:P', ':-/',  ':/',   ':‑.', '>:\\',
  '>:/',  ':\\', '=/',  '=\\',
  ... 437 more items
]

# pretty prints all the faces
# check "The Faces" section bellow for output example
$ facetxt list
```

## Tests, linter, benchmarking and coverage

In order to tests the small cli, [bats](https://github.com/sstephenson/bats.git) it's need it.

<details><summary>To install it:</summary>
<p>

```bash
$ git clone https://github.com/sstephenson/bats.git
$ cd bats
$ ./install.sh /usr/local
```

</p>
</details>

Then install the dev dependencies:

`$ npm install`

- Run all the things; tests for code and cli (requires **bats**), linter for source code and tests and cli and coverage.
`$ npm test` 

<details><summary>Other, maybe useful, runs:</summary>
<p>

- Run source tests

`$ npm run test-src`

- Run cli tests 

`$ npm run test-cli`

- Run coverage

`$ npm run coverage`

- Run lint for source code

`$ npm run lint` (lint-fix for auto fix)

- Run lint for tests

`$ npm run lint-test` (lint-test-fix for auto fix)

- Run lint for cli

`$ npm run lint-bin` (lint-bin-fix for auto fix)

- Run benchmark, this also saves the output report at *benchmark/report.txt*

`$ npm run benchmark` 

- Run with watcher for develop mode, requires [nodemon](https://github.com/remy/nodemon)

`$ npm run dev`

</p>
</details>

## The Faces

All the faces but the *custom* section are from [wikipedia's "List of emoticons article](https://en.wikipedia.org/wiki/List_of_emoticons)

At *custom* section the **asciimoji** entries are from [jigglycrumb](https://github.com/jigglycrumb/ASCIImoji) under "THE BEER-WARE LICENSE" (Revision 42)

```
western:
    sideways latin only emoticons:
        smiley happy face:
            :‑) :) :-] :] :-> :> 8-) 8) :-} :} :o) :c) :^) =] =)
        laughing big grin grinning with glasses:
            :‑D 8‑D :D 8D =D =3 c: C: B^D
        laughing:
            x‑D X‑D xD XD
        very happy or double chin:
            :_))
        crying:
            :'‑( :'( :=(
        tear of happinesis:
            :'‑) :') :"D
        angry:
            >:( >:[
        horror disgust sadness great dismay:
            D‑': D:< D: D8 D; D= DX
        surprise shock:
            :‑O :‑o :O :o :0 :-0 8‑0 >:O =O =o =0
        cat face curled mouth cutesy playful mischievous:
            :-3 :3 =3 x3 X3
        lion smile evil cat:
            >:3
        kiss:
            :-* :* :×
        wink smirt:
            ;‑) ;) *-) *) ;‑] ;] ;^) ;> :‑, ;D ;3
        tongue sticking out cheeky playful blowing raspberry:
            :‑P :P X‑P XP x‑p xp :‑p :p :‑Þ :Þ :‑þ :þ :‑b :b d: =p >:P
        skeptical annoyed undecided uneasy hesitant:
            :-/ :/ :‑. >:\ >:/ :\ =/ =\ :L =L :S
        straight face no expression indecision:
            :‑| :|
        embarrassed blushing:
            :$ ://) ://3
        sealed lips wearing braces tongue tied:
            :‑X :X :‑# :# :‑& :&
        angel halo saint innocent:
            O:‑) O:) 0:‑3 0:3 0:‑) 0:) 0;^)
        evil devilish:
            >:‑) >:) }:‑) }:) 3:‑) 3:) >;‑) >;) >:3 >;3
        cool bored yawning:
            |;‑) |‑O B-)
        tongue in cheek:
            :-J
        partied all night:
            #-)
        drunk confused:
            %‑) %)
        being sick:
            :‑###.. :###..
        dumb dunce like:
            <:‑|
        scepticism disbelief disapproval:
            ',:-| ',:-l
        grimacing nervous awkward:
            :E
        skull and crossbones:
            8-X 8=X x-3 x=3
        chicken:
            ~:>
    sideways atin only single line art and portraits:
        rose:
            @};- @}->-- @}‑;‑'‑‑‑ @>‑‑>‑‑
        penis ejaculation:
            8====D 8===D 8=D 3=D 8=> 8===D~~~
        elvis presley:
            5:‑)
        santa claus:
            *<|:‑)
        homer simpson:
            ~(_8^(I)
        bill clinton:
            =:o]
        ronald reagan:
            7:^] ,:‑)
        heart:
            <3
        broken heart:
            </3 <\3
    upright latin only emoticons and single line art and portraits:
        fish something fishy ichthys fish:
            ><> <>< <*)))‑{ ><(((*>
        cheer yay yay:
            \o/
        cheerleader:
            *\0/*
        salute:
            o7
        john lennon:
            //0‑0\\
        zoidberg:
            (V) (;, ;) (V) (V)(°, °)(V)
        sadness great dismay disgust:
            ;v.v ._. ._.;
        crying:
            QQ qq Qq
        dead person fainted:
            X_X x_x +_+ X_x x_X
        sideways look devious or guilty:
            <_< >_> <.< >.>
        surprise shock yawn:
            O_O o_o O-O o‑o O_o o_O
        skeptical annoyed undecided uneasy hesitant:
            >.< >_<
        high five:
            ^5 o/\o >_>^ ^<_<
        crab lobster:
            V.v.V V=(° °)=V
        shark:
            (^^^)
        three TIE fighters:
            |-o-| [-o-] |-o-|
        bandage:
            (::[]::)
        breasts:
            (o)(o) ( • )( • ) (. Y .)
    upright unicode incorporating emoticons and single line art:
        darwin evolution fish:
            ӽd̲̅a̲̅r̲̅w̲̅i̲̅ɳ̲̅ᕗ Ӽd̲̅a̲̅r̲̅w̲̅i̲̅ɳ̲̅ᕗ ӽe̲̅v̲̅o̲̅l̲̅u̲̅t̲̅i̲̅o̲̅ɳ̲̅ᕗ Ӽe̲̅v̲̅o̲̅l̲̅u̲̅t̲̅i̲̅o̲̅ɳ̲̅ᕗ
        dollar notes:
            [̲̅$̲̅(̲̅1̲̅)̲̅$̲̅] [̲̅$̲̅(̲̅5̲̅)̲̅$̲̅] [̲̅$̲̅(̲̅1̲̅0̲̅)̲̅$̲̅] [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]
        lenny face:
            ( ͡° ͜ʖ ͡°)
        disapproval look:
            ಠ_ಠ ಠ__ಠ ಠ益ಠ
        bat:
            ⎛⎝(•ⱅ•)⎠⎞ ◥▅◤ ◢▅◣
        kiss:
            (๑ˇεˇ๑)s
        flower girl:
            (◕‿◕✿)
        crying:
            (༎ຶ ۝ ༎ຶ )
        cat:
            (=ʘᆽʘ=) ฅ(^•ﻌ•^ฅ)
        bear:
            ʕ•ᴥ•ʔ ʕ·(エ)·ʔ ʕ– ㉨–ʔ ⊂(￣(ｴ)￣)⊃
eastern:
    kaomoji faces:
        troubled:
            (>_<) (>_<)> (>w<)
        baby:
            (';')
        nervous embarrassed troubled shy sweat drop:
            (^^ゞ (^_^;) (-_-;) (~_~;) (・.・;) (・_・;) (・・;) ^^; ^_^; (#^.^#) (^ ^;)
        embarrassed flushed:
            (⁄⁄•⁄ω⁄•⁄⁄)
        smoking:
            (^.^)y-.o○ (-.-)y-°°°
        sleeping:
            (-_-)zzz
        wink:
            (^_-) (^_-)-☆
        confused:
            ((+_+)) (+o+) (°°) (°-°) (°.°) (°_°) (°_°>) (°レ°)
        ultraman:
            (o|o)
        joyful:
            ^_^ (°o°) (^_^) /(^O^)／ (^o^)／ (^^)/ (≧∇≦)/ (/◕ヮ◕)/ (^o^)丿 ∩(·ω·)∩ (·ω·) ^ω^
        kowtow respect dogeza apology:
            (__) _(._.)_ _(_^_)_ <(_ _)> <m(__)m> m(_ _)m
        middle fingers:
            (凸ಠ益ಠ)凸
        questioning:
            ＼(°ロ＼) (／ロ°)／
        sad crying:
            ('_') (/_;) (T_T) (;_;) (;_; (;_:) (;O;) (:_;) (ToT) (Ｔ▽Ｔ) ;_; ;-; ;n; ;; Q.Q T.T TnT QQ Q_Q
        shame:
            (ー_ー)!! (-.-) (-_-) (一一) (；一_一)
        tired:
            (=_=)
        cat:
            (=^・^=) (=^・・^=) =^_^=
        looking down sadness boredom:
            (..) (._.)
        giggling with hand covering mouth:
            ^m^
        confusion:
            (・・? (?_?)
        facepalm:
            (－‸ლ)
        laugh:
            >^_^< <^!^> ^/^ （*^_^*） §^.^§ (^<^)  (^.^) (^ム^) (^·^) (^.^) (^_^.) (^_^) (^^)  (^J^) (*^.^*) ^_^ (#^.^#) （^—^）
        waving:
            (^^)/~~~ (^_^)/~ (;_;)/~~~ (^.^)/~~~ (-_-)/~~~ ($··)/~~~ (@^^)/~~~ (T_T)/~~~ (ToT)/~~~
        alien baltan:
            (V)o￥o(V)
        excited:
            ＼(~o~)／ ＼(^o^)／ ＼(-o-)／ ヽ(^。^)ノ ヽ(^o^)丿 (*^0^*)
        amazed:
            (*_*) (*_*; (+_+) (@_@) (@_@。 (＠_＠;) ＼(◎o◎)／！
        laughing cheerful:
            (*^^)v (^^)v (^_^)v （’-’*) (＾ｖ＾) (＾▽＾) (・∀・) (´∀`) (⌒▽⌒）
        hopeless:
            ＼(^o^)／ \(^o^)/
        shame sadness:
            (~o~) (~_~)
        kiss:
            (^^ゞ
        calmness:
            ˊ＿>ˋ
        headphones listening music:
            ((d[-_-]b))
        worried:
            (-"-) (ーー゛) (^_^メ) (-_-メ) (~_~メ) (－－〆) (・へ・) (｀´) <`～´> <`ヘ´> (ーー;)
        eyeglasses:
            (^0_0^)
        jotting note:
            ( ..)φ φ(..)
        happy:
            (●＾o＾●) (＾ｖ＾) (＾ｕ＾) (＾◇＾) ( ^)o(^ ) (^O^) (^o^) (^○^) )^o^( (*^▽^*) (✿◠‿◠)
        grinning:
            (￣ー￣)
        surprised:
            (￣□￣;) °o° °O° :O o_O o_0 o.O (o.o) oO
        infatuation:
            (*´▽｀*) (*°∀°)=3
        dancing swinging arms back and forth happy gary:
            ᕕ( ᐛ )ᕗ
        shocked surprised:
            （ ﾟ Дﾟ) (°◇°)
        dissatisfied:
            (*￣m￣)
        mellow shrug:
            ヽ(´ー｀)┌ ¯\_(ツ)_/¯ ¯\(°_o)/¯
        snubbed deflated:
            (´･ω･`) (‘A`)
        hugging reaching kissing:
            (づ￣ ³￣)づ
        blowing kiss:
            (*^3^)/~☆
        studying:
            .....φ(・∀・＊)
        sleep:
            (-_-) zzz(︶｡︶✽)
        joy cute:
            uwu UwU
        cute inquisitive perplexed furry fandom:
            OWO OwO
        distress jiong patterned window:
            囧
        porter robinson:
            【=◈︿◈=】
    other eastern emoticons:
        bubbles:
            .o○ ○o.
        cup tea:
            ( ^^) _U~~ ( ^^) _旦~~
        shooting star:
            ☆彡 ☆ミ
        fish:
            >°)))彡 (Q   )) ><ヨヨ (°))<< >°))))彡 <°)))彡 >°))彡  <+ ))><< <*)) >=<
        squid octopus:
            <コ:彡 Ｃ:.ミ
        snake:
            ~>°)～～～
        bat:
            ～°·_·°～
        tadpole:
            (°°)～
        bomb:
            ●～*
        despair:
            ￣|○ STO OTZ OTL orz 囧rz
        table flip:
            (╯°□°）╯︵ ┻━┻┬──┬ ¯\_(ツ) ┻━┻︵ヽ(`Д´)ﾉ︵  ┻━┻┬─┬ノ( º _ ºノ) (ノಠ益ಠ)ノ彡┻━┻
two channel:
     2channel:
        perky:
            (`･ω･´)
        salute:
            (｀-´)>
        terribly sad:
            (´；ω；`)
        peace mind:
            ヽ(´ー｀)ﾉ
        be irritable:
            ヽ(`Д´)ﾉ
        angry:
            (＃ﾟДﾟ)
        yelling panting:
            （ ´Д｀）
        surprised loudmouthed:
            （　ﾟДﾟ）
        do not know answer:
            ┐('～`；)┌
        carefree:
            （´∀｀）
        indifferent:
            （　´_ゝ`）
        shocked:
            Σ(゜д゜;)
        happy upbeat:
            ( ﾟヮﾟ) ^ㅂ^ ヽ(´▽`)/
        carefree above arms stretched out while running soaring:
            ⊂二二二（＾ω＾）二⊃
        spook:
            (((( ；ﾟдﾟ))
        huge surprise:
            σ(ﾟдﾟ)
        jog someone cheek:
            (´∀｀)σ)∀`)
        amazed:
            ( ﾟдﾟ)
        smoking:
            (´ー`)y-~~
        toast cheers:
            （ ^_^）o自自o（^_^ ）
        flash intuition:
            m9(・∀・)
        friendly:
            ヽ(´ー`)人(´∇｀)人(`д´)ノ
        lonely:
            ('a`)
        depressed unsatisfied:
            （ ´,_ゝ`)
        thinking:
            （´-`）.｡oo( ... )
        impatience:
            (ﾟдﾟ;≡;ﾟдﾟ)
        whispers:
            ( ´д)ﾋｿ(´д｀)ﾋｿ(д｀)
        carrying money:
            （･∀･)つ⑩ 
        sliding belly whooaaa:
            ⊂（ﾟдﾟ⊂⌒｀つ≡≡≡(´⌒;;;≡≡≡
        unforeseen:
            (ﾟдﾟ)
        i do not need it:
            (ﾟ⊿ﾟ)
        come on:
            щ(ﾟдﾟщ) (屮ﾟдﾟ)屮
        mocking good:
            （・∀・）
        that is bad:
            （・ａ・）
        discharged drug in brain goofing around:
            (ﾟ∀ﾟ)
        sad:
            （ つ д ｀）
        not convincing:
            エェェ(´д｀)ェェエ
        simper snorlax:
            (￣ー￣)
        deflagged:
            [ﾟдﾟ]
        happy expressions dancing music:
            ♪┏(・o･)┛♪┗ ( ･o･) ┓
        happy expression:
            d(*⌒▽⌒*)b
        given up despair:
            ＿|￣|○
        extreme distaste:
            (╬ ಠ益ಠ)
        shouting:
            (≧ロ≦)
        pretending not notice asleep boredom:
            (θεθ;)
        kick:
            ＼| ￣ヘ￣|／＿＿＿＿＿＿＿θ☆( *o*)/
        discombobulated:
            ┌(；`～,)┐
        running:
            ε=ε=ε=┌(;*´д`)ﾉ
        shocked 2ch:
            (l'o'l)
        really angry:
            ヽ(ｏ`皿′ｏ)ﾉ
        do it:
            (☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)
        angel:
            ☜(⌒▽⌒)☞ 
     2channel emoticons containing japanese phrases:
        its here kitaa excitement:
            キタ━━━(゜∀゜)━━━!!!!!
        girlish its here kitaa excitementversion:
            ｷﾀﾜァ*･゜ﾟ･*:.｡..｡.:*･゜(n‘∀‘)ηﾟ･*:.｡. .｡.:*･゜ﾟ･* !!
        erotic stirring haa haa:
            (*´Д`)ﾊｧﾊｧ
        patting nade nade:
            (　´Д｀)ﾉ(´･ω･`)　ﾅﾃﾞﾅﾃﾞ
        calling out ooooi:
            (*ﾟﾉOﾟ)<ｵｵｵｵｫｫｫｫｫｫｫｰｰｰｰｰｲ!
        evil laugh:
            ( ﾟ∀ﾟ)ｱﾊﾊ八八ﾉヽﾉヽﾉヽﾉ ＼ / ＼/ ＼
        blaming now now:
            （・∀・ ）ヾ(- -；)コラコラ
        kana reading o ya su mi:
            お(^o^)や(^O^)す(^｡^)みぃ(^-^)ﾉﾞ
custom:
    cthulhu:
        ^(;,;)^
    facepalm:
        (P,') (p,')
    horns heavy:
        \m/,
    question:
        (p_-) (-_q)
    star:
        ☆
    thinking nonocle:
        õ_o o_Ô
    dazed:
        @_@
    greedy:
        $_$
    confusion:
        ?_?
    shyness:
        6_6
    surprise shock:
        !_!
asciimoji:
    acid:
        ⊂(◉‿◉)つ
    afraid:
        (ㆆ _ ㆆ)
    arrowhead:
        ⤜(ⱺ ʖ̯ⱺ)⤏
    bearflip:
        ʕノ•ᴥ•ʔノ ︵ ┻━┻
    bearhug:
        ʕっ•ᴥ•ʔっ
    blackeye:
        0__#
    blubby:
        (      0    _   0    )
    bond 007:
        ┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿
    boobs:
        ( . Y . )
    bribe:
        ( •͡˘ _•͡˘)ノð
    butterfly:
        ƸӜƷ
    catlenny:
        ( ͡° ᴥ ͡°)﻿
    chubby:
        ╭(ʘ̆~◞౪◟~ʘ̆)╮
    claro:
        (͡ ° ͜ʖ ͡ °)
    clique gang squad:
        ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ
    coffee cuppa:
        c[_]
    creep:
        ԅ(≖‿≖ԅ)
    creepcute:
        ƪ(ړײ)‎ƪ​​
    crim3s:
        ( ✜︵✜ )
    crywave:
        ( ╥﹏╥) ノシ
    dab:
        ヽ( •_)ᕗ
    damnyou:
        (ᕗ ͠° ਊ ͠° )ᕗ
    dance:
        ᕕ(⌐■_■)ᕗ ♪♬
    dealwithit dwi:
        (⌐■_■)
    derp:
        ☉ ‿ ⚆
    dj:
        d[-_-]b
    dong:
        (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄
    donger:
        ヽ༼ຈل͜ຈ༽ﾉ
    dontcare idc:
        (- ʖ̯-)
    want dontwant:
        ヽ(｀Д´)ﾉ
    dope:
        <(^_^)>
    doubleflat:
        𝄫
    doublesharp:
        𝄪
    doubletableflip:
        ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻
    duckface:
        (・3・)
    duel:
        ᕕ(╭ರ╭ ͟ʖ╮•́)⊃¤=(————-
    duh:
        (≧︿≦)
    dunno:
        ¯\(°_o)/¯
    eeriemob:
        (-(-_-(-_(-_(-_-)_-)-_-)_-)_-)-)
    endure:
        (҂◡_◡) ᕤ
    envelope letter:
        ✉︎
    evillenny:
        (͠≖ ͜ʖ͠≖)
    execution:
        (⌐■_■)︻╦╤─   (╥﹏╥)
    facebook:
        (╯°□°)╯︵ ʞooqǝɔɐɟ
    fart:
        (ˆ⺫ˆ๑)<3
    finn:
        | (• ◡•)|
    flexing:
        ᕙ(`▽´)ᕗ
    flipped heavytable:
        ┬─┬﻿ ︵ /(.□. \）
    fly:
        ─=≡Σ((( つ◕ل͜◕)つ
    friendflip:
        (╯°□°)╯︵ ┻━┻ ︵ ╯(°□° ╯)
    frown:
        (ღ˘⌣˘ღ)
    fuckoff gtfo:
        ୧༼ಠ益ಠ╭∩╮༽
    fuckyou fu:
        ┌П┐(ಠ_ಠ)
    gentleman sir monocle:
        ಠ_ರೃ
    ghast:
        = _ =
    ghost:
        ༼ つ ╹ ╹ ༽つ
    gift present:
        (´・ω・)っ由
    gimme:
        ༼ つ ◕_◕ ༽つ
    givemeyourmoney:
        (•-•)⌐
    glitter:
        (*・‿・)ノ⌒*:･ﾟ✧
    glassesoff:
        ( ͡° ͜ʖ ͡°)ﾉ⌐■-■
    glitterderp:
        (ﾉ☉ヮ⚆)ﾉ ⌒*:･ﾟ✧
    gloomy:
        (_゜_゜_)
    goatse:
        (з๏ε)
    gotit:
        (☞ﾟ∀ﾟ)☞
    greet greetings:
        ( ´◔ ω◔`) ノシ
    gun mg:
        ︻╦╤─
    hadouken:
        ༼つಠ益ಠ༽つ ─=≡ΣO))
    haha:
        ٩(^‿^)۶
    happygarry:
        ᕕ( ᐛ )ᕗ
    hello ohai bye:
        (ʘ‿ʘ)╯
    help:
        \(°Ω°)/
    highfive:
        ._.)/\(._.
    hitting:
        ( ｀皿´)｡ﾐ/
    hug hugs:
        (づ｡◕‿‿◕｡)づ
    iknowright ikr:
        ┐｜･ิω･ิ#｜┌
    illuminati:
        ୧(▲ᴗ▲)ノ
    inlove:
        (っ´ω`c)♡
    internet:
        ଘ(੭*ˊᵕˋ)੭* ̀ˋ ɪɴᴛᴇʀɴᴇᴛ
    jake:
        (❍ᴥ❍ʋ)
    kappa:
        (¬,‿,¬)
    kawaii:
        ≧◡≦
    keen:
        ┬┴┬┴┤Ɵ͆ل͜Ɵ͆ ༽ﾉ
    kiahh:
        ~\(≧▽≦)/~
    kyubey:
        ／人◕ ‿‿ ◕人＼
    lazy:
        _(:3」∠)_
    lennybill:
        [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]
    lennyfight:
        (ง ͠° ͟ʖ ͡°)ง
    lennyflip:
        (ノ ͡° ͜ʖ ͡°ノ)   ︵ ( ͜。 ͡ʖ ͜。)
    lennygang:
        ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)
    lennyshrug:
        ¯\_( ͡° ͜ʖ ͡°)_/¯
    lennysir:
        ( ಠ ͜ʖ ರೃ)
    lennystalker:
        ┬┴┬┴┤( ͡° ͜ʖ├┬┴┬┴
    lennystrong:
        ᕦ( ͡° ͜ʖ ͡°)ᕤ
    lennywizard:
        ╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ
    lol:
        L(° O °L)
    love:
        ♥‿♥
    lovebear:
        ʕ♥ᴥ♥ʔ
    lumpy:
        ꒰ ꒡⌓꒡꒱
    luv:
        -`ღ´-
    magic:
        ヽ(｀Д´)⊃━☆ﾟ. * ･ ｡ﾟ,
    magicflip:
        (/¯◡ ‿ ◡)/¯ ~ ┻━┻
    meep:
        \(°^°)/
    meh:
        ಠ_ಠ
    metal rock:
        \m/,(> . <)_\m/
    mistyeyes:
        ಡ_ಡ
    monster:
        ༼ ༎ຶ ෴ ༎ຶ༽
    needle inject:
        ┌(◉ ͜ʖ◉)つ┣▇▇▇═──
    nerd:
        (⌐⊙_⊙)
    nice:
        ( ͡° ͜ °)
    noclue:
        ／人◕ __ ◕人＼
    nom yummy delicious:
        (っˆڡˆς)
    nyan:
        ~=[,,_,,]:3
    nyeh:
        @^@
    ohshit:
        ( º﹃º )
    omg:
        ◕_◕
    orly:
        (눈_눈)
    ohyou ou:
        (◞థ౪థ)ᴖ
    pear:
        (__>-
    pingpong:
        ( •_•)O*¯`·.¸.·´¯`°Q(•_• )
    plain:
        ._.
    pleased:
        (˶‾᷄ ⁻̫ ‾᷅˵)
    point:
        (☞ﾟヮﾟ)☞
    pooh:
        ʕ •́؈•̀)
    porcupine:
        (•ᴥ• )́`́'́`́'́⻍
    praise:
        (☝ ՞ਊ ՞)☝
    punch:
        O=('-'Q)
    rage mad:
        t(ಠ益ಠt)
    rageflip:
        (ノಠ益ಠ)ノ彡┻━┻
    rainbowcat:
        (=^･ｪ･^=))ﾉ彡☆
    riot:
        ୧༼ಠ益ಠ༽୨
    rolleyes:
        (◔_◔)
    saddonger:
        ヽ༼ຈʖ̯ຈ༽ﾉ
    sadlenny:
        ( ͡° ʖ̯ ͡°)
    smirk:
        ¬‿¬
    sob:
        (;´༎ຶД༎ຶ`)
    soviettableflip:
        ノ┬─┬ノ ︵ ( \o°o)\
    strong:
        ᕙ(⇀‸↼‶)ᕗ
    suicide:
        ε/̵͇̿̿/’̿’̿ ̿(◡︵◡)
    surrender:
        \_(-_-)_/
    stalker:
        ┬┴┬┴┤(･_├┬┴┬┴
    swag:
        (̿▀̿‿ ̿▀̿ ̿)
    sword:
        o()xxxx[{::::::::::::::::::>
    tabledown:
        ┬─┬﻿ ノ( ゜-゜ノ)
    tableflip:
        (ノ ゜Д゜)ノ ︵ ┻━┻
    tears:
        (ಥ﹏ಥ)
    terrorist:
        ୧༼ಠ益ಠ༽︻╦╤─
    thanks thankyou ty:
        \(^-^)/
    this:
        ( ͡° ͜ʖ ͡°)_/¯
    tiefighter:
        |=-(¤)-=|
    toldyouso toldyou:
        ☜(꒡⌓꒡)
    toogood:
        ᕦ(òᴥó)ᕥ
    unflip:
        ┬──┬ ノ(ò_óノ)
    victory:
        (๑•̀ㅂ•́)ง✧
    wat:
        (ÒДÓױ)
    wave:
        ( * ^ *) ノシ
    whistle:
        (っ^з^)♪♬
    whoa:
        (°o•)
    why:
        ლ(`◉◞౪◟◉‵ლ)
    woo:
        ＼(＾O＾)／
    wtf:
        (⊙＿⊙')
    wut:
        ⊙ω⊙
    yeah yes:
        (•̀ᴗ•́)و ̑̑
    yolo:
        Yᵒᵘ Oᶰˡʸ Lᶤᵛᵉ Oᶰᶜᵉ
    youkids ukids:
        ლ༼>╭ ͟ʖ╮<༽ლ
    no yuno:
        (屮ﾟДﾟ)屮 Y U NO
    zen meditation omm:
        ⊹╰(⌣ʟ⌣)╯⊹
    zombie:
        [¬º-°]¬
    angel:
        ☜(⌒▽⌒)☞
    angry:
        •`_´•
    ass butt:
        (‿|‿)
    awkward:
        •͡˘㇁•͡˘
    bat:
        /|\ ^._.^ /|\
    bear koala:
        ʕ·͡ᴥ·ʔ﻿
    blush:
        (˵ ͡° ͜ʖ ͡°˵)
    bored:
        (-_-)
    bubbles:
        ( ˘ ³˘)ノ°ﾟº❍｡
    cat:
        (= ФェФ=)
    cheer:
        ※\(^o^)/※
    cool csi:
        (•_•) ( •_•)>⌐■-■ (⌐■_■)
    cry:
        (╥﹏╥)
    cute:
        (｡◕‿‿◕｡)
    dead:
        x⸑x
    depressed:
        (︶︹︶)
    dog:
        (◕ᴥ◕ʋ)
    evil:
        ψ(｀∇´)ψ
    excited:
        (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
    facepalm:
        (－‸ლ)
    fight:
        (ง •̀_•́)ง
    fish:
        <"(((<3
    flower flor:
        (✿◠‿◠)
    glasses:
        (⌐ ͡■ ͜ʖ ͡■)
    happy:
        ٩( ๑╹ ꇴ╹)۶
    kiss:
        (づ ￣ ³￣)づ
    look:
        (ಡ_ಡ)☞
    loud noise:
        ᕦ(⩾﹏⩽)ᕥ
    no:
        →_←
    peace victory:
        ✌(-‿-)✌
    really:
        ò_ô
    rose:
        ✿ڿڰۣ—
    run:
        (╯°□°)╯
    sad:
        ε(´סּ︵סּ`)з
    shout:
        ╚(•⌂•)╝
    shy:
        =^_^=
    smiley:
        ☺︎
    squid:
        <コ:彡
    surprised:
        (๑•́ ヮ •̀๑)
    tired:
        (=____=)
    yay:
        \( ﾟヮﾟ)/
    zoidberg:
        (V) (°,,,,°) (V)
```

---

Feedback from usage and contributions are very welcome.
Also if you like it, please leave a :star: I would appreciate it ;)
