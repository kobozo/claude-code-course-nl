# Oefening 1: MCP Server Configureren

## Doel

Leer hoe je een MCP server toevoegt en gebruikt in Claude Code.

## Voorbereiding

1. Navigeer naar je werkmap:
   ```bash
   cd ~/claude-oefeningen
   ```

2. Start Claude Code:
   ```bash
   claude
   ```

## Opdracht A: De Memory MCP server

De "memory" MCP server geeft Claude Code een persistent geheugen dat tussen sessies bewaard blijft. Dit is een goede eerste MCP server om mee te oefenen omdat hij geen externe services nodig heeft.

### Stap 1: Configureer de server

Vraag Claude Code:

```
> Maak een .mcp.json bestand aan met de memory MCP server van modelcontextprotocol
```

### Stap 2: Herstart Claude Code

Sluit af en start opnieuw:

```
/quit
claude
```

### Stap 3: Test de server

```
> Welke MCP servers zijn beschikbaar?
```

Claude Code zou de memory server moeten tonen.

## Opdracht B: De Filesystem MCP server

### Stap 1: Configureer

```
> Voeg aan de .mcp.json de filesystem MCP server toe met toegang tot
> mijn Desktop map
```

### Stap 2: Herstart en test

```
/quit
claude
```

```
> Welke bestanden staan er op mijn Desktop?
```

## Opdracht C: Bekijk de configuratie

```
> Toon de inhoud van .mcp.json
```

Je zou iets als dit moeten zien:

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/jouw-naam/Desktop"
      ]
    }
  }
}
```

## Opdracht D: Gitignore instellen

Omdat `.mcp.json` in de toekomst API keys kan bevatten:

```
> Voeg .mcp.json toe aan de .gitignore
```

## Reflectie

Na deze oefening kun je:

- [x] Een MCP server configureren in `.mcp.json`
- [x] De configuratie testen door Claude Code te herstarten
- [x] Controleren welke servers beschikbaar zijn
- [x] `.mcp.json` beschermen via `.gitignore`
