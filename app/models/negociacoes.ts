import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  //Criando um array de Negociacao
  //o código fica mais limpo e escrevemos menos
  private negociacoes: Negociacao[] = [];

  //adicionando a negociacao no array
  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  //listando as negociacoes
  //Modificador ReadonlyArray -> permite apenas a exibição do array
  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
