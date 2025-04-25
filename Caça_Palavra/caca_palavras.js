const list_palavras = [
  "PATAXÓ", "TUPINAMBÁ", "ARUÁ", "KIRIRI",
  "TUXÁ", "PANKARARÉ", "TUMBALALÁ"
];

const tamanhoGrade = 11;
const grade = document.getElementById("grade");
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/*variavel de controle de selecao*/
let selecionando = false;
let tdSelecionadas = [];


function Criargrade() {

    // limpar grade ao chamar a funcao
    const containerGrade = document.getElementById('grade');
    containerGrade.innerHTML = ""; 

  for (let i = 0; i < tamanhoGrade; i++) {
    const linha = grade.insertRow();
    for (let j = 0; j < tamanhoGrade; j++) {
      const coluna = linha.insertCell();
      coluna.textContent = "";
      coluna.addEventListener("mousedown", iniciarSelecao);
      coluna.addEventListener("mouseenter", moverSelecao);
      coluna.addEventListener("mouseup", pararSelecao);
    }
  }

  inserirTodasPalavras();
  preencherLetras();
}

/*inserir horizontal e vertical*/
function inserirTodasPalavras() {
  list_palavras.forEach(palavraOriginal => {
    const palavra = palavraOriginal;
    const maxTentativas = 200;
    let tentativas = 0;
    let inserido = false;

    while (!inserido && tentativas < maxTentativas) {
      tentativas++;
      const direcao = Math.random() < 0.5 ? "horizontal" : "vertical";

      if (direcao === "horizontal") {
        let linha = Math.floor(Math.random() * tamanhoGrade);
        let coluna = Math.floor(Math.random() * (tamanhoGrade - palavra.length));
        let podeInserir = true;

        for (let i = 0; i < palavra.length; i++) {
          const cell = grade.rows[linha].cells[coluna + i];
          if (cell.textContent !== "" && cell.textContent !== palavra[i]) {
            podeInserir = false;
            break;
          }
        }

        if (podeInserir) {
          for (let i = 0; i < palavra.length; i++) {
            grade.rows[linha].cells[coluna + i].textContent = palavra[i];
          }
          inserido = true;
          console.log("Inserida horizontalmente: ${palavraOriginal}");
        }

      } else {
        let coluna = Math.floor(Math.random() * tamanhoGrade);
        let linha = Math.floor(Math.random() * (tamanhoGrade - palavra.length));
        let podeInserir = true;

        for (let i = 0; i < palavra.length; i++) {
          const cell = grade.rows[linha + i].cells[coluna];
          if (cell.textContent !== "" && cell.textContent !== palavra[i]) {
            podeInserir = false;
            break;
          }
        }

        if (podeInserir) {
          for (let i = 0; i < palavra.length; i++) {
            grade.rows[linha + i].cells[coluna].textContent = palavra[i];
          }
          inserido = true;
          console.log("Inserida verticalmente: ${palavraOriginal}");
        }
      }
    }

    if (!inserido) {
      console.warn(" Não foi possível inserir: ${palavraOriginal}");
    }
  });
}

/*preencher os espacos vazios*/
function preencherLetras() {
  for (let i = 0; i < tamanhoGrade; i++) {
    for (let j = 0; j < tamanhoGrade; j++) {
      const cell = grade.rows[i].cells[j];
      if (cell.textContent === "") {
        cell.textContent = letras[Math.floor(Math.random() * letras.length)];
      }
    }
  }
}

function iniciarSelecao(event) {
  selecionando = true;
  const td = event.target;
  if (td.tagName.toLowerCase() === "td" && !td.classList.contains("selecionado")) {
    td.classList.add("selecionado");
    tdSelecionadas.push(td);
  }
}

function moverSelecao(event) {
  if (selecionando) {
    const td = event.target;
    if (td.tagName.toLowerCase() === "td" && !td.classList.contains("selecionado")) {
      td.classList.add("selecionado");
      tdSelecionadas.push(td);
    }
  }
}

function pararSelecao() {
  selecionando = false;

  const palavraSelecionada = tdSelecionadas.map(td => td.textContent).join('');
  const palavraEncontrada = list_palavras.find(p => p.replace(/\s+/g, "").toUpperCase() === palavraSelecionada);

  if (palavraEncontrada) {
    tdSelecionadas.forEach(td => {
      td.classList.remove("selecionado");
      td.classList.add("certa", "palavra-encontrada");
    });

    // marca palavra na lista
    document.querySelectorAll(".palavra-item").forEach(item => {
      if (item.textContent.toUpperCase() === palavraEncontrada.toUpperCase()) {
        item.classList.add("palavra-encontrada");
      }
    });
  } else {
    // limpa selecao se for errada
    tdSelecionadas.forEach(td => td.classList.remove("selecionado"));
  }

  tdSelecionadas = [];
}

// reiniciar jogo
function reiniciarJogo() {
  for (let i = 0; i < tamanhoGrade; i++) {
    for (let j = 0; j < tamanhoGrade; j++) {
      grade.rows[i].cells[j].textContent = ""; 
      grade.rows[i].cells[j].classList.remove("selecionado", "certa", "palavra-encontrada"); 
    }
  }

  document.querySelectorAll('.palavra-item').forEach(item => {
    item.classList.remove('palavra-encontrada');
  });

  Criargrade(); 
}

document.getElementById('resetar-button').addEventListener('click', reiniciarJogo);

Criargrade();

