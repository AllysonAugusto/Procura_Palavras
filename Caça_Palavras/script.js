// Selecionando os elementos corretamente
const startBtn = document.querySelector('.start-btn');
const popInfo = document.querySelector('.info');
const exitBtn = document.querySelector('.sair-btn');
const main = document.querySelector('.main');

// Quando clicar no botão Start
startBtn.onclick = () => {
    popInfo.classList.add('active'); 
    main.classList.add('active'); 
    popInfo.style.pointerEvents = "auto";
};

// Quando clicar no botão Fechar
exitBtn.onclick = () => {
    popInfo.classList.remove('active');
    main.classList.remove('active'); 
    popInfo.style.pointerEvents = "none";
};
        
