let esTuSenegalais = false;

if(esTuSenegalais == true){
    console.log('Salut');
}

let age = 17;

if(age > 17) {
    console.log('tu as le droit de voter');
} else {
    console.log("Tu n'a le droit de voter");
}

if (age < 18) {
    console.log('vous etes mineurs');
} else if( age >= 18 && age < 50 ) {
    console.log("vous etes adultes")
} else if( age > 50) {
    console.log("vous etes une personne agee")
} else {
    console.log("Impossible")
}

let taille = 1.89;
switch(taille) {
    case 1.5:
        console.log("vous avez une petite taille");
        break;
    case 1.6:
        console.log("vous avez une taille moyenne");
        break;
    case 1.8:  
        console.log("vous avez une grande taille");   
    default:
        console.log("Instruction par defaut")   ;
}



for(let i = 0; i < 4; i++) {
    console.log("Bonjour");
    console.log(i);


}

console.log("apres la boucle for")

let j = 0;

while (j < 4) {
    console.log("Bonjour dans la boucle while");
    console.log(j);

    j++;
   
}

console.log("apres while");

let x = 0;

do  {
    console.log("Bonjour dans la boucle  do while");
    console.log(j);

    x++;
   
} while (x < 4)

console.log("apres while");




