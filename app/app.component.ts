import { Component } from '@angular/core';
import { NavbarComponent } from './nav/nav.component';
import { TrainingComponent } from './training/training.component';
import { ProductComponent } from './products/products.componet';

@Component({
    selector: 'my-app',
    template: `<nav-bar></nav-bar>
    <products></products>
    <training></training>
    `
})
export class AppComponent {

}