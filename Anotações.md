# curso_angular_v2
Repositório utilizado para realização do curso de Angular versão 2/4 da Loiane Groner

####Angular 4
Documentação: https://angular.dev/tools/cli
Play List Curso de Angular v2: https://www.youtube.com/watch?v=XxPjcMTZz5w&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=3

###Ambiente de Desenvolvimento (Node.JS, TypeScript, Angular CLI)
##Baixar e Instalar Node JS (Versão 6.17.1 LTS)
  npm v3.10.10
  Para solucionar os ERROs (Atualizar a Versão)
  npm install -g npm@5.6.0
#Através do Terminal Windows (npm)
	Executar o comando: 
		cmd: npm install -g typescript
			 npm install -g typescript@2.2
       npm install -g typescript@2.7.2 --save-dev
				*Desinstalar
					cmd: npm uninstall typescript
		
		cmd: npm install -g @angular/cli
			 npm install -g @angular/cli@1.0.0
       npm install -g @angular/cli@6.0.8
			 	*Desinstalar
					cmd: npm uninstall -g @angular/cli
			 _____________________________________________________________
			 *Não Resolveu: npm install --save-dev @angular/cli@1.4.9 (para corrigir o problema Unable to find "@angular/cli" in devDependencies)
			 *Resolveu Parcialmente: Instalar a Versão: 1.2.8
					   Excluir os Arquivos: package.json
											.angular-cli.json
							Path dos Arquivos: C:\Users\paulo.nazareth

npm install rxjs-compat (migrando de Angular 4 para Angular 6)
npm uninstall @types/selenium-webdriver
npm cache clean
npm cache clean --force
npm install --no-optional --no-bin-links		
-------------------------------------------------------------------
##Iniciando o Desenvolvendo	
#Criar o Projeto
	cmd: ng new nome-projeto
  OU
  cmd: ng init (Criando a Pasta do Projeto Antes)
  OU
	cmd: ng new projeto-inicial --skip-install --dry-run
       cd projeto-inicial 
       npm install

    #Criar Projeto com Pré-Processador de CSS
     cmd: ng new nome-projeto --style=sass
          ng new nome-projeto --style=less
          ng new nome-projeto --style=stylus 

      #Modificando a Extensão do Pré-Processador CSS de um Projeto Existente
        cmd: ng set defaults.styleExt scss
             ng set defaults.styleExt less
             ng set defaults.styleExt styl

  Testar...
  npx @angular/cli@1.0.0 new nome-projeto
  _________________________________________________________________
  *Após a Criação se Apresentar Erro Vide Versões a serem atualizadas/substituidas no package.json.

	
##Criar Component
	cmd: ng g component nome-component
	OU 
	cmd: ng g c nome-component
  OU (Para Versão Atual)
  cmd: ng g c nome-component --style css --standalone true

##Criar Módulo
Através do Terminal Acesse a Pasta do Projeto
  cmd: ng g module nome-modulo
        OU 
       ng g m nome-modulo

##Criar Serviço
  cmd: ng g service nome-servico
        OU
       ng g s nome-servico

##Criar Diretivas (Alias directive -> d)
  cmd: ng g directive nome-diretiva

##Criar Pipe
  cmd: ng g pipe nome-pipe

##Criar Classes
  cmd: ng g class nome-classe

##Criar Interface
  cmd: ng g interface nome-interface

##Criar Enumerador
  cmd: ng g enum nome-enumerador

##Startando Servidor
Através do Terminal Acesse a Pasta do Projeto
	cmd: ng serve	
    OU
       ng server --port 4280 --live-reload-port 49153 (Especifica a Porta Desejada para Uso)
	URL Padrão: http://localhost:4200/

##Verifica Sintaxe e Boas Práticas Style Guide (Qualidade de Código)
  cmd: ng lint

##Inicia Teste Unitários (Jasmine - Karma)
  cmd: ng test

##Inicia Teste End-to-End - E2E (Protractor - Karma)
  cmd: ng e2e

##Gerar o Build de Desenvolvimento
  cmd: ng build
      OU
       ng build --dev
      OU
       ng build --dev --e=dev
      OU
       ng build --target=development --environment=dev

##Gerar o Build de Produção (Obfusca e Minifica o Código JS da Aplicação)
  cmd: ng build --prod
      OU
       ng build --prod --e=prod
      OU
       ng build --target=production --environment=prod
  OBS: CSS e Template HTML já minificado e incluídos em main.bundle.js

##Servidor HTTP-Server Instalar (Substituir Servidor Apache)
  cmd: npm install http-server -g

#Executando HTTP-Server
  cmd: cd pasta-projeto 
    cmd: http-server
-------------------------------------------------------------------
##Data Binding
#Interpolação
  code: {{valor}} 
    Valor de uma Atributo ou Método
  code: [propriedade]
    Valor de uma propriedade
  code: (evento)="handler"
    Escutar Valor do Evento do Template (Click, Foco ...)
  code: [(ngModel)]="propriedade"
    Two-Way Data Binding
  
##----Pegar Parametro Path/URL
this.roterActive.snapshot.paramMap.get('id');

##Instalando o Bootstrap no Projeto
Através do Terminal Acesse a Pasta do Projeto
  cmd: npm install ng2-bootstrap bootstrap --save
  cmd: npm install bootstrap@3.3.7 --save
  "styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
]
  cmd: npm install jquery@2.2.4 --save
  "scripts": [
  "../node_modules/jquery/dist/jquery.min.js",
  "../node_modules/bootstrap/dist/js/bootstrap.min.js"
]

##Instalando o Materialize no Projeto
  cmd: npm install materialize-css --save
  cmd: npm install angular2-materialize --save

  npm install materialize-css@0.100.2 --save

  styles: "../node_modules/materialize-css/dist/css/materialize.min.css"

  Ou adicione no arquivo style.css
  @import "../node_modules/materialize-css/dist/css/materialize.min.css"

    #Requirido JQuery
      cmd: npm install jquery@2.2.4 --save

    scripts: "../node_modules/jquery/dist/jquery.min.js",
      "../node_modules/materialize-css/dist/js/materialize.min.js"
  #Para Utilizar os Icones
    index.html > header
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      Exemplo: <i class="material-icons">menu</i>

  Se necessário para garantir o funcionamento
  import { MaterializeModulo } from 'angular2-materialize'; (verificar conforme versão)
  import: adicionar MaterializeModulo

##Instalando o lodash no Projeto (lodash é uma Biblioteca Global)
  cmd: npm install --save lodash
    npm install lodash@4.17.4 --save
  cmd: npm install --save @types/lodash
    npm install @types/lodash@4.14.61 --save-dev

  #Importação
    import * as _ from 'lodash';


-------------------------------------------------------------------
##VS Code Extensões
	#Theme: 
		Dracula Theme Official (Opcional)

  #Dependências
    Auto Import

	#TypeScript:
		ESLint ou Prettier
		
	#Formatador:
		Prettier (Nativo)
  
  #Preview
	  Live Preview
  
  #Utilitários
	  Color Picker (Seletor de Cores)
    pigments  (Exibe a Diretamente na IDE)

  #Codificador
    Emmet
    ! (Estrutura Codigo HTML Básica)
    div>ul>li*5 (Estrutura de Lista Dentro de Uma Lista)

  #Icones
    file-icons


-------------------------------------------------------------------
#Substituir o package.json com as versões corretas
{
  "name": "meu-projeto",
  "version": "0.0.1",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/core": "4.4.6",
    "@angular/common": "4.4.6",
    "@angular/compiler": "4.4.6",
    "@angular/platform-browser": "4.4.6",
    "@angular/platform-browser-dynamic": "4.4.6",
    "@angular/compiler-cli": "4.4.6",
    "@angular/animations": "4.4.6",
    "@angular/forms": "4.4.6",
    "@angular/http": "4.4.6",
    "@angular/router": "4.4.6",
    "core-js": "^2.4.1",
    "rxjs": "^5.4.1",
    "zone.js": "^0.8.14"
  },
  "devDependencies": {
    "@angular/cli": "1.0.0",
    "@angular/language-service": "4.4.6",
    "codelyzer": "~2.0.0",
    "tslint": "~4.5.0",
    "typescript": "2.2.2"
  }
}

  "dependencies": {
    "@angular/animations": "^4.0.0",
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.0.0",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.4.1",
    "zone.js": "^0.8.14"
  },
  "devDependencies": {
    "@angular/cli": "1.2.8",
    "@angular/compiler-cli": "^4.0.0",
    "@angular/language-service": "^4.0.0",
    "codelyzer": "~3.0.1",
    "tslint": "~5.3.2",
    "typescript": "~2.3.3"
  }


  "devDependencies": {
    // "@types/jasmine": "~2.5.53",
    // "@types/protractor": "~1.5.16",
    "@angular/cli": "1.0.0",
    "@angular/compiler-cli": "4.4.6",
    "@angular/language-service": "4.4.6",
    // "@types/jasminewd2": "~2.0.2",
    // "@types/node": "~6.0.60",
    "codelyzer": "~2.0.0",
    // "jasmine-core": "~2.6.2",
    // "jasmine-spec-reporter": "~4.1.0",
    // "karma": "~1.7.0",
    // "karma-chrome-launcher": "~2.1.1",
    // "karma-cli": "~1.0.1",
    // "karma-coverage-istanbul-reporter": "^1.2.1",
    // "karma-jasmine": "~1.1.0",
    // "karma-jasmine-html-reporter": "^0.2.2",
    // "protractor": "~5.1.2",
    // "ts-node": "~3.0.4",
    "tslint": "~4.5.0",
    "typescript": "2.2.2"
  }

*Versões do Cursos Loiane Groner
  "dependencies": {
    "@angular/common": "2.0.0-rc.5",
    "@angular/compiler": "2.0.0-rc.5",
    "@angular/core": "2.0.0-rc.5",
    "@angular/forms": "2.0.0-rc.5",
    "@angular/http": "2.0.0-rc.5",
    "@angular/platform-browser": "2.0.0-rc.5",
    "@angular/platform-browser-dynamic": "2.0.0-rc.5",
    "@angular/router": "3.0.0-rc.1",
    "core-js": "^2.4.0",
    "refletct-metadata": "0.1.3",
    "rxjs": "5.0.0-beta.6",
    "ts-helpers": "^1.1.1",
    "zone.js": "0.6.12"
  },
  "devDependencies": {
    "@types/jasmine": "~2.2.30",
    "@types/protractor": "~1.5.16",
    "@angular/cli": "1.0.0-beta.11-webpack.2",
    "codelyzer": "0.0.26",
    "jasmine-core": "2.4.1",
    "jasmine-spec-reporter": "2.5.0",
    "karma": "0.13.22",
    "karma-chrome-launcher": "0.2.3",
    "karma-jasmine": "0.3.8",
    "karma-remap-istanbul": "^0.2.1",
    "protractor": "3.3.0",
    "ts-node": "1.2.1",
    "tslint": "3.13.0",
    "typescript": "^2.0.0"
  }



package.json compatível com:
Node.js: v6.17.1
npm: v5.6.0
Angular: v4.0.0
Angular CLI: v1.0.0
TypeScript: ~2.2.0
  "dependencies": {
    "@angular/common": "4.0.0",
    "@angular/compiler": "4.0.0",
    "@angular/core": "4.0.0",
    "@angular/forms": "4.0.0",
    "@angular/http": "4.0.0",
    "@angular/platform-browser": "4.0.0",
    "@angular/platform-browser-dynamic": "4.0.0",
    "@angular/router": "4.0.0",
    "core-js": "2.4.1",
    "rxjs": "5.1.0",
    "zone.js": "0.8.4"
  },
  "devDependencies": {
    "@angular/cli": "1.0.0",
    "@angular/compiler-cli": "4.0.0",
    "@types/jasmine": "2.5.38",
    "@types/node": "6.0.60",
    "codelyzer": "2.0.0",
    "jasmine-core": "2.5.2",
    "jasmine-spec-reporter": "3.2.0",
    "karma": "1.4.1",
    "karma-chrome-launcher": "2.0.0",
    "karma-cli": "1.0.1",
    "karma-jasmine": "1.1.0",
    "karma-jasmine-html-reporter": "0.2.2",
    "karma-coverage-istanbul-reporter": "0.2.0",
    "protractor": "5.1.0",
    "ts-node": "2.0.0",
    "tslint": "4.5.0",
    "typescript": "2.2.0"
  }


package.json compatível com:
Node.js: 6.17.1
npm: 3.10.10
Angular CLI: 6.0.8
Angular: 6.0.0
TypeScript: 2.7.2
{
  "dependencies": {
    "@angular/animations": "6.0.0",
    "@angular/common": "6.0.0",
    "@angular/compiler": "6.0.0",
    "@angular/core": "6.0.0",
    "@angular/forms": "6.0.0",
    "@angular/http": "6.0.0",
    "@angular/platform-browser": "6.0.0",
    "@angular/platform-browser-dynamic": "6.0.0",
    "@angular/router": "6.0.0",
    "core-js": "2.5.7",
    "rxjs": "6.0.0",
    "zone.js": "0.8.26"
  },
  "devDependencies": {
    "@angular/cli": "6.0.8",
    "@angular/compiler-cli": "6.0.0",
    "@angular/language-service": "6.0.0",
    "@types/jasmine": "2.8.8",
    "@types/node": "6.0.118",
    "codelyzer": "4.2.1",
    "jasmine-core": "2.99.1",
    "jasmine-spec-reporter": "4.2.1",
    "karma": "1.7.1",
    "karma-chrome-launcher": "2.2.0",
    "karma-coverage-istanbul-reporter": "1.4.2",
    "karma-jasmine": "1.1.2",
    "karma-jasmine-html-reporter": "0.2.2",
    "protractor": "5.3.2",
    "ts-node": "5.0.1",
    "tslint": "5.9.1",
    "typescript": "2.7.2"
  }
}



##Configuração .angular-cli.json
  "defaults": {
    "prefix": "app",
    "sourceDir": "src";
    "styleExt": "css",
    "prefixIntefaces": false,
    "lazyRoutePrefix": "+",
    "component": {}
  }

---------------------------------------------------------
###Anotações
diretivas
	diretivas-ngif (componente)
	diretiva-ngif/diretiva-if (serviço)


