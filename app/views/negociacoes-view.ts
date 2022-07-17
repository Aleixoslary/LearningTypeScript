import { escape } from "../decorators/escape.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

//Extendo a classe e informando o tipo dela (array)
export class NegociacoesView extends View<Negociacoes> {
    //chamando decorator para tratar scrpits indesejados no código
    @escape
  //criando o template a ser exibido, do tipo String
  //colocando o método como protected para que ele seja usado apenas nas views
  protected template(model: Negociacoes): string {
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
                        ${this.formatDate(negociacao.data)}
                    </td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                  </tr>
                  `;
                })
                .join("")}
            </tbody>
        </table>
    `;
  }

  //private pois iremos usá-lo apenas nesta class
  private formatDate(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}
