# Module 06: MCP Servers

MCP (Model Context Protocol) is een manier om Claude Code extra tools en mogelijkheden te geven. Denk aan het als "plugins" voor Claude Code.

## Wat is MCP?

Standaard kan Claude Code bestanden lezen, bewerken, en terminal commando's draaien. Met MCP kun je extra mogelijkheden toevoegen, zoals:

- Toegang tot databases
- Integratie met externe API's (Jira, Slack, GitHub)
- Speciale zoekfuncties
- Browser automatisering
- En veel meer

## Hoe werkt het?

```
Claude Code  →  MCP Server  →  Externe service/tool
```

Een MCP server is een programma dat draait op je computer en een "brug" vormt tussen Claude Code en een externe tool. Claude Code communiceert via het MCP protocol met de server, en de server voert de acties uit.

## MCP configureren

MCP servers configureer je in een `.mcp.json` bestand. Dit bestand kan op twee plekken staan:

| Locatie | Bereik |
|---------|--------|
| `~/.claude/.mcp.json` | Alle projecten (globaal) |
| `./.mcp.json` (project root) | Alleen dit project |

### Structuur van .mcp.json

```json
{
  "mcpServers": {
    "server-naam": {
      "command": "commando-om-server-te-starten",
      "args": ["argument1", "argument2"],
      "env": {
        "OMGEVINGS_VARIABELE": "waarde"
      }
    }
  }
}
```

## Voorbeeld: Filesystem MCP Server

De filesystem MCP server geeft Claude Code gecontroleerde toegang tot bestanden buiten je project.

### Configuratie

Voeg dit toe aan je `.mcp.json`:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/jouw-naam/Documents"
      ]
    }
  }
}
```

Nu kan Claude Code bestanden lezen uit je Documents map, ook als je project ergens anders staat.

## Voorbeeld: GitHub MCP Server

Met de GitHub MCP server kan Claude Code direct met GitHub werken:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_jouw_token_hier"
      }
    }
  }
}
```

> **Let op**: Zet `.mcp.json` met API keys **nooit** in Git! Voeg het toe aan je `.gitignore`.

## MCP servers toevoegen via Claude Code

Je kunt ook Claude Code zelf vragen om een MCP server te configureren:

```
Voeg de filesystem MCP server toe die toegang geeft tot ~/Documents
```

Of via het slash-commando:

```
/mcp
```

## Beschikbare MCP servers

Er zijn veel MCP servers beschikbaar. Enkele populaire:

| Server | Functie |
|--------|---------|
| `@modelcontextprotocol/server-filesystem` | Bestandstoegang buiten project |
| `@modelcontextprotocol/server-github` | GitHub integratie |
| `@modelcontextprotocol/server-postgres` | PostgreSQL database toegang |
| `@modelcontextprotocol/server-slack` | Slack berichten lezen/sturen |
| `@modelcontextprotocol/server-memory` | Persistent geheugen voor Claude |

Je kunt alle officiele servers vinden op [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers).

## Tips

1. **Begin met weinig servers** — elke server voegt context toe, wat tokens kost
2. **Beveilig je tokens** — gebruik environment variables of `.env` bestanden
3. **Test na configuratie** — herstart Claude Code en vraag of de server beschikbaar is
4. **Gitignore** — voeg `.mcp.json` toe aan `.gitignore` als er secrets in staan

---

**Oefening**: [Oefening 1: MCP server toevoegen →](./oefeningen/oefening-1.md)

**Volgende module**: [Instellingen →](../07-instellingen/index.md)
