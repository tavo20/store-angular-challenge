import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAllComponent } from './pages/product-all/product-all.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewMainImgComponent } from './components/view-main-img/view-main-img.component';
import { ViewChildImgComponent } from './components/view-child-img/view-child-img.component';



@NgModule({
  declarations: [
    ProductAllComponent,
    ProductViewComponent,
    ViewMainImgComponent,
    ViewChildImgComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
