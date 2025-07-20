import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private http: Http
  ) { 

  }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl()
    // });
    // OU
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      //nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      email: [null, [Validators.required, Validators.email]]
      //email: [null, [Validators.required, Validators.pattern("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")]]
    });
  }

  onSubmit(){
    // console.log(this.formulario);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        //Resenta Formulário
        this.resetar();
      }, (error: any) => alert('erro'));
  }

  resetar(){
    this.formulario.reset();
  }

}
