import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

//import rxjs operators before use
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AllEmployeeService{

    private apiUrl = "http://localhost:8000/api/all";   //running locally only

    constructor(private http: Http){}

    //get all data
    getAllData():Observable<any[]>{
        return this.http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    //extract data
    extractData(res:Response){
        if(res.status < 200 || res.status >= 300){
            throw new Error("Bad response status: " + res.status);
        }
        let body = res.json();
        return body || {};
    }

    //error handler
    private handleError(error:any){
      let errMsg = error.message || 'Server Error';
      console.error(errMsg);
      return Observable.throw(errMsg);
    }

}
