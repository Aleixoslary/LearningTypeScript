export class Negociacoes {
    constructor() {
        //Criando um array de Negociacao
        //o código fica mais limpo e escrevemos menos
        this.negociacoes = [];
    }
    //adicionando a negociacao no array
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //listando as negociacoes
    //Modificador ReadonlyArray -> permite apenas a exibição do array
    lista() {
        return this.negociacoes;
    }
}
