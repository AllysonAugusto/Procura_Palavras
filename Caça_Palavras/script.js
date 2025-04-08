// Selecionando os elementos corretamente
const startBtn = document.querySelector('.start-btn');
const popInfo = document.querySelector('.info');
const exitBtn = document.querySelector('.sair-btn');
const main = document.querySelector('.main'); // Adicionando a seleção do main

// Quando clicar no botão Start
startBtn.onclick = () => {
    popInfo.classList.add('active'); // Adiciona a classe 'active' ao pop-up
    main.classList.add('active'); // Adiciona a classe 'active' ao fundo, aplicando blur
    popInfo.style.pointerEvents = "auto"; // Habilita interação com o pop-up
};

// Quando clicar no botão Fechar
exitBtn.onclick = () => {
    popInfo.classList.remove('active'); // Remove a classe 'active' do pop-up
    main.classList.remove('active'); // Remove o efeito de blur do fundo
    popInfo.style.pointerEvents = "none"; // Desabilita a interação com o pop-up
};
        