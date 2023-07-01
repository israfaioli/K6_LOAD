// CARACTERISTICAS
    //metodologia mais comum
    // avaliacao de desepnho da aplicacao com usuarios simultaneos
    // quantidade de trafego
    // condicoes normais e de pico 
    // garantir o funcionamento
    // necessario alinhamento com equipe ou com o mercado para ter os dados


// inicializacao

// configuracao usuarios

// carga constante
export const options = {
    vus: 100,
    duration: '20m'
}

// variante
export const options_two = {
    stages: [
        {duration: '5m', target: 100},
        {duration: '10m', target: 100},
        {duration: '5m', target: 0},
    ]
}

// permitir que seu sistema aqueça ou redimensione automaticamente para lidar com o trafego
// permite que voce compare o tempo de resposta entre os estagios de carga baixa e carga nominal

// configuracao teste



// teardown , fechamento