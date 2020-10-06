

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//     path: 'chitiet/:id',
//     component: ChitietComponent,
//   },
//   {
//     path: 'list/:id',
//     component: ListComponent,
//   },
];  
@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }
