// script.js

// Simula um carrinho de compras simples
const carrinho = [];

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  alert(`${produto} adicionado ao carrinho!`);
}

// Adiciona funcionalidade aos botões
const botoes = document.querySelectorAll('.btn');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const produto = botao.getAttribute('data-produto');
    adicionarAoCarrinho(produto);
  });
});

// Validação simples de formulário de contato
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato.");
    form.reset();
  });
}

// Efeito de rolagem suave para âncoras
const links = document.querySelectorAll("nav a[href^='#']");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}
