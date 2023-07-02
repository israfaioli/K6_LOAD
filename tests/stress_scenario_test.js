/*

------------------- CENARIO DE TESTE -------------------
Teste de stress no processo de login + autenticacao usuario

Criterios aplicados:
    - stress onde:
        - ramp up 5 vu em 5s
        - carga de 5 vu por 5s
        - ramp up 50 vu em 2s
        - carga de 50 vu por 2s
        - ramp down 0 vu em 5s

Validações:
    - requisicao com falha < 1%
*/

import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

export const options = {
    stages: [
        { duration: '5s', target: 5 },
        { duration: '5s', target: 5 },
        { duration: '2s', target: 50 },
        { duration: '2s', target: 50 },
        { duration: '5s', target: 0 },
    ],
    thresholds: {
        http_req_failed: ['rate < 0.01']
    }
}

const csvData = new SharedArray('Ler dados', function(){
    return papaparse.parse(open('./usuarios.csv'), {header: true}).data;
});

export default function () {
    const USER = csvData[Math.floor(Math.random() * csvData.length)].email
    const PASS = 'user123'
    const BASE_URL = 'https://test-api.k6.io';

    console.log(USER);

    const res = http.post(`${BASE_URL}/auth/token/login/`, {
        username: USER,
        password: PASS
    });

    check(res, {
        'sucesso login': (r) => r.status === 200,
        'token gerado': (r) => r.json('access') != ''
    });

    sleep(1)
}