import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        //criando uma nova prop de negociacoes
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    criaNegociacao() {
        //convertendo o value do input date (que é do tipo String) para data com regex
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        //convertendo os values de quantidade e valor para int e float
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        //criando uma nova instancia do modelo de negociacao;
        //obrigatoriamente ele espera 3 parametros;
        return new Negociacao(date, quantidade, valor);
    }
    adiciona() {
        //adiciona uma nova negociação e em seguida limpa o formulário
        const negociacao = this.criaNegociacao();
        //esse adiciona é do models/negociacoes -> para adicionar na lista
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
