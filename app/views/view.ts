//Informando que a class View é abstrata
//isso não permite que a mesma seja instanciada sozinha, apenas seus filhos

import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {
  //permite apenas que os filhos acessem o elemento
  protected elemento: HTMLElement;

  //tornando o parametro escapar opcional
  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = elemento as HTMLInputElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no Dom`);
    }
  }

  //Decorator para informar o tempo de execução do método
  @logarTempoDeExecucao(true)
  //Decorator para inspecionar o método
  @inspect
  //Atualizando o elemento, não retorna nada, por isso o tipo void;
  public update(model: T): void {
    //transformando em elemento o template
    let template = this.template(model);

    this.elemento.innerHTML = template;
  }

  //transformando o método em abstrato, para que seja obrigatório que seus filhos o implemente
  //colocando o método como protected para que ele seja usado apenas nas views filhas
  protected abstract template(model: T): string;
}
