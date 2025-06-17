import { Component, OnInit } from '@angular/core';
import { prependOnceListener } from 'process';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99, 
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://www.saraiva.com.br'
  }

  constructor() { }

  ngOnInit() {
  }

}
