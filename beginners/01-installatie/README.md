# Module 01: Installatie

In deze module installeer je alles wat je nodig hebt om met Claude Code te werken.

## Stap 1: Node.js installeren

Claude Code vereist **Node.js versie 18 of hoger**.

### Controleer of Node.js al geinstalleerd is

Open je terminal en typ:

```bash
node --version
```

Als je een versienummer ziet dat begint met `v18` of hoger (bijv. `v20.11.0`), kun je doorgaan naar stap 2.

### Node.js installeren

#### macOS

De makkelijkste manier is via de officiele website:

1. Ga naar [nodejs.org](https://nodejs.org)
2. Download de **LTS** versie (aanbevolen)
3. Open het gedownloade bestand en volg de installatie

Of via Homebrew:

```bash
brew install node
```

#### Linux (Ubuntu/Debian)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Windows

1. Installeer eerst [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) als je dat nog niet hebt
2. Volg daarna de Linux-instructies hierboven in je WSL terminal

### Verifieer de installatie

```bash
node --version   # Moet v18+ tonen
npm --version    # Moet meegeinstalleerd zijn
```

## Stap 2: Claude Code installeren

Installeer Claude Code globaal via npm:

```bash
npm install -g @anthropic-ai/claude-code
```

Verifieer dat het werkt:

```bash
claude --version
```

> **Tip**: Als je een "permission denied" foutmelding krijgt, probeer dan `sudo npm install -g @anthropic-ai/claude-code` (macOS/Linux).

## Stap 3: Authenticatie

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

Node.js global packages staan niet in je PATH. Probeer:

```bash
# Bekijk waar npm global packages installeert
npm config get prefix

# Voeg dit toe aan je PATH in ~/.zshrc of ~/.bashrc
export PATH="$(npm config get prefix)/bin:$PATH"
```

Start daarna een nieuwe terminal.

### "EACCES: permission denied"

npm heeft geen schrijfrechten. Oplossing:

```bash
sudo npm install -g @anthropic-ai/claude-code
```

Of configureer npm om een andere map te gebruiken:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
# Voeg toe aan ~/.zshrc of ~/.bashrc:
export PATH=~/.npm-global/bin:$PATH
```

### Authenticatie lukt niet

- Controleer of je een actief Anthropic account hebt
- Probeer opnieuw in te loggen: typ `claude` en volg de stappen
- Controleer je internetverbinding

## Samenvatting

Na deze module heb je:

- [x] Node.js v18+ geinstalleerd
- [x] Claude Code geinstalleerd via npm
- [x] Succesvol ingelogd
- [x] Een testbericht gestuurd

---

**Volgende module**: [Eerste Gesprek →](../02-eerste-gesprek/README.md)
