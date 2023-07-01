// CARACTERISTICAS
    // confiabilidade em longos periodos de tempo

// inicializacao

// configuracao usuarios

export const options_two = {
    stages: [
        {duration: '2m', target: 400},
        {duration: '4h30m', target: 400},
        {duration: '2m', target: 0},
    ]
}

// sistema não sofre bugs de vazamento de memória
// bugs relacionados a condições de corrida, quando dois recursos computacionais estão tentando acessar uma mesma informação
// logs não esgotem armazenamento em disco alocado
// se servicos externos que voce depende não pare de funcionar após x solicitacoes 
// o objetivo é sempre trabalhar com 80% de sua capacidade máxima
// alinhar sobre custos de infraestrutura como um todo. (verificar antes de executar os testes)

// configuracao teste

// teardown , fechamento