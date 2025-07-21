import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from 'app/shared/services/consulta-cep.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {
  }

  onSubmit(formulario){
    // console.log(form);
    // console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .pipe(map(res => res))
      .subscribe(dados => {
        console.log(dados),
        this.resetar(formulario);
      });
  }

  verificaValidTouched(campo){
    return campo.touched && !campo.valid;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form){
    //Nova variável "cep" somente com dígitos.
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => {
          this.limpaDadosForm(form); 
          this.populaDadosForm(dados, form)}
        );
    }
  }

  populaDadosForm(dados, formulario){
    //Obrigatório Recuperar e Setar Todos os Campos
    // formulario.setValue({
    //     nome: formulario.value.nome,
    //     email: formulario.value.email,
    //     endereco: {
    //       cep: dados.cep,
    //       numero: '',
    //       complemento: dados.complemento,
    //       rua: dados.logradouro,
    //       bairro: dados.bairro,
    //       cidade: dados.localidade,
    //       estado: dados.uf
    //     }
    // });

    //Preenche Apenas os Campos Necessários
    formulario.form.patchValue({
      endereco: {
          cep: dados.cep,
          complemento: dados.complemento,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
      }
    });
  }

  limpaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
          complemento: "",
          rua: "",
          bairro: "",
          cidade: "",
          estado: ""
      }
    });
  }

  resetar(formulario){
     formulario.form.reset();
  }
  
}
