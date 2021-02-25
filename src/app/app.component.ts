import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Prods} from "./services/prods"
import { ProdsService } from './prods.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  list = [];

  constructor(private http: HttpClient, private _prod: ProdsService){

  }

  ngOnInit(): void{
    //this._prod.getdata().subscribe(data => this.list = data)

    // this.getdata().subscribe(data => this.list = data);
  }

  public login(){
    // alert(this.user.username + "\n" + this.user.password);
  }

  public getdata(): Observable<prods[]>{
     return this.http.get<prods[]>("/assets/file/file.json");
  }

}
