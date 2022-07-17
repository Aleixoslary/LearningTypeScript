export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    //Nos dá acesso a implementação do método decorado através de descritor.value
    descriptor: PropertyDescriptor,
  ) {
    //guardando o método original
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      //capturando a perfomance antes do método ser chamado
      const t1 = performance.now();

      //retornando o método original, aplicando:
      // -> this (contexto da nova função que foi adicionada no value)
      // -> e os possíveis parametros do método
      const retorno = metodoOriginal.apply(this, args);

      //capturando a perfomance depois da execução do método
      const t2 = performance.now();

      let divisor = 1;
      let unidade = "milisegundos";

      if (emSegundos) {
        divisor = 1000;
        unidade = "segundos";
      }

      //exibindo
      console.log(
        `${propertyKey}, tempo de execucção: ${(t2 - t1) / divisor} ${unidade}`,
      );

      //retornando o método original para a função pai
      retorno;
    };

    return descriptor;
  };
}
