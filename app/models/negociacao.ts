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
}
