export class NegociacoesView {
    constructor(selector) {
        //inserindo no meu elemento o parametro passado
        this.elemento = document.querySelector(selector);
    }
    //criando o template a ser exibido, do tipo String
    template(model) {
        return `
        <table class="table table-hover table-bordered table-dark">
            <thead>
                <tr>
                    <th scope="col">DATA</th>
                    <th scope="col">QUANTIDADE</th>
                    <th scope="col">VALOR</th>
                </tr>
            </thead>
            <tbody>
              ${model
            .lista()
            .map((negociacao) => {
            return `
                  <tr>
                    <td>
                        ${new Intl.DateTimeFormat().format(negociacao.data)}
                    </td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                  </tr>
                  `;
        })
            .join(" ")}
            </tbody>
        </table>
    `;
    }
    //Atualizando o elemento, não retorna nada, por isso o tipo void;
    update(model) {
        //transformando em elemento o template
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
