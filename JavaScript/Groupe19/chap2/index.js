let etudiant = {
    prenom: "Moussa",
    nom: "Ba",
    age: 20,
    adresse: {
        rue: 'Rue de la Teranga',
        numero: 59,
        ville: "Keur Massar"
    },
    "autre propriete": "valeur",
    "une-autre-propriete": 'valeur 2',
 
};

let etudiant1 = {
    prenom: "Awa",
    nom: "Thiaw",
    age: 20,
    adresse: {
        rue: 'Rue de la Teranga',
        numero: 59,
        ville: "Keur Massar"
    },
    "autre propriete": "valeur",
    "une-autre-propriete": 'valeur 2'
}

let pays = 'Senegal';
let tauxDeChange = 1.5;
let estVrai = true;
console.log(etudiant);

console.log(etudiant["autre propriete"]);
console.log(etudiant['une-autre-propriete'])

console.log(etudiant.adresse.numero)

// etudiant.prenom = prompt("Votre prenom: ");
// etudiant.nom = prompt("votre nom : ");
// etudiant.age = prompt("votre age :");
console.log(etudiant.age)
etudiant.age =  22;

console.log("Tu t'appelles " + etudiant.prenom + " " + etudiant.nom + " et tu as " + etudiant.age + " ans.");

etudiant.niveau = 'Licence';

console.log(etudiant)

let voiture = {};

voiture.marque = 'Toyata';
voiture.couleur = 'Rouge';

console.log(voiture)

let date = new Date();

console.log(date)

console.log(date.getFullYear())

date.setFullYear(2027);

function Etudiant (prenom, nom, age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age
}

let etudiant2 = new Etudiant('Saliou', 'Ndiaye', 23);

console.log("Prototype de letudiant 2")
console.log(Etudiant.prototype);

console.log(etudiant2)

etudiant2.age = 18;
console.log("------- Etudiant 2 ---------")
console.log(etudiant2);

// let etudiant3 = new Etudiant('Saliou', 'Ndiaye', 24);

let etudiant3 = Object.create(etudiant2);

console.log("------- Etudiant 3 ---------")

console.log(etudiant3);

console.log(etudiant3.prenom)

console.log("-------------Getters and Setters")
let person = {
    // age: 17,

    set age (age) {
        if (!Number.parseInt(age)) {
            console.log("age doit etre un nombre")
        }else {
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

console.log(person.age)

person.age = 19
console.log(person.age)

let transfert = {
    montant: 15000,
    destinataire: 778970909,
    emetteur: 780987876
}

console.log(transfert)

let transfertString = JSON.stringify(transfert);

console.log(transfertString)

let transfertToObject = JSON.parse(transfertString)

console.log(transfertToObject);

// 6. .Les méthodes de Object a continuer
