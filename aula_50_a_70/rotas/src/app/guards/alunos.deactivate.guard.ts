import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { AlunoFormComponent } from "app/alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from "./iform-candeactivate";

@Injectable()
//export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> { Substituida por Interface Generica
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
        
    canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('Desativação Guarda de Rota Alunos');
        //return component.podeMudarRota();
        return component.podeDesativar();
    }
}