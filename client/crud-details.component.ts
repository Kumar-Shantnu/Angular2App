import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {MongoDBModel} from './mongo';
import {DetailsService} from './details.service';


@Component({
    selector: 'crud-details',
    templateUrl: 'client/crud-details.component.html',

})

export class CRUDComponent implements OnInit {
    //  @Output() dataAdded = new EventEmitter();
    // @Input() oldModel : MongoDBModel[];
    @Input('value') inputModel: MongoDBModel[];
    mode = 'Observable';
    errorMessage: string;
    mongo = {
        name: '',
        status: '',
        comments: ''
    };


    //no need
    constructor(private detailsService: DetailsService) {

    }

    //no need
    ngOnInit() {

    }

    saveDetails(modal) {


        this.detailsService.addDetails(this.mongo).then(data => {
            console.log("data " + data);
            this.mongo = {
                name: '',
        status: '',
        comments: ''
            }
            this.inputModel.push(data);
            modal.close();
        }, error => this.errorMessage = <any>error
        )
    }


}