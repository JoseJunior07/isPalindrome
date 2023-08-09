function isPalindrome (palavra) {
    
    let separaPalavra = palavra.split("");
    let palavraInvertida = separaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    
    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo!`);
    }
}

isPalindrome("rever");