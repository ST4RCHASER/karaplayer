export default function convertInstrumentIdToName(instrumentId: number) {
    switch(instrumentId) {
        case 0: return 'acoustic_grand_piano';
        case 1: return 'bright_acoustic_piano';
        case 2: return 'electric_grand_piano';
        case 3: return 'honkytonk_piano';
        case 4: return 'electric_piano_1';
        case 5: return 'electric_piano_2';
        case 6: return 'harpsichord';
        case 7: return 'clavinet';
        case 8: return 'celesta';
        case 9: return 'glockenspiel';
        case 10: return 'music_box';
        case 11: return 'vibraphone';
        case 12: return 'marimba';
        case 13: return 'xylophone';
        case 14: return 'tubular_bells';
        case 15: return 'dulcimer';
        case 16: return 'drawbar_organ';
        case 17: return 'percussive_organ';
        case 18: return 'rock_organ';
        case 19: return 'church_organ';
        case 20: return 'reed_organ';
        case 21: return 'accordion';
        case 22: return 'harmonica';
        case 23: return 'tango_accordion';
        case 24: return 'acoustic_guitar_nylon';
        case 25: return 'acoustic_guitar_steel';
        case 26: return 'electric_guitar_jazz';
        case 27: return 'electric_guitar_clean';
        case 28: return 'electric_guitar_muted';
        case 29: return 'overdriven_guitar';
        case 30: return 'distortion_guitar';
        case 31: return 'guitar_harmonics';
        case 32: return 'acoustic_bass';
        case 33: return 'electric_bass_finger';
        case 34: return 'electric_bass_pick';
        case 35: return 'fretless_bass';
        case 36: return 'slap_bass_1';
        case 37: return 'slap_bass_2';
        case 38: return 'synth_bass_1';
        case 39: return 'synth_bass_2';
        case 40: return 'violin';
        case 41: return 'viola';
        case 42: return 'cello';
        case 43: return 'contrabass';
        case 44: return 'tremolo_strings';
        case 45: return 'pizzicato_strings';
        case 46: return 'orchestral_harp';
        case 47: return 'timpani';
        case 48: return 'string_ensemble_1';
        case 49: return 'string_ensemble_2';
        case 50: return 'synth_strings_1';
        case 51: return 'synth_strings_2';
        case 52: return 'choir_aahs';
        case 53: return 'voice_oohs';
        case 54: return 'synth_choir';
        case 55: return 'orchestra_hit';
        case 56: return 'trumpet';
        case 57: return 'trombone';
        case 58: return 'tuba';
        case 59: return 'muted_trumpet';
        case 60: return 'french_horn';
        case 61: return 'brass_section';
        case 62: return 'synth_brass_1';
        case 63: return 'synth_brass_2';
        case 64: return 'soprano_sax';
        case 65: return 'alto_sax';
        case 66: return 'tenor_sax';
        case 67: return 'baritone_sax';
        case 68: return 'oboe';
        case 69: return 'english_horn';
        case 70: return 'bassoon';
        case 71: return 'clarinet';
        case 72: return 'piccolo';
        case 73: return 'flute';
        case 74: return 'recorder';
        case 75: return 'pan_flute';
        case 76: return 'blown_bottle';
        case 77: return 'shakuhachi';
        case 78: return 'whistle';
        case 79: return 'ocarina';
        case 80: return 'lead_1_square';
        case 81: return 'lead_2_sawtooth';
        case 82: return 'lead_3_calliope';
        case 83: return 'lead_4_chiff';
        case 84: return 'lead_5_charang';
        case 85: return 'lead_6_voice';
        case 86: return 'lead_7_fifths';
        case 87: return 'lead_8_bass__lead';
        case 88: return 'pad_1_new_age';
        case 89: return 'pad_2_warm';
        case 90: return 'pad_3_polysynth';
        case 91: return 'pad_4_choir';
        case 92: return 'pad_5_bowed';
        case 93: return 'pad_6_metallic';
        case 94: return 'pad_7_halo';
        case 95: return 'pad_8_sweep';
        case 96: return 'fx_1_rain';
        case 97: return 'fx_2_soundtrack';
        case 98: return 'fx_3_crystal';
        case 99: return 'fx_4_atmosphere';
        case 100: return 'fx_5_brightness';
        case 101: return 'fx_6_goblins';
        case 102: return 'fx_7_echoes';
        case 103: return 'fx_8_scifi';
        case 104: return 'sitar';
        case 105: return 'banjo';
        case 106: return 'shamisen';
        case 107: return 'koto';
        case 108: return 'kalimba';
        case 109: return 'bagpipe';
        case 110: return 'fiddle';
        case 111: return 'shanai';
        case 112: return 'tinkle_bell';
        case 113: return 'agogo';
        case 114: return 'steel_drums';
        case 115: return 'woodblock';
        case 116: return 'taiko_drum';
        case 117: return 'melodic_tom';
        case 118: return 'synth_drum';
        case 119: return 'reverse_cymbal';
        case 120: return 'guitar_fret_noise';
        case 121: return 'breath_noise';
        case 122: return 'seashore';
        case 123: return 'bird_tweet';
        case 124: return 'telephone_ring';
        case 125: return 'helicopter';
        case 126: return 'applause';
        case 127: return 'gunshot';
        default: return 'acoustic_grand_piano';
    }
}

export function convertInstrumentIdToNameV2(instrumentId: number) {
    return [
        "accordion",
        "acoustic_bass",
        "acoustic_grand_piano",
        "acoustic_guitar_nylon",
        "acoustic_guitar_steel",
        "agogo",
        "alto_sax",
        "applause",
        "bagpipe",
        "banjo",
        "baritone_sax",
        "bassoon",
        "bird_tweet",
        "blown_bottle",
        "brass_section",
        "breath_noise",
        "bright_acoustic_piano",
        "celesta",
        "cello",
        "choir_aahs",
        "church_organ",
        "clarinet",
        "clavinet",
        "contrabass",
        "distortion_guitar",
        "drawbar_organ",
        "dulcimer",
        "electric_bass_finger",
        "electric_bass_pick",
        "electric_grand_piano",
        "electric_guitar_clean",
        "electric_guitar_jazz",
        "electric_guitar_muted",
        "electric_piano_1",
        "electric_piano_2",
        "english_horn",
        "fiddle",
        "flute",
        "french_horn",
        "fretless_bass",
        "fx_1_rain",
        "fx_2_soundtrack",
        "fx_3_crystal",
        "fx_4_atmosphere",
        "fx_5_brightness",
        "fx_6_goblins",
        "fx_7_echoes",
        "fx_8_scifi",
        "glockenspiel",
        "guitar_fret_noise",
        "guitar_harmonics",
        "gunshot",
        "harmonica",
        "harpsichord",
        "helicopter",
        "honkytonk_piano",
        "kalimba",
        "koto",
        "lead_1_square",
        "lead_2_sawtooth",
        "lead_3_calliope",
        "lead_4_chiff",
        "lead_5_charang",
        "lead_6_voice",
        "lead_7_fifths",
        "lead_8_bass__lead",
        "marimba",
        "melodic_tom",
        "music_box",
        "muted_trumpet",
        "oboe",
        "ocarina",
        "orchestra_hit",
        "orchestral_harp",
        "overdriven_guitar",
        "pad_1_new_age",
        "pad_2_warm",
        "pad_3_polysynth",
        "pad_4_choir",
        "pad_5_bowed",
        "pad_6_metallic",
        "pad_7_halo",
        "pad_8_sweep",
        "pan_flute",
        "percussive_organ",
        "percussion",
        "piccolo",
        "pizzicato_strings",
        "recorder",
        "reed_organ",
        "reverse_cymbal",
        "rock_organ",
        "seashore",
        "shakuhachi",
        "shamisen",
        "shanai",
        "sitar",
        "slap_bass_1",
        "slap_bass_2",
        "soprano_sax",
        "steel_drums",
        "string_ensemble_1",
        "string_ensemble_2",
        "synth_bass_1",
        "synth_bass_2",
        "synth_brass_1",
        "synth_brass_2",
        "synth_choir",
        "synth_drum",
        "synth_strings_1",
        "synth_strings_2",
        "taiko_drum",
        "tango_accordion",
        "telephone_ring",
        "tenor_sax",
        "timpani",
        "tinkle_bell",
        "tremolo_strings",
        "trombone",
        "trumpet",
        "tuba",
        "tubular_bells",
        "vibraphone",
        "viola",
        "violin",
        "voice_oohs",
        "whistle",
        "woodblock",
        "xylophone"
      ][instrumentId]
}