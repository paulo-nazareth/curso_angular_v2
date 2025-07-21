## Criar o Projeto (já com Rotas)

Comando cmd: 
```bash
  ng new nome-projeto --routing
```

## Instalando o Bootstrap do NGX no Projeto

Link Documentação
```http
 https://valor-software.com/ngx-bootstrap/documentation#getting-started
````

Comando cmd: 
```bash
  npm install ngx-bootstrap --save
```

Adicionar no arquivo `angular-cli.json`

`
  "styles": [
	"../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
`

## Atualização de Versão Angular@6

### Versões Compatíveis Apresentadas

- Angular CLI: 6.0.8 -> 6.2.1
- Node: 10.0.0 -> 10.13.0 (LTS)
- typescript: 2.7.2
- rxjs: 6.2.1
- @: 0.6.8

### Comandos Executados

Comando cmd: 
```bash
npm uninstall -g @angular/cli
npm install -g @angular/cli@6.2.9
npm install -g npm@6.4.1
npm install -g typescript@2.9.2 --save-exact
npm install --save-dev @angular/cli@6.2.9
npm install @angular/animations@^6.0.0 @angular/common@^6.0.0 @angular/compiler@^6.0.0 @angular/compiler-cli@^6.0.0 @angular/core@^6.0.0 @angular/forms@^6.0.0 @angular/http@^5.0.0 @angular/platform-browser@^6.0.0 @angular/platform-browser-dynamic@^6.0.0 @angular/platform-server@^6.0.0 @angular/router@^6.0.0 typescript@2.4.2 rxjs@^6.0.0
cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/cli@6 @angular/core@6"
```

```bash
ng update @angular/cli@6.2.9
ng update @angular/core@6.2.9
```

Se Necessário: codelyzer
```bash
npm install --save @codelyzer@4.4.2
```

##Dependencia Descontinuada na Versão 6 do Angular
/*"karma-cli": "~1.0.1"*/

```bash
npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json
```

##Verificar Versões Desatualizadas
```bash
npm install -g ncu
```

```bash
##Executar Para Atualizar Dependencias
npm i
```

```bash
"dependencies": {
    "@angular/animations": "^6.1.0",
    "@angular/common": "^6.1.0",
    "@angular/compiler": "^6.1.0",
    "@angular/core": "^6.1.0",
    "@angular/forms": "^6.1.0",
    "@angular/http": "^6.1.0",
    "@angular/platform-server": "^6.1.0",
    "@angular/platform-browser": "^6.1.0",
    "@angular/platform-browser-dynamic": "^6.1.0",
    "@angular/router": "^6.1.0",
    "core-js": "^2.5.4",
    "rxjs": "~6.2.0",
    "zone.js": "~0.8.26",
    "bootstrap": "^3.3.7",
    "ngx-bootstrap": "^1.6.6"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.8.0",
    "@angular/cli": "~6.2.9",
    "@angular/compiler-cli": "^6.1.0",
    "@angular/language-service": "^6.1.0",
    "@types/jasmine": "~2.8.8",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~8.9.4",
    "codelyzer": "~4.3.0",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~3.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.4.0",
    "ts-node": "~7.0.0",
    "tslint": "~5.11.0",
    "typescript": "~2.7.2"
  }
```
