# Prompts

## Exam Prep Prompt
Generate IELTS vocabulary flashcards for Level 1 (Foundation) (cards id=1 to id=100).

Each card must follow this exact JSON structure:
{
  "id": "string",
  "level": number,
  "front": "word",
  "pron": "short phonetic e.g. AN-uh-lyz",
  "pos": "noun / verb / adj / adv",
  "back": "concise definition",
  "collocation": "phrase1, phrase2, phrase3",
  "family": "word (pos), word (pos), ...",
  "tags": ["Tag1", "Tag2"],
  "related": ["word1", "word2", ...],
  "example": "Natural sentence using the word in an academic context."
}

Rules:
- `pron`: short phonetic only, uppercase stressed syllable, e.g. "AN-uh-lyz", "uh-PROHCH"
- `pos`: use "/" for multiple e.g. "noun / verb"
- `back`: one concise sentence, no more than 8 words
- `collocation`: exactly 3 most common academic collocations, comma separated
- `family`: most useful word forms only, not exhaustive, format "word (pos)"
- `tags`: maximum 2 tags, choose only from the approved list below
- `related`: exactly 4 words (strings); chosen freely across all levels; linguistically close (synonyms, co-occurring terms, same functional role in academic writing)
- `example`: one natural academic sentence, appropriate for IELTS writing task 2

Approved tags (choose max 2 per card):
People & Relationships, Work & Education, Society & Culture,
Environment & Nature, Health & Wellbeing, Economy & Money,
Science & Technology, Politics & Law, Travel & Places,
Time & Change, Media & Communication, Arts & Entertainment,
Food & Lifestyle, Religion & Belief, Crime & Justice,
Housing & Urban Life, Sports & Leisure, Trade & Globalisation,
Ethics & Philosophy, War & Conflict

Card content guidelines for each level:
- Level 1 (Foundation): highest-frequency academic words every IELTS candidate must know, AWL sublist 1
- Level 2 (Core): AWL sublist 2-3, high-frequency topic vocabulary across common IELTS themes
- Level 3 (Academic): AWL sublist 4-6, discourse markers, topic-specific academic terms
- Level 4 (Proficient): nuanced vocabulary, collocations that distinguish band 6.5 from band 7+
- Level 5 (Mastery): low-frequency but examiner-level vocabulary, sophisticated academic expressions

Return ONLY a valid JSON object in this format, no explanation, no markdown, no extra text:
{
  "cards": [ ...array of card objects... ]
}

## Langauge
```
Generate flashcard cards for the [TARGET_LANGUAGE] language deck for [NATIVE_LANGUAGE] speakers.
Level [LEVEL NUMBER] - [LEVEL NAME] (cards [START_ID] to [END_ID]).

Each card must follow this exact JSON structure:
{
  "id": "string",
  "level": number,
  "front": "word or phrase in target language",
  "pron": "short phonetic pronunciation of front, e.g. oh-LAH",
  "pos": "noun / verb / adj / adv",
  "gender": "m / f / n / null",
  "back": "concise translation in native language",
  "usage": "phrase1, phrase2, phrase3",
  "family": "word (pos), word (pos), ...",
  "tags": ["Tag1", "Tag2"],
  "related": ["word1", "word2", ...],
  "example": "Natural sentence using the word in target language.",
  "example_translation": "Translation of example sentence in native language."
}

Rules:
- `front`: always in target language ([TARGET_LANGUAGE])
- `pron`: phonetic for native [NATIVE_LANGUAGE] speakers specifically — use sounds familiar to them
- `pos`: use "/" for multiple e.g. "noun / verb"
- `gender`: grammatical gender where applicable (m/f/n). null for languages without gender (English, Japanese, etc.)
- `back`: concise translation in [NATIVE_LANGUAGE], max 6 words
- `usage`: exactly 3 most natural common phrases or collocations in target language, comma separated
- `family`: most useful related word forms in target language, format "word (pos)". null if not applicable (e.g. Mandarin, Japanese)
- `tags`: maximum 2 tags, choose only from approved list below
- `related`: exactly 4 words (strings); chosen freely across all levels; linguistically close (synonyms, co-occurring terms, same functional role in academic writing)
- `example`: one natural sentence in [TARGET_LANGUAGE]
- `example_translation`: direct translation of example in [NATIVE_LANGUAGE]

Approved tags (choose max 2 per card):
People & Relationships, Work & Education, Society & Culture,
Environment & Nature, Health & Wellbeing, Economy & Money,
Science & Technology, Politics & Law, Travel & Places,
Time & Change, Media & Communication, Arts & Entertainment,
Food & Lifestyle, Religion & Belief, Crime & Justice,
Housing & Urban Life, Sports & Leisure, Trade & Globalisation,
Ethics & Philosophy, War & Conflict

Card content guidelines for each level:
- Level 1 (Basics): greetings, core verbs (be, have, go, do, want), numbers, essential nouns, survival vocabulary
- Level 2 (Everyday): daily life vocabulary, common adjectives, time expressions, food, transport, shopping
- Level 3 (Conversational): opinions, feelings, describing people and places, connecting ideas, common idioms
- Level 4 (Expressive): abstract concepts, nuanced adjectives, complex verbs, formal expressions
- Level 5 (Advanced): idiomatic expressions, cultural references, sophisticated vocabulary, near-native usage

Language-specific instructions:
- Arabic: include both Modern Standard Arabic and note if a word differs significantly in colloquial usage
- Mandarin: include Pinyin in `pron` field, note tone numbers e.g. "nǐ hǎo (3-3)"
- Japanese: include Romaji in `pron`, specify if word is Hiragana/Katakana/Kanji in `note` when relevant
- German: always fill `gender` field (m/f/n), note irregular plurals in `note` when important
- French: always fill `gender` field (m/f), note liaison or elision rules in `note` when relevant
- Spanish: always fill `gender` field (m/f), flag false friends with English in `note` when relevant

Return ONLY a valid JSON object in this format, no explanation, no markdown, no extra text:
{
  "target_lang": "[TARGET_LANG_CODE]",
  "native_lang": "[NATIVE_LANG_CODE]",
  "cards": [ ...array of card objects... ]
}
```

---

**Usage — replace placeholders per generation:**

| Placeholder | Example |
|---|---|
| `[TARGET_LANGUAGE]` | French |
| `[NATIVE_LANGUAGE]` | English |
| `[TARGET_LANG_CODE]` | fr |
| `[NATIVE_LANG_CODE]` | en |
| `[LEVEL NUMBER]` | 1 |
| `[LEVEL NAME]` | Basics |
| `[START_ID]` | 1 |
| `[END_ID]` | 100 |

**Key differences from IELTS prompt:**
- `gender` field added — critical for French, Spanish, German, Arabic
- `family` is nullable — Mandarin and Japanese don't have word families the same way
- `usage` instead of `collocation` — broader, covers phrases not just collocations
- `example_translation` added — essential since front and back are different languages
- Language-specific instructions handle edge cases per language