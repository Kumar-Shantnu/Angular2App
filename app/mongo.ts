/*import {Injectable} from '@angular/core';
@Injectable()*/
export class MongoDBModel{
    constructor(
        public id : number,
        public name : string,
        public status : boolean,
        public comments : string,
        public updated : Date
    ){

    }

    

    /*public exposeProperties (){
        return {
            name : this.name,
            status : this.status,
            comments : this.comments
        }
    }*/
}