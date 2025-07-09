import { Aluno } from './../aluno';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;

  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private router: Router , private alunoService: AlunosService) { }

  ngOnInit() {
    /*Substituido pelo Resolver*/
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];
    //     this.aluno = this.alunoService.getAluno(id);
    //   }
    // );
    this.inscricao = this.route.data.subscribe(
      (info: { aluno: Aluno }) => {
        // console.log(info);
        this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
