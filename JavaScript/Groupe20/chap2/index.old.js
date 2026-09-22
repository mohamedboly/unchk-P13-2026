let prenom = prompt('votre prenom : ')
let nom = prompt('votre nom : ')
let age = prompt('votre age : ')

// let etudiant1 = {
//     prenom: 'moussa',
//     nom: 'ba',
//     age: 20,
//     'ville-origine': 'Kaolack'
 

// };

// let etudiant2 = {
//     prenom: 'moussa',
//     nom: 'ba',
//     age: 20,
//     'ville-origine': 'Kaolack'
 

// };

// etudiant1['ville-origine']

// console.log(etudiant1.age);

// etudiant1.prenom = prompt("votre prenom : ");
// etudiant1.nom = prompt("votre nom : ");
// etudiant1.age = prompt("votre age : ");

// console.log(etudiant1.prenom);
// console.log(etudiant1.nom);
// console.log(etudiant1.age);

// etudiant1.age = 21;

// console.log(etudiant1.age)

etudiant1.adresse = {
        numero: 27,
        rue: "Rue de l'espoir",
        ville: 'Dakar'
};

console.log(etudiant1);
console.log(etudiant1.adresse.ville)

let voiture = {};

voiture.marque = 'Toyata';
voiture.couleur = 'noire';
voiture.anneeConstruction = 2025;

console.log(voiture)

let date = new Date();

console.log(date)
console.log(date.getFullYear())

function Etudiant(prenom, nom, age, adresse) {

    this.prenom = prenom;

    this.nom = nom;

    this.age = age;

    this.adresse = adresse;

};

let etudiant3 = new Etudiant("Samba", "Diouf", 22, 'Fatick');

console.log(etudiant3);

