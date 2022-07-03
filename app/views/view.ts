//Informando que a class View é abstrata
//isso não permite que a mesma seja instanciada sozinha, apenas seus filhos

export abstract class View<T> {
  //permite apenas que os filhos acessem o elemento
  protected elemento: HTMLElement;

  private escapar = false;

  //tornando o parametro escapar opcional
  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = elemento as HTMLInputElement;
    } else {
        throw Error(`Seletor ${seletor} não existe no Dom`)
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  //Atualizando o elemento, não retorna nada, por isso o tipo void;
  public update(model: T): void {
    //transformando em elemento o template
    let template = this.template(model);

    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<script>/, "");
    }

    this.elemento.innerHTML = template;
  }

  //transformando o método em abstrato, para que seja obrigatório que seus filhos o implemente
  //colocando o método como protected para que ele seja usado apenas nas views filhas
  protected abstract template(model: T): string;
}
