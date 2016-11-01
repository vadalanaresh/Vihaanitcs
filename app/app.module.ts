import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/nav.component';
import { TrainingComponent } from './training/training.component'
import { ProductComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { PlacementsComponet } from './placements/placements.components';
import { AboutUsComponet } from './aboutUs/aboutUs.component'
import { ContactComponent } from './contact/contact.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NavbarComponent, ProductComponent, ServicesComponent, TrainingComponent, PlacementsComponet, AboutUsComponet, ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
