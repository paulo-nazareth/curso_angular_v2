import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosComponent } from "./alunos.component";

/*Declaração Conforme Necessidade do Projeto
const alunosRoutes: Routes = [
    { path: 'alunos', component: AlunosComponent },
    { path: 'alunos/novo', component: AlunoFormComponent },
    { path: 'alunos/:id', component: AlunoDetalheComponent },
    { path: 'alunos/:id/editar', component: AlunoFormComponent }
];
*/

/*Ao utilizar Rotas Filhas, tanto o componente pai, quanto o componente filho são renderizados (necessário adicionar router-outlet no componente pai)*/
const alunosRoutes: Routes = [
    { path: 'alunos', component: AlunosComponent, children: [
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent }
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild(alunosRoutes) ],
    exports: [ RouterModule ]
})
export class AlunosRoutingModule { }