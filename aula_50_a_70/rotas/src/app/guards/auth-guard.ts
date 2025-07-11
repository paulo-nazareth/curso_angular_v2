import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'app/login/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
      route: ActivatedRouteSnapshot
      , state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard -> CanActivate');
    return this.verificarAcesso();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard -> CanLoad');
    return this.verificarAcesso();
  }

  verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
