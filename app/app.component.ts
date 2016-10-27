import { Component } from '@angular/core';
import { NavbarComponent } from './nav/nav.component';
import { TrainingComponent } from './training/training.component';
import { ProductComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { PlacementsComponet } from './placements/placements.components';
import { AboutUsComponet } from './aboutUs/aboutUs.component'
import { ContactComponent } from './contact/contact.component'

@Component({
    selector: 'my-app',
    template: `<nav-bar></nav-bar>
    <products></products>
    <services></services>
    <training></training>
    <placements></placements>
    <about-us></about-us>
    <contact></contact>
    `
})
export class AppComponent {

}