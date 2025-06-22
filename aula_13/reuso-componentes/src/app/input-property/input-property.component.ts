import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: [ 'nomeCurso/nome' ]
})
export class InputPropertyComponent implements OnInit {

  /*Se o nome do input for o mesmo não precisa declarar*/
  //@Input() nome: string = '';

  /**Exemplo Declaração Nome do Input */
  //@Input('nome') nomeCurso: string = '';

  //Exemplo Declaração inputs:[] no Decorator
  //Mas a recomendação é utilizar o @Input()
  nome: string = '';

  constructor() { }

  ngOnInit() {
  }

}
