import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      description: 'A friendly robot head with 2 eyes and a smile -- great for domestic use.',
      name: 'Friendly Bot',
      imageName: 'head-friendly.png',
      category: 'Heads',
      price: 945.0,
      discount: 0.2,
    };
  }

  getImgUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName
  }
}



