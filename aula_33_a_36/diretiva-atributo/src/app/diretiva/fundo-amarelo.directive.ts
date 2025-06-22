import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  //selector: '[fundoAmarelo]' //Pode ser especializado com a tag do elemento desejado
  selector: 'p[fundoAmarelo]' //Pode ser especializado com a tag do elemento desejado
})
export class FundoAmareloDirective {

  /**
   * #ElementRef
   * APESAR DE POSSÍVEL, É RECOMENDADO NÃO UTILIZAR
   * Possíveis vulnerabilidades, recomendável utilizar o Renderer
  constructor(private _elementRef: ElementRef) { 
    console.log(this._elementRef.nativeElement.style.backgroundColor);
    this._elementRef.nativeElement.style.backgroundColor = "yellow";
  }
  */
 constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { 
   console.log(this._renderer.setStyle(this._elementRef.nativeElement, "background-color", "yellow"));
   //this._elementRef.nativeElement.style.backgroundColor = "yellow";
 }
}
