import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngstyle',
  templateUrl: './diretivas-ngstyle.component.html',
  styleUrls: ['./diretivas-ngstyle.component.css']
})
export class DiretivasNgstyleComponent implements OnInit {

  ativo:boolean = true;

  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit() {
  }

  ativar(){
    this.ativo = !this.ativo;
  }

}
