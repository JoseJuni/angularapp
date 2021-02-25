import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';
import { ProdsService } from '../prods.service';


// import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-prods-list',
  templateUrl: './prods-list.component.html',
  styleUrls: ['./prods-list.component.css']
})
export class ProdsListComponent implements OnInit {

  public product_id;
  list = [];
  public error_msg;

  constructor(private _prod_list: ProdsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._prod_list.getdata().subscribe(data => this.list = data)//, error => this.error_msg = error)

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id  = parseInt(params.get('id'));
      this.product_id = id;
    })
  }

  onSelect(param){
    this.router.navigate([param.id], {relativeTo: this.route})
    //console.log(param.id);
  }

  isSelected(param){
    return param.id ===  this.product_id
  }

}
