# Module 00: Introductie

## Wat is Claude Code?

Claude Code is een **command-line tool (CLI)** gemaakt door Anthropic. Je draait het in je terminal, en het geeft je een AI-assistent die direct in je codebase kan werken.

Denk aan het als een collega-developer die:

- Je code kan lezen en begrijpen
- Bestanden kan aanmaken en bewerken
- Git commando's kan uitvoeren
- Terminal commando's kan draaien
- Je vragen kan beantwoorden over je project

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

## Wanneer gebruik je Claude Code?

### Claude Code is ideaal voor:

- **Werken in bestaande projecten** — Claude Code begrijpt je hele codebase
- **Complexe wijzigingen** — meerdere bestanden tegelijk aanpassen
- **Git workflows** — commits, branches, PRs
- **Terminal-taken** — tests draaien, builds uitvoeren, packages installeren

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

## Vereisten

Voordat je begint, zorg dat je het volgende hebt:

- **Terminal basiskennis**: je kunt navigeren met `cd`, bestanden bekijken met `ls`, en weet wat een map (directory) is
- **Een computer** met macOS, Linux, of Windows met WSL
- **Node.js** versie 18 of hoger (installatie in de volgende module)
- **Een Anthropic account** voor authenticatie

> **Geen programmeerervaring nodig!** Je kunt Claude Code ook gebruiken om te leren programmeren. Wel is basiskennis van de terminal vereist.

---

**Volgende module**: [Installatie →](../01-installatie/index.md)
