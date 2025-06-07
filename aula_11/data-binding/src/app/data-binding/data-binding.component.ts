import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    console.log((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver);
  }
}
