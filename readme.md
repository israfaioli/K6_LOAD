![poster](https://toxsl.com/blog/image/77/post-image_file-QUALITY_ASSURANCE.png)

Projeto para demonstrar conhecimento sobre testes de carga e performance utilizando a ferramenta JS k6.


O K6 é um ferramenta para testes de performance open source que faz parte da grafana labs e que vem crescendo bastante na comunidade de testes e desenvolvimento.
Entre os pontos que tornam um K6 um diferencial em relação a outras ferramentas:

- Sua simplicidade, tendo uma baixa curva de aprendizagem.
- Os scripts de testes de performance com K6 são escritos em javascript, uma linguagem simples e bastante popular no mercado.
- Alto desempenho da ferramenta, pois o k6 é escrito em Go.
- Sua documentação da ferramenta, apesar de uma ferramenta recente no mercado, o k6 possui um documento excelente.

Nesse projeto junto a teoria com a prática, abordando diversos conceitos como:
- Os diferentes tipos de testes de performance
- Entendimentos sobre conceitos de Métricas, Checks e Thresholds entre outros tópicos
- Ciclo de vida de testes de performance com K6
- Geração de relatório.
- Execução em Cloud utilizando AWS.
- Execução em Cloud utilizando K6 cloud.

Neste exemplo utilizamos como base as seguintes urls oficiais do k6:
- https://k6.io/docs/
- https://test.k6.io/

## 🤖 Como executar

* Acessa a pasta do projeto
* Acesse o diretório tests:
* Executar o comando para executar um teste especifico

```
k6 run .\<sua_classe_teste>.js
```

* Executar todos os testes local

```
Get-ChildItem -Path ".\tests\" -Filter *.js | ForEach-Object { k6 run $_.FullName }
```

* Rodar teste específico salvando dados na nuvem via grafana

```
k6 cloud .\<sua_classe_teste>.js
```

* Rodar todos os testes salvando dados na nuvem via grafana

```
Get-ChildItem -Path ".\tests\" -Filter *.js | ForEach-Object { k6 cloud $_.FullName }
```

<hr>
Caro recrutador caso sinta interesse em ver outros projetos de meu portifólio acessar a url abaixo: 
- https://github.com/israfaioli