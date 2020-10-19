import { LoginComponent } from './../customer/login/login.component';
import { CheckoutComponent } from './../customer/checkout/checkout.component';
import { ListchudeComponent } from './../home/listchude/listchude.component';
import { DetailproductComponent } from './../home/detailproduct/detailproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CartComponent } from '../customer/cart/cart.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'detailproduct/:id', component: DetailproductComponent,
  },
  {
    path: 'cart', component: CartComponent,
  },
  {
    path: 'checkout', component: CheckoutComponent,
  },
  {  
    path:'listchude/:id',component: ListchudeComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  
]

@NgModule({
  declarations: [HomeComponent,ListchudeComponent,DetailproductComponent,CartComponent,CheckoutComponent],
  imports: [
    CommonModule,NgbModule,
    RouterModule,
    RouterModule.forChild(routes),

  ]
})
export class HomeModule { }