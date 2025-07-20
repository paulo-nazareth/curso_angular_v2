import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    SharedModule
  ],
  declarations: [ 
    DataFormComponent 
  ]
})
export class DataFormModule { }
