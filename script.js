async function processarLikes() {
    const id = document.getElementById('playerID').value;
    const consoleBox = document.getElementById('console');
    const btnText = document.getElementById('btnText');

    if (!id || id.length < 5) {
        consoleBox.innerHTML = "<span style='color:red'>> ERRO: ID INVÁLIDO</span>";
        return;
    }

    // Efeito Visual de Processamento
    btnText.innerText = "CONECTANDO...";
    consoleBox.innerHTML = `> Localizando UID: ${id}...`;

    // Simulação de integração com a API Node.js
    // Quando você hospedar seu bot no Render.com, substitua a URL abaixo
    try {
        setTimeout(() => {
            consoleBox.innerHTML = `> Conectado ao servidor VORTEX...<br>> Enviando pacotes de likes...`;
            
            setTimeout(() => {
                consoleBox.innerHTML = `> <span style='color:#00f2ff'>SUCESSO: Likes enviados para ${id}!</span>`;
                btnText.innerText = "REPETIR PROCESSO";
            }, 3000);

        }, 2000);
        
    } catch (error) {
        consoleBox.innerHTML = "> ERRO DE CONEXÃO COM O SERVIDOR.";
    }
}
