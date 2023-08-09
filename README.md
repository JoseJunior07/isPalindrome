# Função isPalindrome

Uma função simples em JavaScript para verificar se uma palavra é um palíndromo.

## Descrição

A função `isPalindrome` recebe uma palavra como entrada, verifica se ela é um palíndromo e exibe uma mensagem indicando se a palavra é ou não um palíndromo. Um palíndromo é uma palavra, frase ou sequência que é a mesma lida de trás para frente.

## Como Usar

1. Abra o seu ambiente de desenvolvimento (Node.js, navegador, etc.).
2. Copie o código da função `isPalindrome` para o seu ambiente.
3. Modifique a variável `palavra` para a palavra que você deseja verificar.
4. Execute o código.
5. O resultado será exibido no console, indicando se a palavra é um palíndromo ou não.

Exemplo:

```javascript
function isPalindrome () {
    let palavra = "rever";
    let separaPalavra = palavra.split("");
    let palavraInvertida = separaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    
    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo!`);
    }
}

isPalindrome();

