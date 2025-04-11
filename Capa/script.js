// função que será chamada ao clicar em "Nova Partida"
function novaPartida() {
    alert("nova partida - futuramente");
  }
  
  // função para exibir instruções
  function mostrarInstrucoes() {
    const modal = document.getElementById("instrucoes-box");
    modal.style.display = "flex";
  }
  
  // função fechar
  function closeInstrucoes() {
    const instrucoes = document.getElementById("instrucoes-box");
    instrucoes.style.display = "none"; 
  }
  
  //fechar se clicar fora
  window.onclick = function(event) {
    const instrucoes = document.getElementById("instrucoes-box");
    if (event.target === instrucoes) {
      instrucoes.style.display = "none";
    }

  // fechar instruções se clicar fora
  window.onclick = function(event) {
    const instrucoes = document.getElementById("instrucoes-box");
    if (event.target === instrucoes) {
      instrucoes.style.display = "none";
    }
  };
}