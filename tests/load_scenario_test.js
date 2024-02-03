/*

------------------- CENARIO DE TESTE -------------------
Buscar dados de um registro em especifico

Criterios aplicados:
    - load/performance onde:
        - ramp up 10 vu em 10s
        - carga de 10 vu por 10s
        - ramp down 0 vu em 10s

Validações:
    - requisicao com sucesso > 95%    
    - tempo requisicao p(90) < 200ms
*/

import http from "k6/http";
import { check, sleep} from "k6"; 
import { SharedArray } from "k6/data";

// sleep faz com que cada vu (virtual user) defina um tempo para que ela realize uma próxima requisicao


export const options = {
    stages: [
        {duration: '10s', target: 10},
        {duration: '10s', target: 10},
        {duration: '10s', target: 0},
    ],

    thresholds: {
        http_req_duration: [{threshold: 'p(90) < 200', abortOnFail: true}],
        checks: ['rate > 0.95']
    },
    ext: {
        loadimpact: {
            projectID: '3680724',
            name: 'Exemplo de execução',
        }
    }
}

const data = new SharedArray('Leitura do json', function() {
    return JSON.parse(open('./data.json')).crocodilos
})

export default function() {
    const CROCODILO = data[Math.floor(Math.random() * data.length)].id
    console.log(CROCODILO)
    const BASE_URL = `https://test-api.k6.io/public/crocodiles/${CROCODILO}`
    const RESPONSE = http.get(BASE_URL)

    check(RESPONSE, {
        'check if statusCode is 200': (res) => res.status === 200
    })

    sleep(1)

}