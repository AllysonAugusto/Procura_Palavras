const palavras = [
  "JABORANDI",
  "ANDIROBA",
  "AROEIRA",
  "COPAIBA",
  "BREUBRANCO",
  "UNHADEGATO",
  "CARQUEJA",
  "PARIPAROBA",
];

const tamanhoGrade = 11;
const grade = document.getElementById("grade");

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// variável de controle
let selecionando = false;
let tdSelecionadas = [];

// iniciar selecao
function iniciarSelecao(event) {
  selecionando = true;
  const td = event.target;
  if (td.tagName.toLowerCase() === "td") {
    td.classList.add("selecionado");
    tdSelecionadas.push(td);
  }
}

// mover botão ao pressionar
function moverSelecao(event) {
  if (selecionando) {
    const td = event.target;
    if (td.tagName.toLowerCase() === "td") {
      td.classList.add("selecionado");
      tdSelecionadas.push(td);
    }
  }
}

// parar selecao
function pararSelecao(event) {
  selecionando = false;
}

// ligar evento com a grade
function adicionarEventosDeArraste() {
  const tds = document.querySelectorAll("#grade td");
  tds.forEach((td) => {
    td.addEventListener("mousedown", iniciarSelecao);
    td.addEventListener("mousemove", moverSelecao);
    td.addEventListener("mouseup", pararSelecao);
  });
}

// criar a grade
function Criargrade() {
  for (let i = 0; i < tamanhoGrade; i++) {
    const linha = grade.insertRow(); //linha
    for (let j = 0; j < tamanhoGrade; j++) {
      const coluna = linha.insertCell(); // coluna
      const letraAleatoria = letras[Math.floor(Math.random() * letras.length)];
      coluna.textContent = letraAleatoria; 
    }
  }
  inserirPalavrasHorizontalmente();
  inserirPalavrasVerticalmente();
  adicionarEventosDeArraste();
  adicionarPalavras()
}

// funcao de palavras horizontalmente na grade
function inserirPalavrasHorizontalmente() {
  palavras.forEach((palavra) => {
    let linha = Math.floor(Math.random() * tamanhoGrade);
    let coluna = Math.floor(Math.random() * (tamanhoGrade - palavra.length)); 

    for (let i = 0; i < palavra.length; i++) {
      grade.rows[linha].cells[coluna + i].textContent = palavra[i];
    }
  });
}

// funcao de palavras verticalmente na grade
function inserirPalavrasVerticalmente() {
  palavras.forEach((palavra) => {
    let coluna = Math.floor(Math.random() * tamanhoGrade);
    let linha = Math.floor(Math.random() * (tamanhoGrade - palavra.length));

    for (let i = 0; i < palavra.length; i++) {
      grade.rows[linha + i].cells[coluna].textContent = palavra[i];
    }
  });
}

Criargrade();




