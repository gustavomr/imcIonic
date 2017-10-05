import {Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ImcService {

    constructor(private http: Http) {
    }

   getDados() {
      return this.http.get('http://jsonplaceholder.typicode.com/posts')
     .map((res:Response) => res.json())
   }
}
