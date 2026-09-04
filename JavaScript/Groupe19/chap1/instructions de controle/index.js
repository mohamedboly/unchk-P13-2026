// if
const estSenegalais = false;

if (estSenegalais == true) {
    console.log("Attendre dans la queue A");
} else {
    console.log("Attendre dans la queue B");
}

const prenom = 'Samba';

if (prenom == 'Aissata') {
    console.log("Appelez le DG");
}

if (prenom == 'Aissata') {
    console.log("Appelez le DG");
} else if (prenom == 'Samba') {
    console.log("Appelez le comptable");
} else if (prenom == 'Amadou') {
    console.log("Appelez le secretaire");
} else {
    console.log("Conduit la a la reception")
}

const a = 4;
const b = 6;

if (a > 6 && b < 7) {
    console.log("condition vrai");
}

// switch

switch(a) {
    case 1:
        console.log("votre note est faible");
        break;
    case 3:
        console.log("Ce n'est pas mauvais");
        break;
    
    case 4:
        console.log("Excellent")
}

// Les boucles
const nom = 'fall';



for(let i = 0; i < 5; i++){
    console.log("Bonjour " + nom);
    console.log(i)
}

let esEtudiantUNCHK = false
let j = 5;
while (esEtudiantUNCHK == true) {
    console.log("Bienvenvue dans les eno");
    j++;
    if(j == 10) {
        esEtudiantUNCHK = false;
    }
    
}

do {
    console.log("Bienvenvue dans les eno");
    console.log("do while")
    j++;
    if(j == 10) {
        esEtudiantUNCHK = false;
    }
} while(esEtudiantUNCHK == true);



