/*

------------------- CENARIO DE TESTE -------------------
Buscar todos os registros do endpoint 

Criterios aplicados:
    - smoke test 1 usuario por 30 segundos

Validações:
    - requisicao com sucesso > 99%    
*/

import http from "k6/http";
import { check } from "k6";


export const options = {
    vus: 1,
    duration: '30s',
    thresholds: {
        checks: ['rate > 0.99']
    }
}

export default function() {
    const BASE_URL = 'https://test-api.k6.io/public/crocodiles/'
    const RESPONSE = http.get(BASE_URL)

    check(RESPONSE, {
        'check if statusCode is 200': (res) => res.status === 200
    })

}