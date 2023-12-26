import { Reason } from '../lib/deinflect';

export const WORD_PRIORITY_WEIGHT = {
  ichi1: 60,
  ichi2: 40,
  news1: 30,
  news2: 20,
  gail1: 10,
  gail2: 5,
} as const;

export const KANJI_DICT_INDICES: Record<string, string> = {
  nelson_c: 'Nelson (Classic) number',
  nelson_n: 'Nelson (New) number',
  halpern_njecd: 'NJECD number',
  halpern_kkd: 'Kodansha Kanji Dictionary number',
  halpern_kkld: 'Kanji Learners Dictionary number',
  halpern_kkld_2ed: 'Kanji Learners Dictionary number (2nd ed)',
  heisig: 'Remembering The Kanji number',
  heisig6: 'Remembering The Kanji number (6th ed)',
  gakken: 'Gakken number',
  oneill_names: "O'Neill's Japanese Names number",
  oneill_kk: "O'Neill's Essential Kanji number",
  moro: 'Morohashi number',
  henshall: 'Henshall number',
  sh_kk: 'Kanji & Kana number',
  sh_kk2: 'Kanji & Kana number (2011 ed)',
  sakade: 'Sakade number',
  jf_cards: 'Japanese Kanji Flashcards number',
  henshall3: 'Henshall Guide number',
  tutt_cards: 'Tuttle Kanji Cards number',
  crowley: 'Crowley number',
  kanji_in_context: 'Kanji in Context number',
  kodansha_compact: 'Kodansha Compact Kanji Guide number',
  busy_people: 'Japanese For Busy People number',
  maniette: 'Maniette number',
} as const;

export const NAME_TYPES = {
  ev: 'event',
  dei: 'deity',
  oth: 'other',
  leg: 'legend',
  obj: 'object',
  group: 'group',
  doc: 'document',
  fict: 'fiction',
  serv: 'service',
  char: 'character',
  creat: 'creature',
  myth: 'mythology',
  relig: 'religion',
  ship: 'ship name',
  place: 'place name',
  company: 'company name',
  product: 'product name',
  station: 'railway station',
  surname: 'family or surname',
  unclass: 'unclassified name',
  organization: 'organization name',
  masc: 'male given name or forename',
  fem: 'female given name or forename',
  person: 'full name of a particular person',
  work: 'work of art, literature, music, etc. name',
  given: 'given name or forename, gender not specified',
} as const;

export const WORD_REASONS = {
  [Reason.Zu]: '-zu',
  [Reason.Te]: '-te',
  [Reason.Ki]: '-ki',
  [Reason.Ba]: '-ba',
  [Reason.Tai]: '-tai',
  [Reason.Sou]: '-sou',
  [Reason.Past]: 'past',
  [Reason.Noun]: 'noun',
  [Reason.Tari]: '-tari',
  [Reason.Tara]: '-tara',
  [Reason.Chau]: '-chau',
  [Reason.Adv]: 'adverb',
  [Reason.Toku]: '-te oku',
  [Reason.Nasai]: '-nasai',
  [Reason.Polite]: 'polite',
  [Reason.SuruNoun]: '-suru',
  [Reason.Sugiru]: '-sugiru',
  [Reason.Passive]: 'passive',
  [Reason.Negative]: 'negative',
  [Reason.MasuStem]: 'masu stem',
  [Reason.Potential]: 'potential',
  [Reason.Causative]: 'causative',
  [Reason.Volitional]: 'volitional',
  [Reason.Imperative]: 'imperative',
  [Reason.Continuous]: 'continuous',
  [Reason.PolitePast]: 'polite past',
  [Reason.NegativeTe]: 'negative -te',
  [Reason.PoliteNegative]: 'polite negative',
  [Reason.PolitePastNegative]: 'past negative',
  [Reason.PoliteVolitional]: 'polite volitional',
  [Reason.CausativePassive]: 'causative passive',
  [Reason.ZaruWoEnai]: '"have no choice but to ~"',
  [Reason.ImperativeNegative]: 'imperative negative',
  [Reason.PotentialOrPassive]: 'potential or passive',
} as const;

export const WORD_DIAL_TAG = {
  bra: {
    name: 'bra',
    tag: 'dial',
    value: 'Brazilian',
  },
  hob: {
    name: 'hob',
    tag: 'dial',
    value: 'Hokkaido-ben',
  },
  ksb: {
    name: 'ksb',
    tag: 'dial',
    value: 'Kansai-ben',
  },
  ktb: {
    name: 'ktb',
    tag: 'dial',
    value: 'Kantou-ben',
  },
  kyb: {
    name: 'kyb',
    tag: 'dial',
    value: 'Kyoto-ben',
  },
  kyu: {
    name: 'kyu',
    tag: 'dial',
    value: 'Kyuushuu-ben',
  },
  nab: {
    name: 'nab',
    tag: 'dial',
    value: 'Nagano-ben',
  },
  osb: {
    name: 'osb',
    tag: 'dial',
    value: 'Osaka-ben',
  },
  rkb: {
    name: 'rkb',
    tag: 'dial',
    value: 'Ryuukyuu-ben',
  },
  thb: {
    name: 'thb',
    tag: 'dial',
    value: 'Touhoku-ben',
  },
  tsb: {
    name: 'tsb',
    tag: 'dial',
    value: 'Tosa-ben',
  },
  tsug: {
    name: 'tsug',
    tag: 'dial',
    value: 'Tsugaru-ben',
  },
} as const;

export const WORD_FIELD_TAG = {
  agric: {
    name: 'agric',
    tag: 'field',
    value: 'agriculture',
  },
  anat: {
    name: 'anat',
    tag: 'field',
    value: 'anatomy',
  },
  archeol: {
    name: 'archeol',
    tag: 'field',
    value: 'archeology',
  },
  archit: {
    name: 'archit',
    tag: 'field',
    value: 'architecture',
  },
  art: {
    name: 'art',
    tag: 'field',
    value: 'art, aesthetics',
  },
  astron: {
    name: 'astron',
    tag: 'field',
    value: 'astronomy',
  },
  audvid: {
    name: 'audvid',
    tag: 'field',
    value: 'audiovisual',
  },
  aviat: {
    name: 'aviat',
    tag: 'field',
    value: 'aviation',
  },
  baseb: {
    name: 'baseb',
    tag: 'field',
    value: 'baseball',
  },
  biochem: {
    name: 'biochem',
    tag: 'field',
    value: 'biochemistry',
  },
  biol: {
    name: 'biol',
    tag: 'field',
    value: 'biology',
  },
  bot: {
    name: 'bot',
    tag: 'field',
    value: 'botany',
  },
  Buddh: {
    name: 'Buddh',
    tag: 'field',
    value: 'Buddhism',
  },
  bus: {
    name: 'bus',
    tag: 'field',
    value: 'business',
  },
  cards: {
    name: 'cards',
    tag: 'field',
    value: 'card games',
  },
  chem: {
    name: 'chem',
    tag: 'field',
    value: 'chemistry',
  },
  Christn: {
    name: 'Christn',
    tag: 'field',
    value: 'Christianity',
  },
  cloth: {
    name: 'cloth',
    tag: 'field',
    value: 'clothing',
  },
  comp: {
    name: 'comp',
    tag: 'field',
    value: 'computing',
  },
  cryst: {
    name: 'cryst',
    tag: 'field',
    value: 'crystallography',
  },
  dent: {
    name: 'dent',
    tag: 'field',
    value: 'dentistry',
  },
  ecol: {
    name: 'ecol',
    tag: 'field',
    value: 'ecology',
  },
  econ: {
    name: 'econ',
    tag: 'field',
    value: 'economics',
  },
  elec: {
    name: 'elec',
    tag: 'field',
    value: 'electricity, elec. eng.',
  },
  electr: {
    name: 'electr',
    tag: 'field',
    value: 'electronics',
  },
  embryo: {
    name: 'embryo',
    tag: 'field',
    value: 'embryology',
  },
  engr: {
    name: 'engr',
    tag: 'field',
    value: 'engineering',
  },
  ent: {
    name: 'ent',
    tag: 'field',
    value: 'entomology',
  },
  film: {
    name: 'film',
    tag: 'field',
    value: 'film',
  },
  finc: {
    name: 'finc',
    tag: 'field',
    value: 'finance',
  },
  fish: {
    name: 'fish',
    tag: 'field',
    value: 'fishing',
  },
  food: {
    name: 'food',
    tag: 'field',
    value: 'food, cooking',
  },
  gardn: {
    name: 'gardn',
    tag: 'field',
    value: 'gardening, horticulture',
  },
  genet: {
    name: 'genet',
    tag: 'field',
    value: 'genetics',
  },
  geogr: {
    name: 'geogr',
    tag: 'field',
    value: 'geography',
  },
  geol: {
    name: 'geol',
    tag: 'field',
    value: 'geology',
  },
  geom: {
    name: 'geom',
    tag: 'field',
    value: 'geometry',
  },
  go: {
    name: 'go',
    tag: 'field',
    value: 'go (game)',
  },
  golf: {
    name: 'golf',
    tag: 'field',
    value: 'golf',
  },
  gramm: {
    name: 'gramm',
    tag: 'field',
    value: 'grammar',
  },
  grmyth: {
    name: 'grmyth',
    tag: 'field',
    value: 'Greek mythology',
  },
  hanaf: {
    name: 'hanaf',
    tag: 'field',
    value: 'hanafuda',
  },
  horse: {
    name: 'horse',
    tag: 'field',
    value: 'horse racing',
  },
  kabuki: {
    name: 'kabuki',
    tag: 'field',
    value: 'kabuki',
  },
  law: {
    name: 'law',
    tag: 'field',
    value: 'law',
  },
  ling: {
    name: 'ling',
    tag: 'field',
    value: 'linguistics',
  },
  logic: {
    name: 'logic',
    tag: 'field',
    value: 'logic',
  },
  MA: {
    name: 'MA',
    tag: 'field',
    value: 'martial arts',
  },
  mahj: {
    name: 'mahj',
    tag: 'field',
    value: 'mahjong',
  },
  manga: {
    name: 'manga',
    tag: 'field',
    value: 'manga',
  },
  math: {
    name: 'math',
    tag: 'field',
    value: 'mathematics',
  },
  mech: {
    name: 'mech',
    tag: 'field',
    value: 'mechanical engineering',
  },
  med: {
    name: 'med',
    tag: 'field',
    value: 'medicine',
  },
  met: {
    name: 'met',
    tag: 'field',
    value: 'meteorology',
  },
  mil: {
    name: 'mil',
    tag: 'field',
    value: 'military',
  },
  mining: {
    name: 'mining',
    tag: 'field',
    value: 'mining',
  },
  music: {
    name: 'music',
    tag: 'field',
    value: 'music',
  },
  noh: {
    name: 'noh',
    tag: 'field',
    value: 'noh',
  },
  ornith: {
    name: 'ornith',
    tag: 'field',
    value: 'ornithology',
  },
  paleo: {
    name: 'paleo',
    tag: 'field',
    value: 'paleontology',
  },
  pathol: {
    name: 'pathol',
    tag: 'field',
    value: 'pathology',
  },
  pharm: {
    name: 'pharm',
    tag: 'field',
    value: 'pharmacology',
  },
  phil: {
    name: 'phil',
    tag: 'field',
    value: 'philosophy',
  },
  photo: {
    name: 'photo',
    tag: 'field',
    value: 'photography',
  },
  physics: {
    name: 'physics',
    tag: 'field',
    value: 'physics',
  },
  physiol: {
    name: 'physiol',
    tag: 'field',
    value: 'physiology',
  },
  politics: {
    name: 'politics',
    tag: 'field',
    value: 'politics',
  },
  print: {
    name: 'print',
    tag: 'field',
    value: 'printing',
  },
  psy: {
    name: 'psy',
    tag: 'field',
    value: 'psychiatry',
  },
  psyanal: {
    name: 'psyanal',
    tag: 'field',
    value: 'psychoanalysis',
  },
  psych: {
    name: 'psych',
    tag: 'field',
    value: 'psychology',
  },
  rail: {
    name: 'rail',
    tag: 'field',
    value: 'railway',
  },
  rommyth: {
    name: 'rommyth',
    tag: 'field',
    value: 'Roman mythology',
  },
  Shinto: {
    name: 'Shinto',
    tag: 'field',
    value: 'Shinto',
  },
  shogi: {
    name: 'shogi',
    tag: 'field',
    value: 'shogi',
  },
  ski: {
    name: 'ski',
    tag: 'field',
    value: 'skiing',
  },
  sports: {
    name: 'sports',
    tag: 'field',
    value: 'sports',
  },
  stat: {
    name: 'stat',
    tag: 'field',
    value: 'statistics',
  },
  stockm: {
    name: 'stockm',
    tag: 'field',
    value: 'stock market',
  },
  sumo: {
    name: 'sumo',
    tag: 'field',
    value: 'sumo',
  },
  telec: {
    name: 'telec',
    tag: 'field',
    value: 'telecommunications',
  },
  tradem: {
    name: 'tradem',
    tag: 'field',
    value: 'trademark',
  },
  tv: {
    name: 'tv',
    tag: 'field',
    value: 'television',
  },
  vidg: {
    name: 'vidg',
    tag: 'field',
    value: 'video games',
  },
  zool: {
    name: 'zool',
    tag: 'field',
    value: 'zoology',
  },
} as const;

export const WORD_KANJI_INFO_TAG = {
  ateji: {
    name: 'ateji',
    tag: 'ke_inf',
    value: 'ateji (phonetic) reading',
  },
  ik: {
    name: 'ik',
    tag: 'ke_inf',
    value: 'word containing irregular kana usage',
  },
  iK: {
    name: 'iK',
    tag: 'ke_inf',
    value: 'word containing irregular kanji usage',
  },
  io: {
    name: 'io',
    tag: 'ke_inf',
    value: 'irregular okurigana usage',
  },
  oK: {
    name: 'oK',
    tag: 'ke_inf',
    value: 'word containing out-dated kanji or kanji usage',
  },
  rK: {
    name: 'rK',
    tag: 'ke_inf',
    value: 'rarely-used kanji form',
  },
  sK: {
    name: 'sK',
    tag: 'ke_inf',
    value: 'search-only kanji form',
  },
} as const;

export const WORD_MISC_TAG = {
  abbr: {
    id: 'abbr',
    tag: 'misc',
    name: 'abbreviation',
    value: 'abbreviation',
  },
  arch: {
    id: 'arch',
    tag: 'misc',
    name: 'archaic',
    value: 'archaic',
  },
  char: {
    id: 'char',
    tag: 'misc',
    name: 'character',
    value: 'character',
  },
  chn: {
    id: 'chn',
    tag: 'misc',
    name: "children's language",
    value: "children's language",
  },
  col: {
    id: 'col',
    tag: 'misc',
    name: 'colloquial',
    value: 'colloquial',
  },
  company: {
    id: 'company',
    name: 'company',
    tag: 'misc',
    value: 'company name',
  },
  creat: {
    id: 'creat',
    tag: 'misc',
    name: 'creature',
    value: 'creature',
  },
  dated: {
    id: 'dated',
    tag: 'misc',
    name: 'dated',
    value: 'dated term',
  },
  dei: {
    id: 'dei',
    tag: 'misc',
    name: 'deity',
    value: 'deity',
  },
  derog: {
    id: 'derog',
    tag: 'misc',
    name: 'derogatory',
    value: 'derogatory',
  },
  doc: {
    id: 'doc',
    tag: 'misc',
    name: 'document',
    value: 'document',
  },
  euph: {
    id: 'euph',
    tag: 'misc',
    name: 'euphemistic',
    value: 'euphemistic',
  },
  ev: {
    id: 'ev',
    tag: 'misc',
    name: 'event',
    value: 'event',
  },
  fam: {
    id: 'fam',
    name: 'fam',
    tag: 'misc',
    value: 'familiar language',
  },
  fem: {
    id: 'fem',
    tag: 'misc',
    name: 'female term',
    value: 'female term or language',
  },
  fict: {
    id: 'fict',
    tag: 'misc',
    name: 'fiction',
    value: 'fiction',
  },
  form: {
    id: 'form',
    tag: 'misc',
    name: 'formal',
    value: 'formal or literary term',
  },
  given: {
    id: 'given',
    tag: 'misc',
    name: 'given',
    value: 'given name or forename, gender not specified',
  },
  group: {
    id: 'group',
    name: 'group',
    tag: 'misc',
    value: 'group',
  },
  hist: {
    id: 'hist',
    tag: 'misc',
    name: 'historical',
    value: 'historical term',
  },
  hon: {
    id: 'hon',
    tag: 'misc',
    name: 'honorific',
    value: 'honorific or respectful (sonkeigo) language',
  },
  hum: {
    id: 'hum',
    tag: 'misc',
    name: 'humble',
    value: 'humble (kenjougo) language',
  },
  id: {
    id: 'id',
    tag: 'misc',
    name: 'idiomatic',
    value: 'idiomatic expression',
  },
  joc: {
    id: 'joc',
    tag: 'misc',
    name: 'jocular',
    value: 'jocular, humorous term',
  },
  leg: {
    id: 'leg',
    tag: 'misc',
    name: 'legend',
    value: 'legend',
  },
  'm-sl': {
    id: 'm-sl',
    tag: 'misc',
    name: 'manga slang',
    value: 'manga slang',
  },
  male: {
    id: 'male',
    tag: 'misc',
    name: 'male term',
    value: 'male term or language',
  },
  myth: {
    id: 'myth',
    tag: 'misc',
    name: 'mythology',
    value: 'mythology',
  },
  'net-sl': {
    id: 'net-sl',
    tag: 'misc',
    name: 'Internet slang',
    value: 'Internet slang',
  },
  obj: {
    id: 'obj',
    tag: 'misc',
    name: 'object',
    value: 'object',
  },
  obs: {
    id: 'obs',
    tag: 'misc',
    name: 'obsolete term',
    value: 'obsolete term',
  },
  'on-mim': {
    id: 'on-mim',
    tag: 'misc',
    name: 'onomatopoeic',
    value: 'onomatopoeic or mimetic word',
  },
  organization: {
    id: 'organization',
    tag: 'misc',
    name: 'organization',
    value: 'organization name',
  },
  oth: {
    id: 'oth',
    tag: 'misc',
    name: 'other',
    value: 'other',
  },
  person: {
    id: 'person',
    name: 'person',
    tag: 'misc',
    value: 'full name of a particular person',
  },
  place: {
    id: 'place',
    name: 'place',
    tag: 'misc',
    value: 'place name',
  },
  poet: {
    id: 'poet',
    tag: 'misc',
    name: 'poetical term',
    value: 'poetical term',
  },
  pol: {
    id: 'pol',
    tag: 'misc',
    name: 'polite',
    value: 'polite (teineigo) language',
  },
  product: {
    id: 'product',
    name: 'product',
    tag: 'misc',
    value: 'product name',
  },
  proverb: {
    id: 'proverb',
    name: 'proverb',
    tag: 'misc',
    value: 'proverb',
  },
  quote: {
    id: 'quote',
    name: 'quote',
    tag: 'misc',
    value: 'quotation',
  },
  rare: {
    id: 'rare',
    name: 'rare',
    tag: 'misc',
    value: 'rare term',
  },
  relig: {
    id: 'relig',
    tag: 'misc',
    name: 'religion',
    value: 'religion',
  },
  sens: {
    id: 'sens',
    tag: 'misc',
    name: 'sensitive',
    value: 'sensitive',
  },
  serv: {
    id: 'serv',
    tag: 'misc',
    name: 'service',
    value: 'service',
  },
  ship: {
    id: 'ship',
    name: 'ship',
    tag: 'misc',
    value: 'ship name',
  },
  sl: {
    id: 'sl',
    tag: 'misc',
    name: 'slang',
    value: 'slang',
  },
  station: {
    id: 'station',
    name: 'station',
    tag: 'misc',
    value: 'railway station',
  },
  surname: {
    id: 'surname',
    name: 'surname',
    tag: 'misc',
    value: 'family or surname',
  },
  uk: {
    id: 'uk',
    tag: 'misc',
    name: 'usually kana',
    value: 'word usually written using kana alone',
  },
  unclass: {
    id: 'unclass',
    tag: 'misc',
    name: 'unclassified',
    value: 'unclassified name',
  },
  vulg: {
    id: 'vulg',
    tag: 'misc',
    name: 'vulgar expression',
    value: 'vulgar expression or word',
  },
  work: {
    id: 'work',
    name: 'work',
    tag: 'misc',
    value: 'work of art, literature, music, etc. name',
  },
  X: {
    id: 'X',
    tag: 'misc',
    name: 'rude or X-rated term',
    value: 'rude or X-rated term (not displayed in educational software)',
  },
  yoji: {
    id: 'yoji',
    name: 'yoji',
    tag: 'misc',
    value: 'yojijukugo',
  },
};

export const WORD_POS_TAG = {
  'adj-f': {
    id: 'adj-f',
    name: '',
    tag: 'pos',
    value: 'noun or verb acting prenominally',
  },
  'adj-i': {
    id: 'adj-i',
    name: '',
    tag: 'pos',
    value: 'adjective (keiyoushi)',
  },
  'adj-ix': {
    id: 'adj-ix',
    name: '',
    tag: 'pos',
    value: 'adjective (keiyoushi) - yoi/ii class',
  },
  'adj-kari': {
    id: 'adj-kari',
    name: '',
    tag: 'pos',
    value: "'kari' adjective (archaic)",
  },
  'adj-ku': {
    id: 'adj-ku',
    name: '',
    tag: 'pos',
    value: "'ku' adjective (archaic)",
  },
  'adj-na': {
    id: 'adj-na',
    name: '',
    tag: 'pos',
    value: 'adjectival nouns or quasi-adjectives (keiyodoshi)',
  },
  'adj-nari': {
    id: 'adj-nari',
    name: '',
    tag: 'pos',
    value: 'archaic/formal form of na-adjective',
  },
  'adj-no': {
    id: 'adj-no',
    name: '',
    tag: 'pos',
    value: "nouns which may take the genitive case particle 'no'",
  },
  'adj-pn': {
    id: 'adj-pn',
    name: '',
    tag: 'pos',
    value: 'pre-noun adjectival (rentaishi)',
  },
  'adj-shiku': {
    id: 'adj-shiku',
    name: '',
    tag: 'pos',
    value: "'shiku' adjective (archaic)",
  },
  'adj-t': {
    id: 'adj-t',
    name: '',
    tag: 'pos',
    value: "'taru' adjective",
  },
  adv: {
    id: 'adv',
    tag: 'pos',
    name: 'adverb',
    value: 'adverb (fukushi)',
  },
  'adv-to': {
    id: 'adv-to',
    name: '',
    tag: 'pos',
    value: "adverb taking the 'to' particle",
  },
  aux: {
    id: 'aux',
    tag: 'pos',
    name: 'auxiliary',
    value: 'auxiliary',
  },
  'aux-adj': {
    id: 'aux-adj',
    tag: 'pos',
    name: 'aux. adj.',
    value: 'auxiliary adjective',
  },
  'aux-v': {
    id: 'aux-v',
    tag: 'pos',
    name: 'aux. verb',
    value: 'auxiliary verb',
  },
  conj: {
    id: 'conj',
    tag: 'pos',
    name: 'conjunction',
    value: 'conjunction',
  },
  cop: {
    id: 'cop',
    tag: 'pos',
    name: 'copula',
    value: 'copula',
  },
  ctr: {
    id: 'ctr',
    tag: 'pos',
    name: 'counter',
    value: 'counter',
  },
  exp: {
    id: 'exp',
    tag: 'pos',
    name: 'expressions',
    value: 'expressions (phrases, clauses, etc.)',
  },
  int: {
    id: 'int',
    name: '',
    tag: 'pos',
    value: 'interjection (kandoushi)',
  },
  n: {
    id: 'n',
    tag: 'pos',
    name: 'noun',
    value: 'noun (common) (futsuumeishi)',
  },
  'n-adv': {
    id: 'n-adv',
    tag: 'pos',
    name: 'adv. noun',
    value: 'adverbial noun (fukushitekimeishi)',
  },
  'n-pr': {
    id: 'n-pr',
    tag: 'pos',
    name: 'proper noun',
    value: 'proper noun',
  },
  'n-pref': {
    id: 'n-pref',
    tag: 'pos',
    name: 'noun-prefix',
    value: 'noun, used as a prefix',
  },
  'n-suf': {
    id: 'n-suf',
    tag: 'pos',
    name: 'noun-suffix',
    value: 'noun, used as a suffix',
  },
  'n-t': {
    id: 'n-t',
    tag: 'pos',
    name: 'noun-temp.',
    value: 'noun (temporal) (jisoumeishi)',
  },
  num: {
    id: 'num',
    tag: 'pos',
    name: 'numeric',
    value: 'numeric',
  },
  pn: {
    id: 'pn',
    tag: 'pos',
    name: 'pronoun',
    value: 'pronoun',
  },
  pref: {
    id: 'pref',
    tag: 'pos',
    name: 'prefix',
    value: 'prefix',
  },
  prt: {
    id: 'prt',
    tag: 'pos',
    name: 'particle',
    value: 'particle',
  },
  suf: {
    id: 'suf',
    tag: 'pos',
    name: 'suffix',
    value: 'suffix',
  },
  unc: {
    id: 'unc',
    tag: 'pos',
    name: 'unclassified',
    value: 'unclassified',
  },
  'v-unspec': {
    id: 'v-unspec',
    tag: 'pos',
    name: 'verb',
    value: 'verb unspecified',
  },
  v1: {
    id: 'v1',
    name: '',
    tag: 'pos',
    value: 'Ichidan verb',
  },
  'v1-s': {
    id: 'v1-s',
    name: '',
    tag: 'pos',
    value: 'Ichidan verb - kureru special class',
  },
  'v2a-s': {
    id: 'v2a-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb with 'u' ending (archaic)",
  },
  'v2b-k': {
    id: 'v2b-k',
    name: '',
    tag: 'pos',
    value: "Nidan verb (upper class) with 'bu' ending (archaic)",
  },
  'v2b-s': {
    id: 'v2b-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'bu' ending (archaic)",
  },
  'v2d-k': {
    id: 'v2d-k',
    name: '',
    tag: 'pos',
    value: "Nidan verb (upper class) with 'dzu' ending (archaic)",
  },
  'v2d-s': {
    id: 'v2d-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'dzu' ending (archaic)",
  },
  'v2g-k': {
    id: 'v2g-k',
    name: '',
    tag: 'pos',
    value: "Nidan verb (upper class) with 'gu' ending (archaic)",
  },
  'v2g-s': {
    id: 'v2g-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'gu' ending (archaic)",
  },
  'v2h-k': {
    id: 'v2h-k',
    name: '',
    tag: 'pos',
    value: "Nidan verb (upper class) with 'hu/fu' ending (archaic)",
  },
  'v2h-s': {
    id: 'v2h-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'hu/fu' ending (archaic)",
  },
  'v2k-k': {
    id: 'v2k-k',
    name: '',
    tag: 'pos',
    value: "Nidan verb (upper class) with 'ku' ending (archaic)",
  },
  'v2k-s': {
    id: 'v2k-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'ku' ending (archaic)",
  },
  'v2m-k': {
    id: 'v2m-k',
    name: '',
    tag: 'pos',
    value: "Nidan verb (upper class) with 'mu' ending (archaic)",
  },
  'v2m-s': {
    id: 'v2m-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'mu' ending (archaic)",
  },
  'v2n-s': {
    id: 'v2n-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'nu' ending (archaic)",
  },
  'v2r-k': {
    id: 'v2r-k',
    name: '',
    tag: 'pos',
    value: "Nidan verb (upper class) with 'ru' ending (archaic)",
  },
  'v2r-s': {
    id: 'v2r-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'ru' ending (archaic)",
  },
  'v2s-s': {
    id: 'v2s-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'su' ending (archaic)",
  },
  'v2t-k': {
    id: 'v2t-k',
    name: '',
    tag: 'pos',
    value: "Nidan verb (upper class) with 'tsu' ending (archaic)",
  },
  'v2t-s': {
    id: 'v2t-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'tsu' ending (archaic)",
  },
  'v2w-s': {
    id: 'v2w-s',
    name: '',
    tag: 'pos',
    value:
      "Nidan verb (lower class) with 'u' ending and 'we' conjugation (archaic)",
  },
  'v2y-k': {
    id: 'v2y-k',
    name: '',
    tag: 'pos',
    value: "Nidan verb (upper class) with 'yu' ending (archaic)",
  },
  'v2y-s': {
    id: 'v2y-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'yu' ending (archaic)",
  },
  'v2z-s': {
    id: 'v2z-s',
    name: '',
    tag: 'pos',
    value: "Nidan verb (lower class) with 'zu' ending (archaic)",
  },
  v4b: {
    id: 'v4b',
    name: '',
    tag: 'pos',
    value: "Yodan verb with 'bu' ending (archaic)",
  },
  v4g: {
    id: 'v4g',
    name: '',
    tag: 'pos',
    value: "Yodan verb with 'gu' ending (archaic)",
  },
  v4h: {
    id: 'v4h',
    name: '',
    tag: 'pos',
    value: "Yodan verb with 'hu/fu' ending (archaic)",
  },
  v4k: {
    id: 'v4k',
    name: '',
    tag: 'pos',
    value: "Yodan verb with 'ku' ending (archaic)",
  },
  v4m: {
    id: 'v4m',
    name: '',
    tag: 'pos',
    value: "Yodan verb with 'mu' ending (archaic)",
  },
  v4n: {
    id: 'v4n',
    name: '',
    tag: 'pos',
    value: "Yodan verb with 'nu' ending (archaic)",
  },
  v4r: {
    id: 'v4r',
    name: '',
    tag: 'pos',
    value: "Yodan verb with 'ru' ending (archaic)",
  },
  v4s: {
    id: 'v4s',
    name: '',
    tag: 'pos',
    value: "Yodan verb with 'su' ending (archaic)",
  },
  v4t: {
    id: 'v4t',
    name: '',
    tag: 'pos',
    value: "Yodan verb with 'tsu' ending (archaic)",
  },
  v5aru: {
    id: 'v5aru',
    name: '',
    tag: 'pos',
    value: 'Godan verb - -aru special class',
  },
  v5b: {
    id: 'v5b',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'bu' ending",
  },
  v5g: {
    id: 'v5g',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'gu' ending",
  },
  v5k: {
    id: 'v5k',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'ku' ending",
  },
  'v5k-s': {
    id: 'v5k-s',
    name: '',
    tag: 'pos',
    value: 'Godan verb - Iku/Yuku special class',
  },
  v5m: {
    id: 'v5m',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'mu' ending",
  },
  v5n: {
    id: 'v5n',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'nu' ending",
  },
  v5r: {
    id: 'v5r',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'ru' ending",
  },
  'v5r-i': {
    id: 'v5r-i',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'ru' ending (irregular verb)",
  },
  v5s: {
    id: 'v5s',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'su' ending",
  },
  v5t: {
    id: 'v5t',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'tsu' ending",
  },
  v5u: {
    id: 'v5u',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'u' ending",
  },
  'v5u-s': {
    id: 'v5u-s',
    name: '',
    tag: 'pos',
    value: "Godan verb with 'u' ending (special class)",
  },
  v5uru: {
    id: 'v5uru',
    name: '',
    tag: 'pos',
    value: 'Godan verb - Uru old class verb (old form of Eru)',
  },
  vi: {
    id: 'vi',
    name: '',
    tag: 'pos',
    value: 'intransitive verb',
  },
  vk: {
    id: 'vk',
    name: '',
    tag: 'pos',
    value: 'Kuru verb - special class',
  },
  vn: {
    id: 'vn',
    name: '',
    tag: 'pos',
    value: 'irregular nu verb',
  },
  vr: {
    id: 'vr',
    name: '',
    tag: 'pos',
    value: 'irregular ru verb, plain form ends with -ri',
  },
  vs: {
    id: 'vs',
    name: '',
    tag: 'pos',
    value: 'noun or participle which takes the aux. verb suru',
  },
  'vs-c': {
    id: 'vs-c',
    name: '',
    tag: 'pos',
    value: 'su verb - precursor to the modern suru',
  },
  'vs-i': {
    id: 'vs-i',
    name: '',
    tag: 'pos',
    value: 'suru verb - included',
  },
  'vs-s': {
    id: 'vs-s',
    name: '',
    tag: 'pos',
    value: 'suru verb - special class',
  },
  vt: {
    id: 'vt',
    name: '',
    tag: 'pos',
    value: 'transitive verb',
  },
  vz: {
    id: 'vz',
    name: '',
    tag: 'pos',
    value: 'Ichidan verb - zuru verb (alternative form of -jiru verbs)',
  },
} as const;

export const WORD_READING_INFO_TAG = {
  gikun: {
    name: 'gikun',
    tag: 're_inf',
    value: 'gikun (meaning as reading) or jukujikun (special kanji reading)',
  },
  ok: {
    name: 'ok',
    tag: 're_inf',
    value: 'out-dated or obsolete kana usage',
  },
  sk: {
    name: 'sk',
    tag: 're_inf',
    value: 'search-only kana form',
  },
} as const;

export const WORD_TAGS = {
  ...WORD_DIAL_TAG,
  ...WORD_FIELD_TAG,
  ...WORD_KANJI_INFO_TAG,
  ...WORD_MISC_TAG,
  ...WORD_POS_TAG,
  ...WORD_READING_INFO_TAG,
} as const;
