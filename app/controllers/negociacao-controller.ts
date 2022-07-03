import { DiaDaSemana } from "../enums/days-of-week.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  //instanciando uma nova prop de negociacoes
  private negociacoes = new Negociacoes();

  //instanciando uma nova prop de negociacoesView, passando como parametro o id do elemento;
  private negociacoesView = new NegociacoesView("#negociacoesView", false);
  private mensagemView = new MensagemView("#mensagemView", false);

  constructor() {
    this.inputData = <HTMLInputElement>document.querySelector("#data");
    this.inputQuantidade = document.querySelector(
      "#quantidade",
    ) as HTMLInputElement;
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    //adiciona uma nova negociação e em seguida limpa o formulário
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value,
    );

    //verificando se a data é um dia útil
    const verifyDay = this.isValidDay(negociacao.data);

    if (!verifyDay)
      return this.mensagemView.update(
        "Por favor, utilize apenas dias úteis (seg-sex)",
      );

    //esse adiciona é do models/negociacoes -> para adicionar na lista
    this.negociacoes.adiciona(negociacao);
    this.updateView();
    this.limparFormulario();
  }

  private isValidDay(data: Date): boolean {
    return (
      //utilizando enums para comparar as datas
      data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO
    );
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private updateView(): void {
    this.negociacoesView.update(this.negociacoes);

    this.mensagemView.update("Negociação adicionada com sucesso");
  }
}
