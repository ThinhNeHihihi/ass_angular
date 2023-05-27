import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  constructor(private productService: ProductService) {

  }

  onHandleAdd() {
    this.productService.addProduct(this.product).subscribe(product => {
      console.log(product)
    })
  }
}