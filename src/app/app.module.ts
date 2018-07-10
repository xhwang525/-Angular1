import { ProductGuardService } from './products/product-guard.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductService } from './../../../APM-Final/src/app/products/product.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/Router';



// import { ProductListComponent } from './Products/product-list.componet';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id',
          canActivate: [ProductGuardService],
          component: ProductDetailComponent },
        { path: 'Welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'Welcome', pathMatch: 'full'},

      ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
