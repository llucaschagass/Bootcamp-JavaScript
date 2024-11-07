function calcularDiversificacao() {
    const portfolioStr = gets();

    // Converte a string de entrada para um array de números
    const valores = portfolioStr.split(',').map(Number);

    // Calcula o valor total do portfólio
    const valorTotal = valores.reduce((acc, valor) => acc + valor, 0);

    // Calcula a porcentagem de cada investimento em relação ao total, arredondando para duas casas decimais e adicionando '%'
    const porcentagens = valores.map(valor => ((valor / valorTotal) * 100).toFixed(2) + '%');

    // Imprime o array de porcentagens
    print(porcentagens);
}

calcularDiversificacao();