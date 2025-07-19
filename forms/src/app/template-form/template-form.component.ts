import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form){
    // console.log(form);
    // console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .map(res => res)
      .subscribe(dados => console.log(dados));
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
    //console.log(cep);
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      this.limpDadosForm(form);

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados, form));
      }
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

  limpDadosForm(formulario){
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
}
