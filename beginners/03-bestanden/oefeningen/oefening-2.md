# Oefening 2: Nieuw bestand laten genereren

## Doel

Leer hoe je Claude Code kunt gebruiken om nieuwe bestanden te genereren op basis van beschrijvingen.

## Voorbereiding

1. Navigeer naar je werkmap:
   ```bash
   cd ~/claude-oefeningen/bestanden
   ```

2. Start Claude Code:
   ```bash
   claude
   ```

## Opdrachten

### Opdracht A: Een module genereren

Vraag Claude Code om een hulpmodule te maken voor de takenlijst-app:

```
> Maak een bestand storage.js dat functies exporteert om taken op te slaan
> en te laden vanuit een JSON bestand. Gebruik het fs module van Node.js.
> Exporteer twee functies: saveTaken(taken, bestandsnaam) en loadTaken(bestandsnaam)
```

**Controleer**:
- [x] Het bestand is aangemaakt
- [x] Het gebruikt `fs` van Node.js
- [x] Beide functies zijn geexporteerd
- [x] Er is error handling aanwezig

### Opdracht B: Bestanden aan elkaar koppelen

Vraag Claude Code om `app.js` aan te passen zodat het `storage.js` gebruikt:

```
> Pas app.js aan zodat het storage.js gebruikt om de taken op te slaan
> na elke wijziging, en bij het opstarten de taken laadt vanuit het bestand
```

### Opdracht C: Test het geheel

```
> Draai app.js, controleer of taken.json wordt aangemaakt,
> en draai het daarna nogmaals om te verifiëren dat de taken geladen worden
```

## Bonus opdrachten

### Een configuratiebestand

```
> Maak een config.js bestand aan met configuratie-opties:
> - bestandsnaam voor opslag (standaard: "taken.json")
> - maximaal aantal taken (standaard: 100)
> Gebruik dit in app.js
```

### Tests toevoegen

```
> Maak een bestand test.js aan dat de functies in app.js test.
> Test in ieder geval: getTakenToDo, aantalVoltooid en voegTaakToe.
> Gebruik simpele console.assert statements (geen test framework nodig).
```

## Reflectie

Na deze oefening kun je:

- [x] Nieuwe bestanden laten genereren door Claude Code
- [x] Beschrijven wat een bestand moet bevatten
- [x] Meerdere bestanden aan elkaar laten koppelen
- [x] Het resultaat testen via Claude Code
