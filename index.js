import ps from "prompt-sync";
const prompt = ps();

const vorrat = {
  apfel: 5,
  kartoffel: 5,
  fleisch: 5,
  fisch: 5,
  karotte: 5,
  getranke: 10,
  vitamin: 10,
};

class Pet {
  constructor(name, typeOfPet) {
    this.name = name,
      this.typeOfPet = typeOfPet,
      this.happyness = 5,
      this.müde = 5,
      this.hungry = 5,
      this.gesundheit = 5,
      this.durst = 5
  }

  addHappyness(value) {
    const sum = this.happyness + value;
    this.happyness = sum > 10 ? 10 : sum;
  }

  reduceHappyness(value) {
    const diff = this.happyness - value;
    this.happyness = diff <= 0 ? 0 : diff;
  }

  addHunger(value) {
    const sum = this.hungry + value;
    this.hungry = sum > 10 ? 10 : sum;
  }

  reduceHunger(value) {
    const diff = this.hungry - value;
    this.hungry = diff <= 0 ? 0 : diff;
  }

  addDurst(value) {
    const sum = this.durst + value;
    this.durst = sum > 10 ? 10 : sum;
  }
  reduceDurst(value) {
    const diff = this.durst - value;
    this.durst = diff <= 0 ? 0 : diff;
  }
  addGesund(value) {
    const sum = this.gesundheit + value;
    this.gesundheit = sum > 10 ? 10 : sum;
  }
  reduceGesund(value) {
    const diff = this.gesundheit - value;
    this.gesundheit = diff <= 0 ? 0 : diff;
  }
  addMüdigkeit(value) {
    const sum = this.müde + value;
    this.müde = sum > 10 ? 10 : sum;
  }
  reduceMüdigkeit(value) {
    const diff = this.müde - value;
    this.müde = diff <= 0 ? 0 : diff;
  }

  printStatus() {
    let mood;
    let hunger;
    let gesund;
    let durst;
    let müde;
    if (this.happyness <= 2) {
      mood = "WÜTEND";
      this.reduceGesund(1);
      console.log(
        `ACHTUNG! ${this.name} hat Gesundheit verloren!!`
      );
    } else if (this.happyness <= 5) {
      mood = "traurig";
      console.log(
        `ACHTUNG! Wenn ${this.name} wütend ist, verliert ${this.name} Gesundheit.`
      );
    }
    
    if (this.müde <= 1) {
      müde = 'nicht müde'
    } else if (this.müde <= 3) {
      müde = 'ein bißchen müde'
    } else if (this.müde <= 7) {
      müde = 'müde';
      console.log(
        `ACHTUNG! Wenn ${this.name} sehr müde ist, verliert ${this.name} Gesundheit.`
      );
    } else if (this.müde >= 8) {
      müde = 'sehr müde'
      this.reduceGesund(1)
      console.log(
        `ACHTUNG! ${this.name} hat Gesundheit verloren!!`
      );
    }
    if (this.hungry == 0) {
      hunger = 'keinen Hunger';
    } else if (this.hungry <= 3) {
      hunger = 'kaum Hunger'
    } else if (this.hungry <= 5) {
      hunger = 'ein wenig Hunger'
    } else if (this.hungry <= 7) {
      hunger = 'noch Hunger'
    } else if (this.hungry <= 9) {
      hunger = 'Hunger'
      console.log(
        `ACHTUNG! Wenn ${this.name} zu hungrig ist, verliert ${this.name} Gesundheit.`
      );
    } else if (this.hungry > 9) {
      this.reduceGesund(1);
      console.log(
        `ACHTUNG! ${this.name} hat Gesundheit verloren!!`
      );
      hunger = " großer Hunger";
    }
    if (this.gesundheit <= 1) {
      gesund = "NICHT GESUND";
      console.log(`${this.name} ist KRANK! Gib ${this.name} Vitamin!`);
    } else if (this.gesundheit <= 3) {
      gesund = "NICHT GANZ GESUND";
    } else if (this.gesundheit <= 5) {
      gesund = "GESUND";
    } else if (this.gesundheit <= 7) {
      gesund = "GANZ GESUND";
    } else if (this.gesundheit >= 8) {
      gesund = "ABSOLUT GESUND";
    }
    if (this.durst == 0) {
      durst = "keinen Durst";
    } else if (this.durst < 5) {
      durst = 'ein bißchen Durst'
    } else if (this.durst <= 6) {
      durst = 'Durst'
      console.log(
        `ACHTUNG! Wenn ${this.name} zu durstig ist, verliert ${this.name} Gesundheit. \n`
      );
    } else if (this.durst >= 7) {
      this.reduceGesund(1);
      console.log(
        `ACHTUNG! ${this.name} hat Gesundheit verloren!!`
      );
      durst = "großer Durst";
    }

    console.log(`Status: ${this.name} ist ${mood}, hat aber ${hunger} und ${durst}. 
        ${this.name} ist ${gesund}!`);
    console.log("");
    console.log(
      "-------------------------------------------------------------------"
    );
    console.log("");
  }

  feed(food) {
    if (this.typeOfPet.toLowerCase() == "katze" && food === "apfel") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(1);
        this.reduceHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "hund" && food === "apfel") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "kaninchen" && food === "apfel") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(2);
        this.addHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "katze" && food === "kartoffel") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(1);
        this.reduceHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "hund" && food === "kartoffel") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(1);
        this.reduceHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "kaninchen" && food === "kartoffel") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(2);
        this.addHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "katze" && food === "fisch") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(3);
        this.addHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "hund" && food === "fisch") {
      if (vorrat[food] > 0) {
        this.reduceHunger(2);
        vorrat[food]--;
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "kaninchen" && food === "fisch") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(1);
        this.reduceGesund(1);
        this.reduceHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "katze" && food === "fleisch") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(2);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "hund" && food === "fleisch") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(3);
        this.addHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "kaninchen" && food === "fleisch") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(1);
        this.reduceGesund(1);
        this.reduceHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "katze" && food === "karotte") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(1);
        this.reduceHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "hund" && food === "karotte") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(1);
        this.reduceHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    } else if (this.typeOfPet.toLowerCase() == "kaninchen" && food === "karotte") {
      if (vorrat[food] > 0) {
        vorrat[food]--;
        this.reduceHunger(3);
        this.addHappyness(1);
        console.log(`${this.name} hat ${food} gegessen`);
      } else {
        console.log(`Vorrat hat kein(en) ${food} mehr!`);
      }
    }
  }

  play() {
    if (this.hungry >= 9) {
      console.log(`${this.name} ist zu hungrig zu spielen`);
    } else if (this.durst >= 9) {
      console.log(`${this.name} ist zu durstig zu spielen`);
    } else {
      this.addMüdigkeit(2);
      this.addHappyness(2);
      this.addHunger(3);
      this.addDurst(2);
      console.log(`${this.name} hat gespielt!`);
    }
  }

  sleep() {
    this.reduceMüdigkeit(2)
    this.reduceHappyness(2);
    this.addHunger(2);
    console.log(`${this.name} hat geschlafen!`);
  }

  pflege() {
    this.addHappyness(2);
    this.addGesund(1);
    this.addDurst(2);
    this.addHunger(2);
    console.log(`${this.name} wurde gepflegt!`);
  }
  addVitamin() {
    if (vorrat["vitamin"] > 0) {
      this.addGesund(2);
      this.addDurst(1);
      this.addHappyness(2);
      vorrat["vitamin"]--;
      console.log(`${this.name} hat Vitamin genommen!`);
    } else {
      console.log(`Es gibt kein Vitamin mehr`);
    }
  }

  trinken() {
    if (vorrat["getranke"] > 0) {
      vorrat["getranke"]--;
      this.reduceDurst(2);
      console.log(`${this.name} hat  getrunken!`);
    } else {
      console.log(`Es gibt kein Wasser mehr`);
    }
  }
}
clearConsole();
let type;
let typeOfTier;
while (true) {
  console.log(
    "Welches Tier möchtest Du haben? \n \n(A) Katze | (B) Hund | (C) Kaninchen\n \nWähle bitte einen Buchstaben aus: A, B oder C? \n"
  );
  typeOfTier = prompt(``);
  clearConsole();
  if (typeOfTier.toLowerCase() === "a") {
    type = "katze";

    break;
  } else if (typeOfTier.toLowerCase() === "b") {
    type = "hund";

    break;
  } else if (typeOfTier.toLowerCase() === "c") {
    type = "kaninchen";

    break;
  } else {
    console.log(`
        -------------------------------------------------------------------

        Opss. Du hast einen falschen Buchstaben ausgewählt.
        Gib bitte nur (A), (B) oder (C) ein.

        -------------------------------------------------------------------
         \n`);
  }
}

let name = prompt(`Wie heißt dein Tier? `);

let figur;
let artikel;
if (type === "hund") {
  artikel = "einen";
  figur = `   / \\__
  (    @\\___
  /         O
 /    (____/
/______/  U`;
} else if (type === "katze") {
  artikel = "eine";
  figur = `\\   /\\\\
 ) (  *)
(  /  )
 \\(__)|`;
} else {
  artikel = "ein";
  figur = ` ()()
 (**)
o( O )`;
}

clearConsole();

console.log(`
${figur}     Yuhuuu!!! Du hast jetzt ${artikel} ${type.toUpperCase()}.
`);

console.log(`\n\nDas Ziel des Spiels ist es, den Status überglücklich, kein Hunger, kein Durst und Gesundheit als absolut Gesund zu erreichen\n\n `);
const tier = new Pet(name, type);
console.log(tier);
let exit = "n";
let gewinn = false;

while (exit !== "q" && tier.gesundheit > 0 && gewinn == false) {

  console.log(`\n-------------------------------------------------------------------
    \n Was möchtest Du mit ${tier.name} machen? \n \n(A) spielen | (B) füttern | (C) Schlafen bringen \n(D) Wasser geben | (E) Vitamin geben | (F) pflegen | (Q) Quit \n `);
  let ergebniss = prompt();
  clearConsole();
  if (ergebniss.toLowerCase() === "a") {
    tier.play();
    tier.printStatus();
  } else if (ergebniss.toLowerCase() === "q") {
    exit = "q";
  } else if (ergebniss.toLowerCase() === "b") {
    while (true) {
      console.log(
        `-------------------------------------------------------------------\nWomit möchtest du ${tier.name} füttern? \n\n(A) Fleisch | (B) Fisch | (C) Karotte \n(D) Kartoffel | (E) Apfel`
      );
      let essen = prompt();
      clearConsole();
      if (essen.toLowerCase() === "a") {
        tier.feed("fleisch");
        console.log(`Fleisch bleibt: ${vorrat['fleisch']}`);
        tier.printStatus();

        break;

      } else if (essen.toLowerCase() === "b") {
        tier.feed("fisch");
        console.log(`Fisch bleibt: ${vorrat['fisch']}`);
        tier.printStatus();

        break;
      } else if (essen.toLowerCase() === "c") {
        tier.feed("karotte");
        console.log(`Karotte bleibt: ${vorrat['karotte']}`);
        tier.printStatus();

        break;
      } else if (essen.toLowerCase() === "d") {
        tier.feed("kartoffel");
        console.log(`Kartoffel bleibt: ${vorrat['kartoffel']}`);
        tier.printStatus();

        break;
      } else if (essen.toLowerCase() === "e") {
        tier.feed("apfel");
        console.log(`Apfel bleibt: ${vorrat['apfel']}`);
        tier.printStatus();

        break;
      } else {
        console.log(`Opss! Du hast einen falschen Buchstaben ausgewählt.`);
      }
    }
  } else if (ergebniss.toLowerCase() === "c") {
    tier.sleep();
    tier.printStatus();
  } else if (ergebniss.toLowerCase() === "d") {
    tier.trinken();
    console.log(`Wasser bleibt: ${vorrat['getranke']}`);
    tier.printStatus();

  } else if (ergebniss.toLowerCase() === "e") {
    tier.addVitamin();
    console.log(`Vitamin bleibt: ${vorrat['vitamin']}`);
    tier.printStatus();

  } else if (ergebniss.toLowerCase() === "f") {
    tier.pflege();
    tier.printStatus();
  } else {
    console.log(`Opss! Du hast einen falschen Buchstaben ausgewählt.`);
  }

  if (tier.gesundheit >= 8 && tier.happyness === 10 && tier.hungry === 0 && tier.durst === 0) {

    gewinn = true;

  }

}
let coffin = `   ___
  /   \\
 / _|_ \\
|   |   |
 \\  |  /
  \\   /
   \\_/`;

if (exit === "q") {
  console.log(`Bis dannn...`);
} else if (gewinn == true) {
  const figurGewinn = `
                      .-"-.         +
                +    /     \\    *          *
*       +            | #   |
     *   .-"-.        \\___/           *   
   +    /     \\        /V      .-"-.
        | #   |       (       /     \\      +
         \\___/         \\      | #   |
  *       /V     *      )      \\___/
         (         +            /V
 +        \\                    (            *
      *    )                +   \\
                     *           )
`
  console.log(figurGewinn);
  console.log(`Yuhuuuu!!! Du hast gewonnen!!!`);

} else {
  console.log(`${coffin} GAME OVER ${tier.name} ist leider gestorben! `);
}

function clearConsole() {
  process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
  console.clear();
}