# Module 04: Git Workflow

Claude Code integreert naadloos met Git. Je kunt commits maken, branches beheren en zelfs pull requests aanmaken — allemaal via natuurlijke taal.

## Waarom Git via Claude Code?

- **Goede commit messages**: Claude Code schrijft duidelijke, beschrijvende commit messages
- **Sneller werken**: geen commando's onthouden, gewoon beschrijven wat je wilt
- **Minder fouten**: Claude Code controleert wat er gewijzigd is voordat het commit

## Basishandelingen

### Status bekijken

```
> Wat is de git status van dit project?
```

```
> Welke bestanden zijn gewijzigd?
```

### Commits maken

```
> Commit de huidige wijzigingen met een goede commit message
```

Claude Code zal:
1. `git status` en `git diff` uitvoeren om de wijzigingen te bekijken
2. Een passende commit message voorstellen
3. Vragen om toestemming voordat het de commit maakt

Je kunt ook specifiek zijn:

```
> Commit alleen de wijzigingen in src/utils.js
```

```
> Commit met de message "fix: validatie bug in e-mail check opgelost"
```

### Wijzigingen bekijken

```
> Toon de diff van mijn laatste wijzigingen
```

```
> Wat heb ik veranderd in auth.js ten opzichte van de vorige commit?
```

## Werken met branches

### Branch aanmaken

```
> Maak een nieuwe branch genaamd feature/login-pagina
```

### Branch wisselen

```
> Switch naar de main branch
```

### Branches bekijken

```
> Welke branches bestaan er en op welke zit ik nu?
```

## Pull Requests

Als je project op GitHub staat, kan Claude Code ook PRs aanmaken:

```
> Maak een pull request aan voor de huidige branch naar main
```

Claude Code gebruikt de `gh` CLI tool hiervoor. Als die niet geinstalleerd is, helpt het je met de installatie.

## Git log bekijken

```
> Toon de laatste 5 commits
```

```
> Wat is er veranderd in de laatste commit?
```

## Tips

1. **Commit vaak** — kleine, gerichte commits zijn beter dan grote
2. **Lees de commit message** die Claude Code voorstelt — pas aan als nodig
3. **Gebruik branches** voor experimentele wijzigingen
4. **Controleer de diff** voordat je commit — Claude Code toont dit standaard

## Conventionele commit messages

Een veelgebruikte conventie voor commit messages:

| Prefix | Gebruik |
|--------|---------|
| `feat:` | Nieuwe functionaliteit |
| `fix:` | Bug fix |
| `docs:` | Documentatie wijziging |
| `refactor:` | Code herstructurering (geen gedragswijziging) |
| `test:` | Tests toevoegen of aanpassen |
| `chore:` | Onderhoudstaken (dependencies, config) |

Je kunt Claude Code vragen deze conventie te volgen:

```
> Commit met een conventional commit message
```

---

**Oefening**: [Oefening 1: Commit maken →](./oefeningen/oefening-1.md)

**Volgende module**: [CLAUDE.md →](../05-claude-md/README.md)
