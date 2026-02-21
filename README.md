# 100 Words Decks
A modern flashcard app to learn languages and more. Install app from Play store.

## How to create deck file

let say you want to teach 'es' (target_lang) to a 'en' learner (native_lang)

1. create /Languages/Spanish/en.json

```json
{
    "target_lang": "fr",
    "native_lang": "en",
    "stages": [
        {
            "level": 1,
            "name": "Basics",
            "unlock_at": 0
        },
        {
            "level": 2,
            "name": "Everyday",
            "unlock_at": 50
        },
        {
            "level": 3,
            "name": "Conversational",
            "unlock_at": 80
        },
        {
            "level": 4,
            "name": "Expressive",
            "unlock_at": 100
        }
    ],
    "cards": [
    ] 
  }

```
2. use prompt in /Languages/Prompt.md in https://claude.ai to generate cards level by level and append to the cards array.

3. commit and push changes.

4. check result https://cdn.jsdelivr.net/gh/basir/decks@main/Languages/Spanish/en.json
