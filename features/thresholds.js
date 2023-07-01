import http from 'k6/http';
import { check }  from 'k6';

export const options = {
    vus: 1,
    duration: '3s',

    // limites utilizados como criterios de aprovacao ou reprovacao
    // limite de < 1%
    // 95% do resutaldo deve ser menor que 200 milesegundos
    thresholds: {
        http_req_failed: ['rate < 0.01'],
        http_req_duration: [{threshold: 'p(95) < 420', abortOnFail: true}],
        checks: ['rate > 0.99']
    }
}

export default function () {
    const res = http.get('http://test.k6.io/')

    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}