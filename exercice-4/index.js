const todos = [
  "Rappeler l'école",
  "Faire les courses",
  "Récupérer le colis à la Poste",
  "Faire la litière du chat",
  "Ranger le bureau",
];

// 1 créee <ul>
const ul = document.createElement("ul");

// 2 pour chaque tâche, cree <li> + texte + event click
todos.forEach((task) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(task));

  // click => barrer /debarrer
  li.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  });

  ul.appendChild(li);
});

// ajoute la liste dans le body
document.body.appendChild(ul);