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




console.log(premierParagraphe)

console.log(deuxiemeParagraphe)

const genres = document.getElementsByName("genre");
console.log(genres[0])

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

    const tests = document.getElementsByClassName("test");

    for(let test of tests){
        test.style.backgroundColor = 'red'
    }

    const log = document.getElementById ("log");
    const fatal = log.getElementsByClassName ("fatal");
    console.log(fatal)

    const fatalDoc = document.getElementsByClassName("fatal")
    console.log(fatalDoc)

    const spanInp = document.querySelectorAll('p span');

    console.log(spanInp[0])

    const span = document.querySelector('p span');

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

    para.insertAdjacentHTML('beforebegin', 'text insere');
    para.insertAdjacentHTML('afterbegin', 'text inssere en debut du paragraphe');
