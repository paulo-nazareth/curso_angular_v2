import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunosRoutingModule } from "./alunos.routing.module";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from "./alunos.service";
import { FormsModule } from "@angular/forms";
import { AlunosDeactivateGuard } from "app/guards/alunos.deactivate.guard";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [ 
        AlunosComponent, 
        AlunoFormComponent, 
        AlunoDetalheComponent
    ],
    providers: [ 
        AlunosService,
        AlunosDeactivateGuard 
    ],
})
export class AlunosModule {}