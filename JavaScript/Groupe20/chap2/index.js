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

