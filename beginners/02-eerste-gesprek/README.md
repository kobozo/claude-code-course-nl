# Module 02: Je Eerste Gesprek

In deze module leer je de basis van het werken met Claude Code: hoe je het start, welke commando's er zijn, en hoe je effectieve prompts schrijft.

## Claude Code starten

Navigeer in je terminal naar een projectmap en start Claude Code:

```bash
cd ~/mijn-project
claude
```

> **Belangrijk**: Start Claude Code altijd vanuit de root van je project. Zo heeft het toegang tot al je bestanden en begrijpt het de structuur van je project.

## Basis commando's

Claude Code heeft ingebouwde commando's die beginnen met `/`:

| Commando | Wat het doet |
|----------|-------------|
| `/help` | Toont beschikbare commando's |
| `/clear` | Wist de huidige conversatie |
| `/compact` | Comprimeert de conversatie om context vrij te maken |
| `/cost` | Toont hoeveel tokens/geld je hebt gebruikt |
| `/quit` of `Ctrl+C` | Sluit Claude Code af |

### Probeer het uit

Start Claude Code en typ:

```
/help
```

Je ziet nu een overzicht van alle beschikbare commando's.

## Effectief prompts schrijven

De kwaliteit van je prompts bepaalt de kwaliteit van de output. Hier zijn de belangrijkste principes:

### 1. Wees specifiek

```
# Vaag (minder goed)
> Maak een functie

# Specifiek (beter)
> Maak een JavaScript functie genaamd `validateEmail` die een string
> accepteert en true/false returnt op basis van een simpele e-mail validatie
```

### 2. Geef context

```
# Zonder context (minder goed)
> Fix de bug

# Met context (beter)
> In src/utils.js geeft de functie `calculateTotal` een verkeerd
> resultaat wanneer de korting 0% is. Kun je de bug vinden en fixen?
```

### 3. Geef het gewenste resultaat aan

```
# Open (minder goed)
> Doe iets met dit bestand

# Duidelijk resultaat (beter)
> Voeg error handling toe aan de `fetchData` functie in api.js.
> Gebruik een try/catch block en log errors naar de console.
```

### 4. Splits grote taken op

In plaats van:
```
> Bouw een complete webshop met authenticatie, producten, winkelwagen en betaling
```

Splits het op:
```
> Maak een basis Express server aan met een GET /products endpoint
> die een hardcoded lijst van producten returnt als JSON
```

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
| `Ctrl+Enter` of dubbele `Enter` | Bericht versturen |
| `Escape` | Huidige actie annuleren |
| `Tab` | Autocomplete |

## Tips voor beginners

1. **Begin klein** — vraag eerst simpele dingen voordat je complexe taken geeft
2. **Lees wat Claude doet** — bekijk altijd de voorgestelde wijzigingen voor je ze accepteert
3. **Stel vervolgvragen** — als het antwoord niet helemaal klopt, vraag om aanpassingen
4. **Gebruik `/clear`** — als het gesprek te lang wordt, begin opnieuw met een schone lei
5. **Verwijs naar bestanden** — noem bestandsnamen en regelnummers voor precieze instructies

---

**Volgende stap**: [Oefening 1 →](./oefeningen/oefening-1.md)

**Volgende module**: [Bestanden →](../03-bestanden/README.md)
