const inicio = document.getElementById("inicio");
const principal = document.getElementById("principal");
const continuar = document.getElementById("continuar");

continuar.addEventListener("click", () => {
    inicio.style.display = "none";
    principal.style.display = "block";
});

const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const imagem = document.getElementById("imagem");

let escalaSim = 1;
let escalaNao = 1;

const imagens = [
    "imagem1.png",
    "imagem2.png",
    "imagem3.png",
    "imagem4.png"
];

let indice = 0;

botaoNao.addEventListener("click", () => {
    // Aumenta o botão Sim
    escalaSim += 0.2;
    botaoSim.style.transform = `scale(${escalaSim})`;

    // Diminui o botão Não
    escalaNao -= 0.15;
    if (escalaNao < 0.2) escalaNao = 0.2; // tamanho mínimo
    botaoNao.style.transform = `scale(${escalaNao})`;

    // Troca a imagem
    indice++;
    if (indice >= imagens.length) indice = imagens.length - 1;
    imagem.src = imagens[indice];
});