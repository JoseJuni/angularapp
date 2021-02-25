import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedListComponent } from './med-list/med-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdDetalhesComponent } from './prod-detalhes/prod-detalhes.component';
import { ProdsListComponent } from './prods-list/prods-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'products', component: ProdsListComponent
  },
  { path: 'products/:id', component: ProdDetailComponent,
    children:[
      {path:'detalhes', component:ProdDetalhesComponent}
    ]
  },
  { path: 'medicines', component: MedListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing_components = [
  MedListComponent, ProdsListComponent, PageNotFoundComponent,
  ProdDetailComponent, ProdDetalhesComponent]
