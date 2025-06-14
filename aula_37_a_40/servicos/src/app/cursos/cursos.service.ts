import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  private cursos: string[] = ['Angular 2', 'Java', 'C#'];

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
