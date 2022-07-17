export class Negociacao {
  //Informando direto no constructor que minhas propriedades são privates, informo o seu nome e seu tipo
  //Desta forma, não preciso declarar a propriedade e nem o que ela recebe.
  //O código fica mais legível
  constructor(
    // a propriedade data será private, e com um getter para ela, para que ngm consiga alterá-la de fato;
    private _data: Date,
    // atribuindo o public readonly,depois de ter uma negociacao criada, ela será apenas de leitura
    //Desta forma, não preciso ter os gets();
    public readonly quantidade: number,
    public readonly valor: number,
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }
  get data(): Date {
    //guardando uma refencia da data original
    //impossibilidanto a alteração da mesma

    //tipo um clone da minha data original
    const data = new Date(this._data.getTime());
    return data;
  }

  //todo método estático podemos chamar direto a classe, sem necessidade de instanciar
  public static criaDe(
    dateString: string,
    quantidadeString: string,
    valorString: string,
  ): Negociacao {
    //convertendo o value do input date (que é do tipo String) para data com regex
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ","));

    //convertendo os values de quantidade e valor para int e float
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    //criando uma nova instancia do modelo de negociacao;
    //obrigatoriamente ele espera 3 parametros;
    return new Negociacao(date, quantidade, valor);
  }
}
