document.getElementById("btn-ttew").addEventListener("click", function(event) {
    document.getElementById("theme-menu").classList.toggle("mostrar");
    event.stopPropagation();
});

document.getElementById("btn-dark").addEventListener("click", function() {
    var root = document.documentElement;
    var btnDark = document.getElementById("btn-dark");
    
    root.classList.toggle("dark-mode");
    
    if (root.classList.contains("dark-mode")) {
        btnDark.textContent = "☀︎";
    } else {
        btnDark.textContent = "☾";
    }
});

window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('mostrar')) {
                openDropdown.classList.remove('mostrar');
            }
        }
    }
}

function mudarTema(nomeDoTema) {
    var root = document.documentElement;

    root.classList.remove('tema-kuromi', 'tema-mint', 'tema-amd');

    if (nomeDoTema !== 'padrao') {
        root.classList.add(nomeDoTema);
    }

    document.getElementById("theme-menu").classList.remove("mostrar");
}

let tamanhoFonteAtual = 100;

document.getElementById("btn-mais").addEventListener("click", function() {
    if (tamanhoFonteAtual < 150) {
        tamanhoFonteAtual += 10;
        document.documentElement.style.fontSize = tamanhoFonteAtual + "%";
    }
});

document.getElementById("btn-menos").addEventListener("click", function() {
    if (tamanhoFonteAtual > 70) { 
        tamanhoFonteAtual -= 10;
        document.documentElement.style.fontSize = tamanhoFonteAtual + "%";
    }
});

function atualizarRelogio() {
    const agora = new Date();
    
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); 
    const ano = agora.getFullYear();
    
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    const formatoDataHora = `${dia}/${mes}/${ano} — ${horas}:${minutos}:${segundos}`;
    
    document.getElementById('data-hora').textContent = formatoDataHora;
}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

const listaDeImagens = [
    "assets/ft (1).png",
    "assets/20260427_173527.jpg",
];

let indiceAtual = 0;

function alternarImagem() {
    const imagemElemento = document.getElementById("img-rotativa");
    
    if (imagemElemento) {
        indiceAtual++;
        if (indiceAtual >= listaDeImagens.length) {
            indiceAtual = 0;
        }
        imagemElemento.src = listaDeImagens[indiceAtual];
    }
}

setInterval(alternarImagem, 10000);

const likesIniciais = {
    'post1': 1420,
    'post2': 3890,
    'post3': 10504,
    'post4': 560,
    'post5': 2150
};

function inicializarLikes() {
    let likesSalvos = JSON.parse(localStorage.getItem('likesBlog'));
    
    if (!likesSalvos) {
        likesSalvos = likesIniciais;
        localStorage.setItem('likesBlog', JSON.stringify(likesSalvos));
    }

    for (const postId in likesSalvos) {
        const contadorElement = document.getElementById(`contador-${postId}`);
        if (contadorElement) {
            contadorElement.textContent = likesSalvos[postId];
        }
    }
}

function darLike(postId) {
    let likesSalvos = JSON.parse(localStorage.getItem('likesBlog'));
    
    likesSalvos[postId]++;
    
    localStorage.setItem('likesBlog', JSON.stringify(likesSalvos));
    
    const contadorElement = document.getElementById(`contador-${postId}`);
    if (contadorElement) {
        contadorElement.textContent = likesSalvos[postId];
    }
}

const formContato = document.querySelector(".formulario-contato");

if (formContato) {
    formContato.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || assunto === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios antes de enviar.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return; 
        }

        window.location.href = "sucesso.html";
    });
}

window.addEventListener('DOMContentLoaded', inicializarLikes);