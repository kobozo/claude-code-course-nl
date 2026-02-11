# Module 00: Introductie

## Wat is Claude Code?

Claude Code is een **agentic coding tool** gemaakt door Anthropic. Het kan je hele codebase lezen, bestanden bewerken, commando's draaien, en integreert met je development tools.

Claude Code is beschikbaar in meerdere omgevingen:

- **Terminal** — de volledige CLI, direct in je terminal
- **VS Code / Cursor** — als extensie in je editor
- **Desktop app** — een standalone applicatie
- **Web** — via [claude.ai/code](https://claude.ai/code), zonder lokale installatie
- **JetBrains** — plugin voor IntelliJ, PyCharm, WebStorm, etc.

In deze training focussen we op de **Terminal CLI**, omdat die de meeste features biedt en de basis vormt voor alle andere omgevingen.

Denk aan Claude Code als een collega-developer die:

- Je code kan lezen en begrijpen
- Bestanden kan aanmaken en bewerken
- Git commando's kan uitvoeren
- Terminal commando's kan draaien
- Meerdere bestanden tegelijk kan aanpassen
- Zelf een plan kan maken en uitvoeren

## Wat kan Claude Code?

| Taak | Voorbeeld |
|------|-----------|
| Code schrijven | "Maak een functie die e-mailadressen valideert" |
| Bugs fixen | "Er zit een fout in `utils.js`, kun je die oplossen?" |
| Code uitleggen | "Leg uit wat deze regex doet" |
| Refactoring | "Refactor deze functie naar kleinere functies" |
| Tests schrijven | "Schrijf unit tests voor de `UserService` class" |
| Git operaties | "Commit deze wijzigingen met een goede commit message" |
| Bestanden beheren | "Maak een nieuwe component aan in de `components/` map" |
| Plannen maken | "Maak een plan voor het toevoegen van authenticatie" |
| Debuggen | "De app crasht bij het laden van de homepage, help me debuggen" |

## Wanneer gebruik je Claude Code?

### Claude Code is ideaal voor:

- **Werken in bestaande projecten** — Claude Code begrijpt je hele codebase
- **Complexe wijzigingen** — meerdere bestanden tegelijk aanpassen
- **Git workflows** — commits, branches, PRs
- **Terminal-taken** — tests draaien, builds uitvoeren, packages installeren
- **Saaie klussen** — tests schrijven, lint errors fixen, dependencies updaten

### Andere tools zijn beter voor:

- **Snel een vraag stellen** zonder project-context → gebruik ChatGPT of claude.ai
- **Visuele editing** met inline suggesties → gebruik Cursor of Copilot
- **Niet-programmeer vragen** → gebruik claude.ai

## Hoe werkt het?

```
Terminal (jij) → Claude Code (CLI) → Claude AI (Anthropic API) → Antwoord + Acties
```

1. Jij typt een vraag of opdracht in je terminal
2. Claude Code stuurt dit naar de Claude AI, samen met relevante context uit je project
3. Claude AI stuurt een antwoord terug
4. Claude Code voert eventuele acties uit (bestanden bewerken, commando's draaien)

Het bijzondere is dat Claude Code **zelfstandig** (agentic) werkt: het kan meerdere stappen achter elkaar uitvoeren, bestanden doorzoeken, tests draaien, en op basis van de resultaten vervolgacties nemen.

## Vereisten

Voordat je begint, zorg dat je het volgende hebt:

- **Terminal basiskennis**: je kunt navigeren met `cd`, bestanden bekijken met `ls`, en weet wat een map (directory) is
- **Een computer** met macOS, Linux, of Windows (WSL aanbevolen)
- **Een Anthropic account** voor authenticatie

> **Geen programmeerervaring nodig!** Je kunt Claude Code ook gebruiken om te leren programmeren. Wel is basiskennis van de terminal vereist.

## Kosten

Claude Code vereist een betaald account:

| Plan | Prijs | Geschikt voor |
|------|-------|---------------|
| Pro | $20/maand | Af en toe gebruiken |
| Max (5x) | $100/maand | Dagelijks gebruiken |
| Max (20x) | $200/maand | Intensief/professioneel gebruik |
| API credits | Variabel | Pay-as-you-go via Anthropic Console |

---

**Volgende module**: [Installatie →](../01-installatie/index.md)
