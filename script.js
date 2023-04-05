function pwgen() {
    let nome = prompt("Nome:");
    let cognome = prompt("Cognome:");
    let colore = prompt("Qual è il tuo colore preferito?");
    
    document.getElementById("pw").innerHTML = `${nome}${cognome}${colore}2023`;
    // document.getElementById("pw").style.backgroundColor = colore;
    
    colore = colore.toUpperCase();
    switch(colore) {
        case "GIALLO":
            document.getElementById("pw").style.backgroundColor = "yellow";
            break
        case "ROSSO":
            document.getElementById("pw").style.backgroundColor = "red";
            break
        case "BLU":
            document.getElementById("pw").style.backgroundColor = "blue";
            break
        case "VERDE":
            document.getElementById("pw").style.backgroundColor = "green";
    }
}