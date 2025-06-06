import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  /*
    --- Otimização do Numero de Linhas com HostBinding
  @HostListener('mouseenter') onMouseOver(){
    this._rendere.setStyle(this._elementRef.nativeElement, "background-color", "yellow");
  }

  @HostListener('mouseleave') onMouseLeave(){
    this._rendere.setStyle(this._elementRef.nativeElement, "background-color", "white");
  }

  constructor(private _elementRef: ElementRef, private _rendere: Renderer2) {
    
  }
  */

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'yellow';
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  /**
   * Substituir a chamada acima pelo typescript
   * Utilizando o typescript
   */
  //Código Extra
  private backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };


  constructor() { }
}
