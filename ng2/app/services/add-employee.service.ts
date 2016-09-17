import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//rxjs operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Headers,RequestOptions } from '@angular/http';


@Injectable()
export class AddEmployeeService{

    apiUrl = "http://localhost:8000/employee/store";      //for locally
    constructor(private http:Http){}

    addNewEmployee(data:any):Observable<any>{
        let body = JSON.stringify({ data });
        let headers =  new Headers({ 'Content-Type' : 'application/json' });
        let options = new RequestOptions({ headers:headers });

        return this.http.post(this.apiUrl,data,options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }


    //extract data
    extractData(res:Response){
      if(res.status < 200 || res.status >= 300){
        throw new Errpr("Bad Response status: " + res.status);
      }
      let body = res.json();
      console.log(body);
      return body || {};
    }

    //error handler
    private handleError(error:any){
      let errMsg = error.message || 'Server Error';
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
}
