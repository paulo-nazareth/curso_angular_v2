import { Component, OnInit } from '@angular/core';
import { prependOnceListener } from 'process';
import { Observable } from 'rxjs';

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

  livros: string[] = ['Java', 'Angular'];

  filtro: string;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor Assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }
    return this.livros.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

}
