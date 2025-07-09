import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
      childRoute: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): 
      Observable<boolean> | Promise<boolean> | boolean {

        console.log("Guarda de Rotas Filhas Alunos...");

        //if(state.url.includes('editar')){
          //alert('Usuário sem permissão de Edição.');
          //return false;
          //return Observable.of(false); //Chamada Ajax
        //}
        return true;
  }

}
