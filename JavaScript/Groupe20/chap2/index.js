
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

livre.auteur
livre.sous-titre 
livre["sous-titre"] = 'Autre sous titre'