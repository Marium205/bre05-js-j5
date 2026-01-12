// 1- on récupère le body
const body = document.body;

// 2 on crée le lien <a>
const link = document.createElement("a");

// 3-on met le texte du lien
link.appendChild(
  document.createTextNode("L'article de Wikipédia sur le Lorem Ipsum")
);

// 4- on met l'attribut href
link.setAttribute("href", "https://fr.wikipedia.org/wiki/Lorem_ipsum");

// 5- on ajoute à la fin du body
body.appendChild(link);