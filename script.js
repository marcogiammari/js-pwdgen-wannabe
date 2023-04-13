function pwgen() {
    let nome = prompt("Nome:");
    let cognome = prompt("Cognome:");
    let colore = prompt("Qual è il tuo colore preferito?");
    
    document.getElementById("pw").innerHTML = `${nome}${cognome}${colore}2023`;
    // document.getElementById("pw").style.backgroundColor = colore;
    
    colore = colore.toUpperCase();
    switch(colore) {
        case "GIALLO":
            document.querySelector("body").style.backgroundColor = "khaki";
            break
        case "ROSSO":
            document.querySelector("body").style.backgroundColor = "crimson";
            break
        case "BLU":
            document.querySelector("body").style.backgroundColor = "lightskyblue";
            break
        case "VERDE":
            document.querySelector("body").style.backgroundColor = "mediumseagreen";
            break;
        case "ROSA":
            document.querySelector("body").style.backgroundColor = "lightpink";
            break;
        case "ARANCIONE":
            document.querySelector("body").style.backgroundColor = "coral";
            break;
        case "VIOLA":
            document.querySelector("body").style.backgroundColor = "mediumpurple";
            break;
    }
}


function random(){
    let password = document.getElementById("pw").innerText;
    if (password == "") {
        pwgen();
        random();
    }
    else {
        var shuffledWord = '';
        word = document.getElementById("pw").innerHTML;
        word = word.split('');
        while (word.length > 0) {
        shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
        }
        document.getElementById("randompw").innerHTML = shuffledWord;        
    }

    
}


