import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormValidations {
    static requiredMinCheckbox(min = 1){
        const validador = (formArray: FormArray) => {
         const totalChecked = formArray.controls
          .map(v => v.value)
          .reduce((total, current) => current ? total + current : total, 0);
          return totalChecked >= min ? null : { required: true };
        };
        return validador;
    }

    static cepValidator(control: FormControl){
        const cep = control.value;
        if(cep && cep !== ''){
            const validacep = /^[0-9]{8}$/;
            return validacep.test(cep) ? null : { cepInvalido: true };
        }
        return null;
    }

    static equalsTo(otherField: string){
        const validador = (formControl: FormControl) => {
            //Valida se o formulário já foi criado.
            if (!formControl.root || ! (<FormGroup> formControl.root).controls) {
                return null;
            }
            if (otherField == null) {
                throw new Error('É necessário informar um campo.');
            }
            const field = (<FormGroup> formControl.root).get(otherField);
            console.log('otherField: ' + otherField);
            console.log('field: ' + field);
            if (field == null) {
                throw new Error('É necessário informar um campo válido.');
            }
            if (field.value !== formControl.value) {
                return { equalsTo : otherField };
            }
            return null;
        };
        return validador;
    }
}