const key = "";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json());

    colocarDadosNaTela(dados);
}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}

const vagasEmprego = [
    { titulo: "Desenvolvedor Front-End", descricao: "Procuramos desenvolvedor front-end com experiência em React e Angular para trabalhar em projetos inovadores...", local: "São Paulo" },
    { titulo: "Analista de Marketing Digital", descricao: "Buscamos analista de marketing digital para trabalhar em campanhas de mídia paga e SEO para grandes clientes...", local: "Rio de Janeiro" },
    { titulo: "Designer Gráfico", descricao: "Vaga para designer gráfico com experiência em Adobe Photoshop e Illustrator para criação de material publicitário...", local: "Belo Horizonte" },
    { titulo: "Assistente Administrativo", descricao: "Assistente administrativo para apoio nas rotinas diárias da empresa, com experiência em Excel e atendimento ao cliente...", local: "Porto Alegre" },
    { titulo: "Consultor de Vendas", descricao: "Consultor de vendas para atuar no mercado de tecnologia, com foco em novos negócios e expansão de carteira de clientes...", local: "Curitiba" },
];

const generateVagas = (array, containerId) => {
    const container = document.querySelector(containerId);
    array.forEach(vaga => {
        const vagaElement = document.createElement("div");
        vagaElement.classList.add("vaga");
        vagaElement.innerHTML = `
            <h3>${vaga.titulo}</h3>
            <p>${vaga.descricao}</p>
            <p><strong>Local:</strong> ${vaga.local}</p>
        `;
        container.appendChild(vagaElement);
    });
};


const horoscopo = [
    { signo: "Áries", previsao: "Hoje é um dia de grande energia, aproveite para colocar seus planos em ação." },
    { signo: "Touro", previsao: "A paciência será sua aliada hoje, especialmente em questões familiares." },
    { signo: "Gêmeos", previsao: "A comunicação será essencial hoje, esteja atento às palavras que você usa." },
    { signo: "Câncer", previsao: "Dia favorável para resolver pendências financeiras e buscar estabilidade." },
    { signo: "Leão", previsao: "As relações pessoais estarão em alta, aproveite para fortalecer vínculos com os amigos." },
    { signo: "Virgem", previsao: "Você pode encontrar soluções criativas para problemas no trabalho, não tenha medo de se arriscar." },
    { signo: "Libra", previsao: "Seu charme natural vai ajudar a melhorar relações profissionais e pessoais hoje." },
    { signo: "Escorpião", previsao: "É um bom momento para refletir sobre suas metas e a direção que deseja seguir." },
    { signo: "Sagitário", previsao: "A sorte está ao seu lado, aproveite para realizar aquilo que está adiando há um tempo." },
    { signo: "Capricórnio", previsao: "O foco será importante, evite distrações e concentre-se em seus objetivos." },
    { signo: "Aquário", previsao: "Sua criatividade estará em alta, aproveite para inovar e buscar novas soluções." },
    { signo: "Peixes", previsao: "Hoje será um dia de introspecção, aproveite para cuidar de sua saúde mental e física." },
];

const generateHoroscopo = (array, containerId) => {
    const container = document.querySelector(containerId);
    array.forEach(horoscopo => {
        const horoscopoElement = document.createElement("div");
        horoscopoElement.classList.add("horoscopo");
        horoscopoElement.innerHTML = `
            <h3>${horoscopo.signo}</h3>
            <p>${horoscopo.previsao}</p>
        `;
        container.appendChild(horoscopoElement);
    });
};


generateVagas(vagasEmprego, "#vagas .lista-vagas");
generateHoroscopo(horoscopo, "#horoscopo .lista-horoscopo");
