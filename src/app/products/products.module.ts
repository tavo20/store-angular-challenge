import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAllComponent } from './pages/product-all/product-all.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewMainImgComponent } from './components/view-main-img/view-main-img.component';
import { ViewChildImgComponent } from './components/view-child-img/view-child-img.component';
import { TitleCompanyComponent } from './components/title-company/title-company.component';
import { TitleProductComponent } from './components/title-product/title-product.component';
import { DescriptionProductComponent } from './components/description-product/description-product.component';
import { PriceProductComponent } from './components/price-product/price-product.component';
import { AmountProductComponent } from './components/amount-product/amount-product.component';
import { ButtonPayComponent } from './components/button-pay/button-pay.component';



@NgModule({
  declarations: [
    ProductAllComponent,
    ProductViewComponent,
    ViewMainImgComponent,
    ViewChildImgComponent,
    TitleCompanyComponent,
    TitleProductComponent,
    DescriptionProductComponent,
    PriceProductComponent,
    AmountProductComponent,
    ButtonPayComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
