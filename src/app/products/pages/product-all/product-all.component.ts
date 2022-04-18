import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main/main.service';



@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.scss']
})
export class ProductAllComponent implements OnInit {
  public products: any = [];
  public limitProducts: number = 20;
  public offsetProducts: number = 0;
  constructor(private mainService: MainService) { }

  async ngOnInit() {
    try {
      this.products = await this.getProducts({ limit: this.limitProducts, offset: this.offsetProducts });
      console.log({products: this.products});
      
    } catch (err) {
      console.error(`Error en ngOnInit`);
    }
  }

  public async getProducts({ limit, offset }: { limit: number, offset: number }) {
    console.log('start', limit, offset);
    try {
     return await this.mainService.get(`products?limit=${limit}&offset=${offset}`);

    } catch(err) {
      console.error('An ocuured an error', err);
      return [];
    }
  }

  public async onGetMoreProducts() {
    this.offsetProducts++;
   let products = await this.getProducts({ limit: this.limitProducts, offset: this.offsetProducts });
   console.log(products)
   this.products = [...this.products, ...products];
   console.log('this.products', this.products);

  }

}
