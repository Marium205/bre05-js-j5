// 1 on récupère la liste <ul>
const ul = document.querySelector("ul");

//2 on crée un <li>
const li = document.createElement("li");

// 3 on met le texte dedans
const text = document.createTextNode("Beurre");
li.appendChild(text);

// 4  on ajoute le <li> à la fin du <ul>
ul.appendChild(li);