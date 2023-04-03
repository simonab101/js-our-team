const team = [
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "Wayne Barnett",
    ruolo: "Founder Ceo",
    foto: "wayne-barnett-founder-ceo.jpg"
  }
];


//MILESTONE 1:
// Utilizzando il ciclo for of
for (let member of team) {
  console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
}

// Utilizzando il ciclo for
for (let i = 0; i < team.length; i++) {
  console.log(`Nome: ${team[i].nome}, Ruolo: ${team[i].ruolo}, Foto: ${team[i].foto}`);
}



//MILESTONE 2:
const teamContainer = document.querySelector("#team-container");

for (let member of team) {
  const memberCard = document.createElement("div");
  memberCard.classList.add("member-card");
  
  const memberName = document.createElement("h2");
  memberName.innerText = member.nome;
  memberCard.appendChild(memberName);
  
  const memberRole = document.createElement("p");
  memberRole.innerText = member.ruolo;
  memberCard.appendChild(memberRole);
  
  const memberPhoto = document.createElement("img");
  memberPhoto.src = member.foto;
  memberCard.appendChild(memberPhoto);
  
  teamContainer.appendChild(memberCard);
}



