import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Aplicativo Curso de Angular';

  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++;
  }

  //Aciona o ngOnDestroy
  destroirCiclo(){
    this.deletarCiclo = true;
  }

}
