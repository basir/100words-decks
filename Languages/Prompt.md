Generate flashcard cards for the TARGET_LANGUAGE=es language deck for NATIVE_LANGUAGE=en speakers.
Level 1 - Basics (cards 1 to 100).

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