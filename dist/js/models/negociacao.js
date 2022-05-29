export class Negociacao {
    //Informando direto no constructor que minhas propriedades são privates, informo o seu nome e seu tipo
    //Desta forma, não preciso declarar a propriedade e nem o que ela recebe.
    //O código fica mais legível
    constructor(
    // a propriedade data será private, e com um getter para ela, para que ngm consiga alterá-la de fato;
    _data, 
    // atribuindo o public readonly,depois de ter uma negociacao criada, ela será apenas de leitura
    //Desta forma, não preciso ter os gets();
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        //guardando uma refencia da data original
        //impossibilidanto a alteração da mesma
        //tipo um clone da minha data original
        const data = new Date(this._data.getTime());
        return data;
    }
}
