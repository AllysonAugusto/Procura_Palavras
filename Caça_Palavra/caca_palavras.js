const palavras = [
  "JABORANDI", "ANDIROBA", "AROEIRA", "COPAIBA",
  "BREUBRANCO", "UNHADEGATO", "CARQUEJA", "PARIPAROBA"
];

const tamanhoGrade = 12;
const grade = document.getElementById("grade");

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// funcao para criar grade
function Criargrade(){
    for (let i = 0; i < tamanhoGrade; i++){
        const linha = grade.insertRow(); /*linha*/
        for (let j = 0; j < tamanhoGrade; j++){
            const coluna = linha.insertCell(); /*coluna*/
            const letraAleatoria = letras[Math.floor(Math.random() * letras.length)]
            coluna.textContent = letraAleatoria;
            console.log(letraAleatoria);

        }
    }

}

Criargrade();
