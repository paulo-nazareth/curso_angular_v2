import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any;

  inscricao: Subscription;
  
  private formMudou: boolean = false;

  constructor(private route: ActivatedRoute, private alunoService: AlunosService) { 
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getAluno(id);
        if(this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  
  onInput(){
    this.formMudou = true;
    console.log('Formulário Editado');
  }

  podeMudarRota(){
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair desta página');
    }
    return true;
  }
    
  podeDesativar() {
    return this.podeMudarRota();
  }

}
