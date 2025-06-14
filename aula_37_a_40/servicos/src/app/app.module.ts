import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoModule } from './cursos/cursos.module';
import { LogService } from './shared/log.service'

//import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CriarCursoModule,
    CursoModule
  ],
  providers: [ LogService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
