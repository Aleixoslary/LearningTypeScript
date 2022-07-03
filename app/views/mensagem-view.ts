import { View } from "./view.js";

//Extendo a classe e informando o tipo dela (string)
export class MensagemView extends View<String> {
  //colocando o método como protected para que ele seja usado apenas nas views
  protected template(model: string): string {
    return `
        <p class="alert alert-info">${model}</p>
    `;
  }
}
