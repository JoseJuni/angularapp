import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing_components } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProdsService } from './prods.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdDetalhesComponent } from './prod-detalhes/prod-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routing_components,
    LoginComponent,
    PageNotFoundComponent,
    ProdDetailComponent,
    ProdDetalhesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProdsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
