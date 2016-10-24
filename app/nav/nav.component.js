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
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            template: " <nav id=\"mainNav\" class=\"navbar navbar-default navbar-inverse navbar-fixed-top\">\n        <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header \">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n                </button>\n                <a class=\"navbar-brand\" href=\"#page-top\">Vihaan ITCS</a>\n            </div>\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li class=\"hidden\">\n                        <a href=\"#page-top\"></a>\n                    </li>\n                    <li>\n                        <a  href=\"#products\">Products</a>\n                    </li>\n                    <li>\n                        <a  href=\"#services\">Services</a>\n                    </li>\n                    <li>\n                        <a  href=\"#training\">Training</a>\n                    </li>\n                    <li>\n                        <a  href=\"#placements\">Placements</a>\n                    </li>\n                    <li>\n                        <a  href=\"#about\">About</a>\n                    </li>\n                    <li>\n                        <a  href=\"#contact\">Contact</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n        </div>\n        <!-- /.container-fluid -->\n    </nav>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=nav.component.js.map