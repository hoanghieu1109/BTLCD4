import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  // {
  //   path: '', loadChildren:()=>(import('./home/home.module').then(x=>x.HomeModule)),
  // },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'chitiet/:id',
    component: DetailproductComponent,
  },
  // {
  //   path: 'product/id', component: ProductComponent,
  // },
  // {
  //   path: 'detailproduct/id', component: DetailproductComponent,
  // },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
