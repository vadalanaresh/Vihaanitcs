import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/nav.component';
import { TrainingComponent } from './training/training.component'
import { ProductComponent } from './products/products.componet';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NavbarComponent, ProductComponent, TrainingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
