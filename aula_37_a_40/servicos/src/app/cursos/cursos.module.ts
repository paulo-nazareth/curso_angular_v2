import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from 'app/cursos/cursos.service';
import { CursosComponent } from './cursos.component';

/**
 * Quando é módulo de funcionalidade é utilizado CommonModule ao invés de BrowserModule
*/
@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ CursosComponent ]
  //,providers: [ CursosService ]
})
export class CursoModule { }
