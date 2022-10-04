import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeatureModule } from '../feature/feature.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeatureModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PageModule { }
