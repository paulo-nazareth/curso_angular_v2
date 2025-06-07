import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-reuso',
  templateUrl: './exemplo-reuso.component.html',
  styleUrls: ['./exemplo-reuso.component.css']
})
export class ExemploReusoComponent implements OnInit {

  nomeCurso: string = 'Angular';

  constructor() { }

  ngOnInit() {
  }

}
