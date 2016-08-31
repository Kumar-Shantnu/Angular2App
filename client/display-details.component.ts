import {Component, OnInit,Output,EventEmitter} from '@angular/core';
import {MongoDBModel} from './mongo'
import {DetailsService} from './details.service';
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';
import {CRUDComponent}   from './crud-details.component'

import './rxjs-operators';

@Component({
    selector: 'manager-app',
    templateUrl: 'client/display-details.component.html',

    directives: [MODAL_DIRECTIVES, CRUDComponent]
})


export class ManagersComponent implements OnInit {
   
    errorMessage: string;
    mongoModel: MongoDBModel[];
    mode = 'Observable';
    submitview: boolean = false;
    constructor(private detailsService: DetailsService) {

    }

    ngOnInit() {
        this.getDetails();
    }

    getDetails() {
        this.detailsService.getDetails().subscribe(
            data => this.mongoModel = data,
            error => this.errorMessage = <any>error

        )
    }

    submitStatus() {
        this.submitview = true;
    }
    

    




}