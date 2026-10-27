const  h1 = window.document.getElementById('monh1');
console.log(h1)

h1.style.color = 'red';
h1.textContent = 'Salut'

const monBtn = document.getElementById('monBtn');

monBtn.className = "btn";

const paragraphes = document.getElementsByTagName("p");

console.log(paragraphes);

const premierParagraphe = paragraphes[0];
const deuxiemeParagraphe = paragraphes[1];
deuxiemeParagraphe.style.backgroundColor = 'blue';
deuxiemeParagraphe.style.position = 'absolute';
 let i = 70;
while (i < 300) {
    deuxiemeParagraphe.style.top = i + 'px';
    i = i + 10;

   
}

console.log(premierParagraphe)

console.log(deuxiemeParagraphe)

const genres = document.getElementsByName("genre")
console.log(genres[0])