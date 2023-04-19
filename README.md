# agiBank
Projeto para demonstrar testes escritos com Cypress em execução em um serviço de CI.

## Pré requisitos
Para executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (Usei a versão `2.26.2` enquanto escrevia este documento)
- [nodejs](https://nodejs.org/en/) (Usei a versão `14.17.3` enquanto escrevia este documento)
- NPM (Usei a versão `6.14.13` enquanto escrevia este documento)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (Usei a versão `92.0.4515.131` enquanto escrevia este documento)

**Observação:** Ao instalar o nodejs, o NPM também é instalado automaticamente.

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar.)

## Executando os testes
Neste projeto, você pode executar testes nos modos interativo e headless.

### Modo Headless
Execute `npm test` (ou `npm t` para abreviar) para executar todos os testes no modo headless usando uma janela de visualização da área de trabalho.

### Modo interativo
Execute `npm run cy:open` para abrir o Cypress Test Runner para executar testes no modo interativo usando uma janela de visualização da área de trabalho.
