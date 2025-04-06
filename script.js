function berechne() {
    let zahl1 = parseFloat(document.getElementById("Investitionskosten").value);
    let zahl2 = parseFloat(document.getElementById("Zinsen").value);
    let ergebnis = zahl1*zahl2;
    document.getElementById("ergebnis").innerText = "Ergebnis: " + ergebnis;
}