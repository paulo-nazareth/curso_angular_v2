import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CursosGuard implements CanActivateChild{

  canActivateChild(
      childRoute: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): 
      Observable<boolean> | Promise<boolean> | boolean {

      console.log("Guarda de Rotas Filhas Cursos...");
      return true;
  }

}
