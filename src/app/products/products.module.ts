import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAllComponent } from './pages/product-all/product-all.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductAllComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
