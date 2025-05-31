import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //*,outputs: [ 'mudouValor' ]
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  //*Também pode ser declarado no decorator, necessário remover o @Output() 
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
