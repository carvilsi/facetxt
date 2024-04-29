/* eslint camelcase: "off" */

// asciimoji entries from: https://github.com/jigglycrumb/ASCIImoji
// with lincense:
/*
* ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * As long as you retain this notice you can do whatever you want
 * with this stuff. If we meet some day, and you think this stuff is worth it,
 * you can buy me a beer in return.
 * ----------------------------------------------------------------------------
*/

const canonical = {
    western: {
        sideways_latin_only_emoticons: {
            smiley_happy_face: [
                ':‑)', ':)', ':-]', ':]', ':->', ':>', '8-)', '8)', ':-}', ':}',
                ':o)', ':c)', ':^)', '=]', '=)'
            ],
            laughing_big_grin_grinning_with_glasses: [
                ':‑D', '8‑D', ':D', '8D', '=D', '=3', 'c:', 'C:', 'B^D'
            ],
            laughing: [ 'x‑D', 'X‑D', 'xD', 'XD' ],
            very_happy_or_double_chin: [ ':_))' ],
            crying: [ ':\'‑(', ':\'(', ':=(' ],
            tear_of_happinesis: [ ':\'‑)', ':\')', ':"D' ],
            angry: [ '>:(', '>:[' ],
            horror_disgust_sadness_great_dismay: [
                'D‑\':', 'D:<', 'D:', 'D8', 'D;', 'D=', 'DX'
            ],
            surprise_shock: [
                ':‑O', ':‑o', ':O', ':o', ':0', ':-0', '8‑0', '>:O', '=O', '=o', '=0'
            ],
            cat_face_curled_mouth_cutesy_playful_mischievous: [
                ':-3', ':3', '=3', 'x3', 'X3'
            ],
            lion_smile_evil_cat: [ '>:3' ],
            kiss: [ ':-*', ':*', ':×' ],
            wink_smirt: [
                ';‑)', ';)', '*-)', '*)', ';‑]', ';]', ';^)', ';>', ':‑,', ';D', ';3'
            ],
            tongue_sticking_out_cheeky_playful_blowing_raspberry: [
                ':‑P', ':P', 'X‑P', 'XP', 'x‑p', 'xp', ':‑p', ':p', ':‑Þ', ':Þ',
                ':‑þ', ':þ', ':‑b', ':b', 'd:', '=p', '>:P'
            ],
            skeptical_annoyed_undecided_uneasy_hesitant: [
                ':-/', ':/', ':‑.', '>:\\', '>:/', ':\\', '=/', '=\\', ':L', '=L', ':S'
            ],
            straight_face_no_expression_indecision: [ ':‑|', ':|' ],
            embarrassed_blushing: [ ':$', '://)', '://3' ],
            sealed_lips_wearing_braces_tongue_tied: [
                ':‑X', ':X', ':‑#', ':#', ':‑&', ':&'
            ],
            angel_halo_saint_innocent: [
                'O:‑)', 'O:)', '0:‑3', '0:3', '0:‑)', '0:)', '0;^)'
            ],
            evil_devilish: [
                '>:‑)', '>:)', '}:‑)', '}:)', '3:‑)', '3:)', '>;‑)', '>;)', '>:3', '>;3'
            ],
            cool_bored_yawning: [ '|;‑)', '|‑O', 'B-)' ],
            tongue_in_cheek: [ ':-J' ],
            partied_all_night: [ '#-)' ],
            drunk_confused: [ '%‑)', '%)' ],
            being_sick: [ ':‑###..', ':###..' ],
            dumb_dunce_like: [ '<:‑|' ],
            scepticism_disbelief_disapproval: [ '\',:-|', '\',:-l' ],
            grimacing_nervous_awkward: [ ':E' ],
            skull_and_crossbones: [ '8-X', '8=X', 'x-3', 'x=3' ],
            chicken: [ '~:>' ]
        },
        sideways_atin_only_single_line_art_and_portraits: {
            rose: [ '@};-', '@}->--', '@}‑;‑\'‑‑‑', '@>‑‑>‑‑' ],
            penis_ejaculation: [ '8====D', '8===D', '8=D', '3=D', '8=>', '8===D~~~' ],
            elvis_presley: [ '5:‑)' ],
            santa_claus: [ '*<|:‑)' ],
            homer_simpson: [ '~(_8^(I)' ],
            bill_clinton: [ '=:o]' ],
            ronald_reagan: [ '7:^]', ',:‑)' ],
            heart: [ '<3' ],
            broken_heart: [ '</3', '<\\3' ]
        },
        upright_latin_only_emoticons_and_single_line_art_and_portraits: {
            fish_something_fishy_ichthys_fish: [ '><>', '<><', '<*)))‑{', '><(((*>' ],
            cheer_yay_yay: [ '\\o/' ],
            cheerleader: [ '*\\0/*' ],
            salute: [ 'o7' ],
            john_lennon: [ '//0‑0\\\\' ],
            zoidberg: [ '(V) (;, ;) (V)', '(V)(°, °)(V)' ],
            sadness_great_dismay_disgust: [ ';v.v', '._.', '._.;' ],
            crying: [ 'QQ', 'qq', 'Qq' ],
            dead_person_fainted: [ 'X_X', 'x_x', '+_+', 'X_x', 'x_X' ],
            sideways_look_devious_or_guilty: [ '<_<', '>_>', '<.<', '>.>' ],
            surprise_shock_yawn: [
                'O_O', 'o_o', 'O-O', 'o‑o', 'O_o', 'o_O'
            ],
            skeptical_annoyed_undecided_uneasy_hesitant: [ '>.<', '>_<' ],
            high_five: [ '^5', 'o/\\o', '>_>^ ^<_<' ],
            crab_lobster: [ 'V.v.V', 'V=(° °)=V' ],
            shark: [ '(^^^)' ],
            three_TIE_fighters: [ '|-o-| [-o-] |-o-|' ],
            bandage: [ '(::[]::)' ],
            breasts: [ '(o)(o) ( • )( • ) (. Y .)' ]
        },
        upright_unicode_incorporating_emoticons_and_single_line_art: {
            darwin_evolution_fish: [
                'ӽd̲̅a̲̅r̲̅w̲̅i̲̅ɳ̲̅ᕗ', 'Ӽd̲̅a̲̅r̲̅w̲̅i̲̅ɳ̲̅ᕗ', 'ӽe̲̅v̲̅o̲̅l̲̅u̲̅t̲̅i̲̅o̲̅ɳ̲̅ᕗ', 'Ӽe̲̅v̲̅o̲̅l̲̅u̲̅t̲̅i̲̅o̲̅ɳ̲̅ᕗ'
            ],
            dollar_notes: [ '[̲̅$̲̅(̲̅1̲̅)̲̅$̲̅]', '[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]', '[̲̅$̲̅(̲̅1̲̅0̲̅)̲̅$̲̅]', '[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]' ],
            lenny_face: [ '( ͡° ͜ʖ ͡°)' ],
            disapproval_look: [ 'ಠ_ಠ', 'ಠ__ಠ', 'ಠ益ಠ' ],
            bat: [ '⎛⎝(•ⱅ•)⎠⎞', '◥▅◤', '◢▅◣' ],
            kiss: [ '(๑ˇεˇ๑)s' ],
            flower_girl: [ '(◕‿◕✿)' ],
            crying: [ '(༎ຶ ۝ ༎ຶ )' ],
            cat: [ '(=ʘᆽʘ=)', 'ฅ(^•ﻌ•^ฅ)' ],
            bear: [ 'ʕ•ᴥ•ʔ', 'ʕ·(エ)·ʔ', 'ʕ– ㉨–ʔ', '⊂(￣(ｴ)￣)⊃' ]
        }
    },
    eastern: {
        kaomoji_faces: {
            troubled: [ '(>_<)', '(>_<)>', '(>w<)' ],
            baby: [ '(\';\')' ],
            nervous_embarrassed_troubled_shy_sweat_drop: [
                '(^^ゞ', '(^_^;)', '(-_-;)', '(~_~;)', '(・.・;)', '(・_・;)',
                '(・・;)', '^^;', '^_^;', '(#^.^#)', '(^ ^;)'
            ],
            embarrassed_flushed: [ '(⁄⁄•⁄ω⁄•⁄⁄)' ],
            smoking: [ '(^.^)y-.o○', '(-.-)y-°°°' ],
            sleeping: [ '(-_-)zzz' ],
            wink: [ '(^_-)', '(^_-)-☆' ],
            confused: [
                '((+_+))', '(+o+)', '(°°)', '(°-°)', '(°.°)', '(°_°)', '(°_°>)', '(°レ°)'
            ],
            ultraman: [ '(o|o)' ],
            joyful: [
                '^_^', '(°o°)', '(^_^)', '/(^O^)／', '(^o^)／', '(^^)/', '(≧∇≦)/',
                '(/◕ヮ◕)/', '(^o^)丿', '∩(·ω·)∩', '(·ω·)', '^ω^'
            ],
            kowtow_respect_dogeza_apology: [
                '(__)', '_(._.)_', '_(_^_)_', '<(_ _)>', '<m(__)m>', 'm(_ _)m'
            ],
            middle_fingers: [ '(凸ಠ益ಠ)凸' ],
            questioning: [ '＼(°ロ＼)', '(／ロ°)／' ],
            sad_crying: [
                '(\'_\')', '(/_;)', '(T_T)', '(;_;)', '(;_;', '(;_:)', '(;O;)', '(:_;)',
                '(ToT)', '(Ｔ▽Ｔ)', ';_;', ';-;', ';n;', ';;', 'Q.Q', 'T.T', 'TnT', 'QQ',
                'Q_Q'
            ],
            shame: [ '(ー_ー)!!', '(-.-)', '(-_-)', '(一一)', '(；一_一)' ],
            tired: [ '(=_=)' ],
            cat: [ '(=^・^=)', '(=^・・^=)', '=^_^=' ],
            looking_down_sadness_boredom: [ '(..)', '(._.)' ],
            giggling_with_hand_covering_mouth: [ '^m^' ],
            confusion: [ '(・・?', '(?_?)' ],
            facepalm: [ '(－‸ლ)' ],
            laugh: [
                '>^_^<', '<^!^>', '^/^', '（*^_^*）', '§^.^§', '(^<^)', ' (^.^)', '(^ム^)',
                '(^·^)', '(^.^)', '(^_^.)', '(^_^)', '(^^)', ' (^J^)', '(*^.^*)', '^_^',
                '(#^.^#)', '（^—^）'
            ],
            waving: [
                '(^^)/~~~', '(^_^)/~', '(;_;)/~~~', '(^.^)/~~~', '(-_-)/~~~', '($··)/~~~',
                '(@^^)/~~~', '(T_T)/~~~', '(ToT)/~~~'
            ],
            alien_baltan: [ '(V)o￥o(V)' ],
            excited: [
                '＼(~o~)／', '＼(^o^)／', '＼(-o-)／', 'ヽ(^。^)ノ', 'ヽ(^o^)丿', '(*^0^*)'
            ],
            amazed: [
                '(*_*)', '(*_*;', '(+_+)', '(@_@)', '(@_@。', '(＠_＠;)', '＼(◎o◎)／！'
            ],
            laughing_cheerful: [
                '(*^^)v', '(^^)v', '(^_^)v', '（’-’*)', '(＾ｖ＾)', '(＾▽＾)', '(・∀・)',
                '(´∀`)', '(⌒▽⌒）'
            ],
            hopeless: [ '＼(^o^)／', '\\(^o^)/' ],
            shame_sadness: [ '(~o~)', '(~_~)' ],
            kiss: [ '(^^ゞ' ],
            calmness: [ 'ˊ＿>ˋ' ],
            headphones_listening_music: [ '((d[-_-]b))' ],
            worried: [
                '(-"-)', '(ーー゛)', '(^_^メ)', '(-_-メ)', '(~_~メ)', '(－－〆)',
                '(・へ・)', '(｀´)', '<`～´>', '<`ヘ´>', '(ーー;)'
            ],
            eyeglasses: [ '(^0_0^)' ],
            jotting_note: [ '( ..)φ', 'φ(..)' ],
            happy: [
                '(●＾o＾●)', '(＾ｖ＾)', '(＾ｕ＾)', '(＾◇＾)', '( ^)o(^ )', '(^O^)',
                '(^o^)', '(^○^)', ')^o^( (*^▽^*)', '(✿◠‿◠)'
            ],
            grinning: [ '(￣ー￣)' ],
            surprised: [
                '(￣□￣;)', '°o°', '°O°', ':O', 'o_O', 'o_0', 'o.O', '(o.o)', 'oO'
            ],
            infatuation: [ '(*´▽｀*)', '(*°∀°)=3' ],
            dancing_swinging_arms_back_and_forth_happy_gary: [ 'ᕕ( ᐛ )ᕗ' ],
            shocked_surprised: [ '（ ﾟ Дﾟ)', '(°◇°)' ],
            dissatisfied: [ '(*￣m￣)' ],
            mellow_shrug: [ 'ヽ(´ー｀)┌', '¯\\_(ツ)_/¯', '¯\\(°_o)/¯' ],
            snubbed_deflated: [ '(´･ω･`)', '(‘A`)' ],
            hugging_reaching_kissing: [ '(づ￣ ³￣)づ' ],
            blowing_kiss: [ '(*^3^)/~☆' ],
            studying: [ '.....φ(・∀・＊)' ],
            sleep: [ '(-_-)', 'zzz(︶｡︶✽)' ],
            joy_cute: [ 'uwu', 'UwU' ],
            cute_inquisitive_perplexed_furry_fandom: [ 'OWO', 'OwO' ],
            distress_jiong_patterned_window: [ '囧' ],
            porter_robinson: [ '【=◈︿◈=】' ]
        },
        other_eastern_emoticons: {
            bubbles: [ '.o○', '○o.' ],
            cup_tea: [ '( ^^)', '_U~~', '( ^^)', '_旦~~' ],
            shooting_star: [ '☆彡', '☆ミ' ],
            fish: [
                '>°)))彡', '(Q   ))', '><ヨヨ (°))<<', '>°))))彡', '<°)))彡', '>°))彡',
                ' <+', '))><<', '<*))', '>=<'
            ],
            squid_octopus: [ '<コ:彡', 'Ｃ:.ミ' ],
            snake: [ '~>°)～～～' ],
            bat: [ '～°·_·°～' ],
            tadpole: [ '(°°)～' ],
            bomb: [ '●～*' ],
            despair: [ '￣|○', 'STO', 'OTZ', 'OTL', 'orz', '囧rz' ],
            table_flip: [ '(╯°□°）╯︵', '┻━┻┬──┬ ¯\\_(ツ)', '┻━┻︵ヽ(`Д´)ﾉ︵ ',
                '┻━┻┬─┬ノ( º _ ºノ)', '(ノಠ益ಠ)ノ彡┻━┻'
            ],
        },
    },
    two_channel: {
        _2channel: {
            perky: [ '(`･ω･´)' ],
            salute: [ '(｀-´)>' ],
            terribly_sad: [ '(´；ω；`)' ],
            peace_mind: [ 'ヽ(´ー｀)ﾉ' ],
            be_irritable: [ 'ヽ(`Д´)ﾉ' ],
            angry: [ '(＃ﾟДﾟ)' ],
            yelling_panting: [ '（ ´Д｀）' ],
            surprised_loudmouthed: [ '（　ﾟДﾟ）' ],
            do_not_know_answer: [ '┐(\'～`；)┌' ],
            carefree: [ '（´∀｀）' ],
            indifferent: [ '（　´_ゝ`）' ],
            shocked: [ 'Σ(゜д゜;)' ],
            happy_upbeat: [ '( ﾟヮﾟ)', '^ㅂ^', 'ヽ(´▽`)/' ],
            carefree_above_arms_stretched_out_while_running_soaring: [
                '⊂二二二（＾ω＾）二⊃'
            ],
            spook: [ '(((( ；ﾟдﾟ))' ],
            huge_surprise: [ 'σ(ﾟдﾟ)' ],
            jog_someone_cheek: [ '(´∀｀)σ)∀`)' ],
            amazed: [ '( ﾟдﾟ)' ],
            smoking :[ '(´ー`)y-~~' ],
            toast_cheers: [ '（ ^_^）o自自o（^_^ ）' ],
            flash_intuition: [ 'm9(・∀・)' ],
            friendly: [ 'ヽ(´ー`)人(´∇｀)人(`д´)ノ' ],
            lonely: [ '(\'a`)' ],
            depressed_unsatisfied: [ '（ ´,_ゝ`)' ],
            thinking: [ '（´-`）.｡oo( ... )' ],
            impatience: [ '(ﾟдﾟ;≡;ﾟдﾟ)' ],
            whispers: [ '( ´д)ﾋｿ(´д｀)ﾋｿ(д｀)' ],
            carrying_money: [ '（･∀･)つ⑩ ' ],
            sliding_belly_whooaaa: [ '⊂（ﾟдﾟ⊂⌒｀つ≡≡≡(´⌒;;;≡≡≡' ],
            unforeseen: [ '(ﾟдﾟ)' ],
            i_do_not_need_it: [ '(ﾟ⊿ﾟ)' ],
            come_on: [ 'щ(ﾟдﾟщ) (屮ﾟдﾟ)屮' ],
            mocking_good: [ '（・∀・）' ],
            that_is_bad: [ '（・ａ・）' ],
            discharged_drug_in_brain_goofing_around: [ '(ﾟ∀ﾟ)' ],
            sad: [ '（ つ д ｀）' ],
            not_convincing: [ 'エェェ(´д｀)ェェエ' ],
            simper_snorlax: [ '(￣ー￣)' ],
            deflagged: [ '[ﾟдﾟ]' ],
            happy_expressions_dancing_music: [ '♪┏(・o･)┛♪┗ ( ･o･) ┓' ],
            happy_expression: [ 'd(*⌒▽⌒*)b' ],
            given_up_despair: [ '＿|￣|○' ],
            extreme_distaste: [ '(╬ ಠ益ಠ)' ],
            shouting: [ '(≧ロ≦)' ],
            pretending_not_notice_asleep_boredom: [ '(θεθ;)' ],
            kick: [
                '＼| ￣ヘ￣|／＿＿＿＿＿＿＿θ☆( *o*)/'
            ],
            discombobulated: [ '┌(；`～,)┐' ],
            running: [ 'ε=ε=ε=┌(;*´д`)ﾉ' ],
            shocked_2ch: [ '(l\'o\'l)' ],
            really_angry: [ 'ヽ(ｏ`皿′ｏ)ﾉ' ],
            do_it: [ '(☞ﾟヮﾟ)☞', '☜(ﾟヮﾟ☜)' ],
            angel: [ '☜(⌒▽⌒)☞ ' ]
        },
        _2channel_emoticons_containing_japanese_phrases: {
            its_here_kitaa_excitement: [
                'キタ━━━(゜∀゜)━━━!!!!!'
            ],
            girlish_its_here_kitaa_excitementversion: [
                'ｷﾀﾜァ*･゜ﾟ･*:.｡..｡.:*･゜(n‘∀‘)ηﾟ･*:.｡. .｡.:*･゜ﾟ･* !!'
            ],
            erotic_stirring_haa_haa: [ '(*´Д`)ﾊｧﾊｧ' ],
            patting_nade_nade: [
                '(　´Д｀)ﾉ(´･ω･`)　ﾅﾃﾞﾅﾃﾞ'
            ],
            calling_out_ooooi: [
                '(*ﾟﾉOﾟ)<ｵｵｵｵｫｫｫｫｫｫｫｰｰｰｰｰｲ!'
            ],
            evil_laugh: [
                '( ﾟ∀ﾟ)ｱﾊﾊ八八ﾉヽﾉヽﾉヽﾉ ＼ / ＼/ ＼'
            ],
            blaming_now_now: [
                '（・∀・ ）ヾ(- -；)コラコラ' ],
            kana_reading_o_ya_su_mi: [
                'お(^o^)や(^O^)す(^｡^)みぃ(^-^)ﾉﾞ'
            ]
        }
    }
};

const customs = {
    custom: {
        cthulhu: [ '^(;,;)^' ],
        facepalm: [ '(P,\')', '(p,\')' ],
        horns_heavy: [ '\\m/,' ],
        question: [ '(p_-)', '(-_q)' ],
        star: [ '☆' ],
        thinking_nonocle: [ 'õ_o', 'o_Ô' ],
        dazed: [ '@_@' ],
        greedy: [ '$_$' ],
        confusion: [ '?_?' ],
        shyness: [ '6_6' ],
        surprise_shock: [ '!_!' ]
    },
    asciimoji: {
        acid: [ '⊂(◉‿◉)つ' ],
        afraid: [ '(ㆆ _ ㆆ)' ],
        arrowhead: [ '⤜(ⱺ ʖ̯ⱺ)⤏' ],
        bearflip: [ 'ʕノ•ᴥ•ʔノ ︵ ┻━┻' ],
        bearhug: [ 'ʕっ•ᴥ•ʔっ' ],
        blackeye: [ '0__#' ],
        blubby: [ '(      0    _   0    )' ],
        bond_007: [ '┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿' ],
        boobs: [ '( . Y . )' ],
        bribe: [ '( •͡˘ _•͡˘)ノð' ],
        butterfly: [ 'ƸӜƷ' ],
        catlenny: [ '( ͡° ᴥ ͡°)﻿' ],
        chubby: [ '╭(ʘ̆~◞౪◟~ʘ̆)╮' ],
        claro: [ '(͡ ° ͜ʖ ͡ °)' ],
        clique_gang_squad: [ 'ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ' ],
        coffee_cuppa: [ 'c[_]' ],
        creep: [ 'ԅ(≖‿≖ԅ)' ],
        creepcute: [ 'ƪ(ړײ)‎ƪ​​' ],
        crim3s: [ '( ✜︵✜ )' ],
        crywave: [ '( ╥﹏╥) ノシ' ],
        dab: [ 'ヽ( •_)ᕗ' ],
        damnyou: [ '(ᕗ ͠° ਊ ͠° )ᕗ' ],
        dance: [ 'ᕕ(⌐■_■)ᕗ ♪♬' ],
        dealwithit_dwi: [ '(⌐■_■)' ],
        derp: [ '☉ ‿ ⚆' ],
        dj: [ 'd[-_-]b' ],
        dong: [ '(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄' ],
        donger: [ 'ヽ༼ຈل͜ຈ༽ﾉ' ],
        dontcare_idc: [ '(- ʖ̯-)' ],
        want_dontwant: [ 'ヽ(｀Д´)ﾉ' ],
        dope: [ '<(^_^)>' ],
        doubleflat: [ '𝄫' ],
        doublesharp: [ '𝄪' ],
        doubletableflip: [ '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻' ],
        duckface: [ '(・3・)' ],
        duel: [ 'ᕕ(╭ರ╭ ͟ʖ╮•́)⊃¤=(————-' ],
        duh: [ '(≧︿≦)' ],
        dunno: [ '¯\\(°_o)/¯' ],
        eeriemob: [ '(-(-_-(-_(-_(-_-)_-)-_-)_-)_-)-)' ],
        endure: [ '(҂◡_◡) ᕤ' ],
        envelope_letter: [ '✉︎' ],
        evillenny: [ '(͠≖ ͜ʖ͠≖)' ],
        execution: [ '(⌐■_■)︻╦╤─   (╥﹏╥)' ],
        facebook: [ '(╯°□°)╯︵ ʞooqǝɔɐɟ' ],
        fart: [ '(ˆ⺫ˆ๑)<3' ],
        finn: [ '| (• ◡•)|' ],
        flexing: [ 'ᕙ(`▽´)ᕗ' ],
        flipped_heavytable: [ '┬─┬﻿ ︵ /(.□. \\）' ],
        fly: [ '─=≡Σ((( つ◕ل͜◕)つ' ],
        friendflip: [ '(╯°□°)╯︵ ┻━┻ ︵ ╯(°□° ╯)' ],
        frown: [ '(ღ˘⌣˘ღ)' ],
        fuckoff_gtfo: [ '୧༼ಠ益ಠ╭∩╮༽' ],
        fuckyou_fu: [ '┌П┐(ಠ_ಠ)' ],
        gentleman_sir_monocle: [ 'ಠ_ರೃ' ],
        ghast: [ '= _ =' ],
        ghost: [ '༼ つ ╹ ╹ ༽つ' ],
        gift_present: [ '(´・ω・)っ由' ],
        gimme: [ '༼ つ ◕_◕ ༽つ' ],
        givemeyourmoney: [ '(•-•)⌐' ],
        glitter: [ '(*・‿・)ノ⌒*:･ﾟ✧' ],
        glassesoff: [ '( ͡° ͜ʖ ͡°)ﾉ⌐■-■' ],
        glitterderp: [ '(ﾉ☉ヮ⚆)ﾉ ⌒*:･ﾟ✧' ],
        gloomy: [ '(_゜_゜_)' ],
        goatse: [ '(з๏ε)' ],
        gotit: [ '(☞ﾟ∀ﾟ)☞' ],
        greet_greetings: [ '( ´◔ ω◔`) ノシ' ],
        gun_mg: [ '︻╦╤─' ],
        hadouken: [ '༼つಠ益ಠ༽つ ─=≡ΣO))' ],
        haha: [ '٩(^‿^)۶' ],
        happygarry: [ 'ᕕ( ᐛ )ᕗ' ],
        hello_ohai_bye: [ '(ʘ‿ʘ)╯' ],
        help: [ '\\(°Ω°)/' ],
        highfive: [ '._.)/\\(._.' ],
        hitting: [ '( ｀皿´)｡ﾐ/' ],
        hug_hugs: [ '(づ｡◕‿‿◕｡)づ' ],
        iknowright_ikr: [ '┐｜･ิω･ิ#｜┌' ],
        illuminati: [ '୧(▲ᴗ▲)ノ' ],
        inlove: [ '(っ´ω`c)♡' ],
        internet: [ 'ଘ(੭*ˊᵕˋ)੭* ̀ˋ ɪɴᴛᴇʀɴᴇᴛ' ],
        jake: [ '(❍ᴥ❍ʋ)' ],
        kappa: [ '(¬,‿,¬)' ],
        kawaii: [ '≧◡≦' ],
        keen: [ '┬┴┬┴┤Ɵ͆ل͜Ɵ͆ ༽ﾉ' ],
        kiahh: [ '~\\(≧▽≦)/~' ],
        kyubey: [ '／人◕ ‿‿ ◕人＼' ],
        lazy: [ '_(:3」∠)_' ],
        lennybill: [ '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]' ],
        lennyfight: [ '(ง ͠° ͟ʖ ͡°)ง' ],
        lennyflip: [ '(ノ ͡° ͜ʖ ͡°ノ)   ︵ ( ͜。 ͡ʖ ͜。)' ],
        lennygang: [ '( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)' ],
        lennyshrug: [ '¯\\_( ͡° ͜ʖ ͡°)_/¯' ],
        lennysir: [ '( ಠ ͜ʖ ರೃ)' ],
        lennystalker: [ '┬┴┬┴┤( ͡° ͜ʖ├┬┴┬┴' ],
        lennystrong: [ 'ᕦ( ͡° ͜ʖ ͡°)ᕤ' ],
        lennywizard: [ '╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ' ],
        lol: [ 'L(° O °L)' ],
        love: [ '♥‿♥' ],
        lovebear: [ 'ʕ♥ᴥ♥ʔ' ],
        lumpy: [ '꒰ ꒡⌓꒡꒱' ],
        luv: [ '-`ღ´-' ],
        magic: [ 'ヽ(｀Д´)⊃━☆ﾟ. * ･ ｡ﾟ,' ],
        magicflip: [ '(/¯◡ ‿ ◡)/¯ ~ ┻━┻' ],
        meep: [ '\\(°^°)/' ],
        meh: [ 'ಠ_ಠ' ],
        metal_rock: [ '\\m/,(> . <)_\\m/' ],
        mistyeyes: [ 'ಡ_ಡ' ],
        monster: [ '༼ ༎ຶ ෴ ༎ຶ༽' ],
        needle_inject: [ '┌(◉ ͜ʖ◉)つ┣▇▇▇═──' ],
        nerd: [ '(⌐⊙_⊙)' ],
        nice: [ '( ͡° ͜ °)' ],
        noclue: [ '／人◕ __ ◕人＼' ],
        nom_yummy_delicious: [ '(っˆڡˆς)' ],
        nyan: [ '~=[,,_,,]:3' ],
        nyeh: [ '@^@' ],
        ohshit: [ '( º﹃º )' ],
        omg: [ '◕_◕' ],
        orly: [ '(눈_눈)' ],
        ohyou_ou: [ '(◞థ౪థ)ᴖ' ],
        pear: [ '(__>-' ],
        pingpong: [ '( •_•)O*¯`·.¸.·´¯`°Q(•_• )' ],
        plain: [ '._.' ],
        pleased: [ '(˶‾᷄ ⁻̫ ‾᷅˵)' ],
        point: [ '(☞ﾟヮﾟ)☞' ],
        pooh: [ 'ʕ •́؈•̀)' ],
        porcupine: [ '(•ᴥ• )́`́\'́`́\'́⻍' ],
        praise: [ '(☝ ՞ਊ ՞)☝' ],
        punch: [ 'O=(\'-\'Q)' ],
        rage_mad: [ 't(ಠ益ಠt)' ],
        rageflip: [ '(ノಠ益ಠ)ノ彡┻━┻' ],
        rainbowcat: [ '(=^･ｪ･^=))ﾉ彡☆' ],
        riot: [ '୧༼ಠ益ಠ༽୨' ],
        rolleyes: [ '(◔_◔)' ],
        saddonger: [ 'ヽ༼ຈʖ̯ຈ༽ﾉ' ],
        sadlenny: [ '( ͡° ʖ̯ ͡°)' ],
        smirk: [ '¬‿¬' ],
        sob: [ '(;´༎ຶД༎ຶ`)' ],
        soviettableflip: [ 'ノ┬─┬ノ ︵ ( \\o°o)\\' ],
        strong: [ 'ᕙ(⇀‸↼‶)ᕗ' ],
        suicide: [ 'ε/̵͇̿̿/’̿’̿ ̿(◡︵◡)' ],
        surrender: [ '\\_(-_-)_/' ],
        stalker: [ '┬┴┬┴┤(･_├┬┴┬┴' ],
        swag: [ '(̿▀̿‿ ̿▀̿ ̿)' ],
        sword: [ 'o()xxxx[{::::::::::::::::::>' ],
        tabledown: [ '┬─┬﻿ ノ( ゜-゜ノ)' ],
        tableflip: [ '(ノ ゜Д゜)ノ ︵ ┻━┻' ],
        tears: [ '(ಥ﹏ಥ)' ],
        terrorist: [ '୧༼ಠ益ಠ༽︻╦╤─' ],
        thanks_thankyou_ty: [ '\\(^-^)/' ],
        this: [ '( ͡° ͜ʖ ͡°)_/¯' ],
        tiefighter: [ '|=-(¤)-=|' ],
        toldyouso_toldyou: [ '☜(꒡⌓꒡)' ],
        toogood: [ 'ᕦ(òᴥó)ᕥ' ],
        unflip: [ '┬──┬ ノ(ò_óノ)' ],
        victory: [ '(๑•̀ㅂ•́)ง✧' ],
        wat: [ '(ÒДÓױ)' ],
        wave: [ '( * ^ *) ノシ' ],
        whistle: [ '(っ^з^)♪♬' ],
        whoa: [ '(°o•)' ],
        why: [ 'ლ(`◉◞౪◟◉‵ლ)' ],
        woo: [ '＼(＾O＾)／' ],
        wtf: [ '(⊙＿⊙\')' ],
        wut: [ '⊙ω⊙' ],
        yeah_yes: [ '(•̀ᴗ•́)و ̑̑' ],
        yolo: [ 'Yᵒᵘ Oᶰˡʸ Lᶤᵛᵉ Oᶰᶜᵉ' ],
        youkids_ukids: [ 'ლ༼>╭ ͟ʖ╮<༽ლ' ],
        no_yuno: [ '(屮ﾟДﾟ)屮 Y U NO' ],
        zen_meditation_omm: [ '⊹╰(⌣ʟ⌣)╯⊹' ],
        zombie: [ '[¬º-°]¬' ],
        angel: [ '☜(⌒▽⌒)☞' ],
        angry: [ '•`_´•' ],
        ass_butt: [ '(‿|‿)' ],
        awkward: [ '•͡˘㇁•͡˘' ],
        bat: [ '/|\\ ^._.^ /|\\' ],
        bear_koala: [ 'ʕ·͡ᴥ·ʔ﻿' ],
        blush: [ '(˵ ͡° ͜ʖ ͡°˵)' ],
        bored: [ '(-_-)' ],
        bubbles: [ '( ˘ ³˘)ノ°ﾟº❍｡' ],
        cat: [ '(= ФェФ=)' ],
        cheer: [ '※\\(^o^)/※' ],
        cool_csi: [ '(•_•) ( •_•)>⌐■-■ (⌐■_■)' ],
        cry: [ '(╥﹏╥)' ],
        cute: [ '(｡◕‿‿◕｡)' ],
        dead: [ 'x⸑x' ],
        depressed: [ '(︶︹︶)' ],
        dog: [ '(◕ᴥ◕ʋ)' ],
        evil: [ 'ψ(｀∇´)ψ' ],
        excited: [ '(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧' ],
        facepalm: [ '(－‸ლ)' ],
        fight: [ '(ง •̀_•́)ง' ],
        fish: [ '<"(((<3' ],
        flower_flor: [ '(✿◠‿◠)' ],
        glasses: [ '(⌐ ͡■ ͜ʖ ͡■)' ],
        happy: [ '٩( ๑╹ ꇴ╹)۶' ],
        kiss: [ '(づ ￣ ³￣)づ' ],
        look: [ '(ಡ_ಡ)☞' ],
        loud_noise: [ 'ᕦ(⩾﹏⩽)ᕥ' ],
        no: [ '→_←' ],
        peace_victory: [ '✌(-‿-)✌' ],
        really: [ 'ò_ô' ],
        rose: [ '✿ڿڰۣ—' ],
        run: [ '(╯°□°)╯' ],
        sad: [ 'ε(´סּ︵סּ`)з' ],
        shout: [ '╚(•⌂•)╝' ],
        shy: [ '=^_^=' ],
        smiley: [ '☺︎' ],
        squid: [ '<コ:彡' ],
        surprised: [ '(๑•́ ヮ •̀๑)' ],
        tired: [ '(=____=)' ],
        yay: [ '\\( ﾟヮﾟ)/' ],
        zoidberg: [ '(V) (°,,,,°) (V)' ],
    }
};

const faces = { ...canonical, ...customs };

export default faces;
