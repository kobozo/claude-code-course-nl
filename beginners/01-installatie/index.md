# Module 01: Installatie

In deze module installeer je alles wat je nodig hebt om met Claude Code te werken.

## Stap 1: Claude Code installeren

De snelste manier om Claude Code te installeren is via de **native installer**. Dit is de aanbevolen methode — je hebt geen Node.js nodig en updates worden automatisch geinstalleerd.

### macOS / Linux / WSL (aanbevolen)

Open je terminal en plak:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Windows (PowerShell)

```powershell
irm https://claude.ai/install.ps1 | iex
```

### Windows (CMD)

```batch
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

### Verifieer de installatie

```bash
claude --version
```

> **Voordeel van native install**: Claude Code werkt automatisch bij op de achtergrond. Je hebt altijd de nieuwste versie zonder dat je iets hoeft te doen.

## Alternatieve installatiemethoden

Als de native installer niet werkt, zijn er alternatieven:

### Homebrew (macOS)

```bash
brew install --cask claude-code
```

> **Let op**: Homebrew updatet niet automatisch. Draai regelmatig `brew upgrade claude-code` voor de nieuwste versie.

### WinGet (Windows)

```powershell
winget install Anthropic.ClaudeCode
```

> **Let op**: WinGet updatet niet automatisch. Draai regelmatig `winget upgrade Anthropic.ClaudeCode` voor de nieuwste versie.

### npm (legacy)

Als je al Node.js v18+ hebt, kun je ook via npm installeren:

```bash
npm install -g @anthropic-ai/claude-code
```

> **Let op**: npm updatet niet automatisch. Draai regelmatig `npm update -g @anthropic-ai/claude-code` voor de nieuwste versie.

## Stap 2: Authenticatie

De eerste keer dat je Claude Code start, moet je inloggen.

### Starten

Open je terminal in een willekeurige map en typ:

```bash
claude
```

### Inloggen

Claude Code vraagt je om in te loggen. Je hebt twee opties:

1. **Anthropic account** (via claude.ai) — je hebt een Max-abonnement nodig, of API credits
2. **API key** — als je een Anthropic API key hebt

Volg de instructies op het scherm. Meestal opent er een browservenster waar je kunt inloggen.

### Verifieer dat alles werkt

Na het inloggen kun je een testbericht sturen:

```
> Hallo! Werkt alles goed?
```

Als Claude Code antwoordt, ben je klaar!

## Veelvoorkomende problemen

### "command not found: claude"

Start een **nieuwe terminal** na de installatie. Het `claude` commando is pas beschikbaar in nieuwe terminal-sessies.

Als het dan nog niet werkt, controleer of het installatiescript goed is afgerond. Draai het script nogmaals:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Authenticatie lukt niet

- Controleer of je een actief Anthropic account hebt
- Probeer opnieuw in te loggen: typ `claude` en volg de stappen
- Controleer je internetverbinding

### Installatie op Windows zonder WSL

Claude Code werkt het beste met WSL (Windows Subsystem for Linux). Als je WSL nog niet hebt:

1. Open PowerShell als administrator
2. Draai: `wsl --install`
3. Herstart je computer
4. Open de WSL terminal en volg de macOS/Linux installatie-instructies

## Samenvatting

Na deze module heb je:

- [x] Claude Code geinstalleerd (bij voorkeur via native installer)
- [x] Succesvol ingelogd
- [x] Een testbericht gestuurd

---

**Volgende module**: [Eerste Gesprek →](../02-eerste-gesprek/index.md)
