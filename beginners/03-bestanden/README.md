# Module 03: Werken met Bestanden

Een van de krachtigste features van Claude Code is dat het direct bestanden in je project kan lezen, aanmaken en bewerken. In deze module leer je hoe.

## Bestanden laten lezen

Claude Code kan elk bestand in je project lezen. Je hoeft alleen te verwijzen naar het bestand:

```
> Lees het bestand src/index.js
```

```
> Wat staat er in package.json?
```

```
> Bekijk de eerste 20 regels van app.js
```

Claude Code gebruikt hier de **Read tool** voor. Het toont de inhoud en kan er vragen over beantwoorden.

### Tips voor bestanden lezen

- Gebruik het **volledige pad** vanaf de project root: `src/components/Button.tsx`
- Je kunt meerdere bestanden tegelijk vragen: "Lees `index.js` en `utils.js`"
- Vraag om specifieke regels: "Toon regel 50-70 van `server.js`"

## Bestanden aanmaken

Je kunt Claude Code vragen om nieuwe bestanden te maken:

```
> Maak een bestand config.js aan met de volgende database configuratie:
> host: localhost, port: 5432, database: myapp
```

Claude Code:
1. Toont het bestand dat het wil aanmaken
2. Vraagt om toestemming
3. Maakt het bestand aan na goedkeuring

## Bestanden bewerken

Claude Code kan bestaande bestanden aanpassen:

```
> Voeg een nieuwe functie toe aan utils.js die een array sorteert op naam
```

```
> Verwijder de console.log statements uit server.js
```

```
> Hernoem de variabele 'x' naar 'userName' in auth.js
```

Bij het bewerken gebruikt Claude Code de **Edit tool**. Het zoekt de exacte tekst die vervangen moet worden en past alleen dat deel aan. De rest van je bestand blijft onaangetast.

## Meerdere bestanden tegelijk

Claude Code kan meerdere bestanden in een keer aanpassen:

```
> Hernoem de functie 'getData' naar 'fetchUserData' in alle bestanden
> waar die wordt gebruikt
```

```
> Maak een components/ map aan met drie bestanden:
> Header.js, Footer.js en Sidebar.js, elk met een basis React component
```

## Hoe Claude Code bestanden vindt

Claude Code kan door je hele project zoeken:

```
> Zoek alle bestanden die de functie 'calculatePrice' gebruiken
```

```
> In welk bestand staat de database connectie?
```

Het gebruikt hiervoor tools als **Glob** (bestanden zoeken op naam) en **Grep** (zoeken in bestandsinhoud).

## Belangrijk: controleer altijd

Claude Code vraagt toestemming voordat het bestanden aanpast, maar het is goed om:

1. **De wijzigingen te lezen** voordat je "y" typt
2. **Git te gebruiken** zodat je altijd terug kunt naar een vorige versie
3. **Kleine stappen te nemen** in plaats van grote wijzigingen in een keer

---

**Oefeningen**:
- [Oefening 1: Bug fixen →](./oefeningen/oefening-1.md)
- [Oefening 2: Nieuw bestand maken →](./oefeningen/oefening-2.md)

**Volgende module**: [Git Workflow →](../04-git-workflow/README.md)
