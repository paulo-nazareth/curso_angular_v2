import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngclass',
  templateUrl: './diretivas-ngclass.component.html',
  styleUrls: ['./diretivas-ngclass.component.css']
})
export class DiretivasNgclassComponent implements OnInit {

  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  favoritar(){
    this.meuFavorito = !this.meuFavorito;
  }

}
