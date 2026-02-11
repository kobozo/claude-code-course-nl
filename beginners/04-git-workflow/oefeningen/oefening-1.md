# Oefening 1: Je eerste commit met Claude Code

## Doel

Leer hoe je Git commits maakt via Claude Code.

## Voorbereiding

1. Maak een nieuw project aan en initialiseer Git:
   ```bash
   mkdir ~/claude-oefeningen/git-oefening
   cd ~/claude-oefeningen/git-oefening
   git init
   ```

2. Start Claude Code:
   ```bash
   claude
   ```

## Opdrachten

### Stap 1: Een bestand laten maken

```
Maak een bestand index.js aan met een simpele "Hello World" Express server
die luistert op poort 3000
```

Accepteer het bestand.

### Stap 2: Eerste commit

```
Commit dit bestand met een goede commit message
```

**Let op**:
- Bekijk de commit message die Claude Code voorstelt
- Is het een duidelijke, beschrijvende message?
- Accepteer of vraag om aanpassing

### Stap 3: Een wijziging maken

```
Voeg een GET /health endpoint toe aan index.js dat { status: "ok" } returnt
```

### Stap 4: Bekijk de diff

```
Toon wat er veranderd is sinds de laatste commit
```

### Stap 5: Commit de wijziging

```
Commit deze wijziging met een conventional commit message (feat: ...)
```

### Stap 6: Bekijk de history

```
Toon de git log
```

Je zou nu twee commits moeten zien.

## Bonus

### Maak een branch

```
Maak een nieuwe branch "feature/about-endpoint", voeg een GET /about
endpoint toe, en commit het
```

### Bekijk de diff tussen branches

```
Wat is het verschil tussen de main branch en feature/about-endpoint?
```

## Verwacht resultaat

Na deze oefening heb je:

- [x] Een Git repository geinitialiseerd
- [x] Bestanden gemaakt en gecommit via Claude Code
- [x] Wijzigingen bekeken met `git diff`
- [x] Meerdere commits gemaakt met goede messages
- [x] (Bonus) Een branch aangemaakt en gebruikt

## Tips

- Als je per ongeluk iets commit dat niet klopt, kun je Claude Code vragen: "Maak de laatste commit ongedaan"
- Claude Code kiest automatisch welke bestanden het staged — controleer dit altijd
- Je kunt ook specifieke bestanden committen: "Commit alleen `index.js`"
