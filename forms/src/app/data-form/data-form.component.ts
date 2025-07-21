import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { DropdownService } from 'app/shared/services/dropdown.service';
import { EstadosBr } from 'app/shared/models/estado-br';
import { ConsultaCepService } from 'app/shared/services/consulta-cep.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
/*   
  estados: EstadosBr[];
  */
  estados: Observable<EstadosBr[]>;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { 

  }

  ngOnInit() {
/* 
    this.dropdownService.getEstadosBR()
    .subscribe(dados => {this.estados = dados; console.log(dados);});
    
    #Substituido para Atender ao Padrão async
    Não precisa do subscribe (feito automaticamente pelo async)
*/
    this.estados = this.dropdownService.getEstadosBR();

/* 
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(),
      endereco: new FormGroup({
        cep: new FormControl(null),
        numero: new FormControl()
      })
    });
*/
    // OU
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      //nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      email: [null, [Validators.required, Validators.email]],
      //email: [null, [Validators.required, Validators.pattern("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")]]
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit(){
    // console.log(this.formulario);
    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(map(res => res))
        .subscribe(dados => {
          console.log(dados);
          //Resenta Formulário
          this.resetar();
        }, (error: any) => alert('erro'));
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(
      campo => {
        const controle = formGroup.get(campo);
        controle.markAsTouched();
        if (controle instanceof FormGroup) {
          this.verificaValidacoesForm(controle);
        }
      }
    );
  }

  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo){
    //this.formulario.controls(campo);
    //Verifica se o Campo foi selecionado ou modificado e se encontra-se valido
    return (this.formulario.get(campo).touched || this.formulario.get(campo).dirty) && !this.formulario.get(campo).valid;
  }

  verificaEmailValid(){
    let campoEmail = this.formulario.get('email');
    if(campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(){
    //Nova variável "cep" somente com dígitos.
    let cep = this.formulario.get('endereco.cep').value;
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados){
    this.formulario.patchValue({
      endereco: {
          cep: dados.cep,
          complemento: dados.complemento,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
      }
    });
    //Popular Apenas um Campo
    this.formulario.get('nome').setValue('Definir');
  }
}
