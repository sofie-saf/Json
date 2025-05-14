PROSJEKT: VITSEMASKIN MED JSON 🤡

📌 Om oppgaven:
Jeg har laget et lite prosjekt der brukeren kan lese vitser fra en JSON-fil, og vise dem på forskjellige måter via en enkel nettside.

Jeg har brukt både:
✔️ En ekstern JSON-fil fra URL (nett)
✔️ En lokal JSON-fil (lagret i prosjektmappen)

Dette viser at jeg forstår hvordan man jobber med JSON-data på forskjellige måter i JavaScript og hvordan man bruker `fetch()` for å hente data både fra internett og fra lokale filer.

📁 Filstruktur:
- `index.html` → Leser vitser fra en URL (internett) via `script.js`
- `index-local.html` → Leser vitser fra lokal fil via `script-local.js`
- `script.js` → Henter JSON fra: https://terjetheteacher.github.io/some-jokes/jokes.json
- `script-local.js` → Henter `jokes.json` lokalt
- `jokes.json` → Lokalt lagret vitsesamling
- `styles.css` → Enkel styling
- `README.txt` → (Denne filen)

🧠 Hva prosjektet gjør:
- Leser JSON og lagrer det i en variabel
- Viser vits nr. 1
- Viser alle vitsene
- Viser en tilfeldig vits
- Brukeren kan velge via knapper (enkel meny i HTML)

👩‍💻 Forskjell på URL og lokal fil:
- Når man bruker `fetch()` til å hente fra en URL, kommer data fra internett. Det fungerer direkte i nettleseren.
- Når man henter fra lokal fil (som `jokes.json`), må man vanligvis bruke en lokal server (f.eks. "Live Server" i VSCode), ellers kan nettleseren blokkere det på grunn av sikkerhet (CORS-policy).
- Jeg har testet begge metoder og laget separate HTML-filer for å vise dette tydelig.


Jeg har kommentert koden i begge `script.js`-filene slik at det er lett å forstå hva som skjer, steg for steg.

-i have also added a favorite function button which is only in one of the html and js-