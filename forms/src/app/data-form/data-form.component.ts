import { VerificaEmailService } from './services/verifica-email.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { DropdownService } from 'app/shared/services/dropdown.service';
import { EstadosBr } from 'app/shared/models/estado-br';
import { ConsultaCepService } from 'app/shared/services/consulta-cep.service';
import { Observable } from 'rxjs';
import { FormValidations } from 'app/shared/form-validations';

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

  cargos: any[];
  
  tecnologias: any[];

  newsletterOp: any[];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
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

    this.cargos = this.dropdownService.getCargos();
    
    this.tecnologias = this.dropdownService.getTecnologias();

    this.newsletterOp = this.dropdownService.getNewsletter();

    //this.verificaEmailService.verificarEmail('email@email.com').subscribe();
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
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      //email: [null, [Validators.required, Validators.pattern("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")]]
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()
    });
  }

  buildFrameworks(){
    // return this.formBuilder.array( [
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false)
    // ] );
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

  // requiredMinCheckbox(min = 1){
  //   const validador = (formArray: FormArray) => {
  //     /*  Programação Estruturada
  //     const values = formArray.controls;
  //     let totalChecked = 0;
  //     for (let i = 0; i < values.length; i++) {
  //       if(values[i].value){
  //         totalChecked += 1;
  //       }
  //     } */
  //    //Programação Funcional
  //    const totalChecked = formArray.controls
  //     .map(v => v.value)
  //     .reduce((total, current) => current ? total + current : total, 0);
  //     return totalChecked >= min ? null : { required: true };
  //   };
  //   return validador;
  // }

  onSubmit(){
    // console.log(this.formulario);
    
    //Tratar Frameworks
    let valueSubmit = Object.assign({}, this.formulario.value);
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.frameworks[i] : null)
      .filter(v => v !== null)
    });

    console.log(valueSubmit);

    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
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

  verificaValidTouched(campo: string){
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

  verificaRequired(campo: string){
    return (
      this.formulario.get(campo).hasError('required') 
      && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
      && !this.formulario.get(campo).valid
    );
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
          //cep: dados.cep,
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

  setarCargo(){
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2){
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias(){
    this.formulario.get('tecnologias').setValue(['java', 'javascript', 'php']);
  }

  validarEmail(formControl: FormControl){
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(
        map(emailExiste => emailExiste ? { emailInvalido: true } : null)
      );
  }
}
