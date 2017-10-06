import {Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
