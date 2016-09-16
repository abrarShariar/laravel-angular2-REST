
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

//import rxjs operators before use
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService{

    // private apiUrl = "http://localhost:8000/api/show/id=";   //for running locally only

    constructor(private http:Http){}

    //get data of the specific id
    getData(url:any):Observable<any>{

        //this.apiUrl = this.apiUrl + id;
        return this.http.get(url)
                        .map(this.extractData)
                        .catch(this.handleError);

    }

    //extract data
    extractData(res:Response){
        if(res.status < 200 || res.status >= 300){
          throw new Error("Bad response status: " + res.status);
        }
        let body = res.json();
        // console.log(body);
        return body || {};
    }

    //error handler
    private handleError(error:any){
      let errMsg = error.message || "Server Error";
      console.log(errMsg);
      return Observable.throw(errMsg);
    }
}
