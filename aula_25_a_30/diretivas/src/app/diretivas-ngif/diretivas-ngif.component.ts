import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif',
  templateUrl: './diretivas-ngif.component.html',
  styleUrls: ['./diretivas-ngif.component.css']
})
export class DiretivasNgifComponent implements OnInit {

  cursos: string[] = ["Angular 2"];

  mostrarCursos: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onExibirCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
