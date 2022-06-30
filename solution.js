const frage0 =`0. Deklarieren Sie zwei Variablen "Äpfel" und "Orangen"." Weisen Sie "apples" einen Wert von 20 zu. Weisen Sie oranges einen Wert von 30 zu.`;
console.log(frage0);

const Äpfel = 20;
const Orangen = 30;
const Mangos = 5;




const frage1 =`1. Prüfe, ob "Äpfel" und "Orangen" gleich sind.`;
console.log(frage1);

const istAppleGleichOranges = Äpfel === Orangen;
console.log(istAppleGleichOranges);






const frage2 = `2. Prüfe, ob "Äpfel" und "Orangen" *nicht* gleich sind.`;
console.log(frage2);

const istAppleNichtGleichOranges = Äpfel !== Orangen;
console.log(istAppleNichtGleichOranges);





const frage3 = `3. Prüfe, ob "Äpfel" größer ist als "Orangen".`;
console.log(frage3);

const istAppleGroßeralsOranges = Äpfel > Orangen;
console.log(istAppleGroßeralsOranges);







const frage4 =`4. Prüfe, ob "Äpfel" kleiner oder gleich "Orangen" ist.`;
console.log(frage4);

const istAppleKleineralsOranges = Äpfel < Orangen;
console.log(istAppleKleineralsOranges);





const frage5 = `5. Prüfe, ob "Orangen" größer ist als "Äpfel".`;
console.log(frage5);

const istOrangesGroßerAlsApple = Äpfel < Orangen;
console.log(istOrangesGroßerAlsApple);






const frage6 = `6. Erkläre eine weitere Variable "Mangos" und gib ihr den Wert 5. Multipliziere "mangoes" mit "apples" und prüfe, ob das Ergebnis größer ist als "mangoes" addiert mit "oranges".`
console.log(frage6);

const mangosApple = Äpfel * Mangos;
const mangosOrangen = Orangen * Mangos;
console.log(mangosApple === mangosOrangen);





const frage7 = `7. Subtrahiere "Mangos" von "Äpfeln" und prüfe, ob das Ergebnis kleiner ist als "Orangen" dividiert durch "Mangos".`
console.log(frage7);

const mangoSubApple = Mangos - Äpfel;
const OrangenDurchMangos = Orangen / Mangos;
console.log(mangoSubApple < OrangenDurchMangos);





const frage8 = `8. Prüfe, ob "Mangos", "Äpfel" und "Orangen" gleich sind.`
console.log(frage8);

console.log(Äpfel === Orangen === Mangos);





const frage9 = `9. Prüfe, ob der Rest von "Äpfeln" geteilt durch "Mangos" und der Rest von "Orangen" geteilt durch "Mangos" gleich sind.`
console.log(frage9);

const mangosDurchÄpfel = Mangos / Äpfel;
const orangenDurchMangos = Orangen / Mangos;
console.log(mangosDurchÄpfel === orangenDurchMangos);





const frage10 = `10. Prüfe, ob "Mangos" addiert mit "Äpfeln" größer ist als "Orangen" minus "Mangos". Wenn nicht, finde einen Operator, der das Ergebnis "wahr" liefert.`
console.log(frage10);

const mangosAddiertÄpfel = Mangos + Äpfel;
const orangenMinusMangos = Orangen - Mangos;
console.log(mangosAddiertÄpfel === orangenMinusMangos);

