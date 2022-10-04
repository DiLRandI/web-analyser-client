import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { ListResultComponent } from './list-result/list-result.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResultsComponent,
    ListResultComponent,
    SubmitFormComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ListResultComponent,
    SubmitFormComponent
  ]
})
export class FeatureModule { }
