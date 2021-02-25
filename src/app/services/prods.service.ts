import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Prods} from './prods';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';


@Injectable()
export class ProdsService {

  constructor(private http: HttpClient) { }

  private _db = '/assets/file/file.json'

  getdata(): Observable<Prods[]> {
    return this.http.get<Prods[]>(this._db); //.catch(this.errorshow);
  }

  // errorshow(error: HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error")
  // }
}
