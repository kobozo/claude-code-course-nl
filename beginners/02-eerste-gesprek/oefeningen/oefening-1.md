# Oefening 1: Je eerste prompts

## Doel

Oefen met het stellen van vragen en geven van opdrachten aan Claude Code.

## Voorbereiding

1. Open je terminal
2. Navigeer naar een map (of maak een nieuwe aan):
   ```bash
   mkdir ~/claude-oefeningen
   cd ~/claude-oefeningen
   ```
3. Start Claude Code:
   ```bash
   claude
   ```

## Opdrachten

### Opdracht A: Een vraag stellen

Vraag Claude Code om uit te leggen wat een `for` loop is in JavaScript.

```
Leg uit wat een for loop is in JavaScript, met een simpel voorbeeld
```

**Verwacht resultaat**: Je krijgt een uitleg met een codevoorbeeld.

### Opdracht B: Code laten genereren

Vraag Claude Code om een simpele functie te maken:

```
Maak een JavaScript bestand genaamd greeting.js met een functie
die een naam accepteert en "Hallo, [naam]!" returnt
```

**Verwacht resultaat**: Claude Code maakt het bestand `greeting.js` aan (na jouw toestemming).

### Opdracht C: Code laten uitleggen

Als `greeting.js` is aangemaakt:

```
Lees greeting.js en leg uit wat elke regel doet
```

**Verwacht resultaat**: Een regel-voor-regel uitleg van de code.

### Opdracht D: Code aanpassen

Vraag om een wijziging:

```
Pas greeting.js aan zodat het ook een optionele begroeting accepteert.
Standaard "Hallo", maar je moet ook "Goedemorgen" o.i.d. kunnen meegeven
```

**Verwacht resultaat**: Claude Code past het bestand aan met een extra parameter.

### Opdracht E: Commando's draaien

Vraag Claude Code om de code uit te voeren:

```
Draai greeting.js met Node.js en test de functie met de naam "Yannick"
```

**Verwacht resultaat**: Claude Code voert het bestand uit en toont de output.

## Bonus

- Probeer dezelfde opdrachten in het Engels. Merk je verschil in kwaliteit?
- Vraag Claude Code om een README.md te maken voor dit mini-project
- Experimenteer met `/compact` en `/clear` commando's

## Reflectie

Na deze oefening kun je:

- [x] Vragen stellen aan Claude Code
- [x] Code laten genereren
- [x] Bestaande code laten uitleggen
- [x] Code laten aanpassen
- [x] Commando's laten uitvoeren
