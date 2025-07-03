import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { CursosComponent } from "./cursos.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent }, //Removido o cursos do path devido ao carregamento Lazy
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(cursosRoutes) ],
    exports: [ RouterModule ]
})
export class CursosRoutingModule { }