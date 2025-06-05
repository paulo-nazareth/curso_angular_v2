import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgcontentComponent } from './componentes/ngcontent/ngcontent.component';
import { NgcontentexemploComponent } from './componentes/ngcontentexemplo/ngcontentexemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgcontentComponent,
    NgcontentexemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
