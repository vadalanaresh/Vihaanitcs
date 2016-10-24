import { Component } from '@angular/core';
import { NavbarComponent } from './nav/nav.component';
import { TrainingComponent } from './training/training.component'

@Component({
    selector: 'my-app',
    template: `    <nav-bar></nav-bar>
    <training></training>
    `
})
export class AppComponent {

}