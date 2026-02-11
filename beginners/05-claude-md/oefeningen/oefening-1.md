# Oefening 1: Eigen CLAUDE.md schrijven

## Doel

Schrijf een `CLAUDE.md` voor een project en ervaar het verschil dat het maakt.

## Voorbereiding

1. Maak een nieuw project aan:
   ```bash
   mkdir ~/claude-oefeningen/mijn-project
   cd ~/claude-oefeningen/mijn-project
   git init
   ```

2. Start Claude Code:
   ```bash
   claude
   ```

## Opdracht A: Zonder CLAUDE.md

Vraag Claude Code eerst om een functie te maken **zonder** CLAUDE.md:

```
> Maak een bestand utils.js met een functie die een datum formatteert
```

Let op:
- Welke programmeertaal kiest het?
- Welke stijl gebruikt het?
- Is het consistent met wat jij zou willen?

Sluit Claude Code af met `/quit`.

## Opdracht B: CLAUDE.md aanmaken

Maak nu handmatig (of met Claude Code) een `CLAUDE.md` aan in de project root:

```bash
claude
```

```
> Maak een CLAUDE.md bestand aan met de volgende inhoud:

# Mijn Project

Een Node.js utility library.

## Regels
- Gebruik ES Modules (import/export), geen CommonJS (require)
- Alle functies moeten JSDoc comments hebben
- Gebruik Nederlandse variabelenamen waar mogelijk
- Geen externe dependencies tenzij strikt noodzakelijk

## Code stijl
- 2 spaties voor indentatie
- Enkele quotes voor strings
- Altijd puntkomma's aan het einde van regels

## Commando's
- `node --test` — draai tests
- `node index.js` — start de applicatie
```

## Opdracht C: Met CLAUDE.md

Start Claude Code opnieuw (zodat het de CLAUDE.md inleest):

```bash
claude
```

Vraag nu dezelfde opdracht:

```
> Maak een bestand utils.js met een functie die een datum formatteert
```

Vergelijk het resultaat:
- [ ] Gebruikt het ES Modules?
- [ ] Heeft het JSDoc comments?
- [ ] Zijn er Nederlandse variabelenamen?
- [ ] Klopt de code stijl (2 spaties, enkele quotes, puntkomma's)?

## Opdracht D: Controleer de werking

```
> Wat weet je over dit project op basis van de CLAUDE.md?
```

Claude Code zou een samenvatting moeten geven van de regels en configuratie.

## Opdracht E: CLAUDE.md uitbreiden

Voeg extra informatie toe:

```
> Voeg aan de CLAUDE.md toe:
> - Een sectie "Structuur" met: src/ voor broncode, tests/ voor tests
> - Een sectie "Test conventie" met: testbestanden eindigen op .test.js
```

## Bonus: Globale CLAUDE.md

Maak een globale CLAUDE.md aan die voor al je projecten geldt:

```
> Maak het bestand ~/.claude/CLAUDE.md aan met:
> - Mijn naam is [jouw naam]
> - Ik werk het liefst met JavaScript/TypeScript
> - Gebruik altijd Nederlandse uitleg maar Engelse code
> - Commit messages in het Engels
```

## Reflectie

Na deze oefening kun je:

- [x] Het verschil ervaren tussen werken met en zonder CLAUDE.md
- [x] Een effectieve CLAUDE.md schrijven voor een project
- [x] De werking controleren door Claude Code te ondervragen
- [x] Een globale CLAUDE.md instellen voor persoonlijke voorkeuren
