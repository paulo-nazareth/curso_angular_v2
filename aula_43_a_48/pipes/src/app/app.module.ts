import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    } ou através do service*/
   SettingsService, {
    provide: LOCALE_ID,
    deps: [SettingsService],
    useFactory: (settingsService) => settingsService.getLocale()
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
