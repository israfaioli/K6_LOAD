import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export const options = {
    vus: 1,
    duration: '3s',
    thresholds: {
        checks: ['rate > 0.99']
    },
    ext: {
        loadimpact: {
            projectID: '3680724',
            name: 'Exemplo de execução',
        }
    }
}

export default function(){
    const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

    const res = http.get(BASE_URL);

    check(res, {
        'status code 200': (r) => r.status === 200
    });
}

// com isso o k6 não fornece mais métricas de saída no console
// gerado arquivo dentro do diretorio do teste executado
export function handleSummary(data) {
    return {
      "index.html": htmlReport(data),
    };
  }