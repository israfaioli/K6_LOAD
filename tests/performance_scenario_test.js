/*

------------------- CENARIO DE TESTE -------------------
Realizar registro de um novo usuario

Criterios aplicados:
    - performance onde:
        - carga de 10 vu por 10s

Validações:
    - requisicao com sucesso > 95%    
    - tempo requisicao p(95) < 500ms
    - requisicao com falha < 1%
*/

import http from "k6/http";
import { check, sleep} from "k6"; 

// sleep faz com que cada vu (virtual user) defina um tempo para que ela realize uma próxima requisicao


export const options = {
    stages: [
        {duration: '10s', target: 10},
    ],
    thresholds: {
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 500'],
        checks: ['rate > 0.95']
    },
    ext: {
        loadimpact: {
            projectID: '3680724',
            name: 'Exemplo de execução',
        }
    }
}

export default function () {
    const USER = `${Math.random()}@mail.com`
    const PASS = 'user123'
    const BASE_URL = 'https://test-api.k6.io';

    console.log( USER + PASS);

    const res = http.post(`${BASE_URL}/user/register/`, {
        username: USER,
        first_name: 'crocrodilo',
        last_name: 'dino',
        email: USER,
        password: PASS
    });

    check(res, {
        'sucesso ao registar': (r) => r.status === 201
    });

    sleep(1)
}