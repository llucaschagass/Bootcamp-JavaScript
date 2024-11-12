const investimentosStr = gets();

function calcularSharpeRatio(investimentosStr) {
    // Converte a string de entrada em um array de números
    const investimentos = investimentosStr.split(',').map(Number);
    
    // Desestrutura os valores do array
    const retornoInvestimento = investimentos[0];
    const retornoLivreRisco = investimentos[1];
    const desvioPadrao = investimentos[2];

    // Verifica se o desvio padrão é zero para evitar divisão por zero
    if (desvioPadrao === 0) {
        return 'Desvio padrão inválido'; // Retorna uma mensagem de erro se o desvio padrão for zero
    }

    // Calcula o Sharpe Ratio
    const sharpeRatio = (retornoInvestimento - retornoLivreRisco) / desvioPadrao;

    // Arredonda o resultado para duas casas decimais
    const sharpeRatioArredondado = sharpeRatio.toFixed(2);

    return sharpeRatioArredondado;
}

// Calcula o Sharpe Ratio
const sharpeRatio = calcularSharpeRatio(investimentosStr);

// Exibe o resultado
print(sharpeRatio);