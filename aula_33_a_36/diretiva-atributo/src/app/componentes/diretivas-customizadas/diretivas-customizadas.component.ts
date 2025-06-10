import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {

  mostrarCursos: boolean = true;

  constructor() { }

  onExibirCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
  
  ngOnInit() {
  }

}
