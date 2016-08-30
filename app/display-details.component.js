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
var details_service_1 = require('./details.service');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var crud_details_component_1 = require('./crud-details.component');
require('./rxjs-operators');
var ManagersComponent = (function () {
    function ManagersComponent(detailsService) {
        this.detailsService = detailsService;
        this.mode = 'Observable';
        this.submitview = false;
    }
    ManagersComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    ManagersComponent.prototype.getDetails = function () {
        var _this = this;
        this.detailsService.getDetails().subscribe(function (data) { return _this.mongoModel = data; }, function (error) { return _this.errorMessage = error; });
    };
    ManagersComponent.prototype.submitStatus = function () {
        this.submitview = true;
    };
    ManagersComponent = __decorate([
        core_1.Component({
            selector: 'manager-app',
            templateUrl: 'app/display-details.component.html',
            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, crud_details_component_1.CRUDComponent]
        }), 
        __metadata('design:paramtypes', [details_service_1.DetailsService])
    ], ManagersComponent);
    return ManagersComponent;
}());
exports.ManagersComponent = ManagersComponent;
//# sourceMappingURL=display-details.component.js.map