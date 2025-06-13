import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  private cursos: string[] = ['Angular 2', 'Java', 'C#'];

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
