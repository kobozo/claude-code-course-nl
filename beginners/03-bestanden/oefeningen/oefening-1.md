# Oefening 1: Bugs fixen met Claude Code

## Doel

Leer hoe je Claude Code kunt gebruiken om bugs te vinden en te fixen in een bestaand bestand.

## Voorbereiding

1. Kopieer het starterbestand naar een werkmap:
   ```bash
   mkdir ~/claude-oefeningen/bestanden
   cp beginners/03-bestanden/oefeningen/starter/app.js ~/claude-oefeningen/bestanden/
   cd ~/claude-oefeningen/bestanden
   ```

2. Draai het bestand eerst om de bugs te zien:
   ```bash
   node app.js
   ```

3. Start Claude Code:
   ```bash
   claude
   ```

## Het bestand

`app.js` is een simpele takenlijst-applicatie. Het bevat **4 bugs**:

1. Een filter die het tegenovergestelde doet
2. Een telling die het verkeerde telt
3. Een ontbrekend veld bij het toevoegen van taken
4. Verkeerde opmaak bij het tonen van taken (inclusief een typo)

## Opdrachten

### Stap 1: Laat Claude Code het bestand lezen

```
> Lees app.js en vertel me welke bugs je ziet
```

Bekijk of Claude Code alle 4 de bugs vindt.

### Stap 2: Fix de bugs een voor een

```
> Fix bug 1: de functie getTakenToDo filtert verkeerd
```

Controleer de wijziging en accepteer als het klopt.

### Stap 3: Of fix alles in een keer

```
> Fix alle bugs in app.js
```

### Stap 4: Test het resultaat

```
> Draai app.js met Node.js om te controleren of alle bugs gefixt zijn
```

## Verwacht resultaat na de fixes

```
Taken die nog gedaan moeten worden:
[
  { id: 1, titel: 'Boodschappen doen', voltooid: false },
  { id: 3, titel: 'Code schrijven', voltooid: false }
]

Aantal voltooide taken: 1

Alle taken:
=== Mijn Taken ===
[x] Boodschappen doen
[ ] Was ophangen
[x] Code schrijven
[x] TypeScript leren
Totaal: 4 taken
```

> **Let op**: de exacte `[x]` en `[ ]` markers kloppen als voltooid = `[x]` en niet voltooid = `[ ]`... of is het andersom? Dat is onderdeel van de bug!

## Antwoorden (spoilers!)

<details>
<summary>Klik hier om de bugs te zien</summary>

1. **`getTakenToDo`**: filtert op `voltooid === true`, maar zou `voltooid === false` moeten zijn
2. **`aantalVoltooid`**: filtert op `voltooid === false`, maar zou `voltooid === true` moeten zijn
3. **`voegTaakToe`**: mist het `id` veld in het nieuwe taak-object
4. **`toonTaken`**: de `[x]` en `[ ]` zijn omgewisseld, en `taken.lenght` bevat een typo (moet `taken.length` zijn)

</details>
