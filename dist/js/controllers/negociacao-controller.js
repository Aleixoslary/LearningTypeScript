import { DiaDaSemana } from "../enums/days-of-week.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView", false);
        this.mensagemView = new MensagemView("#mensagemView", false);
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        const verifyDay = this.isValidDay(negociacao.data);
        if (!verifyDay)
            return this.mensagemView.update("Por favor, utilize apenas dias úteis (seg-sex)");
        this.negociacoes.adiciona(negociacao);
        this.updateView();
        this.limparFormulario();
    }
    isValidDay(data) {
        return (data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    updateView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso");
    }
}
