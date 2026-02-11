# Module 07: Instellingen en Tips

In deze laatste module leer je hoe je Claude Code kunt aanpassen aan je eigen werkwijze, en krijg je handige tips voor dagelijks gebruik.

## Permission modes

Claude Code vraagt standaard toestemming voordat het acties uitvoert. Je kunt dit aanpassen:

### Tijdens een sessie

Bij elke actie kun je kiezen:

| Keuze | Wat het doet |
|-------|-------------|
| **y** | Sta deze ene actie toe |
| **n** | Weiger deze actie |
| **always** | Sta dit type actie altijd toe (voor deze sessie) |

### Met /allowed-tools

Je kunt specifieke tools permanent toestaan:

```
/allowed-tools
```

Dit opent een menu waar je kunt instellen welke tools Claude Code mag gebruiken zonder te vragen. Bijvoorbeeld:

- **Read** — bestanden lezen (veilig, geen wijzigingen)
- **Glob/Grep** — bestanden zoeken (veilig)
- **Write/Edit** — bestanden aanpassen (wees voorzichtig)
- **Bash** — terminal commando's (wees heel voorzichtig)

> **Tip voor beginners**: Laat de standaardinstellingen staan. Het is goed om te zien wat Claude Code doet voordat je het automatisch toestaat.

## Sneltoetsen

| Toets | Actie |
|-------|-------|
| `Enter` | Nieuwe regel |
| Dubbele `Enter` | Bericht versturen |
| `Escape` | Claude stoppen |
| `Escape` (2x) | Lijst van eerdere berichten tonen |
| `Shift+Tab` (2x) | Plan Mode aan/uit |
| `Tab` | Autocomplete bestanden en commando's |
| `Up/Down` | Door berichthistorie bladeren |
| `Ctrl+V` | Afbeelding plakken (niet `Cmd+V`!) |

### Terminal setup

Draai dit eenmalig voor betere toetsondersteuning (Shift+Enter voor nieuwe regels):

```
/terminal-setup
```

### Vim mode

Voor Vim-gebruikers:

```
/vim
```

### Keybindings aanpassen

```json
// ~/.claude/keybindings.json
[
  {
    "key": "ctrl+s",
    "command": "submit"
  }
]
```

## Alle slash-commando's

| Commando | Functie |
|----------|---------|
| `/help` | Hulp en beschikbare commando's |
| `/clear` | Gesprek wissen — **gebruik dit vaak!** |
| `/compact` | Gesprek samenvatten om context vrij te maken |
| `/cost` | Token- en kostengebruik bekijken |
| `/model` | Model wijzigen |
| `/config` | Instellingen interactief aanpassen |
| `/allowed-tools` | Tool permissions instellen |
| `/mcp` | MCP servers beheren |
| `/vim` | Vim-modus inschakelen |
| `/terminal-setup` | Terminal sneltoetsen installeren |
| `/install-github-app` | GitHub PR review automatisering |
| `/init` | CLAUDE.md genereren voor je project |

## CLI opties (buiten Claude Code)

Je kunt Claude Code ook met opties starten vanuit je terminal:

| Commando | Wat het doet |
|----------|-------------|
| `claude` | Start interactieve sessie |
| `claude "vraag"` | Start sessie met een vraag |
| `claude -c` | Hervat de laatste conversatie |
| `claude -r <id>` | Hervat een specifieke sessie |
| `claude -p "vraag"` | Stel een vraag en sluit af (print mode) |
| `claude --model sonnet` | Gebruik een specifiek model |

### Print mode voor scripts

Met `-p` kun je Claude Code gebruiken in scripts en pipelines:

```bash
# Vraag uitleg over een bestand
claude -p "Wat doet dit bestand?" < config.js

# Analyseer git log
git log --oneline -10 | claude -p "Vat deze commits samen"

# Review gewijzigde bestanden
git diff main --name-only | claude -p "Review deze bestanden op security issues"
```

## Tips voor dagelijks gebruik

### 1. Gebruik `/clear` bij elke nieuwe taak

```
/clear
```

Elke nieuwe taak verdient een schone context. Oude chathistorie kost tokens en kan Claude verwarren.

### 2. Gebruik `/compact` bij lange sessies

Na veel heen-en-weer gaat Claude Code context verliezen. Gebruik `/compact` om het gesprek samen te vatten en context vrij te maken.

### 3. Wees specifiek over bestanden

```
# Minder goed
Fix de bug

# Beter
In src/auth/login.ts op regel 45 wordt de error niet goed afgehandeld.
Voeg een try/catch block toe.
```

Of gebruik `@`:

```
Fix de bug in @src/auth/login.ts op regel 45
```

### 4. Gebruik meerdere sessies

Je kunt meerdere Claude Code sessies tegelijk draaien in verschillende terminals. Handig als je aan meerdere taken werkt.

### 5. Commit voor je verder gaat

Maak na elke werkende wijziging een commit. Dit geeft je een veiligheidsnet als Claude Code iets stuk maakt bij een volgende stap.

### 6. Gebruik Plan Mode voor complexe taken

Druk `Shift+Tab` (2x) in of vraag expliciet om een plan. Laat Claude eerst denken voordat het code schrijft.

### 7. Leer van Claude Code

Vraag niet alleen om code, maar ook om uitleg:

```
Leg uit waarom je deze aanpak hebt gekozen in plaats van een alternatief
```

### 8. Review je code samen

```
Bekijk @src/api/routes.ts en geef feedback op de code kwaliteit.
Zijn er verbeterpunten?
```

### 9. Gebruik afbeeldingen

Je kunt screenshots en afbeeldingen plakken met `Ctrl+V`. Handig voor:

- UI bugs: "Deze knop staat verkeerd, zie screenshot"
- Ontwerpen: "Bouw dit ontwerp na"
- Errors: screenshot van een foutmelding

### 10. Laat Claude zichzelf verifiëren

```
Schrijf tests voor de login functie, draai ze, en fix eventuele fouten
totdat alle tests slagen
```

Door Claude een verificatiestap te geven kan het autonoom itereren.

## Rate limits en sessie-management

### Wat als je de limiet bereikt?

Als je midden in een taak zit en je usage limit bereikt, stopt Claude Code. Dit is een veelvoorkomende situatie. Zo ga je er mee om:

1. **Bewaar het session ID** — als je Claude Code afsluit (met `Ctrl+C`), toont het een session ID:
   ```
   Resume this session with:
   claude --resume 10627a9b-2166-4019-91c9-80f5bf596bfe
   ```

2. **Wacht tot de limiet reset** — rate limits resetten per 5-uur venster

3. **Hervat de sessie** — als je weer krediet hebt:
   ```bash
   # Hervat de laatste sessie in deze map
   claude -c

   # Of hervat een specifieke sessie met het ID
   claude --resume 10627a9b-2166-4019-91c9-80f5bf596bfe
   ```

> **Belangrijk**: Claude Code gaat niet automatisch verder als je de sessie open laat staan. Je moet zelf actief hervatten. Gebruik `-c` voor de laatste sessie, of `--resume <id>` voor een specifieke sessie.

### De plan-strategie voor lange taken

De beste manier om onderbrekingen op te vangen is door **altijd eerst een plan te maken**:

```
Maak een plan met een todo-lijst voor het refactoren van de auth module.
Sla het op in een bestand genaamd PLAN.md.
```

Waarom? Omdat je na een onderbreking in een **nieuwe sessie** simpelweg kunt zeggen:

```
Lees PLAN.md en ga verder waar we gebleven waren.
```

Dit werkt zelfs zonder de originele sessie te hervatten. Het plan fungeert als een overdachtsdocument — ook na `/compact` of in een compleet nieuwe sessie.

### Meerdere sessies beheren

Als je in dezelfde map meerdere sessies hebt gehad, pakt `-c` altijd de **laatste**. Bewaar session IDs als je specifieke sessies wilt hervatten. Tip: plak ze in een notitie of in je plan-bestand.

## Kosten in de gaten houden

Claude Code gebruikt tokens (en dus geld) bij elke interactie. Houd dit in de gaten:

```
/cost
```

Tips om kosten te beperken:

- Gebruik `/clear` bij elke nieuwe taak
- Gebruik `/compact` regelmatig bij lange sessies
- Wees specifiek in je prompts (minder heen-en-weer = minder tokens)
- Verwijs naar bestanden met `@` in plaats van "zoek het op"
- Gebruik Plan Mode om eerst te denken, dan te doen
- **Upgrade je plan** als je regelmatig limits bereikt

## Samenvatting van de hele training

Gefeliciteerd! Je hebt nu de basis van Claude Code onder de knie:

| Module | Wat je hebt geleerd |
|--------|-------------------|
| 00 | Wat Claude Code is en wanneer je het gebruikt |
| 01 | Installatie en authenticatie |
| 02 | Basis prompts, commando's, Plan Mode en @ referenties |
| 03 | Bestanden lezen, maken en bewerken |
| 04 | Git workflow, commit-strategie, PRs |
| 05 | CLAUDE.md configuratie en custom commands |
| 06 | MCP servers voor extra functionaliteit |
| 07 | Instellingen, CLI opties en dagelijkse tips |

## Volgende stappen

Nu je de basis kent, kun je:

1. **Claude Code dagelijks gebruiken** bij je projecten
2. **CLAUDE.md bestanden optimaliseren** voor je meest gebruikte projecten
3. **Custom commands** aanmaken voor je team in `.claude/commands/`
4. **MCP servers verkennen** voor je specifieke tools en workflows
5. **Geavanceerde features** ontdekken zoals hooks, subagents, skills en plugins

---

**Terug naar**: [Cursusoverzicht →](../index.md)
