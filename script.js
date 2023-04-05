function pwgen() {
    let nome = prompt("Nome:");
    let cognome = prompt("Cognome:");
    let colore = prompt("Qual è il tuo colore preferito?");
    document.getElementById("pw").innerHTML = `${nome}${cognome}${colore}2023`;
}