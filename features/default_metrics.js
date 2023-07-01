import http from 'k6/http';

export default function () {
  http.get('https://test-api.k6.io/');
}

// metricas integradas por default que sao exibidas no resultado de saida do k6
    // contadores
        // destinada a soma e incrementos de valores

    // medidores
        // faz acompanhamento dos maiores, menores valores, mais recentes

    // taxas
        // rastreiam a frequencia que o um valor <> 0 ocorre

    // tendencia
        // ponto probabilistico onde calculamos a média, mediana, percentual de intervalos de confianca