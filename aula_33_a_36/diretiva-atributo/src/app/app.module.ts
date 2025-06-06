import { BrowserModule } from '@angular/platform-browser';
import { ElementRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FundoAmareloDirective } from './diretiva/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './componentes/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './diretiva/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
