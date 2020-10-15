import { DetailproductComponent } from './../detailproduct/detailproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CartComponent } from '../cart/cart.component';

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
  
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,NgbModule,
    RouterModule,
    RouterModule.forRoot(routes)

  ]
})
export class HomeModule { }
