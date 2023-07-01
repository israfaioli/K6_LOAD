// como o sistema se comporta sobre alta carga?
// qual é a capacidade máxima do seu sistema em termos de usuários ou taxa de transferencia?
// ponto de ruptura de seu sistema ?
// o sistema se recupera sem intervencao manual após o término do teste de estresse?

// variante
export const options = {
    stages: [
        {duration: '2m', target: 100},
        {duration: '5m', target: 100},
        {duration: '2m', target: 200},
        {duration: '5m', target: 200},
        {duration: '2m', target: 300},
        {duration: '5m', target: 300},
        {duration: '2m', target: 400},
        {duration: '5m', target: 400},
        {duration: '10m', target: 0},
 
    ]
}

// a rapidez com que os mecanismos de dimensionamento automaticos reagem ao aumento de carga
// se houver alguma falha durante os eventos de dimensionamento

// SUB VARIANTE CHAMADA SPIKE TEST
// <> é que nao aumentamos a carga gradualmente , mas sim atingindo cargas extremas em curtos periodos de tempo
// excelente --> nao apresenta erros e tempo de resposta OK
// bom --> não apresenta erros porem tempo de resposta apresenta certa lentidao
// insatisfatorio --> sistema produz erros mas volta ao normal depois que trafego diminui
// ruim --> sistema trava e não se recupera depois que o trafego diminui 

// variante
export const options_two = {
    stages: [
        {duration: '102', target: 100},
        {duration: '1m', target: 100},
        {duration: '10s', target: 1400},
        {duration: '3m', target: 1400},
        {duration: '10s', target: 100},
        {duration: '3m', target: 100},
        {duration: '10s', target: 0}
 
    ]
}