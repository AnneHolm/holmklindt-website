# HolmKlindt.dk

Første designudkast til HolmKlindt - en responsiv, statisk hjemmeside uden byggeproces eller eksterne JavaScript-afhængigheder.

## Lokal visning

Åbn `index.html` direkte i en browser. Teksterne kan rettes direkte i filen, og billederne ligger samlet i mappen `assets`.

## Udgivelse

Mappen kan uploades direkte til en statisk host som Cloudflare Pages. Sæt build command til tom og output directory til `/`.

## Indhold

- `index.html`: Den enkle forside med tre klikbare værkstedskasser
- `3d-tegninger.html`: CAD-modeller og 3D-tegninger
- `3d-print.html`: Prototyper og færdige 3D-print
- `projekter.html`: Betonbordet, terrasseloungen og kommende byggeprojekter
- `styles.css`: Design og mobilvisning
- `script.js`: Mobilmenu og automatisk årstal
- `assets/forside/`: Forsidens hovedbillede
- `assets/logo/`: Monogram og favicon i SVG-format
- `assets/huset/`: Huset, rummene og husgalleriet
- `assets/rumideer/`: Visualiseringer af værelser og stuer
- `assets/livet/`: Personlige billeder og hverdagsglimt
- `assets/projekter/3d-print/`: CAD-tegninger, prototyper og færdige 3D-print
- `assets/projekter/betonbord/`: Skitser, proces og det færdige betonbord
- `assets/projekter/terrasselounge/`: Byggeproces og den færdige terrasselounge
- `assets/om-os/`: Billeder af Anne og Bente
- `assets/afslutning/`: Sidens afsluttende baggrundsbillede

Rumidéerne er markeret som visualiseringer på selve siden. Hverdagsbillederne og alle visualiseringer er optimeret til web og renset for metadata.

Galleriet "Livet omkring os" bruger små kvadratiske billeder. Hvert billede kan klikkes op i stor størrelse med frem/tilbage-navigation. Nye billeder tilføjes ved at kopiere en eksisterende `<figure class="everyday-card ...">` i `index.html` og ændre filnavn, billedbeskrivelse og billedtekst.

Forsidens tre værkstedskasser linker til hver sin HTML-side. 3D-printgalleriet bruger den klikbare billedvisning. Nye billeder lægges i `assets/projekter/3d-print/` og tilføjes ved at kopiere en eksisterende `<figure class="print-card">` på den relevante side.

Betonbordets procesgalleri er også klikbart. Nye billeder lægges i `assets/projekter/betonbord/` og tilføjes ved at kopiere en eksisterende `<figure class="concrete-card">` i `index.html`.

Terrasseloungens procesgalleri bruger billeder fra `assets/projekter/terrasselounge/`. Nye billeder tilføjes ved at kopiere en eksisterende `<figure class="terrace-card">` i `index.html`.

Kontaktadressen på siden er `hej@holmklindt.dk`.

## Før offentliggørelse

Husbillederne i dette udkast er hentet fra den fremsendte salgsopstilling og er kun brugt til privat designafprøvning. Kontrollér brugsretten eller erstat dem med egne billeder, før siden offentliggøres.
