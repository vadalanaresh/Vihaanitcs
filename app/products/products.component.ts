import { Component } from '@angular/core';

@Component({
    selector: 'products',
    templateUrl: '/app/products/products.html'
})
export class ProductComponent {
    softwareProducts: string[];
    hardwareProducts: string[];
    constructor() {
        this.softwareProducts = ['Operating Systems',
            'Windows Servers',
            'Development tools',
            'Office',
            'MS SQL Servers',
            'Exchange Server',
            'Many more']
        this.hardwareProducts = ['RedHat Desktops with many options',
            'RedHat Enterprise Server',
            'RedHat Enterprise Virtualization Server',
            'RedHat Enterprise Directory Servers',
            'Other RedHat products']
    }
}