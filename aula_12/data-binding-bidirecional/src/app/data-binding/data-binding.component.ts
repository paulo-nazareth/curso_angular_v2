import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nome: string = 'abc';
  pessoa: any = {
    nome: 'def',
    idade: 20,
    end: { rua: 'Teste'

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
