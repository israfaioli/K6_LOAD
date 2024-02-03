// 1 . Inicializacao
    // parte destinada a importacao dos modulos que iremos utilizar
    // forma Java script
import sleep from 'k6';

// 2. configuração
    // configuracao de dados que sao compartilhados com todos os usuarios virtuais
    // chamada uma unica vez durante todo o ciclo de vida

    export const options= {
        vus: 100,
        duration: '2s',
        ext: {
            loadimpact: {
                projectID: '3680724',
                name: 'Exemplo de execução',
            }
        }
    }

// 3. execução ou vu code
    // execucao da nossa funcao de teste
    // realizar solicitacoes http, emitir metricas, 
    // teremos export default function

export default function () {
        console.log('testando o k6')
        sleep(1)
    }

// 4. desmontagem
    //etapa opcional
    // voltada a envio de resultados para um web hook, plataforma externa, tratamento de dados, encerramento dos testes
export function tearDown(data) {
        console.log(data)
    }