/*

------------------- CENARIO DE TESTE -------------------
Em ambientes locais temos alguns problemas que em cloud não encontramos como exemplo: 
vazao - em cloud a vazao (qtd de requisicoes por segundo é maior)

Validações:
    - requisicao com sucesso > 95%    
    - tempo requisicao p(90) < 200ms
*/

import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 1,
    duration: '3s',
    thresholds: {
        checks: ['rate > 0.99']
    },
    ext: {
        loadimpact: {
          projectID: 3648836,
          name: "K6_LOAD"
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
