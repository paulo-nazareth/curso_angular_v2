import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth-guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";

const appRoutes: Routes = [
    {   path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [ AuthGuard ],
        canActivateChild: [ CursosGuard ],
        canLoad: [ AuthGuard ]
    }, //Carregamento Lazy
    {   path: 'alunos',
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        //,canActivateChild: [ AlunosGuard ] //Movimentado Para o Acesso Exclusivo das Rotas Filhas
        canActivate: [ AuthGuard ],
        canLoad: [ AuthGuard ]
    }, //Carregamento Lazy
    {   path: '',
        component: HomeComponent,
        canActivate: [ AuthGuard ]
    },
    {   path: 'login',
        component: LoginComponent 
    }
    /*Movido para o CursosRoutingModule
    { path: 'cursos', component: CursosComponent },
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },
    { path: 'curso/:id', component: CursoDetalheComponent } */
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }