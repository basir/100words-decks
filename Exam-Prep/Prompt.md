
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
