//1 on récupère la liste <ol> (préparation)
const ol = document.querySelector("ol");

//2 on crée un <li>
const li = document.createElement("li");

// 3 met le texte dedans
li.appendChild(document.createTextNode("Préchauffer le four"));

// 4 l'ajoute AU DÉBUT : avant le premier <li>
ol.insertBefore(li, ol.firstElementChild);