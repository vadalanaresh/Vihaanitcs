<<<<<<< HEAD
=======
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ProductComponent = (function () {
    function ProductComponent() {
        this.softwareProducts = ['Operating Systems',
            'Windows Servers',
            'Development tools',
            'Office',
            'MS SQL Servers',
            'Exchange Server',
            'Many more'];
        this.hardwareProducts = ['RedHat Desktops with many options',
            'RedHat Enterprise Server',
            'RedHat Enterprise Virtualization Server',
            'RedHat Enterprise Directory Servers',
            'Other RedHat products'];
    }
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'products',
            templateUrl: '/app/products/products.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
>>>>>>> 089c86e515d8dae70ac18c4ff4e4fb503947aad6
//# sourceMappingURL=products.component.js.map