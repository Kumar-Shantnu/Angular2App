import {Injectable} from '@angular/core';
import {Http, Response, Headers,RequestOptions} from '@angular/http';
import {MongoDBModel} from './mongo';
import { Observable }     from 'rxjs/Observable';



@Injectable()
export class DetailsService {
    private headers = new Headers();
    
    // inject an instance of Http whenever HeroService is instanitated
    constructor(private http: Http) {
     this.headers.append('Content-Type','application/json');
         
    }
    
    private detailsUrl: 'http://localhost:3399/todos';


    getDetails(): Observable<MongoDBModel[]> {
        
        return this.http.get('https://shantnuapp.herokuapp.com/todos',{headers : this.headers,body: ''}).
        map(this.extractData).
        catch(this.handleError);

    }

    private extractData(res: Response) {
        console.log("dfvfe" + res);
        let body = res.json();
        if(body.data && body.data instanceof Array ){
            return body.data;
        }
        else if(body && body instanceof Array || body instanceof Object){
            return body;

        }
        else{
            return [];
        }

        
    }

    addDetails(obj) : Promise<MongoDBModel>{
        let body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('https://shantnuapp.herokuapp.com/todos',body,options).toPromise().
        then(this.extractData).
        catch(this.handleError);
        /*return this.http.post('http://localhost:3399/todos', body, options)
                    .map(this.extractData)
                    .catch(this.handleError);*/
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    



}
