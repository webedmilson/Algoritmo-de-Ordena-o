# Algoritmo de Ordenação: Bubble Sort em TypeScript

Este repositório contém uma implementação simples do algoritmo de ordenação **Bubble Sort** em **TypeScript**. O objetivo é demonstrar como usar tipos genéricos para criar uma função reutilizável que ordena diferentes tipos de dados.

## 📚 Descrição
O Bubble Sort é um algoritmo de ordenação simples que funciona comparando pares de elementos adjacentes e trocando-os de posição se estiverem fora de ordem. Este processo é repetido até que a lista esteja completamente ordenada.

Nesta implementação:
- A função é genérica, permitindo ordenar números, strings ou qualquer outro tipo que suporte comparação.
- Exemplos incluem ordenação de listas de números e palavras.

## 🛠️ Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/bubble-sort-typescript.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd bubble-sort-typescript
   ```

3. Instale as dependências (opcional, caso tenha um `package.json`):
   ```bash
   npm install
   ```

4. Compile o código TypeScript:
   ```bash
   tsc sorting_algorithm.ts
   ```

5. Execute o arquivo compilado:
   ```bash
   node sorting_algorithm.js
   ```

6. Ou, execute diretamente usando `ts-node`:
   ```bash
   ts-node sorting_algorithm.ts
   ```

## 🧪 Exemplo de Uso
Entrada:
```typescript
const numeros = [64, 34, 25, 12, 22, 11, 90];
const palavras = ["banana", "maçã", "uva", "laranja", "abacaxi"];

console.log(bubbleSort(numeros));
console.log(bubbleSort(palavras));
```

Saída:
```
Lista ordenada: [11, 12, 22, 25, 34, 64, 90]
Palavras ordenadas: ["abacaxi", "banana", "laranja", "maçã", "uva"]
```

## 📂 Estrutura do Projeto
```
📁 src
├── sorting_algorithm.ts   # Implementação do Bubble Sort
└── README.md              # Documentação do projeto
```

## 🔑 Conceitos Demonstrados
- **Funções Genéricas**: A função `bubbleSort<T>` aceita qualquer tipo que implemente comparação.
- **Ordenação**: Demonstra o processo básico de comparação e troca de elementos.

## 📜 Licença
Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para usá-lo e adaptá-lo conforme necessário.

---

Feito com ❤️ por [Seu Nome](https://github.com/seu-usuario).
