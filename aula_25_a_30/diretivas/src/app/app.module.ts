import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';
import { DiretivasNgforComponent } from './diretivas-ngfor/diretivas-ngfor.component';
import { DiretivasNgswitchComponent } from './diretivas-ngswitch/diretivas-ngswitch.component';
import { DiretivasNgclassComponent } from './diretivas-ngclass/diretivas-ngclass.component';
import { DiretivasNgstyleComponent } from './diretivas-ngstyle/diretivas-ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasNgifComponent,
    DiretivasNgforComponent,
    DiretivasNgswitchComponent,
    DiretivasNgclassComponent,
    DiretivasNgstyleComponent
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
