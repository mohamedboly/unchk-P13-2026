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

console.log('---------- // 6. .Les méthodes de Object a continuer --------')

etudiant3.toString = function () {
    console.log(this.prenom);
}

console.log(etudiant3.toString())

let nombreObjet = new Number(45);

let nombre = nombreObjet.valueOf();

console.log(nombre + 2);

console.log('----------- Les tableaux --------------');

const universites = ['ucad', 'ugb', 'unchk', 'uadb'];

console.log(universites[0]);
console.log(universites[3]);

let etudiant4 = {
    prenom: 'Moussa',
    note: 18
}

let etudiants = [ 
    {
        prenom: 'Moussa',
        note: 18
    },
     {
        prenom: 'Samaba',
        note: 19
    },

     {
        prenom: 'Aicha',
        note: 16
    },


];

let etudiant1erNote = etudiants[0].note;


let count = [1,, 3]; // let count = [1, undefined, 3];

let monTab = [] // let monTab = [1, 2]
monTab[0] = 1;
monTab[1] = 2;

let monAutreTab = new Array();
monAutreTab[0] = 1;

let a = new Array(5, 4, 3, 2, 1, "testing, testing"); // let a = [5, 4, 3, 2, 1, "testing, testing"];

let b = new Array(10);

let c = new Array("fgvh"); // c = ["fgvh"]

console.log('-------- ajout element------------')

let d = [3,4];
d[2] = 5;
console.log(d)

d.push(89)
console.log(d)


d.unshift(6);
console.log(d)

console.log('--------- iterer ---------');

for(let i = 0; i < etudiants.length; i++) {
    console.log('Etudiant a l\'indice '+ i);
    console.log(etudiants[i])
}

for (let etudiant in etudiants) {
    console.log(etudiant)
}

console.log('Tableau mutidimentionnel')

let tabMultidimentionnel = [
    [1, 5, 7],
    [7, 0, 7],

];

let sousTab1 = tabMultidimentionnel[0];

console.log(sousTab1);

console.log(sousTab1[0])

console.log(tabMultidimentionnel[1][2]);




