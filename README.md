# Oppy — portfolio

Static website (HTML + CSS + JS), hosted for free with **GitHub Pages**. No build step, no Vercel.

## Wat staat waar
| Bestand | Wat |
|---|---|
| `content.js` | **Alle teksten, je e-mail, links en je edits.** Hier pas je bijna alles aan. |
| `videos/` | De video's (mp4). |
| `posters/` | Een stilstaand beeld per video (jpg). |
| `index.html` · `style.css` · `main.js` | De opbouw, stijl en werking van de site. |
| `fonts/` | De lettertypes (Space Grotesk + Inter). |
| `.nojekyll` | Zegt tegen GitHub dat het de bestanden gewoon moet tonen. Niet verwijderen. |

## Iets aanpassen
Open `content.js` op GitHub → klik op het potloodje ✏️ → pas de tekst tussen de "..." aan → **Commit changes**. Na ±1 minuut staat het online.

## Nieuwe edit toevoegen
1. Exporteer je video klein genoeg (zie hieronder) en upload hem in de map `videos`.
2. Upload een stilstaand beeld (.jpg) in de map `posters`.
3. Kopieer in `content.js` een blok `{ ... },` onder `edits:` en pas titel, klant, beschrijving, format, duur en bestandsnamen aan.

## Video's zonder haperen (Premiere Pro export)
- Format: **H.264**, preset "Match Source - Adaptive High Bitrate" als basis
- Resolutie: **1080×1920** (verticaal) of 1920×1080 (breed) — 720 breed mag ook
- Frame rate: 30 fps (of 60 als je dat echt wil)
- Bitrate encoding: **VBR, 1 pass**, Target **4 Mbps**, Maximum **6 Mbps**
- Audio: AAC, 128 kbps
- Houd elk bestand **onder 25 MB** (limiet van de GitHub-upload in de browser)
