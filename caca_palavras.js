const list_palavras = [
  "PATAXÓ", "TUPINAMBÁ", "PATAXÓ HÃ HÃ HÃ", "KIRIRI",
  "TUXÁ", "PANKARARÉ", "TUMBALALÁ"
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


const wordInfo = {
  "PATAXÓ": "O povo Pataxó, localizado no sul da Bahia e norte de Minas Gerais, tem uma rica cultura que inclui rituais sagrados e festas religiosas como as Folias de Reis.",
  "TUPINAMBÁ": "Os Tupinambá de Olivença, localizados na Bahia, têm uma rica cultura voltada para a agricultura, pesca e festas tradicionais como a Festa do Divino Espírito Santo.",
  "PATAXÓ HÃ HÃ HÃ": "O povo Pataxó Hã hã hã, localizado na Bahia, é conhecido por suas práticas de agricultura de subsistência, criação de gado e pesca, além de sua produção artesanal e cultivo de cacau.",
  "KIRIRI": "O povo Kiriri, localizado no semiárido baiano, é conhecido por suas práticas agrícolas, como o cultivo de milho, feijão e mandioca, além de suas celebrações culturais, como o Toré e o Festival de Cultura.",
  "TUXÁ": "O povo Tuxá, localizado na região do Rio São Francisco, é conhecido por suas práticas agrícolas, como o cultivo de melancia, cebola e feijão, além da pesca e do tradicional Toré.",
  "PANKARARÉ": "O povo Pankararé, localizado no semiárido da Bahia, pratica agricultura, cultivo de mandioca, milho e feijão, além de realizar rituais religiosos, como o Toré, com grande importância cultural.",
  "TUMBALALÁ": "O povo Tumbalalá, localizado na Bahia, pratica agricultura irrigada, cultivando mandioca, feijão e cebola, e realiza rituais importantes como o Toré, com grande significado cultural."
};

// Função para exibir a informação quando a palavra for clicada
const palavras = document.querySelectorAll(".palavra-item");

palavras.forEach(palavra => {
  palavra.addEventListener("click", function() {
      const povo = palavra.textContent; // Obtém o nome da palavra (povo)
      showFeedback(povo); // Exibe a informação sobre o povo
  });
});

// Função para mostrar a mensagem de feedback
function showFeedback(povo) {
  const feedbackBox = document.getElementById("feedback-box");
  const feedbackMessage = document.getElementById("feedback-message");

  feedbackMessage.textContent = wordInfo[povo] || "Informação não disponível.";
  feedbackBox.style.display = 'block';
}

function adicionarListenersPalavras() {
  const palavras = document.querySelectorAll(".palavra-item");

  palavras.forEach(palavra => {
    palavra.addEventListener("click", function () {
      const povo = palavra.getAttribute("data-povo");
      showFeedback(povo);
    });
  });
}




function closeButton() {
  const feedbackBox = document.getElementById("feedback-box");
  feedbackBox.style.display = "none"; 
}

// fechar instruções se clicar fora
window.onclick = function(event) {
  const feedbackBox = document.getElementById("feedback-box");
  if (event.target === feedbackBox) {
      feedbackBox.style.display = "none";
  }
};

window.onload = function () {
  Criargrade();               // cria a grade com letras e insere palavras
  adicionarListenersPalavras(); // adiciona os cliques nas palavras da lista
};


