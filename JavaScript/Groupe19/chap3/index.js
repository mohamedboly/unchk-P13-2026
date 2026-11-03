
console.log("-------- getElementById -------------")
const h1 = document.getElementById('monh1');

console.log(h1);

h1.textContent = 'Mon nouveau text';
h1.style.color = 'red';
h1.style.backgroundColor = 'green';

const button = document.getElementById('monBtn');
button.className = 'btn';

console.log("-------- getElementsByName -------------")
const btnNames = document.getElementsByName("genre");
console.log(btnNames);
console.log(btnNames[0])

console.log("-------- getElementsByTagName -------------")
const paragraphes = document.getElementsByTagName("p");
console.log(paragraphes);
console.log(paragraphes[1])


console.log("-------- getElementsByClassName -------------")

const testElements = document.getElementsByClassName("test");
console.log(testElements);
console.log(testElements[0]);
console.log(testElements[1])

const log = document.getElementById("log");
const fatal = log.getElementsByClassName("fatal");
console.log(fatal)

const fatalDoc = document.getElementsByClassName("fatal")
console.log(fatalDoc)

console.log("-------- querySelectorAll -------------")

const spans = document.querySelectorAll("p span");

console.log(spans)
console.log(spans[0])
console.log(spans[1])

console.log("-------- querySelector -------------")

const span = document.querySelector("p span");
console.log(span)


const para = document.getElementById('para');
    console.log(" ---------- innerHTML ----------")
    console.log(para.innerHTML);
    console.log("---------- outerHTML -------------")
    console.log(para.outerHTML)
    console.log("----------- innerText ------------")
    console.log(para.innerText)
    console.log("------------- textContent -----------")
    console.log(para.textContent)

console.log('--------- insertAdjacentHTML -----------')
para.insertAdjacentHTML('afterbegin', 'Texte au debut ')
para.insertAdjacentHTML('beforebegin', 'Texte avant p ')

const box = document.getElementById("box");

    let topPosition = 0;
    let leftPosition = 0;

    setInterval(() => {
      // Déplacer le div
      topPosition += 2;
      leftPosition += 2;

      // Revenir au début si le div
      // atteint les limites de l'écran
      if (topPosition >= window.innerHeight - 80) {
        topPosition = 0;
      }

      if (leftPosition >= window.innerWidth - 80) {
        leftPosition = 0;
      }

      box.style.top = topPosition + "px";
      box.style.left = leftPosition + "px";

    }, 20);