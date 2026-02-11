// Takenlijst applicatie
// Dit bestand bevat een aantal bugs. Kun jij ze vinden met Claude Code?

const taken = [
  { id: 1, titel: "Boodschappen doen", voltooid: false },
  { id: 2, titel: "Was ophangen", voltooid: true },
  { id: 3, titel: "Code schrijven", voltooid: false },
];

// Bug 1: Deze functie zou alleen onvoltooide taken moeten tonen
function getTakenToDo() {
  return taken.filter((taak) => taak.voltooid === true);
}

// Bug 2: Deze functie telt het verkeerde
function aantalVoltooid() {
  return taken.filter((taak) => taak.voltooid === false).length;
}

// Bug 3: Deze functie voegt een taak toe maar mist iets
function voegTaakToe(titel) {
  const nieuweTaak = {
    titel: titel,
    voltooid: false,
  };
  taken.push(nieuweTaak);
  return nieuweTaak;
}

// Bug 4: De opmaak van de output klopt niet
function toonTaken() {
  console.log("=== Mijn Taken ===");
  taken.forEach((taak) => {
    const status = taak.voltooid ? "[ ]" : "[x]";
    console.log(`${status} ${taak.titel}`);
  });
  console.log(`\nTotaal: ${taken.lenght} taken`);
}

// Programma uitvoeren
console.log("Taken die nog gedaan moeten worden:");
console.log(getTakenToDo());

console.log("\nAantal voltooide taken:", aantalVoltooid());

voegTaakToe("TypeScript leren");

console.log("\nAlle taken:");
toonTaken();
