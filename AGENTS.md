# HolmKlindt website – instruktioner til Codex

## Formål

Dette repository indeholder HolmKlindt-hjemmesiden.

Hjemmesiden handler om huset, livet omkring os, 3D-tegninger,
3D-print og vores øvrige projekter.

Siden udgives med GitHub Pages fra branch `main` og mappen `/root`.

## Teknisk opbygning

Hjemmesiden er statisk og bruger kun:

- HTML
- CSS
- almindelig JavaScript
- lokale billeder og SVG-filer

Der er ingen build-proces, framework, database eller package manager.

Vigtige filer:

- `index.html` – forsiden
- `3d-tegninger.html` – CAD- og 3D-tegninger
- `3d-print.html` – prototyper og færdige 3D-print
- `projekter.html` – betonbord, terrasselounge og andre projekter
- `styles.css` – design og mobilvisning
- `script.js` – mobilmenu, billedvisning og årstal
- `assets/` – alle billeder og logoer

## Billedmapper

Brug disse mapper:

- `assets/forside/`
- `assets/huset/`
- `assets/rumideer/`
- `assets/livet/`
- `assets/projekter/3d-print/`
- `assets/projekter/betonbord/`
- `assets/projekter/terrasselounge/`
- `assets/om-os/`
- `assets/logo/`
- `assets/afslutning/`

Opret en ny undermappe under `assets/projekter/`, når et nyt større
projekt tilføjes.

## Regler for ændringer

- Bevar hjemmesidens enkle, varme og personlige stil.
- Brug dansk tekst, medmindre andet bliver bedt om.
- Hold forsiden enkel.
- Større billedsamlinger skal ligge på deres relevante underside.
- Sørg for, at navigationen er ens på alle undersider.
- Alle galleribilleder skal kunne åbnes i stor størrelse.
- Billeder skal have beskrivende `alt`-tekster.
- Nye billeder skal optimeres til web.
- Brug normalt JPG til store forsidebilleder og WebP til gallerier.
- Undgå unødvendige eksterne biblioteker og afhængigheder.
- Flyt eller omdøb ikke filer uden samtidig at rette alle referencer.
- Overskriv ikke eksisterende brugerindhold, som ikke er en del af opgaven.
- Upload aldrig zip-filer som en del af selve hjemmesiden.

## Kontrol før udgivelse

Kontrollér altid:

1. At alle lokale fil- og billedstier findes.
2. At links mellem forsiden og undersiderne virker.
3. At mobilmenuen virker.
4. At gallerier og billedforstørrelse virker.
5. At HTML-, CSS- og JavaScript-filer ikke har åbenlyse fejl.
6. At `index.html` fortsat ligger i repository-roden.
7. At siden fungerer under GitHub Pages-stien
   `/holmklindt-website/`.

## GitHub

- Brug `main` som produktionsgren.
- Lav helst ændringer på en separat branch.
- Beskriv ændringen tydeligt i commit eller pull request.
- GitHub-repository’et er den originale version af hjemmesiden.
- Undgå manuelle uploads oven i ændringer, som Codex arbejder på.
