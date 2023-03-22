import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MaterialsModule} from './materials/materials.module';
import { InputFormComponent } from './input-form/input-form.component';
import { ObtainerFormComponent } from './obtainer-form/obtainer-form.component'

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ObtainerFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
