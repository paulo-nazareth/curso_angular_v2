import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth-guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

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
    {   path: 'login',
        component: LoginComponent 
    },
    {   path: 'home',
        component: HomeComponent,
        canActivate: [ AuthGuard ]
    },
    {   path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {   path: '**',
        component: PaginaNaoEncontradaComponent/*, --Direciona para página de Login 
        canActivate: [ AuthGuard ]*/
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