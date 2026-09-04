const age = 20;
const ville = 'Dakar';
function salutation() {
    const ville = 'Matam';
    console.log(ville);
    console.log("age dans la fonction "+ age)
    const prenom = prompt("Entrez votre nom :");
    console.log("Bonjour " + prenom);
}
console.log("age hors de la fonction "+ age);

salutation();


