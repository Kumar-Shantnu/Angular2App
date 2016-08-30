"use strict";
/*import {Injectable} from '@angular/core';
@Injectable()*/
var MongoDBModel = (function () {
    function MongoDBModel(id, name, status, comments, updated) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.comments = comments;
        this.updated = updated;
    }
    return MongoDBModel;
}());
exports.MongoDBModel = MongoDBModel;
//# sourceMappingURL=mongo.js.map