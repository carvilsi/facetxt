/* eslint camelcase: "off" */

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
        }
    },
    kaomoji_faces: {
        troubled: [ '(>_<)', '(>_<)>', '(>w<)' ],
        baby: [ '(\';\')' ]
    }
};

const custom = {
    myth: {
        cthulhu: [ '^(;,;)^' ]
    }
};

const faces = { ...canonical, ...custom };

export default faces;
