import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfEmployeContentRoutingModule } from './mf-employe-content-routing.module';
import { MfEmployeContentComponent } from './mf-employe-content.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    MfEmployeContentComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MfEmployeContentRoutingModule
  ]
})
export class MfEmployeContentModule { }
