import { NegociacaoController } from "./controllers/negociacao-controller.js";
//Quando a aplicação inicia, ela cria uma nova instancia do NegociacaoController;
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    //proibindo o reload da tela
    event.preventDefault();
    controller.adiciona();
});
