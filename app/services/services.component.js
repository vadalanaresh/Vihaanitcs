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
var ServicesComponent = (function () {
    function ServicesComponent() {
        this.AMCDescription = "A maintenance contract is the written document that sets forth the terms of an agreement between a client and a maintenance service provider. The client can be a consumer who gets a warranty for purchases of mechanical equipment or a landlord who contracts a handyman                             for servicing a building. The overall purpose for a maintenance contract is to have consistent fees and regular availability of the service provider at a savings over random or emergency calls. By securing a maintenance contract, the holder typically garners savings                              through the fixed or reduced fees and also gets a regular relationship with a service provider.";
        this.networkingDescription = "A computer network or data network is a telecommunications network that allows computers to exchange data. In computer networks, networked computing devices pass data to each other along data connections. The connections (network links) between nodes are                                         established using either cable media or wireless media. The best-known computer network is the Internet.\n                                    Network computer devices that originate, route and terminate the data are called network nodes. Nodes can include hosts such as servers and personal computers, as well as networking hardware. Two devices are said to be networked when a device is able to exchange information with another device.\n                                    Computer networks support applications such as access to the World Wide Web, shared use of application and storage servers, printers, and fax machines, and use of email and instant messaging applications. Computer networks differ in the physical media used to transmit their signals, the communications protocols to organize network traffic, the network's size, topology and organizational intent.";
        this.installationAndDescription = "Software deployment is all of the activities that make a software system available for use.\n                                        he general deployment process consists of several interrelated activities with possible transitions between them. These activities can occur at the producer side or at the consumer side or both. Because every software system is unique, the precise processes or procedures within each activity can hardly be defined. Therefore, \"deployment\" should be interpreted as a general process that has to be customized according to specific requirements or characteristics. A brief description of each activity will be presented later.";
        this.services = [{ Name: 'Networking', Description: this.networkingDescription, CSSClass: 'col-sm-4 col-md-5 col-lg-5' },
            { Name: 'Annual Maintenance Contract', Description: this.AMCDescription, CSSClass: 'col-sm-4 col-md-4 col-lg-4' },
            { Name: 'Installation & Deployment', Description: this.installationAndDescription, CSSClass: 'col-sm-3 col-md-3 col-lg-3' }];
    }
    ServicesComponent = __decorate([
        core_1.Component({
            selector: 'services',
            templateUrl: '/app/services/services.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=services.component.js.map