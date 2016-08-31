System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MongoDBModel;
    return {
        setters:[],
        execute: function() {
            /*import {Injectable} from '@angular/core';
            @Injectable()*/
            MongoDBModel = (function () {
                function MongoDBModel(id, name, status, comments, updated) {
                    this.id = id;
                    this.name = name;
                    this.status = status;
                    this.comments = comments;
                    this.updated = updated;
                }
                return MongoDBModel;
            }());
            exports_1("MongoDBModel", MongoDBModel);
        }
    }
});
//# sourceMappingURL=mongo.js.map