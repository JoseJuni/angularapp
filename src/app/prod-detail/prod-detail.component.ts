import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-prod-detail',
  template: `
    <p>
      prod-detail works! {{product_id}}
    </p>
    <a (click)="goPreviuos()">Anterior</a>
    <a (click)="goNext()">Proximo</a>
    <br>
    <div>
      <button (click)="gotoProduct()">Voltar</button>
    </div><br><br>
    <div>
      <button (click)="getOverview()">Detalhes</button>
    </div>

    <router-outlet></router-outlet>


  `,
  styles: [
  ]
})

export class ProdDetailComponent implements OnInit {

  product_id;

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id  = parseInt(params.get('id'));
      this.product_id = id;
    })
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.product_id = id;
  }


  goPreviuos(){
    let prev_id = this.product_id - 1;
    this.router.navigate(['/products', prev_id]);
  }

  goNext(){
    let next_id = this.product_id + 1;
    this.router.navigate(['/products', next_id]);
  }

  gotoProduct(){
    let selected_id = this.product_id ? this.product_id : null;
    // this.router.navigate(['products', {id: selected_id}])
    this.router.navigate(['../', {id: selected_id}], {relativeTo: this.route})
  }

  getOverview(){
    this.router.navigate(['detalhes'], {relativeTo:this.route});
  }

}
