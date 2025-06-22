import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://loiane.training';
/* Exemplo de For
    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
*/
    //var servico = new CursosService();
    //this.cursos = servico.getCursos();

    //Declarado Por Injeção de Dependência no Contrutor
    //Requer declarar no Modulo o providers:[CursosService]
    this.cursos = cursosService.getCursos();
  }

  ngOnInit() {
  }

}
