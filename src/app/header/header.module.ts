import { CheckoutComponent } from './../customer/checkout/checkout.component';

import { CartComponent } from './../customer/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routers: Routes = [
  {
    path: 'cart', component: CartComponent,
  },
  {
    path: 'checkout', component: CheckoutComponent,
  },

]

@NgModule({
  declarations: [CartComponent,CheckoutComponent],
  imports: [
    CommonModule,NgModule,
    RouterModule,
    RouterModule.forChild(routers),
  ]
})
export class HeaderModule { }
