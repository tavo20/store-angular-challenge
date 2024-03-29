import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductAllComponent } from './pages/product-all/product-all.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';


const routes: Routes = [
  {
    path: "products-all",
    component: ProductAllComponent
  },
  {
    path: "product-view/:id",
    component: ProductViewComponent
  },
  {
    path: "**",
    redirectTo: "products-all"
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class ProductsRoutingModule { }
