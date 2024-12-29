// Algoritmo de Ordenação: Bubble Sort em TypeScript

/**
 * Função genérica para ordenar uma lista usando o algoritmo Bubble Sort.
 * @param lista - Um array de elementos genéricos (T) que implementam o operador de comparação.
 * @returns Um novo array ordenado.
 */
function bubbleSort<T>(lista: T[]): T[] {
    const arr = [...lista]; // Cria uma cópia da lista original para não modificar diretamente
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Troca os elementos se estiverem fora de ordem
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  
    return arr;
  }
  
  // Exemplo de uso
  const numeros = [64, 34, 25, 12, 22, 11, 90];
  console.log("Lista original:", numeros);
  
  const numerosOrdenados = bubbleSort(numeros);
  console.log("Lista ordenada:", numerosOrdenados);
  
  // Teste com strings
  const palavras = ["banana", "maçã", "uva", "laranja", "abacaxi"];
  console.log("Palavras originais:", palavras);
  
  const palavrasOrdenadas = bubbleSort(palavras);
  console.log("Palavras ordenadas:", palavrasOrdenadas);
  