# Module 05: CLAUDE.md — Je Project Configureren

`CLAUDE.md` is een speciaal bestand dat Claude Code automatisch leest bij het opstarten. Het is als een briefing voor je AI-assistent: je vertelt wie je bent, hoe je project werkt, en welke regels er gelden.

## Waarom CLAUDE.md?

Zonder `CLAUDE.md` moet je elke sessie opnieuw context geven:

```
Dit project gebruikt TypeScript, we volgen de Airbnb style guide,
tests staan in __tests__/, en we gebruiken pnpm als package manager...
```

Met een `CLAUDE.md` weet Claude Code dit automatisch.

## Waar komt CLAUDE.md?

Er zijn drie niveaus:

| Locatie | Bereik | Gebruik |
|---------|--------|---------|
| `~/.claude/CLAUDE.md` | Alle projecten | Persoonlijke voorkeuren |
| `./CLAUDE.md` (project root) | Dit project | Projectregels (deel met team) |
| `./src/CLAUDE.md` (submap) | Die submap | Module-specifieke instructies |

### Volgorde van laden

1. Eerst je **globale** `~/.claude/CLAUDE.md`
2. Dan de **project** `CLAUDE.md`
3. Dan eventuele **submap** CLAUDE.md bestanden

Bij conflicten wint het meest specifieke bestand.

## Wat zet je erin?

### 1. Projectbeschrijving

```markdown
# Mijn Project

Een webapplicatie voor het beheren van recepten, gebouwd met Next.js en PostgreSQL.
```

### 2. Technische stack

```markdown
## Tech Stack
- Frontend: Next.js 14 met App Router
- Taal: TypeScript (strict mode)
- Styling: Tailwind CSS
- Database: PostgreSQL met Drizzle ORM
- Package manager: pnpm
- Tests: Vitest + React Testing Library
```

### 3. Conventies en regels

```markdown
## Regels
- Gebruik Nederlandse variabelenamen in de frontend
- Commit messages in het Engels met conventional commits
- Geen `any` types in TypeScript
- Elke functie moet een JSDoc comment hebben
```

### 4. Veelgebruikte commando's

```markdown
## Commando's
- `pnpm dev` — start de development server
- `pnpm test` — draai alle tests
- `pnpm build` — maak een productie build
- `pnpm db:migrate` — draai database migraties
```

### 5. Projectstructuur

```markdown
## Structuur
- `src/app/` — Next.js pagina's en layouts
- `src/components/` — herbruikbare React componenten
- `src/lib/` — utility functies en database connectie
- `src/types/` — TypeScript type definities
```

## Voorbeeld: complete CLAUDE.md

```markdown
# Recepten App

Webapplicatie voor het beheren en delen van recepten.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- PostgreSQL + Drizzle ORM
- pnpm

## Regels
- Nederlandse UI-teksten, Engelse code
- Conventional commits (feat/fix/chore/refactor/docs/test)
- Geen console.log in productie code
- Componenten in PascalCase, utilities in camelCase

## Commando's
- `pnpm dev` — development server op poort 3000
- `pnpm test` — Vitest tests draaien
- `pnpm lint` — ESLint controleren
- `pnpm build` — productie build

## Structuur
- `src/app/` — pagina's en API routes
- `src/components/` — React componenten
- `src/lib/db/` — database schema en queries
- `src/lib/utils/` — helper functies
```

## Tips

1. **Houd het beknopt** — Claude Code leest het elke sessie, dus maak het niet te lang
2. **Wees specifiek** — "gebruik TypeScript" is beter dan "schrijf goede code"
3. **Update regelmatig** — als je project verandert, update CLAUDE.md mee
4. **Deel met je team** — commit de project CLAUDE.md in Git zodat iedereen dezelfde instructies heeft
5. **Test het** — start Claude Code en vraag "Wat weet je over dit project?" om te verifiëren

---

**Oefening**: [Oefening 1: Eigen CLAUDE.md schrijven →](./oefeningen/oefening-1.md)

**Volgende module**: [MCP Servers →](../06-mcp-servers/index.md)
