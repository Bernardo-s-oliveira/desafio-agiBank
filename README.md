# agiBank
Projeto para demonstrar testes escritos com Cypress em execução em um serviço de CI.

## Pré requisitos
Para executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (Usei a versão `2.34.1` enquanto escrevia este documento)
- [nodejs](https://nodejs.org/en/) (Usei a versão `16.13.2` enquanto escrevia este documento)
- NPM (Usei a versão `8.1.2` enquanto escrevia este documento)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (Usei a versão `111.0.5563.147` enquanto escrevia este documento)

**Observação:** Ao instalar o nodejs, o NPM também é instalado automaticamente.

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar.)

## Executando os testes
Neste projeto, você pode executar testes nos modos interativo e headless.

### Modo Headless
Execute `npm test` (ou `npm t` para abreviar) para executar todos os testes no modo headless usando uma janela de visualização da área de trabalho.

### Modo interativo
Execute `npm run cy:open` para abrir o Cypress Test Runner para executar testes no modo interativo usando uma janela de visualização da área de trabalho.

## Integração contínua
Foi implementado o pipeline de integração contínua com GitHub Actions. O arquivo de configuração do CI é o .github/workflows/ci.yml. Em todo push no branch main o pipeline é executado. Como uma forma de manter padronizado a indentação/estrutura do código, foi utilizado a biblioteca `lint` como obrigatória a aprovação pra poder executar os cenários na pipeline.
