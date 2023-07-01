import http from "k6/http";
import { check } from "k6";

export const options = {
    vus: 1,
    duration: '10s'
}

// validar se o status da requisicao é o X
export default function() {
    const res = http.get('http://test.k6.io')
    check(res, {
        'statusCode é 200': (response) => response.status === 200,
        'verificando existencia texto': (response) => response.body.includes('/contacts.php')
    })
}

// VERIFICACOES QUE CAUSAM FALHA NAO FAZEM COM QUE OS TESTES SEJAM ABORTADOS OU TERMINEM COM STATUS DE FALHA
// PARA ISSO DEVEMOS TRABALHAR COM CONCEITOS DE LIMITES, QUE NO K6 CHAMAMOS DE THRESHOLDS

