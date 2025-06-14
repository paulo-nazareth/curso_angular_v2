import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
  ,providers: [ CursosService ]
  // ,providers:[] Pode ser Declado, para ser instanciado apenas dentro desta classe.
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  //cursoService: CursosService;

  constructor(private cursoService: CursosService) {
    //this.cursoService = new CursoService(); --Opção 1
    //this.cursoService = _cursoService;      --Opção 2 (Recebendo do Construtor)
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
    /*this.cursoService.emitirCursoCriado.subscribe(
      //function(curso){
        //console.log(curso);
      //}
     curso => console.log(curso)
    );*/
    CursosService.criouNovoCurso.subscribe(
     curso => this.cursos.push(curso)
    );

  }

}
