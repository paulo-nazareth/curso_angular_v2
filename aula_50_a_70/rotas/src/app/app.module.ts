import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// --Movimentado para Modulo
// import { routing } from './app.routing';
/* 
--Movimentado para o Modulo
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos/cursos.service';
*/
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
    /* 
    --Movimentado para o Modulo
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
    */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule,
    AlunosModule,
    //routing
    AppRoutingModule
  ],
  //providers: [ CursosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
