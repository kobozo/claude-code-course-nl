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

## Keybindings

Je kunt sneltoetsen aanpassen in `~/.claude/keybindings.json`.

### Standaard sneltoetsen

| Toets | Actie |
|-------|-------|
| `Enter` | Nieuwe regel |
| `Ctrl+Enter` of dubbele `Enter` | Bericht versturen |
| `Escape` | Huidige actie annuleren / stoppen |
| `Tab` | Autocomplete |
| `Up/Down` | Door historie bladeren |

### Aanpassen

```
/keybindings
```

Of bewerk het bestand direct:

```json
// ~/.claude/keybindings.json
[
  {
    "key": "ctrl+s",
    "command": "submit"
  }
]
```

## Handige slash-commando's

| Commando | Functie |
|----------|---------|
| `/help` | Hulp en beschikbare commando's |
| `/clear` | Gesprek wissen |
| `/compact` | Gesprek samenvatten om context vrij te maken |
| `/cost` | Token- en kostengebruik bekijken |
| `/model` | Model wijzigen (als beschikbaar) |
| `/allowed-tools` | Tool permissions instellen |
| `/mcp` | MCP server beheren |

## Tips voor dagelijks gebruik

### 1. Start altijd vanuit de project root

```bash
cd ~/mijn-project
claude
```

Claude Code werkt het beste als het de volledige projectstructuur kan zien.

### 2. Gebruik /compact bij lange sessies

Na veel heen-en-weer gaat Claude Code context verliezen. Gebruik `/compact` om het gesprek samen te vatten en context vrij te maken.

### 3. Wees specifiek over bestanden

```
# Minder goed
> Fix de bug

# Beter
> In src/auth/login.ts op regel 45 wordt de error niet goed afgehandeld.
> Voeg een try/catch block toe.
```

### 4. Gebruik meerdere sessies

Je kunt meerdere Claude Code sessies tegelijk draaien in verschillende terminals. Handig als je aan meerdere taken werkt.

### 5. Leer van Claude Code

Vraag niet alleen om code, maar ook om uitleg:

```
> Leg uit waarom je deze aanpak hebt gekozen in plaats van een alternatief
```

### 6. Gebruik het voor leren

```
> Ik ben nieuw met React. Leg stap voor stap uit hoe deze component werkt
> en welke patronen er gebruikt worden
```

### 7. Review je code samen

```
> Bekijk src/api/routes.ts en geef feedback op de code kwaliteit.
> Zijn er verbeterpunten?
```

## Kosten in de gaten houden

Claude Code gebruikt tokens (en dus geld) bij elke interactie. Houd dit in de gaten:

```
/cost
```

Tips om kosten te beperken:

- Gebruik `/compact` regelmatig
- Wees specifiek in je prompts (minder heen-en-weer = minder tokens)
- Verwijs naar specifieke bestanden in plaats van "zoek het op"
- Gebruik `/clear` als je aan een heel ander onderwerp begint

## Samenvatting van de hele training

Gefeliciteerd! Je hebt nu de basis van Claude Code onder de knie:

| Module | Wat je hebt geleerd |
|--------|-------------------|
| 00 | Wat Claude Code is en wanneer je het gebruikt |
| 01 | Installatie en authenticatie |
| 02 | Basis prompts en commando's |
| 03 | Bestanden lezen, maken en bewerken |
| 04 | Git workflow (commits, branches, PRs) |
| 05 | CLAUDE.md configuratie |
| 06 | MCP servers voor extra functionaliteit |
| 07 | Instellingen en dagelijkse tips |

## Volgende stappen

Nu je de basis kent, kun je:

1. **Claude Code dagelijks gebruiken** bij je projecten
2. **CLAUDE.md bestanden optimaliseren** voor je meest gebruikte projecten
3. **MCP servers verkennen** voor je specifieke tools en workflows
4. **Geavanceerde features** ontdekken zoals hooks, custom agents en plugins

---

**Terug naar**: [Cursusoverzicht →](../README.md)
