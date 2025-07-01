import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { RouterModule } from "@angular/router";
import { CursosRoutingModule } from "./cursos.routing.module";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosService } from "./cursos.service";

/*Módulo de Funcionalidade importa o CommonModule, no módulo raiz importa o BrowserModule
O BrowserModule, não pode ser importado no módulo de funcionalidade
*/
@NgModule({
    imports: [
        CommonModule,
        /* Removido por o CursosRouterModulo já importa
        RouterModule*/
        CursosRoutingModule
    ],
    exports: [],
    declarations: [ 
        CursosComponent, 
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [ CursosService ],
})
export class CursosModule {}