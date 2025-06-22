import { ReceberCursoComponent } from './../receber-curso/receber-curso.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from 'app/cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

/**
 * Quando é módulo de funcionalidade é utilizado CommonModule ao invés de BrowserModule
*/
@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ CriarCursoComponent ]
  //,providers: [ CursosService ]
})
export class CriarCursoModule { 

}
