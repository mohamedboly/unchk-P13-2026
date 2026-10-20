// creation d'objet
let etudiant = {
  prenom: 'Moussa',
  nom: 'ba',
  age: 18,
  adresse: {
    numero: 567,
    rue: "Rue Thierno Sall",
    ville: "Dakar"
  }
};

let etudiant2 = {
  prenom: 'Samba',
  nom: 'Sy',
  age: 18,
  adresse: {
    numero: 567,
    rue: "Rue Thierno Sall",
    ville: "Dakar"
  }
};



console.log(etudiant)

console.log(etudiant.age)

etudiant.age = 20;

console.log(etudiant.age)

// etudiant.prenom = prompt('votre prenom : ')
// etudiant.nom = prompt('votre nom : ')
// etudiant.age = prompt('votre age : ')

// console.log(etudiant)


etudiant.niveau = 'Licence 1';

console.log(etudiant)

console.log("adresse")
console.log(etudiant.adresse)

console.log(etudiant.adresse.rue)

let voiture = {};

voiture.marque = 'Toyota';
voiture.couleur = 'noire';
voiture.anneeConstruction = '2025';

console.log("voiture")

console.log(voiture)
console.log(voiture.marque)
voiture.marque = 'Yundai';
console.log(voiture.marque)

let livre = {

"sous-titre": "Le Guide Définitif",

auteur: {



firstname: "David",

surname: "Flanagan"

}

};

// livre.auteur
// livre.sous-titre 
// livre["sous-titre"] = 'Autre sous titre'

function Etudiant (prenom, nom, age) {
   this.prenom  = prenom; 
   this.nom = nom;
   this.age = age;


}

let etudiant3 = new Etudiant('Amina', 'Diop', 17);

let etudiant4 = new Etudiant('Mansour', 'Sow', 19);

console.log(etudiant3);

let etudiant5 = Object.create(etudiant3);

console.log(etudiant5);
console.log(etudiant5.age)

etudiant5.age = 20

console.log(etudiant5.age)

console.log("-------------Getters and Setters")

// let person = {
//   age: 18
// };


// console.log(person.age )

// person.age = 56;

// console.log(person.age )
let person = {
    // age: 17,

    set age (age) {
        if (!Number.parseInt(age)) {
            console.log("age doit etre un nombre")
        }else if (age < 18 || age > 40) {
          console.log("age doit etre compris entre 18 et 40 ans ")
          
        } else {
            this._age = age;
        }
    },

    get age() {
        if(this._age == undefined) {
            return 18;
        }
        return this._age;
    }


}

console.log(person.age )

person.age = 56;

console.log(person.age )

person.age = 38;

console.log(person.age)

// Serialiser et Deserialiser

let transfert = {
  montant: 1000,
  expediteur: 769800998,
  destinataire: 778976554
}

console.log(transfert)

const transfertString = JSON.stringify(transfert);

console.log(transfertString);

let transfertDeserialise = JSON.parse(transfertString);

console.log(transfertDeserialise)

// les methodes

console.log("------------ les methodes ----------------")

console.log(transfert.toString())

transfert.toString = function () {
  console.log("je suis la")
}

console.log(transfert.toString())



let nombreObjet = new Number(45);

let nombre = nombreObjet.valueOf();

console.log(nombre + 2);

// Les tableaux 

console.log('--------- Les taleaux --------')

let notes = [10, 15, 78, 90];
let tab1 = ['test', 10, {nom: 'Aliou', prenom: 'Thiaw' }, true]; // let tab1 = new Array ('test', 10, {nom: 'Aliou', prenom: 'Thiaw' }, true)
let tabVide = [];   //  let tabVide = new Array();


console.log(notes[0]);
notes[0] = 20;
console.log(notes[0]);
console.log(notes[3])

console.log(tab1[2]);

tabVide[0]= 5;
tabVide[1] = 7;

let tabNotesEleves = [
  [10, 15, 17],
  [16, 13, 11]
]

console.log(tabNotesEleves[0])
console.log(tabNotesEleves[0][1])

let monTableau = new Array(10, 78); // let monTableau = [10, 78]

let monTableau2 = new Array(10);

console.log(notes.length)

let monTab = [4];
monTab[1] = 6;
console.log(monTab)

monTab.push(78)
console.log(monTab)
monTab.push(8,9,5)
console.log(monTab)
monTab.unshift(34)
console.log(monTab)

let notes1 = [10, 15, 78, 90];
// parcourir un tableau
console.log(notes1)
console.log('parcourir un tableau')
for(let i = 0; i < notes1.length; i++) {
  console.log('index : ' +i);
  console.log('note : ' + notes1[i]);
}

console.log ('for in loop')

for(let index in notes1) {

  console.log(index)
  console.log(notes1[index])


}
console.log ('for of loop')

for(let value of notes1) {
   console.log(value)
}

// fonction
console.log("------- Fonctions ----------")

function saluer() {
  console.log('Salut a tous avec une definition de fonction');
}


saluer();

let salutation = function () {
  console.log('Salut avec une expression de fonction')
}

salutation();

function saluer2 (prenom, nom) {
  console.log('Bonjour '+ prenom + ' ' + nom);
}

saluer2('Fanny', 'Badji');
saluer2('Fatou', 'Kane')


