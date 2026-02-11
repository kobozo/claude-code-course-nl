# Module 02: Je Eerste Gesprek

In deze module leer je de basis van het werken met Claude Code: hoe je het start, welke commando's er zijn, en hoe je effectieve prompts schrijft.

## Claude Code starten

Navigeer in je terminal naar een projectmap en start Claude Code:

```bash
cd ~/mijn-project
claude
```

> **Belangrijk**: Start Claude Code altijd vanuit de root van je project. Zo heeft het toegang tot al je bestanden en begrijpt het de structuur van je project.

### Een eerdere sessie hervatten

Wil je verder waar je gebleven was? Er zijn meerdere manieren:

```bash
# Hervat de laatste sessie in deze map
claude -c

# Hervat een specifieke sessie met het session ID
claude --resume 10627a9b-2166-4019-91c9-80f5bf596bfe
```

> **Wanneer heb je dit nodig?** Als je `Ctrl+C` drukt (of je terminal sluit), toont Claude Code een session ID. Bewaar dit! Je kunt die sessie later hervatten — zelfs dagen later. Met `-c` pak je automatisch de laatste sessie in de huidige map. Als je meerdere sessies hebt gehad, gebruik dan `--resume` met het specifieke ID.

## Basis commando's

Claude Code heeft ingebouwde commando's die beginnen met `/`:

| Commando | Wat het doet |
|----------|-------------|
| `/help` | Toont beschikbare commando's |
| `/clear` | Wist de huidige conversatie |
| `/compact` | Comprimeert de conversatie om context vrij te maken |
| `/cost` | Toont hoeveel tokens/geld je hebt gebruikt |
| `/model` | Wissel van AI model |
| `/config` | Instellingen aanpassen |
| `/quit` of `Ctrl+C` | Sluit Claude Code af |

### Probeer het uit

Start Claude Code en typ:

```
/help
```

Je ziet nu een overzicht van alle beschikbare commando's.

## Verwijzen naar bestanden met @

Je kunt bestanden direct refereren met `@`:

```
Bekijk @src/utils.js en leg uit wat de calculateTotal functie doet
```

Dit werkt ook met mappen en glob-patronen:

```
Bekijk @src/components/ en geef een overzicht van alle componenten
```

```
Zoek in @src/**/*.test.js naar tests die falen
```

## Shell commando's draaien met !

Je kunt snel een terminal commando draaien door het te prefixen met `!`:

```
!npm test
```

Dit draait het commando direct zonder dat Claude het interpreteert.

## Plan Mode

Bij complexe taken is het slim om Claude Code eerst een **plan** te laten maken voordat het code gaat schrijven. Dit voorkomt dat het direct de verkeerde richting op gaat.

Activeer Plan Mode met **`Shift+Tab`** (twee keer drukken). Je kunt ook gewoon vragen:

```
Maak eerst een plan voor het toevoegen van een login pagina.
Schrijf nog geen code.
```

In Plan Mode kan Claude Code wel bestanden lezen en doorzoeken, maar maakt het geen wijzigingen. Zodra je het plan goedkeurt, kan het aan de slag.

> **Tip**: Plan Mode is een van de krachtigste features. Gebruik het bij elke taak die meer dan een paar regels code betreft.

### Plan als veiligheidsnet

Een plan heeft nog een groot voordeel: **het helpt je om later verder te gaan**. Als je sessie onderbroken wordt (door een rate limit, een crash, of gewoon omdat je stopt), kun je in een nieuwe sessie zeggen:

```
Ga verder met het plan. We waren bij stap 3.
```

Claude Code leest dan het plan (als het in een bestand staat of via `/compact` bewaard is) en pikt op waar je gebleven was. Dit werkt zelfs zonder de originele sessie te hervatten.

## Effectief prompts schrijven

De kwaliteit van je prompts bepaalt de kwaliteit van de output. Hier zijn de belangrijkste principes:

### 1. Wees specifiek

```
# Vaag (minder goed)
Maak een functie

# Specifiek (beter)
Maak een JavaScript functie genaamd `validateEmail` die een string
accepteert en true/false returnt op basis van een simpele e-mail validatie
```

### 2. Geef context

```
# Zonder context (minder goed)
Fix de bug

# Met context (beter)
In src/utils.js geeft de functie `calculateTotal` een verkeerd
resultaat wanneer de korting 0% is. Kun je de bug vinden en fixen?
```

### 3. Geef het gewenste resultaat aan

```
# Open (minder goed)
Doe iets met dit bestand

# Duidelijk resultaat (beter)
Voeg error handling toe aan de `fetchData` functie in api.js.
Gebruik een try/catch block en log errors naar de console.
```

### 4. Splits grote taken op

In plaats van:
```
Bouw een complete webshop met authenticatie, producten, winkelwagen en betaling
```

Splits het op:
```
Maak een basis Express server aan met een GET /products endpoint
die een hardcoded lijst van producten returnt als JSON
```

### 5. Geef Claude een manier om te verifiëren

```
Schrijf unit tests voor de calculateTotal functie, draai ze,
en fix eventuele fouten totdat alle tests slagen
```

Door Claude Code een testloop te geven, kan het zelfstandig itereren tot het resultaat correct is.

## Hoe Claude Code antwoordt

Claude Code kan meerdere dingen doen in een antwoord:

1. **Tekst**: uitleg, suggesties, antwoorden op vragen
2. **Code tonen**: codeblokken in het antwoord
3. **Bestanden aanpassen**: direct bestanden maken of bewerken in je project
4. **Commando's uitvoeren**: terminal commando's draaien (bijv. `npm install`)

Voordat Claude Code een actie uitvoert (bestand bewerken, commando draaien), vraagt het standaard om **toestemming**. Je kunt dan:

- **y** (yes) — voer de actie uit
- **n** (no) — sla de actie over
- Tekst typen — geef feedback of een andere opdracht

## Handige sneltoetsen

| Toets | Actie |
|-------|-------|
| `Enter` | Nieuwe regel in je bericht |
| Dubbele `Enter` | Bericht versturen |
| `Escape` | Claude stoppen (niet `Ctrl+C`!) |
| `Escape` (2x) | Lijst van eerdere berichten tonen |
| `Shift+Tab` (2x) | Plan Mode aan/uit |
| `Tab` | Autocomplete |
| `Up/Down` | Door berichthistorie bladeren |

> **Let op**: Gebruik `Escape` om Claude te stoppen, niet `Ctrl+C`. `Ctrl+C` sluit Claude Code helemaal af.

### Terminal setup voor betere invoer

Draai dit eenmalig voor betere ondersteuning van `Shift+Enter` als nieuwe regel:

```
/terminal-setup
```

## Tips voor beginners

1. **Begin klein** — vraag eerst simpele dingen voordat je complexe taken geeft
2. **Lees wat Claude doet** — bekijk altijd de voorgestelde wijzigingen voor je ze accepteert
3. **Commit vaak** — maak een git commit na elke werkende wijziging, zo kun je altijd terug
4. **Gebruik Plan Mode** — laat Claude eerst denken voordat het code schrijft
5. **Gebruik `/clear` vaak** — elke nieuwe taak verdient een schone context
6. **Verwijs naar bestanden** — gebruik `@bestandsnaam` voor precieze verwijzingen
7. **Stel vervolgvragen** — als het antwoord niet helemaal klopt, vraag om aanpassingen
8. **Vraag om uitleg** — leer van Claude door te vragen *waarom* het iets zo doet

---

**Volgende stap**: [Oefening 1 →](./oefeningen/oefening-1.md)

**Volgende module**: [Bestanden →](../03-bestanden/index.md)
